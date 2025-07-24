import React from 'react';

export default function StudioRent() {
  return (
    <section>
      <h1>Studijos nuoma</h1>
      <div className="img-gallery">
        {/* Čia įkelkite studijos nuotraukas */}
        <img src="/studio1.jpg" alt="Studija" />
        <img src="/studio2.jpg" alt="Studija" />
      </div>
      <h2>Kainos</h2>
      <ul>
        <li>Studijos nuoma – 35€/val.</li>
        <li>Minimalus laikas – 2 val.</li>
      </ul>
    </section>
  );
}
