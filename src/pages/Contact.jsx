import React from 'react';

export default function Contact() {
  return (
    <section>
      <section className="gallery-header">
        <h1 className="gallery-title">Kontaktai</h1>
        <p className="gallery-subtitle">Norėdami užsakyti fotosesiją ar gauti daugiau informacijos, susisiekite:
          <br />
          <br />
          Telefonu: <a href="tel:+37060250012">+370 602 50012</a>
          <br />
          Greta Vizbarė
        </p>
      </section>
      <div class="form-container">
    <h2>Jei turite klausimų, prašau susisiekite su manimi telefonu arba užpildę šią kontaktų formą! 
    </h2>
      <br />
      <p>Susisieksiu su jumis kaip įmanoma greičiau!</p>

    <form action="https://formspree.io/f/mvgqwarw" method="POST">
      <label for="name">Vardas</label>
      <input type="text" name="name" id="name" required />

      <label for="email">El. paštas</label>
      <input type="email" name="email" id="email" required />

      <label for="message">Žinutė</label>
      <textarea name="message" id="message" rows="6" required></textarea>

      <button type="submit">Siųsti</button>
    </form>
  </div>
    </section>
  );
}
