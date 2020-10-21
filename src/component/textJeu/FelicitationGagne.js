import React from 'react';

const FelicitationGagne = (props) => (
  <div>
    <p>Felicitation vous avez gagne !!!</p> 
        {
        <button 
        onClick={() => props.continuerJeu(true)
      }>
        Un autre palindrome !
      </button>
    }
  </div>
)

export default FelicitationGagne;