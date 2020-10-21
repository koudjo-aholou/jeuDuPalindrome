import React from 'react';

const FelicitationGagne = ({ continuerJeu }) => (
  <div>
    <p>Felicitation vous avez gagne !!!</p>
    <button
      type="button"
      onClick={() => continuerJeu(true)}
    >
      Un autre palindrome !
    </button>
  </div>
);

export default FelicitationGagne;
