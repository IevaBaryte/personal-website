import React from 'react';
import Masonry from 'react-masonry-css';

export default function PersonalPhotoshoots() {
  const images = [
    "personal1.jpg",
    "personal2.jpg",
    "personal3.jpg",
    "personal4.jpg",
    "personal5.jpg",
    "personal6.jpg",
    "personal7.jpg",
    "personal8.jpg",
    "personal9.jpg"
  ];
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <section>
      <h1>Asmeninės fotosesijos</h1>
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img, i) => (
            <img
              key={img}
              src={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/personal/${img}`}
              srcSet={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_300,c_fit,f_auto,q_auto/personal/${img} 300w, https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/personal/${img} 600w`}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
              alt={`Asmeninė fotosesija ${i + 1}`}
              className="masonry-img"
              style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }}
            />
          ))}
        </Masonry>
        <h2>Kainos</h2>
        <ul>
          <li>Asmeninė fotosesija – 120€ (1 val.)</li>
          <li>Poros fotosesija – 150€ (1 val.)</li>
        </ul>
      </>
    </section>
  );
}
