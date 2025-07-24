import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Weddings from './pages/Weddings';
import Christening from './pages/Christening';
import PersonalPhotoshoots from './pages/PersonalPhotoshoots';
import StudioRent from './pages/StudioRent';
import Contact from './pages/Contact';

const menu = [
  { path: '/', label: 'Pagrindinis' },
  { path: '/vestuves', label: 'Vestuvių' },
  { path: '/krikstynos', label: 'Krikštynų' },
  { path: '/asmenines', label: 'Asmeninės fotosesijos' },
  { path: '/studija', label: 'Studijos nuoma' },
  { path: '/kontaktai', label: 'Kontaktai' },
];

export default function App() {
  return (
    <Router>
      <nav>
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={item.path === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vestuves" element={<Weddings />} />
        <Route path="/krikstynos" element={<Christening />} />
        <Route path="/asmenines" element={<PersonalPhotoshoots />} />
        <Route path="/studija" element={<StudioRent />} />
        <Route path="/kontaktai" element={<Contact />} />
      </Routes>
    </Router>
  );
}
