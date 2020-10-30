/* eslint-disable max-len */
import React from 'react';

function Regle() {
  return (
    <div id="regles">
      <p className="titreRegles titre">Règles :</p>
      <ul className="paragraphe">
        <li>Le but du jeu est de créer un palindrome qui existe dans le dictionnaire (mot ou prénom) avec les lettres proposées.</li>
        <li>Chaque lettre à disposition ne revient qu&apos;une seule fois dans le mot.</li>
        <li>Tous les palindromes commencent par une majuscule.</li>
        <li>Le palindrome doit etre correctement orthographié : rêver sera correct mais pas revêr.</li>
        <li>Le jeu s&apos;arrete quand il n&apos;y a plus de temps.</li>
      </ul>
    </div>
  );
}

export default Regle;
