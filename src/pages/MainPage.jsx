import React from 'react';

export default function MainPage() {
  return (
    <section>
      <h1>Apie mane</h1>
      <div className="profile-imgs">
        {/* Čia įkelkite savo nuotraukas */}
        <img src="/profile1.jpg" alt="Fotografė Grelinda" />
        <img src="/profile2.jpg" alt="Fotografė Grelinda" />
      </div>
      <p>
        Sveiki! Esu Grelinda – profesionali fotografė, kurianti jaukias, šiltas ir tikras akimirkas. Dirbu su vestuvėmis, krikštynomis, asmeninėmis fotosesijomis bei siūlau studijos nuomos paslaugas. Mano tikslas – padėti Jums išsaugoti ypatingus prisiminimus!
      </p>
      <div className="instagram-embed">
        {/* Instagram įterpimas */}
        <iframe src="https://www.instagram.com/p/CODE/embed" width="320" height="400" frameBorder="0" scrolling="no" allowtransparency="true" title="Instagram"></iframe>
      </div>
      <img className="partner-logo" src="/partner-logo.png" alt="Partnerio logotipas" />
    </section>
  );
}
