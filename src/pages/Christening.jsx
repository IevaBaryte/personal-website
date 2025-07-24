import React from 'react';
import Masonry from 'react-masonry-css';

export default function Christening() {
  return (
    <section>
      <h1>Krikštynų fotografija</h1>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1
        }}
        className="masonry-gallery"
        columnClassName="masonry-gallery-column"
      >
        {[
          "ELIJOS KRIKTYNOS (2).jpg",
          "ELIJOS KRIKTYNOS (3).jpg",
          "ELIJOS KRIKTYNOS (32).jpg",
          "ELIJOS KRIKTYNOS (59).jpg",
          "ELIJOS KRIKTYNOS (61).jpg",
          "ELIJOS KRIKTYNOS (70).jpg",
          "GreLinda Photography (22).jpg",
          "GreLinda Photography (23).jpg",
          "GreLinda Photography (27).jpg",
          "GreLinda Photography (31).jpg",
          "GreLinda Photography (41).jpg",
          "GreLinda Photography (44).jpg",
          "GreLinda Photography (46).jpg",
          "GreLinda Photography (52).jpg",
          "GreLinda Photography (55).jpg",
          "GreLinda Photography (56).jpg",
          "GreLinda Photography (61).jpg",
          "GreLinda Photography (64).jpg",
          "GreLinda Photography (66).jpg",
          "GreLinda Photography (92).jpg",
          "KRIKŠTAS 24.07 (111).jpg",
          "KRIKŠTAS 24.07 (119).jpg",
          "KRIKŠTAS 24.07 (121).jpg",
          "KRIKŠTAS 24.07 (126).jpg",
          "KRIKŠTAS 24.07 (15).jpg",
          "KRIKŠTAS 24.07 (27).jpg",
          "KRIKŠTAS 24.07 (30).jpg",
          "KRIKŠTAS 24.07 (50).jpg",
          "KRIKŠTAS 24.07 (7).jpg",
          "KRIKŠTAS 24.07 (72).jpg",
          "KRIKŠTAS 24.07 (77).jpg",
          "KRIKŠTAS 24.07 (91).jpg",
          "KRIKŠTAS 24.07 (92).jpg",
          "MARKO KRIKŠTAS (64).jpg",
          "MARKO KRIKŠTAS (66).jpg",
          "MARKO KRIKŠTAS (69).jpg"
        ].map((img, i) => (
          <div className="masonry-gallery-item" key={img}>
            <img
              src={`/images/christening-pictures/${img}`}
              alt={`Krikštynų akimirka ${i + 1}`}
              className="masonry-gallery-img"
            />
          </div>
        ))}
      </Masonry>
      <h2>Kainos</h2>
      <ul>
        <li>Krikštynų fotosesija nuo 250€</li>
        <li>Pilna diena – 600€</li>
      </ul>
    </section>
  );
}
