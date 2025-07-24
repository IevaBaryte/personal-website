import React from 'react';

export default function Christening() {
  return (
    <section>
      <h1>Krikštynų fotografija</h1>
      <div className="img-gallery">
        {/* Čia įkelkite krikštynų nuotraukas */}
        <img src="/christening1.jpg" alt="Krikštynų akimirka" />
        <img src="/christening2.jpg" alt="Krikštynų akimirka" />
      </div>
      <h2>Kainos</h2>
      <ul>
        <li>Krikštynų fotosesija nuo 250€</li>
        <li>Pilna diena – 600€</li>
      </ul>
    </section>
  );
}
