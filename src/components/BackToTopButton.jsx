import React, { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="back-to-top-btn"
      style={{
        display: visible ? 'block' : 'none',
        position: 'fixed',
        bottom: '36px',
        right: '36px',
        zIndex: 1000,
        background: '#232323',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '2rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        opacity: visible ? 1 : 0
      }}
      aria-label="Grįžti į viršų"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
