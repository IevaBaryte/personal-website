import React, { useState } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import Masonry from 'react-masonry-css';
import GalleryLightbox from '../components/GalleryLightbox';

export default function Weddings() {
  // User-provided Cloudinary image URLs
  const images = [
    "v1753960185/g0bsx1iw8yrry1xrhy5o.jpg",
    "v1753960183/vuwxyoj2plggikyd7hfd.jpg",
    "v1753960182/viadwzpdp9kijo1vbmo4.jpg",
    "v1753960176/omxyenlyyobshqvltavh.jpg",
    "v1753960180/nxd6zcjt9ot9paqbaxnv.jpg",
    "v1753960177/s0nmbsnnn4nana2jpfhu.jpg",
    "v1753960173/rumhpuifkkudfj9zvacy.jpg",
    "v1753960186/glp7xajfuvhclhvnqfdf.jpg",
    "v1753960189/whp7n7l4lnhp4g7wyorm.jpg",
    "v1753960169/zxjpy6mlibibxhr7pkzm.jpg",
    "v1753960171/nb7rfezzf9snlesfngub.jpg",
    "v1753960174/ktmm2ipouzjekzwg0d76.jpg",
    "v1753960190/ouqqfrzhldewiqowoit2.jpg",
    "v1753960192/odvjvibpp2ri8gsamaqp.jpg",
    "v1753960194/utakufwszvjn60j47ton.jpg",
    "v1753960196/ugprnbov7azw9cehhaxn.jpg",
    "v1753960199/bnbayu5eajsavhdwrylr.jpg",
    "v1753960203/s9yq7tpvekcenvz4jw5f.jpg",
    "v1753960197/mfmeghotw7xf8xmyphy2.jpg",
    "v1753960201/yykiabponjckygq4fffx.jpg",
    "v1753960218/webfidtdsxscoqs4mvkg.jpg",
    "v1753960219/jxgexa9b9ywwxvobgiba.jpg",
    "v1753960135/ipdj5eateb6qhfutkp1q.jpg",
    "v1753960135/yzltvixxeog7kypam6bp.jpg",
    "v1753960138/brzedd37iyfkzvg8aiox.jpg",
    "v1753960139/jse1ervyrilz4qrbsfcd.jpg",
    "v1753960167/dydgzibmn9gucrt4l7np.jpg",
    "v1753960206/dk3ehk27tnrjx7ypfrd4.jpg",
    "v1753960204/djt9ncmfawbqdh9hhdkl.jpg",
    "v1753960210/hsv0mii29ljotncffh5u.jpg",
    "v1753960208/q5ckgj8gu2sevybdasg5.jpg",
    "v1753960212/bqmmuobrzdxltlddhakt.jpg",
    "v1753960216/fcufanptxwlhn0eq0huc.jpg",
    "v1753960214/x0gat4pf1zxtprtpastp.jpg",
    "v1753960165/j51lbu7bawuvshwiqty5.jpg",
    "v1753960163/p7wgzb2rdgeawyj2hnns.jpg",
    "v1753960162/whkbqjo2oenbsyfafb5u.jpg",
    "v1753960160/ejjkwoxxdtz20q7l8jxv.jpg",
    "v1753960158/p29aldbtsres98dcf9lz.jpg",
    "v1753960157/niwojnabty7uitacknzd.jpg",
    "v1753960155/xmvbbjvokn1slgaczkfg.jpg",
    "v1753960152/b5hzfgodppegv6smdsoj.jpg",
    "v1753960151/gme4cvthlbgxu9xiccs8.jpg",
    "v1753960149/oli2g3frxjwprteoalpr.jpg",
    "v1753960147/ngw2odfuvn121nv1u20z.jpg",
    "v1753960146/ew8xsanib4nk3vieuexl.jpg",
    "v1753960144/nbbidd1xnwvdt3v65vac.jpg",
    "v1753960142/qleypdjzjfhri5d2nyq2.jpg",
    "v1753960140/mjkwx4hwuzucrmh3mkbf.jpg",
    "v1753960133/sjojut5i5h046ohp8xfy.jpg",
    "v1753960131/jcsca6kcfohdoytyrjdl.jpg",
    "v1753960129/lqeqh2nwunc8iwp1a9si.jpg",
    "v1753960118/qdojf3wgh7znubhev6xp.jpg",
    "v1753960117/hmfuny1iaab5jhbxcap4.jpg",
    "v1753960119/ek11udmekks8vrbm0ehv.jpg",
    "v1753960120/tx8wbca6l6dkszgbocva.jpg",
    "v1753960122/d29a5bx5mvz9ykgpuapn.jpg",
    "v1753960123/kntcrotahpchmxirjtmp.jpg",
    "v1753960125/g13iuvixzlqjp5tbkz3b.jpg",
    "v1753960128/jtpxyksspkjy6oa7k02y.jpg"
  ];
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const imageUrls = images.map(img => `https://res.cloudinary.com/drfcjlc5n/image/upload/${img}`);

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
              src={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/${img}`}
              srcSet={`https://res.cloudinary.com/drfcjlc5n/image/upload/w_300,c_fit,f_auto,q_auto/${img} 300w, https://res.cloudinary.com/drfcjlc5n/image/upload/w_600,c_fit,f_auto,q_auto/${img} 600w`}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
              alt={`Vestuvių akimirka ${i + 1}`}
              className="masonry-img"
              style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }}
              onClick={() => setLightboxIdx(i)}
            />
          ))}
        </Masonry>
        <GalleryLightbox images={imageUrls} currentIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
          <h2 className="gallery-title">Kainos</h2>
          <p className="gallery-subtitle">
          <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
            <li>Vestuvių fotosesijų kainos svyruoja pagal Jūsų poreikius</li>
            <li>Labai skatinu įsivertinti savo poreikius, taip padėsite sau išsirinkti tinkamiausią variantą</li>
            <li>Esant poreikiui - vykstame ir į užsienį!</li>
          </ul>
          </p>
          <img src="/images/vestuviu-kainos.png" alt="Vestuvių fkainoraštis" style={{ maxWidth: '500px', width: '100%', borderRadius: '10px', margin: '1.2rem 0' }} />
        </div>
      </>
      <BackToTopButton />
    </section>
  );
}
