import React from 'react';

const SupprimerLettre = (props) => (
  <div>
        {
        <button 
        onClick={() => props.suppLettre(true)
      }>
        Effacer
      </button>
    }
  </div>
)

export default SupprimerLettre;