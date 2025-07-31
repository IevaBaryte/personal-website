import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import MainPage from './pages/MainPage';
import Weddings from './pages/Weddings';
import Christening from './pages/Christening';
import PersonalPhotoshoots from './pages/PersonalPhotoshoots';
import StudioRent from './pages/StudioRent';
import Contact from './pages/Contact';

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

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const dropdownLabelRef = React.useRef(null);
  return (
    <Router>
      <header className="site-header">
        <div className="header-inner">
          {/* Mobile: logo centered, hamburger right */}
          <img className="site-logo nav-logo mobile-logo" src="https://res.cloudinary.com/drfcjlc5n/image/upload/v1753962213/y9c6irvh6ajb3dmvvs9g.png" alt="Grelinda Logo" style={{width: '100px'}}/>
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
            <div
              className="dropdown"
              key={menu[1].label}
            >
              <span
                className="dropdown-label"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded="false"
                ref={dropdownLabelRef}
              >
                {menu[1].label}
              </span>
              <ul
                className="dropdown-menu"
              >
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
            {/* Center: Logo (desktop only) */}
            <img className="site-logo nav-logo desktop-logo" src="/images/grelinda-logo.png" alt="Grelinda Logo" style={{width: '100px'}}/>
            {/* Right side: Studijos nuoma, Kontaktai */}
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
        <Route path="/vestuves" element={<Weddings />} />
        <Route path="/krikstynos" element={<Christening />} />
        <Route path="/asmenines" element={<PersonalPhotoshoots />} />
        <Route path="/studija" element={<StudioRent />} />
        <Route path="/kontaktai" element={<Contact />} />
      </Routes>
      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Grelinda Photography. All rights reserved.</div>
      </footer>
    </Router>
  );
}
