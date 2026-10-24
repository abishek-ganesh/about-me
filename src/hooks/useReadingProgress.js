import { useEffect, useState } from 'react';

/**
 * useReadingProgress - writes how far down the page the reader is (0 to 1) to a
 * --progress custom property on ref's element, once per animation frame, without
 * re-rendering. Returns whether the page is long enough to bother showing it:
 * at least minScreens viewport heights tall, re-measured as content and the
 * window change size.
 */
const useReadingProgress = (ref, minScreens = 3) => {
  const [isLong, setIsLong] = useState(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const total = document.documentElement.scrollHeight;
      const view = window.innerHeight;
      setIsLong(total >= view * minScreens);
      const max = total - view;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (ref.current) ref.current.style.setProperty('--progress', progress.toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
    if (resizeObserver) resizeObserver.observe(document.body);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [ref, minScreens]);

  return isLong;
};

export default useReadingProgress;
