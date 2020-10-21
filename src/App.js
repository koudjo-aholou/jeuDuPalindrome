import React, {useState } from 'react';
import './App.css';
import Regle from './Regle';
import Timer from './Timer';

import {listePalindrome} from './data';
import { palindromeAleatoire, decouperLettre, melangerLettre, checkIfPlayerWin } from './module/module';
import LettreChoisie from './LettreChoisie';
import Score from './Score';

function App() {
  const [reponsePalindrome, setReponsePalindrome] = useState('');
  const [reponseJoueur, setReponseJoueur] = useState('');
  const [jeu, setJeu] = useState({});
  const [palindromeDecoupe,setPalindromeDecoupe] = useState([]);
  const [scoreJoueur, setScoreJoueur] = useState(0);

  const debutJeu = (listePalindrome) =>{
    setJeu({start:false, end: false, win: false});
    setReponseJoueur('');
    const motAleatoire = palindromeAleatoire(listePalindrome)
    setReponsePalindrome(motAleatoire);
    const motDcoupe = decouperLettre(motAleatoire);
    setPalindromeDecoupe(melangerLettre(motDcoupe));
    setJeu({...jeu, start:true, end:false,win: false})
  }
  const joueurJoue = (lettre) => {
    if(!(reponseJoueur.length < reponsePalindrome.length) ){
      setJeu({...jeu, end: true})
    }
    const updateRepJ = reponseJoueur + lettre
    setReponseJoueur(updateRepJ);
    if(checkIfPlayerWin(updateRepJ,reponsePalindrome)){
      setJeu({...jeu, win: true});
      let majScore = scoreJoueur + 1;
      setScoreJoueur(majScore)
    };
  }

  const afficherLettre = () => (
    <div>
      {
        palindromeDecoupe.map((lettre,i) => {
          return <button 
          key={`${lettre.toString()}${i}`}
          onClick={() => joueurJoue(lettre)
          }>
            {lettre}
            </button>
        })
      }
    </div>
  )

  const supprimerLettre = () => (
    <div>
    {
        <button 
        onClick={() => setReponseJoueur('')
      }>
        Effacer
      </button>
    }
  </div>
  )

  return (
    <div>
     { jeu.start ? <div><Timer/><Score score={scoreJoueur}/><Regle/><LettreChoisie lettres={reponseJoueur}/></div>: <p>Cliquez pour commencer une partie</p>}
      {jeu.end ? <div><p> Votre réponse : {reponseJoueur}</p> <p> La bonne réponse etait {reponsePalindrome}</p></div> : ''}
      {jeu.start && !jeu.end ? afficherLettre() : ''}
      {jeu.start && !jeu.end && !jeu.win ? supprimerLettre() : ''}
      {jeu.win ? 
      <div>
        <p>Felicitation vous avez gagne !!!</p> 
        <button onClick={() => {debutJeu(listePalindrome)} }>
          Play again ?
        </button>
      </div>
      : ''
      }
      {
        !jeu.start || jeu.end ?  <button onClick={() => {debutJeu(listePalindrome)} }>Start !</button> :''
      }
        <div>
 </div>  
    </div>
  );
}

export default App;
