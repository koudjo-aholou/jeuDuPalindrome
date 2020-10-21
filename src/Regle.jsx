/* eslint-disable max-len */
import React from 'react';

function Regle() {
  return (
    <div>
      Règles :
      <ul>
        <li>Le but du jeu est de créer un palindrome qui existe dans le dictionnaire (mot ou prenom) avec les lettres proposées.</li>
        <li>Chaque lettre à disposition ne revient qu`&apos;une seule fois dans le mot.</li>
        <li>Tous les mots/prenoms commencent par une majuscule.</li>
        <li>Le palindrome doit etre correctement orthographié : rêver sera correct mais pas revêr.</li>
      </ul>
    </div>
  );
}

export default Regle;
