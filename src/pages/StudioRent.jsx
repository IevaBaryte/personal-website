import React from 'react';

export default function StudioRent() {
  return (
    <section>
      <section className="gallery-header">
        <h1 className="gallery-title">Studijos nuoma</h1>
      </section>
      <div className="studio-videos">
        <video controls className="studio-video">
          <source src="https://res.cloudinary.com/drfcjlc5n/video/upload/v1754049936/e08j8sevxwifpkk7vomq.mp4" type="video/mp4" />
          Jūsų naršyklė nepalaiko video formato.
        </video>
        <video controls className="studio-video">
          <source src="https://res.cloudinary.com/drfcjlc5n/video/upload/v1754049934/ry493gaump4nsngw4vep.mp4" type="video/mp4" />
          Jūsų naršyklė nepalaiko video formato.
        </video>
      </div>
      <h2>Kainos</h2>
      <ul>
        <li>Studijos nuoma – 35€/val.</li>
        <li>Minimalus laikas – 2 val.</li>
      </ul>
    </section>
  );
}
