import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import useActiveSection from '../../hooks/useActiveSection';

/**
 * SidebarNav - Table of contents navigation for the sidebar
 * Highlights the currently visible section as user scrolls
 *
 * @param {Object[]} sections - Array of {id, label} objects
 */
const SidebarNav = ({ sections }) => {
  const sectionIds = sections.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  // Smooth scroll to section
  const handleClick = useCallback((e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${sectionId}`);
    }
  }, []);

  if (!sections.length) return null;

  return (
    <nav className="sidebar-nav" aria-label="Table of contents">
      <ul className="sidebar-nav__list">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`sidebar-nav__item ${activeSection === section.id ? 'active' : ''}`}
          >
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              aria-current={activeSection === section.id ? 'true' : undefined}
            >
              <span className="sidebar-nav__indicator" />
              <span className="sidebar-nav__label">{section.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SidebarNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SidebarNav;
