import React from 'react';

export default function Weddings() {
  const images = [
    '/images/wedding1.jpg',
    '/images/wedding2.jpg',
    '/images/wedding3.jpg',
    '/images/wedding4.jpg',
    '/images/wedding5.jpg',
    '/images/wedding6.jpg',
  ];
  return (
    <main className="gallery-main">
      <section className="gallery-header">
        <h1 className="gallery-title">Vestuvių fotosesijos</h1>
        <p className="gallery-subtitle">Tikros emocijos ir ypatingos Jūsų dienos akimirkos</p>
      </section>
      <section className="gallery-grid">
        {images.map((src, i) => (
          <img key={src} src={src} alt={`Vestuvių akimirka ${i+1}`} className="gallery-img" />
        ))}
      </section>
      <section className="gallery-prices">
        <h2>Kainos</h2>
        <ul>
          <li>Vestuvių fotosesija nuo 400€</li>
          <li>Pilna diena (iki 10 val.) – 1000€</li>
          <li>Individualus pasiūlymas pagal poreikius</li>
        </ul>
      </section>
    </main>
  );
}
