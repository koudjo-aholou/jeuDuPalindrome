import React, { useState, useEffect } from 'react';
import './App.scss';
import Game from './Game';

import { listePalindrome, startGame } from './data';
import {
  palindromeAleatoire, decouperLettre, melangerLettre, checkIfPlayerWin,
} from './module/module';
import Accueil from './Accueil';
import Spinner from './component/game/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [reponsePalindrome, setReponsePalindrome] = useState('');
  const [reponseJoueur, setReponseJoueur] = useState('');
  const [jeu, setJeu] = useState({});
  const [palindromeDecoupe, setPalindromeDecoupe] = useState([]);
  const [scoreJoueur, setScoreJoueur] = useState(0);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) setIsLoading(false);
    }, 500);
    return () => { isMounted = false; };
  }, []);

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
  const handleClickFinDuJeu = () => {
    window.location.reload(false);
  };

  if (isLoading) {
    return (<Spinner />);
  }

  return (
    <article className="game">
      { jeu.start
        ? (
          <Game
            reponseJoueur={reponseJoueur}
            checkTimer={checkTimer}
            scoreJoueur={scoreJoueur}
            jeu={jeu}
            palindromeDecoupe={palindromeDecoupe}
            handleClickLetter={handleClickLetter}
            handleClickSuppLettre={handleClickSuppLettre}
            reponsePalindrome={reponsePalindrome}
            handleClickContinuer={handleClickContinuer}
            handleClickPerdu={handleClickContinuer}
            handleClickFinDuJeu={handleClickFinDuJeu}
          />
        )
        : (
          <Accueil
            handleClickCommencerJeu={handleClickCommencerJeu}
          />
        )}
    </article>
  );
}

export default App;
