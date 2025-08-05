import React from 'react';

export default function MainPage() {
  return (
    <main>
      <section className="hero-section">
        <img className="hero-bg" src="https://res.cloudinary.com/drfcjlc5n/image/upload/v1753962280/aau0roo9of6ioonttprb.jpg" alt="Hero"/>
  <div className="hero-center-content">
    <div className="hero-tagline">Jūsų ypatingos akimirkos – mano akimis</div>
  </div>
</section>

      <section className="about-section">
        <div className="about-content">
          <img className="about-photo" src="https://res.cloudinary.com/drfcjlc5n/image/upload/v1753962214/pflanwkdh3imarj6akvx.jpg" alt="Grelinda" />
          <div>
            <h2>Šiek tiek apie mane</h2>
            <p>Sveiki! Esu <strong>Grelinda</strong> – Greta Vizbarė, fotografė iš Panevėžio.</p>
            <p>Fotografija man – ne tik darbas, bet ir nuoširdus būdas fiksuoti tai, kas tikra: šypsenas, žvilgsnius, emocijas ir ryšį tarp žmonių. Labiausiai širdį glosto galimybė įamžinti <strong>vestuvių akimirkas</strong> – šią ypatingą dviejų žmonių bendro gyvenimo pradžią.</p>
            <p>Dirbu įvairiose srityse: fotografuoju <strong>vaikus, suaugusiuosius, šeimas</strong>, o kartais į studiją atkeliauja ir <strong>keturkojai šeimos nariai</strong> – visiems atsiranda vietos mano kadruose.</p>
            <p><strong>Sezoninių fotosesijų metu</strong> kviečiu pasinerti į šventinę atmosferą: Velykos, Kalėdos, Valentino diena ir dar daug kitų smagių progų tampa puikia galimybe sustabdyti laiką.</p>
            <p>Man svarbiausia – kad jaustumėtės jaukiai, o nuotraukos neštų ne tik prisiminimus, bet ir jausmą.</p>
          </div>
        </div>
      </section>
      <section className="instagram-section">
        <div className="instagram-title">Instagram</div>
        <div className="instagram-grid">
          {[
            {
              file: 'instagram-2.jpg',
              url: 'https://www.instagram.com/p/DMvXSqwtUMy/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=='
            },
            {
              file: 'instagram-3.jpg',
              url: 'https://www.instagram.com/p/DMuA8NTCp1O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
            },
            {
              file: 'instagram-4.jpg',
              url: 'https://www.instagram.com/p/DMsGhKht3jL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
            },
            {
              file: 'instagram-5.jpg',
              url: 'https://www.instagram.com/p/DMfqU7WtUyT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
            },
          ].map(({ file, url }, i) => (
            <a
              key={file}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Atidaryti Instagram nuotrauką ${i + 1}`}
            >
              <img className="instagram-img" src={`/images/${file}`} alt={`Instagram ${i+1}`} />
            </a>
          ))}
        </div>
      </section>
      <section className="partners-section">
        <h2 className="gallery-title" style={{ textAlign: 'center' }}>Partneriai</h2>
        <br/>
        <div className="partners-logos">
          <a href="https://www.facebook.com/VisionMedial" target="_blank" rel="noopener noreferrer" aria-label="VisionMedial Facebook">
            <img src="/images/Logo-concept-1.png" alt="Partneris 1" className="partner-logo" />
          </a>
          <a href="https://fotoknyga.com" target="_blank" rel="noopener noreferrer" aria-label="Fotoknyga">
            <img src="/images/fotoknyga-by-sandra.avif" alt="Partneris 2" className="partner-logo" />
          </a>
        </div>
      </section>
    </main>
  );
}
