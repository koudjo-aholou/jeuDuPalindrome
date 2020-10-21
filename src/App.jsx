import React, { useState } from 'react';
import './App.css';
import Regle from './Regle';
import Timer from './Timer';

import { listePalindrome, startGame } from './data';
import {
  palindromeAleatoire, decouperLettre, melangerLettre, checkIfPlayerWin,
} from './module/module';
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
  const [palindromeDecoupe, setPalindromeDecoupe] = useState([]);
  const [scoreJoueur, setScoreJoueur] = useState(0);

  const debutJeu = () => {
    setJeu({ startGame });
    setReponseJoueur('');
    try {
      const motAleatoire = palindromeAleatoire(listePalindrome);
      setReponsePalindrome(motAleatoire);
      const motDcoupe = decouperLettre(motAleatoire);
      setPalindromeDecoupe(melangerLettre(motDcoupe));
      setJeu({ ...startGame, start: true });
    } catch (error) {
      setJeu({ ...startGame, bug: true });
    }
  };
  const joueurJoue = (lettre) => {
    if (!(reponseJoueur.length < reponsePalindrome.length)) {
      setJeu({ ...jeu, end: true });
    }
    if (jeu.endTime === true) {
      setJeu({ ...jeu, end: true });
    }
    const updateRepJ = reponseJoueur + lettre;
    setReponseJoueur(updateRepJ);
    if (checkIfPlayerWin(updateRepJ, reponsePalindrome)) {
      setJeu({ ...jeu, win: true });
      const majScore = scoreJoueur + 1;
      setScoreJoueur(majScore);
    }
  };
  const checkTimer = (status) => {
    if (status) {
      setJeu({ ...jeu, end: true, endTime: true });
    }
  };

  const handleClickLetter = (lettre) => {
    joueurJoue(lettre);
  };
  const handleClickSuppLettre = (clear) => {
    if (clear === true) {
      setReponseJoueur('');
    }
  };
  const handleClickContinuer = () => {
    debutJeu(listePalindrome);
  };

  return (
    <div>
      { jeu.start
        ? (
          <div>
            <Timer minutes={0} secondes={1} timer={checkTimer} />
            <Score score={scoreJoueur} />
            <Regle />
            <LettreChoisie lettres={reponseJoueur} />
          </div>
        )
        : (
          <div>
            <Regle />
            <p>Cliquez pour commencer une partie !</p>
          </div>
        )}
      { jeu.end || jeu.endTime
        ? (
          <div>
            <Texte titre="Votre réponse :" reponse={reponseJoueur} />
            <Texte titre="La bonne réponse etait : " reponse={reponsePalindrome} />
          </div>
        )
        : ''}
      { jeu.start && !jeu.end
        ? <AfficherLettre palindrome={palindromeDecoupe} whichLetter={handleClickLetter} />
        : ''}
      { jeu.start && !jeu.end && !jeu.win
        ? <SupprimerLettre suppLettre={handleClickSuppLettre} />
        : ''}
      { (jeu.win && !jeu.endTime)
        ? <FelicitationGagne continuerJeu={handleClickContinuer} />
        : ''}
      {
       !jeu.start || (jeu.end && !jeu.endTime)
         ? <button type="button" onClick={() => { debutJeu(listePalindrome); }}>Start</button>
         : ''
      }
      {
       jeu.endTime
         ? <button type="button" onClick={() => window.location.reload(false)}>Play Again ?</button>
         : ''
      }
      {
      jeu.bug
        ? <Texte titre="Oupss, il y a une erreur !" reponse="Raffraichissez la page" />
        : ''
      }
      <div />
    </div>
  );
}

export default App;
