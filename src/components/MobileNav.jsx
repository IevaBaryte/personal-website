import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const menu = [
  { path: '/', label: 'Pagrindinis' },
  {
    label: 'Fotosesijos',
    dropdown: [
      { path: '/vestuves', label: 'Vestuvių fotosesijos' },
      { path: '/krikstynos', label: 'Krikštynų fotosesijos' },
      { path: '/asmenines', label: 'Asmeninės fotosesijos' },
    ],
  },
  { path: '/studija', label: 'Studijos nuoma' },
  { path: '/kontaktai', label: 'Kontaktai' },
];

export default function MobileNav({ onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  // Focus trap and ESC support
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
      // Trap focus inside nav
      if (e.key === 'Tab') {
        const focusable = document.querySelectorAll('.mobile-nav button, .mobile-nav a');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    // Focus close button on mount
    setTimeout(() => {
      const btn = document.querySelector('.close-mobile-nav');
      if (btn) btn.focus();
    }, 10);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      <div className="mobile-nav-overlay" onClick={onClose} tabIndex={-1} aria-hidden="true" />
      <nav
        className="mobile-nav mobile-nav-offcanvas"
        role="dialog"
        aria-modal="true"
        aria-label="Mobili meniu"
        tabIndex={-1}
      >
        <button className="close-mobile-nav" onClick={onClose} aria-label="Uždaryti meniu">×</button>
        <ul>
          {menu.map((item, idx) => (
  item.dropdown ? (
    <li
      key={item.label}
      className={`mobile-dropdown${openDropdown === idx ? ' open' : ''}`}
    >
      <span
        onClick={e => {
          e.stopPropagation();
          setOpenDropdown(openDropdown === idx ? null : idx);
        }}
        tabIndex={0}
        style={{ cursor: 'pointer' }}
      >
        {item.label}
      </span>
      <ul>
        {item.dropdown.map((sub) => (
          <li key={sub.path}>
            <NavLink
              to={sub.path}
              onClick={() => {
                setOpenDropdown(null);
                onClose();
              }}
            >
              {sub.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <li key={item.path}>
      <NavLink to={item.path} onClick={onClose}>{item.label}</NavLink>
    </li>
  )
))}
        </ul>
      </nav>
    </>
  );
}

