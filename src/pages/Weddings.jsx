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
      <div className="christening-gallery-3row">
  {images.reduce((rows, img, idx, arr) => {
    const rowCount = 3;
    if (!rows.length) rows = Array.from({ length: rowCount }, () => []);
    rows[idx % rowCount].push(img);
    return rows;
  }, []).map((row, rowIdx) => (
    <div className="christening-gallery-row" key={rowIdx}>
      {row.map((img, i) => (
        <div className="christening-gallery-img-wrapper" key={img}>
          <img
            src={img}
            alt={`Vestuvių akimirka ${rowIdx * 3 + i + 1}`}
            className="christening-gallery-img"
          />
        </div>
      ))}
    </div>
  ))}
</div>
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
