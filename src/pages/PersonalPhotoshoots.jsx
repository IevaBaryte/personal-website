import React from 'react';

export default function PersonalPhotoshoots() {
  return (
    <section>
      <h1>Asmeninės fotosesijos</h1>
      <div className="christening-gallery-3row">
  {[
    "personal1.jpg",
    "personal2.jpg",
    "personal3.jpg",
    "personal4.jpg",
    "personal5.jpg",
    "personal6.jpg",
    "personal7.jpg",
    "personal8.jpg",
    "personal9.jpg"
  ].reduce((rows, img, idx, arr) => {
    const rowCount = 3;
    if (!rows.length) rows = Array.from({ length: rowCount }, () => []);
    rows[idx % rowCount].push(img);
    return rows;
  }, []).map((row, rowIdx) => (
    <div className="christening-gallery-row" key={rowIdx}>
      {row.map((img, i) => (
        <div className="christening-gallery-img-wrapper" key={img}>
          <img
            src={`https://res.cloudinary.com/drfcjlc5n/image/upload/personal/${img}`}
            alt={`Asmeninė fotosesija ${rowIdx * 3 + i + 1}`}
            className="christening-gallery-img"
          />
        </div>
      ))}
    </div>
  ))}
</div>
      <h2>Kainos</h2>
      <ul>
        <li>Asmeninė fotosesija – 120€ (1 val.)</li>
        <li>Poros fotosesija – 150€ (1 val.)</li>
      </ul>
    </section>
  );
}
