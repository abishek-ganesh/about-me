import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Shared scroll-reveal helpers. Both skip all motion under prefers-reduced-motion
// and when IntersectionObserver is missing, so content is never stuck hidden.

export const prefersReducedMotion = () =>
  typeof window !== 'undefined'
  && window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canObserve = () => typeof window !== 'undefined' && 'IntersectionObserver' in window;

/**
 * useReveal - flips to true once the element scrolls into view, then stops watching.
 * Returns [ref, isVisible]. With disabled, it is visible immediately.
 */
export const useReveal = ({ threshold = 0.1, rootMargin = '0px', disabled = false } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(disabled);

  useEffect(() => {
    const el = ref.current;
    if (disabled || !el || !canObserve()) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [disabled, threshold, rootMargin]);

  return [ref, isVisible];
};

// Cards and rows reveal one by one; a section reveals as a block only when it
// holds none of these, so nothing animates twice.
const ITEM_SELECTOR = '.teaser-card, .experience-item, .testimonial-quote-card, .course-group';
const SECTION_SELECTOR = 'article > section';
const MAX_STAGGER_STEPS = 4;

/**
 * useRevealGroup - fades in a page's sections and cards as they scroll into view.
 * Anything already on screen at mount is left alone; the page transition covers it.
 */
export const useRevealGroup = (containerRef) => {
  useLayoutEffect(() => {
    const root = containerRef.current;
    if (!root || !canObserve() || prefersReducedMotion()) return undefined;

    const items = [...root.querySelectorAll(ITEM_SELECTOR)];
    const sections = [...root.querySelectorAll(SECTION_SELECTOR)].filter((s) => !s.querySelector(ITEM_SELECTOR));
    const viewportBottom = window.innerHeight;
    const targets = [...items, ...sections].filter((el) => el.getBoundingClientRect().top > viewportBottom);

    // Once the entrance finishes, hand the element back to its own styles (hover etc.).
    // transitionend is the normal path; the timer covers a transition that never runs.
    const timers = new Map();
    const settle = (el) => {
      clearTimeout(timers.get(el));
      timers.delete(el);
      el.removeEventListener('transitionend', onEnd); // eslint-disable-line no-use-before-define
      el.classList.remove('reveal', 'is-revealed');
      el.style.removeProperty('transition-delay');
    };
    const onEnd = (e) => {
      if (e.target === e.currentTarget && e.propertyName === 'transform') settle(e.currentTarget);
    };
    const durationMs = () => {
      const styles = getComputedStyle(document.documentElement);
      const ms = (name) => parseFloat(styles.getPropertyValue(name)) || 0;
      return ms('--motion-reveal') + ms('--motion-stagger') * MAX_STAGGER_STEPS + 150;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((entry, i) => {
        const el = entry.target;
        observer.unobserve(el);
        // important, to match the !important transition shorthand on .reveal
        el.style.setProperty('transition-delay', `calc(var(--motion-stagger) * ${Math.min(i, MAX_STAGGER_STEPS)})`, 'important');
        el.addEventListener('transitionend', onEnd);
        timers.set(el, setTimeout(() => settle(el), durationMs()));
        el.classList.add('is-revealed');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      targets.forEach(settle);
    };
  }, [containerRef]);
};
