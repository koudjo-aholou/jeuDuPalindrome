import React from 'react';
import PropTypes from 'prop-types';

import Regle from './component/game/Regle';
import Score from './component/game/Score';
import LettreChoisie from './component/lettre/LettreChoisie';
import Timer from './component/minuteur/Timer';
import AfficherLettre from './component/lettre/AfficherLettre';
import SupprimerLettre from './component/lettre/SupprimerLettre';
import Texte from './component/textJeu/Texte';
import FelicitationGagne from './component/textJeu/FelicitationGagne';
import Btn from './component/game/Btn';

const Jeu = ({
  reponseJoueur, checkTimer, scoreJoueur, jeu, palindromeDecoupe,
  handleClickLetter, handleClickSuppLettre, reponsePalindrome, handleClickContinuer,
  handleClickPerdu, handleClickFinDuJeu,
}) => (
  <div className="jeu">
    <div className="containerST">
      <Timer timer={checkTimer} />
      <Score score={scoreJoueur} />
    </div>
    <div className="cacher">
      <Regle />
    </div>
    <LettreChoisie lettres={reponseJoueur} />
    <div className="containerLJ">
      { jeu.start && !jeu.end
        ? <AfficherLettre palindrome={palindromeDecoupe} whichLetter={handleClickLetter} />
        : ''}
      { jeu.end || jeu.endTime
        ? (
          <div className="containerRep" id="finPartie">
            <Texte titre="Votre réponse :" reponse={reponseJoueur} />
            <Texte titre="La bonne réponse etait : " reponse={reponsePalindrome} roleId="reponsePalindrome" />
          </div>
        )
        : ''}
      { (jeu.win && !jeu.endTime)
        ? <FelicitationGagne continuerJeu={handleClickContinuer} />
        : ''}
      {
      jeu.bug
        ? <Texte titre="Oupss, il y a une erreur !" reponse="Raffraichissez la page" />
        : ''
      }
      {
      (jeu.end && !jeu.endTime && !jeu.win)
        ? <Btn handleClick={handleClickPerdu} titre="Continuer" idStyle="continuerJeu" classStyle="commencerTexte" />
        : ''
    }
      {
       jeu.endTime
         ? <Btn handleClick={handleClickFinDuJeu} titre="Play Again ?" idStyle="FinJeu" classStyle="commencerTexte" />
         : ''
    }
    </div>
    { jeu.start && !jeu.end && !jeu.win
      ? <SupprimerLettre suppLettre={handleClickSuppLettre} />
      : ''}
  </div>
);

Jeu.propTypes = {
  scoreJoueur: PropTypes.number,
  jeu: PropTypes.shape({
    start: PropTypes.bool.isRequired,
    end: PropTypes.bool.isRequired,
    win: PropTypes.bool.isRequired,
    endTime: PropTypes.bool.isRequired,
    bug: PropTypes.bool.isRequired,
  }),
  palindromeDecoupe: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
    ]),
  ),
  handleClickLetter: PropTypes.func,
  handleClickSuppLettre: PropTypes.func,
  reponsePalindrome: PropTypes.string,
  handleClickContinuer: PropTypes.func,
  handleClickPerdu: PropTypes.func,
  handleClickFinDuJeu: PropTypes.func,
  reponseJoueur: PropTypes.string,
  checkTimer: PropTypes.func,
};

Jeu.defaultProps = {
  scoreJoueur: 0,
  reponseJoueur: '',
  jeu: {},
  checkTimer: () => {},
  palindromeDecoupe: () => {},
  handleClickLetter: () => {},
  handleClickSuppLettre: () => {},
  reponsePalindrome: () => {},
  handleClickContinuer: () => {},
  handleClickPerdu: () => {},
  handleClickFinDuJeu: () => {},
};

export default Jeu;
