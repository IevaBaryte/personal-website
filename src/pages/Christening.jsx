import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import GalleryLightbox from '../components/GalleryLightbox';
import '../christening-gallery.css';

export default function Christening() {
  const images = [
    "v1753719114/ELIJOS_KRIKTYNOS_32_y5r6nt.jpg",
    "v1753719113/ELIJOS_KRIKTYNOS_59_lwwgko.jpg",
    "v1753719112/GreLinda_Photography_22_s6funk.jpg",
    "v1753719112/ELIJOS_KRIKTYNOS_61_sn7cxc.jpg",
    "v1753719112/ELIJOS_KRIKTYNOS_70_pgo2aw.jpg",
    "v1753719316/MARKO_KRIKŠTAS_69_-2_whecqk.jpg",
    "v1753719111/GreLinda_Photography_23_suyd6c.jpg",
    "v1753719111/GreLinda_Photography_27_sdrtqm.jpg",
    "v1753719110/GreLinda_Photography_31_xdcbzf.jpg",
    "v1753719109/GreLinda_Photography_41_dkg2h5.jpg",
    "v1753719109/GreLinda_Photography_44_qgqez6.jpg",
    "v1753719107/GreLinda_Photography_46_gusxg7.jpg",
    "v1753719107/GreLinda_Photography_52_msy5hb.jpg",
    "v1753719106/GreLinda_Photography_55_hqyxqs.jpg",
    "v1753719106/GreLinda_Photography_66_zmeqeg.jpg",
    "v1753719105/GreLinda_Photography_56_hkrgev.jpg",
    "v1753719105/GreLinda_Photography_61_sudw3v.jpg",
    "v1753719104/GreLinda_Photography_64_c20ag8.jpg",
    "v1753719103/GreLinda_Photography_92_jdqcas.jpg",
    "v1753719102/KRIKŠTAS_24.07_27_mz5kh5.jpg",
    "v1753719102/KRIKŠTAS_24.07_7_xfyjyp.jpg",
    "v1753719102/KRIKŠTAS_24.07_15_ocyv0r.jpg",
    "v1753719101/KRIKŠTAS_24.07_50_tmjw4e.jpg",
    "v1753719101/KRIKŠTAS_24.07_30_wgt4vb.jpg",
    "v1753719100/KRIKŠTAS_24.07_72_avtyud.jpg",
    "v1753719100/KRIKŠTAS_24.07_77_ouggjv.jpg",
    "v1753719100/KRIKŠTAS_24.07_92_uxvqas.jpg",
    "v1753719100/KRIKŠTAS_24.07_91_im04ws.jpg",
    "v1753719100/KRIKŠTAS_24.07_111_sjf5ry.jpg",
    "v1753719099/KRIKŠTAS_24.07_126_uuw0ey.jpg",
    "v1753719099/KRIKŠTAS_24.07_119_aegkb1.jpg",
    "v1753719099/KRIKŠTAS_24.07_121_rgzjsy.jpg",
    "v1753719099/MARKO_KRIKŠTAS_64_et4g3p.jpg",
    "v1753719098/MARKO_KRIKŠTAS_66_bu8jid.jpg",
    "v1753717111/ELIJOS_KRIKTYNOS_2_oo4qk3.jpg",
    "v1753717111/ELIJOS_KRIKTYNOS_3_s4a82o.jpg"
  ];
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 1,
    500: 1
  };
  const [lightboxIdx, setLightboxIdx] = useState(null);
  // Prepare full URLs for lightbox (no transformations for max quality)
  const imageUrls = images.map(img => `https://res.cloudinary.com/drfcjlc5n/image/upload/${img}`);

  return (
    <section>
      <section className="gallery-header">
        <h1 className="gallery-title">Krikštynų fotosesijos</h1>
        <p className="gallery-subtitle">Krikštynų fotosesijos – švelnumas ir ypatingos akimirkos šeimai.</p>
      </section>
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
            onClick={() => setLightboxIdx(i)}
          />
        ))}
      </Masonry>
      <GalleryLightbox images={imageUrls} currentIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      <h2>Kainos</h2>
      <ul>
        <li>Krikštynų fotosesija nuo 250€</li>
        <li>Pilna diena – 600€</li>
      </ul>
    </section>
  );
}
