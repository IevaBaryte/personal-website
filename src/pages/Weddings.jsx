import React from 'react';
import Masonry from 'react-masonry-css';

export default function Weddings() {
  const images = [
    "wedding1.jpg",
    "wedding2.jpg",
    "wedding3.jpg",
    "wedding4.jpg",
    "wedding5.jpg",
    "wedding6.jpg"
  ];
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <main className="gallery-main">
      <>
        <section className="gallery-header">
          <h1 className="gallery-title">Vestuvių fotosesijos</h1>
          <p className="gallery-subtitle">Tikros emocijos ir ypatingos Jūsų dienos akimirkos</p>
        </section>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img, i) => (
            <img
              key={img}
              src={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/wedding/${img}`}
              srcSet={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_300,c_fit,f_auto,q_auto/wedding/${img} 300w, https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/wedding/${img} 600w`}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
              alt={`Vestuvių akimirka ${i + 1}`}
              className="masonry-img"
              style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }}
            />
          ))}
        </Masonry>
        <section className="gallery-prices">
          <h2>Kainos</h2>
          <ul>
            <li>Vestuvių fotosesija nuo 400€</li>
            <li>Pilna diena (iki 10 val.) – 1000€</li>
            <li>Individualus pasiūlymas pagal poreikius</li>
          </ul>
        </section>
      </>
    </main>
  );
}
