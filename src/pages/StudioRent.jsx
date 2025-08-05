import React from 'react';

export default function StudioRent() {
  return (
    <section>
      <section className="gallery-header">
        <h1 className="gallery-title">Studijos nuoma</h1>
        <p className="gallery-subtitle">Studijos erdvė puikiai tinka švęsti baby shower, mergvakarį, gimtadienį, kokią nors edukaciją ar šiaip pasisedėjimą! Erdvė pritaikyta 12 asmenų. Puiki galimybė pasifotografuoti profesionalioje studijoje, galite atsivesti ir savo norimą fotografą, pasisamdyti mane, arba išbandyti savo jėgas ir įsiamžinti sąvarankiškai, naudojantis telefonu ar savo turima fotografijos įranga.
          <br />
          <br />
          Labai laukiu Jūsų ir Jūsų švenčių mano sukurtoje erdvėje!
        </p>
      </section>
      <div className="studio-videos-columns">
        <video controls className="studio-video">
          <source src="https://res.cloudinary.com/drfcjlc5n/video/upload/v1754049936/e08j8sevxwifpkk7vomq.mp4" type="video/mp4" />
          Jūsų naršyklė nepalaiko video formato.
        </video>
        <video controls className="studio-video">
          <source src="https://res.cloudinary.com/drfcjlc5n/video/upload/v1754049934/ry493gaump4nsngw4vep.mp4" type="video/mp4" />
          Jūsų naršyklė nepalaiko video formato.
        </video>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Kainos</h2>
        <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
          <li>Studijos nuoma – 35€/val.</li>
          <li>Minimalus laikas – 2 val.</li>
        </ul>
      </div>
    </section>
  );
}
