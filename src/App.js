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

  const debutJeu = () =>{
    setJeu({start:false, end: false, win: false, endTime: false});
    setReponseJoueur('');
    const motAleatoire = palindromeAleatoire(listePalindrome)
    setReponsePalindrome(motAleatoire);
    const motDcoupe = decouperLettre(motAleatoire);
    setPalindromeDecoupe(melangerLettre(motDcoupe));
    setJeu({...jeu, start:true, end:false,win: false, endTime: false})
  }
  const joueurJoue = (lettre) => {
    if(!(reponseJoueur.length < reponsePalindrome.length) ){
      setJeu({...jeu, end: true})
    }
    if(jeu.endTime === true){
      setJeu({...jeu, end: true})
    }
    const updateRepJ = reponseJoueur + lettre;
    setReponseJoueur(updateRepJ);
    if(checkIfPlayerWin(updateRepJ,reponsePalindrome)){
      setJeu({...jeu, win: true});
      let majScore = scoreJoueur + 1;
      setScoreJoueur(majScore)
    };
  }
  const checkTimer = (status) => {
    if(status){
      setJeu({...jeu, end: true, endTime: true});
    }  
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
     { jeu.start ? <div><Timer minutes={0} secondes={1} timer={checkTimer} /><Score score={scoreJoueur}/><Regle/><LettreChoisie lettres={reponseJoueur}/></div>: <p>Cliquez pour commencer une partie</p>}
      {jeu.end || jeu.endTime ? <div><p> Votre réponse : {reponseJoueur}</p> <p> La bonne réponse etait {reponsePalindrome}</p></div> : ''}
      {jeu.start && !jeu.end ? afficherLettre() : ''}
      {jeu.start && !jeu.end && !jeu.win ? supprimerLettre() : ''}
      {(jeu.win && !jeu.endTime) ? 
      <div>
        <p>Felicitation vous avez gagne !!!</p> 
        <button onClick={() => {debutJeu(listePalindrome)} }>
          Un autre palindrome !
        </button>
      </div>
      : ''
      }
      {
        !jeu.start || (jeu.end && !jeu.endTime) ?  <button onClick={() => {debutJeu(listePalindrome)} }>Start !</button> :''
      }
      {
        jeu.endTime ? <button onClick={() => window.location.reload(false)}>Play Again ?</button> :''
      }
        <div>
 </div>  
    </div>
  );
}

export default App;
