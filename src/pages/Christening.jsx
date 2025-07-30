import React from 'react';
import Masonry from 'react-masonry-css';

export default function Christening() {
  const images = [
    "v1753719114/ELIJOS_KRIKTYNOS_32_y5r6nt.jpg",
    "v1753719113/ELIJOS_KRIKTYNOS_59_lwwgko.jpg",
    "v1753719112/GreLinda_Photography_22_s6funk.jpg",
    "v1753719112/ELIJOS_KRIKTYNOS_61_sn7cxc.jpg",
    "v1753719112/ELIJOS_KRIKTYNOS_70_pgo2aw.jpg"
  ];
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <section>
      <h1>Krikštynų fotografija</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, i) => (
          <img
            key={img}
            src={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/${img}`}
            srcSet={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_300,c_fit,f_auto,q_auto/${img} 300w, https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/${img} 600w`}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
            alt={`Krikštynų akimirka ${i + 1}`}
            className="masonry-img"
            style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }}
          />
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
