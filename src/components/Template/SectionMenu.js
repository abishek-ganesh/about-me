import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import useActiveSection from '../../hooks/useActiveSection';
import useScrollDirection from '../../hooks/useScrollDirection';
import scrollToSection from '../../utils/scrollToSection';

/**
 * SectionMenu - "On this page" jump menu for phones and tablets, where the
 * sidebar TOC is hidden. The pill names the section you are in; tapping it
 * opens the full list. CSS only shows it below 980px.
 */
const SectionMenu = ({ sections }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const activeSection = useActiveSection(sections.map((s) => s.id));
  const { visible } = useScrollDirection();
  const active = sections.find((s) => s.id === activeSection) || sections[0];

  // Close on a tap outside the menu or Escape
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleJump = (e, sectionId) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(sectionId);
  };

  // Stays put while open so the list doesn't slide away mid-read
  const hidden = !visible && !open;

  return (
    <div ref={menuRef} className={`section-menu ${hidden ? 'nav-hidden' : ''}`}>
      {open && (
        <nav id="section-menu-panel" className="section-menu__panel" aria-label="On this page">
          <p className="section-menu__heading">On this page</p>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={section.id === active.id ? 'active' : ''}
                  aria-current={section.id === active.id ? 'true' : undefined}
                  onClick={(e) => handleJump(e, section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button
        type="button"
        className="section-menu__toggle"
        aria-expanded={open}
        aria-controls="section-menu-panel"
        aria-label={`On this page: ${active.label}. ${open ? 'Close' : 'Open'} section list`}
        onClick={() => setOpen((o) => !o)}
      >
        <FontAwesomeIcon icon={faListUl} />
        <span className="section-menu__label">{active.label}</span>
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronUp} className="section-menu__chevron" />
      </button>
    </div>
  );
};

SectionMenu.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SectionMenu;
