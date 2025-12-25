import { useState, useEffect, useRef } from 'react';

/**
 * useActiveSection - Tracks which section is currently visible in the viewport
 * Uses IntersectionObserver for performant scroll tracking
 *
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @param {Object} options - Configuration options
 * @param {number} options.rootMargin - Margin around the root (default: '-20% 0px -60% 0px')
 * @param {number[]} options.threshold - Visibility thresholds (default: [0, 0.25, 0.5, 0.75, 1])
 * @returns {string} - The ID of the currently active section
 */
const useActiveSection = (sectionIds = [], options = {}) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);
  const visibilityMapRef = useRef({});

  const {
    rootMargin = '-20% 0px -60% 0px',
    threshold = [0, 0.25, 0.5, 0.75, 1],
  } = options;

  useEffect(() => {
    // Don't run if no sections to observe
    if (!sectionIds.length) return;

    // Initialize visibility map
    sectionIds.forEach((id) => {
      visibilityMapRef.current[id] = 0;
    });

    // Callback for intersection observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (id) {
          visibilityMapRef.current[id] = entry.intersectionRatio;
        }
      });

      // Find the section with highest visibility
      let maxVisibility = 0;
      let mostVisibleSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const visibility = visibilityMapRef.current[id] || 0;
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = id;
        }
      });

      // Only update if we have some visibility
      if (maxVisibility > 0) {
        setActiveSection(mostVisibleSection);
      }
    };

    // Create observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold,
    });

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
};

export default useActiveSection;
