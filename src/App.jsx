import React, { useState } from 'react';
import './App.scss';
import Game from './Game';

import { listePalindrome, startGame } from './data';
import {
  palindromeAleatoire, decouperLettre, melangerLettre, checkIfPlayerWin,
} from './module/module';
import AfficherLettre from './component/lettre/AfficherLettre';
import SupprimerLettre from './component/lettre/SupprimerLettre';
import Texte from './component/textJeu/Texte';
import FelicitationGagne from './component/textJeu/FelicitationGagne';
import Accueil from './Accueil';

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
      setJeu({ ...jeu, end: true, win: true });
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
  const handleClickCommencerJeu = () => {
    debutJeu(listePalindrome);
  };

  return (
    <div className="space">
      { jeu.start
        ? (
          <Game reponseJoueur={reponseJoueur} checkTimer={checkTimer} scoreJoueur={scoreJoueur} />
        )
        : (
          <Accueil handleClickCommencerJeu={handleClickCommencerJeu} />
        )}
      { jeu.end || jeu.endTime
        ? (
          <div className="containerRep">
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
      (jeu.end && !jeu.endTime && !jeu.win)
        ? <button className="commencerTexte" type="button" onClick={() => { debutJeu(listePalindrome); }}>Continuer</button>
        : ''
      }
      {
       jeu.endTime
         ? <button className="commencerTexte" type="button" onClick={() => window.location.reload(false)}>Play Again ?</button>
         : ''
      }
      {
      jeu.bug
        ? <Texte titre="Oupss, il y a une erreur !" reponse="Raffraichissez la page" />
        : ''
      }
    </div>
  );
}

export default App;
