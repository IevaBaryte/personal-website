import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import GalleryLightbox from '../components/GalleryLightbox';

export default function Weddings() {
  // User-provided Cloudinary image URLs
  const images = [
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960185/g0bsx1iw8yrry1xrhy5o.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960183/vuwxyoj2plggikyd7hfd.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960182/viadwzpdp9kijo1vbmo4.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960176/omxyenlyyobshqvltavh.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960180/nxd6zcjt9ot9paqbaxnv.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960177/s0nmbsnnn4nana2jpfhu.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960173/rumhpuifkkudfj9zvacy.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960186/glp7xajfuvhclhvnqfdf.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960189/whp7n7l4lnhp4g7wyorm.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960169/zxjpy6mlibibxhr7pkzm.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960171/nb7rfezzf9snlesfngub.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960174/ktmm2ipouzjekzwg0d76.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960190/ouqqfrzhldewiqowoit2.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960192/odvjvibpp2ri8gsamaqp.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960194/utakufwszvjn60j47ton.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960196/ugprnbov7azw9cehhaxn.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960199/bnbayu5eajsavhdwrylr.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960203/s9yq7tpvekcenvz4jw5f.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960197/mfmeghotw7xf8xmyphy2.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960201/yykiabponjckygq4fffx.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960218/webfidtdsxscoqs4mvkg.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960219/jxgexa9b9ywwxvobgiba.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960135/ipdj5eateb6qhfutkp1q.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960135/yzltvixxeog7kypam6bp.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960138/brzedd37iyfkzvg8aiox.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960139/jse1ervyrilz4qrbsfcd.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960167/dydgzibmn9gucrt4l7np.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960206/dk3ehk27tnrjx7ypfrd4.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960204/djt9ncmfawbqdh9hhdkl.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960210/hsv0mii29ljotncffh5u.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960208/q5ckgj8gu2sevybdasg5.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960212/bqmmuobrzdxltlddhakt.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960216/fcufanptxwlhn0eq0huc.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960214/x0gat4pf1zxtprtpastp.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960165/j51lbu7bawuvshwiqty5.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960163/p7wgzb2rdgeawyj2hnns.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960162/whkbqjo2oenbsyfafb5u.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960160/ejjkwoxxdtz20q7l8jxv.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960158/p29aldbtsres98dcf9lz.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960157/niwojnabty7uitacknzd.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960155/xmvbbjvokn1slgaczkfg.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960152/b5hzfgodppegv6smdsoj.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960151/gme4cvthlbgxu9xiccs8.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960149/oli2g3frxjwprteoalpr.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960147/ngw2odfuvn121nv1u20z.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960146/ew8xsanib4nk3vieuexl.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960144/nbbidd1xnwvdt3v65vac.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960142/qleypdjzjfhri5d2nyq2.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960140/mjkwx4hwuzucrmh3mkbf.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960133/sjojut5i5h046ohp8xfy.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960131/jcsca6kcfohdoytyrjdl.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960129/lqeqh2nwunc8iwp1a9si.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960118/qdojf3wgh7znubhev6xp.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960117/hmfuny1iaab5jhbxcap4.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960119/ek11udmekks8vrbm0ehv.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960120/tx8wbca6l6dkszgbocva.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960122/d29a5bx5mvz9ykgpuapn.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960123/kntcrotahpchmxirjtmp.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960125/g13iuvixzlqjp5tbkz3b.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960126/n8kr4tgxmft7qz00ueq9.jpg",
    "https://res.cloudinary.com/drfcjlc5n/image/upload/v1753960128/jtpxyksspkjy6oa7k02y.jpg"
  ];
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };
  const [lightboxIdx, setLightboxIdx] = useState(null);
  // Use correct Cloudinary path: if img is a full URL, use directly; else, prepend wedding folder
  const imageUrls = images.map(img => img.startsWith('http')
    ? img
    : `https://res.cloudinary.com/drfcjlc5n/image/upload/wedding/${img}`
  );

  return (
    <section>
      <section className="gallery-header">
        <h1 className="gallery-title">Vestuvių fotosesijos</h1>
        <p className="gallery-subtitle">Tikros emocijos ir ypatingos Jūsų dienos akimirkos</p>
      </section>
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img, i) => (
            <img
              key={img}
              src={img.startsWith('http')
                ? img
                : `https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/wedding/${img}`}
              srcSet={img.startsWith('http')
                ? `${img} 300w, ${img} 600w`
                : `https://res.cloudinary.com/drfcjlc5n/image/upload/w_300,c_fit,f_auto,q_auto/wedding/${img} 300w, https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/wedding/${img} 600w`}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
              alt={`Vestuvių akimirka ${i + 1}`}
              className="masonry-img"
              style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }}
              onClick={() => setLightboxIdx(i)}
            />
          ))}
        </Masonry>
        <GalleryLightbox images={imageUrls} currentIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
        <h2>Kainos</h2>
        <ul>
          <li>Vestuvių fotosesija nuo 400€</li>
          <li>Pilna diena (iki 10 val.) – 1000€</li>
          <li>Individualus pasiūlymas pagal poreikius</li>
        </ul>
      </>
    </section>
  );
}
