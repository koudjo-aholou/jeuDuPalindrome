import React, {useState } from 'react';
import './App.css';
import Regle from './Regle';
import Timer from './Timer';

import {listePalindrome} from './data';
import { palindromeAleatoire, decouperLettre, melangerLettre, checkIfPlayerWin } from './module/module';
import LettreChoisie from './LettreChoisie';
import Score from './Score';
import AfficherLettre from './component/lettre/AfficherLettre';
import SupprimerLettre from './component/lettre/SupprimerLettre';
import Texte from './component/textJeu/Texte';
import FelicitationGagne from './component/textJeu/FelicitationGagne';

function App() {
  const [reponsePalindrome, setReponsePalindrome] = useState('');
  const [reponseJoueur, setReponseJoueur] = useState('');
  const [jeu, setJeu] = useState({});
  const [palindromeDecoupe,setPalindromeDecoupe] = useState([]);
  const [scoreJoueur, setScoreJoueur] = useState(0);

  const debutJeu = () =>{
    setJeu({start:false, end: false, win: false, endTime: false, bug:false});
    setReponseJoueur('');
    try {
      const motAleatoire = palindromeAleatoire(listePalindrome)
      setReponsePalindrome(motAleatoire);
      const motDcoupe = decouperLettre(motAleatoire);
      setPalindromeDecoupe(melangerLettre(motDcoupe));
      setJeu({...jeu, start:true, end:false,win: false, endTime: false})
    } catch (error) {
      setJeu({start:false, end:false,win: false, endTime: false, bug:true})
    }
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

  const handleClickLetter = (lettre) => {
    joueurJoue(lettre)
  }
  const handleClickSuppLettre = (clear) =>{
    if(clear === true){
      setReponseJoueur('');
    }
  }
  const handleClickContinuer = (continuer) => {
    debutJeu(listePalindrome);
  }

  return (
    <div>
     { jeu.start ? <div><Timer minutes={0} secondes={1} timer={checkTimer} /><Score score={scoreJoueur}/><Regle/><LettreChoisie lettres={reponseJoueur}/></div>: <p>Cliquez pour commencer une partie</p>}
      {jeu.end || jeu.endTime ? <div><Texte titre={'Votre réponse :'} reponse={reponseJoueur}/><Texte titre={'La bonne réponse etait : '} reponse={reponsePalindrome}/></div> : ''}
      {jeu.start && !jeu.end ? <AfficherLettre palindrome={palindromeDecoupe} whichLetter={handleClickLetter}/> : ''}
      {jeu.start && !jeu.end && !jeu.win ? <SupprimerLettre suppLettre={handleClickSuppLettre}/> : ''}
      {(jeu.win && !jeu.endTime) ? 
      <FelicitationGagne  continuerJeu={handleClickContinuer}/>
      : ''
      }
      {
        !jeu.start || (jeu.end && !jeu.endTime) ?  <button onClick={() => {debutJeu(listePalindrome)} }>Start !</button> :''
      }
      {
        jeu.endTime ? <button onClick={() => window.location.reload(false)}>Play Again ?</button> :''
      }
      {
        jeu.bug ? <Texte titre='Oupss, il y a une erreur !' reponse='Raffraichissez la page'/>:''
      }
        <div>
 </div>  
    </div>
  );
}

export default App;
