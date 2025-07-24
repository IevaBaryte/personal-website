import React from 'react';

export default function Weddings() {
  return (
    <section>
      <h1>Vestuvių fotografija</h1>
      <div className="img-gallery">
        {/* Čia įkelkite vestuvių nuotraukas */}
        <img src="/wedding1.jpg" alt="Vestuvių akimirka" />
        <img src="/wedding2.jpg" alt="Vestuvių akimirka" />
        <img src="/wedding3.jpg" alt="Vestuvių akimirka" />
      </div>
      <h2>Kainos</h2>
      <ul>
        <li>Vestuvių fotosesija nuo 400€</li>
        <li>Pilna diena (iki 10 val.) – 1000€</li>
        <li>Individualus pasiūlymas pagal poreikius</li>
      </ul>
    </section>
  );
}
