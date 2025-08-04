import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import GalleryLightbox from '../components/GalleryLightbox';

export default function PersonalPhotoshoots() {
  const images = [
    "v1753861989/ye5twnkeccjshdm2nila.jpg",
    "v1753862001/fo0alsjhl5tmvm3zzqsa.jpg",
    "v1753861995/g7asotr1xt97w2hqpj28.jpg",
    "v1753861992/qu9uzzpxexel2s3hqxfv.jpg",
    "v1753861996/bsjrobhulrltn17l2ylc.jpg",
    "v1753861988/itlhkbofr18wgu7y2hbu.jpg",
    "v1753861988/easnpjprog8t2vhnd1as.jpg",
    "v1753861986/egm5djhioupz6xptaymv.jpg",
    "v1753861983/pbg2qjuqtzwoltfjreeg.jpg",
    "v1753861982/zhvhhgx2zwjlqjtufl3q.jpg",
    "v1753861979/ceokhvtmgcclm912milt.jpg",
    "v1753861978/h39oirdks7tqmpdd1khy.jpg",
    "v1753861978/lifeqvhnleiflhx9vqsb.jpg",
    "v1753861974/vhb5dzbni1fji7jtngwk.jpg",
    "v1753861973/djfjhvjciggdpj66ephj.jpg",
    "v1753861969/qnfznt7sz5kljitrjajm.jpg",
    "v1753861969/tinvvarnqcxk8mmbj4ox.jpg",
    "v1753861966/svpguhbl2r2f39kaiibu.jpg",
    "v1753861964/xrivjyl4qtnlighktaye.jpg",
    "v1753861961/ephwteqcnhw86ernkekm.jpg",
    "v1753861961/yphebf09qmbd4ie4oupd.jpg",
    "v1753861960/vzt1zixlj6bihw4lpwgi.jpg",
    "v1753861957/auydzyngffc28wep1s0x.jpg",
    "v1753861956/ygggxh1p68auncv58nhr.jpg",
    "v1753861953/pqmmmmv6xywjk7pght2v.jpg",
    "v1753861952/msbmf2gt5crszlksqbsm.jpg",
    "v1753861951/fe6e5lyq17pdzvoch3td.jpg",
    "v1753861949/agsxdmfuho8fdlqxafg5.jpg",
    "v1753861949/vmwqhkurgmzurm91h7pa.jpg",
    "v1753861945/vb9mxtp6d6pv9q5ol4t5.jpg",
    "v1753861944/ogmxxhp5r5v6nsbqb4jc.jpg",
    "v1753861941/e9hw4onjrpgioytdwsvg.jpg",
    "v1753861940/zxobgffg2bqcx7kk2au9.jpg",
    "v1753861940/ghm7eh5n1pvcdo6vxbbp.jpg",
    "v1753861935/lgh2n84ftiiezh6aeoee.jpg",
    "v1753861937/ysrlp7c8ua38n7jj3alt.jpg",
    "v1753861935/x7z3xt3yzo0sz6nqrqqk.jpg",
    "v1753861935/w6ftxavjcq2vgnax3zyk.jpg",
    "v1753861931/zzustol61ynjwdk68auy.jpg",
    "v1753861929/rbpudyekpg3n1i7ky49x.jpg",
    "v1753861927/q1qv0c02d5jczwhzawhp.jpg",
    "v1753861925/hywr9b4xnrzzywbpx4r0.jpg",
    "v1753861924/xtllyhpgywbsrheznyps.jpg",
    "v1753861923/vj3qtej7fycj6fxurkbw.jpg",
    "v1753861920/wkxteyiqbizltsyzymrc.jpg",
    "v1753861917/uej5lmnuw5aodzuksdqj.jpg",
    "v1753861915/zbcvg8oadk7pukddpdfp.jpg",
    "v1753861915/dijs1mxapuvxrodauxmn.jpg",
    "v1753861912/vjkgyivvel6q4rjchcyt.jpg",
    "v1753861911/ntajo3veimx5yh5ikfsc.jpg",
    "v1753861910/b2udbi3xibg4xvxoreet.jpg",
    "v1753861907/gmygzuedehiyvs9oadrp.jpg",
    "v1753861905/tc0z7xwwgz42xf4mycmk.jpg",
    "v1753861902/vg3zn7cdkwgag6gu2mvb.jpg",
    "v1753861901/wif6ev7jlxpwjzhudnmx.jpg",
    "v1753861901/l49plewpe2raheb8louj.jpg",
    "v1753861900/qvfmlokq66t8yjd3n1po.jpg",
    "v1753861897/vk9mjtzwoeshxo0luj71.jpg",
    "v1753861896/sza9kxyyqtrdejgvybfb.jpg",
    "v1753861895/avycksjdkoyyaqr4u7id.jpg",
    "v1753861892/imds8rubzt8ov9slkhtg.jpg",
    "v1753861890/a7metrll7gl5k4cm6phz.jpg",
    "v1753861888/ldzeo3qaztx7mtc2ibue.jpg",
    "v1753861887/lvgdejcqfpka189uks1k.jpg",
    "v1753861887/b4usd7omec8g02u3bydc.jpg",
    "v1753861885/q4f4zmqeacnso1j83vun.jpg",
    "v1753861884/suey331dolj81dvgrgh9.jpg",
    "v1753861882/qe5prdzvry5oxue1pr45.jpg",
    "v1753861881/wwzskzf59szmer72elzn.jpg",
    "v1753861880/msclria0pk0w2s84wdqn.jpg",
    "v1753861880/msclria0pk0w2s84wdqn.jpg",
    "v1753861875/k0pft41efwxlcuoe0z2f.jpg",
    "v1753861874/kjh8iqkluy0oqgdmcjdi.jpg",
    "v1753861874/lxav8w6g68rufinmlzw7.jpg",
    "v1753861872/pklauuhfexwguasplvys.jpg",
    "v1753861871/xbtfaydyqpsyskutdlpd.jpg",
    "v1753861871/jvxeidhswwvip0s1n72w.jpg",
    "v1753861869/ftwacnstw0kswla1xsav.jpg",
    "v1753861868/mohpvtsuqncsy18r58qn.jpg"
  ];
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };
  const [lightboxIdx, setLightboxIdx] = useState(null);
  // Prepare full URLs for lightbox (no transformations for max quality)
  const imageUrls = images.map(img => `https://res.cloudinary.com/drfcjlc5n/image/upload/${img}`);

  return (
    <section>
      <section className="gallery-header">
        <h1 className="gallery-title">Asmeninės fotosesijos</h1>
        <p className="gallery-subtitle">Jūsų asmeninės fotosesijos – tik Jums ir apie Jus.</p>
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
              alt={`Asmeninė fotosesija ${i + 1}`}
              className="masonry-img"
              style={{ width: '100%', display: 'block', borderRadius: '12px', marginBottom: '16px' }}
              onClick={() => setLightboxIdx(i)}
            />
          ))}
        </Masonry>
        <GalleryLightbox images={imageUrls} currentIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
        <h2>Kainos</h2>
        <ul>
          <li>Asmeninė fotosesija – 120€ (1 val.)</li>
          <li>Poros fotosesija – 150€ (1 val.)</li>
        </ul>
      </>
    </section>
  );
}
