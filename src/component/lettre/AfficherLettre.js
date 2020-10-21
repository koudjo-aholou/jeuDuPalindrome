import React from 'react';

const AfficherLettre = (props) => (
  <div>
    {
      props.palindrome.map((lettre,i) => {
        return <button 
        key={`${lettre.toString()}${i}`}
        onClick={() => props.whichLetter(lettre)
        }>
          {lettre}
          </button>
      })
    }
  </div>
)

export default AfficherLettre;