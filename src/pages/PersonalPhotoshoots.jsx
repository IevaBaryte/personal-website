import React from 'react';

export default function PersonalPhotoshoots() {
  return (
    <section>
      <h1>Asmeninės fotosesijos</h1>
      <div className="img-gallery">
        {/* Čia įkelkite asmeninių fotosesijų nuotraukas */}
        <img src="/personal1.jpg" alt="Asmeninė fotosesija" />
        <img src="/personal2.jpg" alt="Asmeninė fotosesija" />
      </div>
      <h2>Kainos</h2>
      <ul>
        <li>Asmeninė fotosesija – 120€ (1 val.)</li>
        <li>Poros fotosesija – 150€ (1 val.)</li>
      </ul>
    </section>
  );
}
