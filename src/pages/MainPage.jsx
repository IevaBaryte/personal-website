import React from 'react';

export default function MainPage() {
  return (
    <main>
      <section className="hero-section">
  <img className="hero-bg" src="/images/main-page-picture.jpg" alt="Hero" />
  <div className="hero-center-content">
    <div className="hero-tagline">Jūsų ypatingos akimirkos – mano akimis</div>
  </div>
</section>

      <section className="about-section">
        <div className="about-content">
          <img className="about-photo" src="/images/my-picture.jpeg" alt="Grelinda" />
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
          {[1,2,3,4,5,6].map(n => (
            <img key={n} className="instagram-img" src={`/images/instagram${n}.jpg`} alt={`Instagram ${n}`} />
          ))}
        </div>
      </section>
    </main>
  );
}
