/**
 * scrollToSection - Smooth-scroll to a page section and update the hash
 * without the browser's instant jump. Shared by both TOC menus.
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.pushState(null, '', `#${sectionId}`);
};

export default scrollToSection;
