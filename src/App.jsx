import React, { useState, useRef } from 'react';
import { Routes, Route, NavLink, Navigate, Link } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import MainPage from './pages/MainPage';
import Weddings from './pages/Weddings';
import Christening from './pages/Christening';
import PersonalPhotoshoots from './pages/PersonalPhotoshoots';
import StudioRent from './pages/StudioRent';
import Contact from './pages/Contact';

const menu = [
  { path: '/MainPage', label: 'Pagrindinis' },
  {
    label: 'Portfolio',
    dropdown: [
      { path: '/vestuves', label: 'Vestuvių fotosesijos' },
      { path: '/krikstynos', label: 'Krikštynų fotosesijos' },
      { path: '/asmenines', label: 'Asmeninės fotosesijos' },
    ],
  },
  { path: '/studija', label: 'Studijos nuoma' },
  { path: '/kontaktai', label: 'Kontaktai' },
];

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const dropdownLabelRef = useRef(null);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          {/* Mobile logo */}
          <Link to="/MainPage">
            <img
              className="site-logo nav-logo mobile-logo"
              src="https://res.cloudinary.com/drfcjlc5n/image/upload/v1753962213/y9c6irvh6ajb3dmvvs9g.png"
              alt="Grelinda Logo"
              style={{ width: '100px', cursor: 'pointer' }}
            />
          </Link>

          <nav className="main-nav">
            {/* Left side: Pagrindinis, Fotosesijos */}
            <NavLink
              key={menu[0].path}
              to={menu[0].path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={menu[0].path === '/'}
            >
              {menu[0].label}
            </NavLink>

            <div className="dropdown" key={menu[1].label}>
              <span
                className="dropdown-label"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded="false"
                ref={dropdownLabelRef}
              >
                {menu[1].label}
              </span>
              <ul className="dropdown-menu">
                {menu[1].dropdown.map((sub) => (
                  <li key={sub.path}>
                    <NavLink
                      to={sub.path}
                      className={({ isActive }) =>
                        'dropdown-item' + (isActive ? ' active' : '')
                      }
                      onClick={() => {
                        if (dropdownLabelRef.current) dropdownLabelRef.current.blur();
                      }}
                    >
                      {sub.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: Desktop logo */}
            <Link to="/MainPage">
              <img
                className="site-logo nav-logo desktop-logo"
                src="https://res.cloudinary.com/drfcjlc5n/image/upload/v1753962213/y9c6irvh6ajb3dmvvs9g.png"
                alt="Grelinda Logo"
                style={{ width: '100px', cursor: 'pointer' }}
              />
            </Link>

            {/* Right side */}
            <NavLink
              key={menu[2].path}
              to={menu[2].path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={menu[2].path === '/'}
            >
              {menu[2].label}
            </NavLink>
            <NavLink
              key={menu[3].path}
              to={menu[3].path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              end={menu[3].path === '/'}
            >
              {menu[3].label}
            </NavLink>
          </nav>

          <button
            className="hamburger"
            aria-label="Atverti meniu"
            onClick={() => setMobileNavOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileNavOpen && <MobileNav onClose={() => setMobileNavOpen(false)} />}
      </header>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/vestuves" element={<Weddings />} />
        <Route path="/krikstynos" element={<Christening />} />
        <Route path="/asmenines" element={<PersonalPhotoshoots />} />
        <Route path="/studija" element={<StudioRent />} />
        <Route path="/kontaktai" element={<Contact />} />
      </Routes>

      <footer className="site-footer">
        <div style={{ marginBottom: '1.2rem', display: 'flex', justifyContent: 'center', gap: '2.5rem' }}>
          <a href="https://www.instagram.com/grelinda.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#232323', fontSize: '2.75rem', display: 'flex', alignItems: 'center' }}>
            <i className="fab fa-instagram" style={{ color: '#232323', fontSize: '2.75rem' }}></i>
          </a>
          <a href="https://www.facebook.com/GreLindaPhotography" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#232323', fontSize: '2.75rem', display: 'flex', alignItems: 'center' }}>
            <i className="fab fa-facebook" style={{ color: '#232323', fontSize: '2.75rem' }}></i>
          </a>
        </div>
        <div>{new Date().getFullYear()} Grelinda Photography. All rights reserved.</div>
      </footer>
    </>
  );
}
