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
            <p>
              Sveiki! Esu Grelinda – profesionali fotografė iš Panevėžio. Mano tikslas – įamžinti jūsų svarbiausias gyvenimo akimirkas jautriai, estetiškai ir su meile. 
              <br />
              Specializuojuosi vestuvių, krikštynų, asmeninių fotosesijų srityse bei siūlau studijos nuomos paslaugas. Kviečiu susisiekti ir kartu sukurti jūsų istoriją nuotraukose.
            </p>
          </div>
        </div>
      </section>
      <section className="instagram-section">
        <div className="instagram-title">Instagram</div>
        <div className="instagram-grid">
          {[
            'instagram-2.jpg',
            'instagram-3.jpg',
            'instagram-4.jpg',
            'instagram-5.jpg'
          ].map((file, i) => (
            <img key={file} className="instagram-img" src={`/images/${file}`} alt={`Instagram ${i+1}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
