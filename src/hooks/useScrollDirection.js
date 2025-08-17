import { useState, useEffect } from 'react';

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const threshold = 5; // Minimum scroll amount before triggering
    const scrollThreshold = 100; // Hide nav after scrolling this amount down
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      
      if (Math.abs(scrollY - prevOffset) < threshold) {
        ticking = false;
        return;
      }
      
      // Show nav when at top of page
      if (scrollY <= 0) {
        setVisible(true);
        setScrollDirection('up');
      } 
      // Hide when scrolling down & past threshold
      else if (scrollY > prevOffset && scrollY > scrollThreshold) {
        setVisible(false);
        setScrollDirection('down');
      } 
      // Show when scrolling up
      else if (scrollY < prevOffset) {
        setVisible(true);
        setScrollDirection('up');
      }

      setPrevOffset(scrollY);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [prevOffset]);

  return { scrollDirection, visible };
}

export default useScrollDirection;