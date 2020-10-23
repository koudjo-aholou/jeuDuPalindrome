import React from 'react';
import PropTypes from 'prop-types';

import Regle from './Regle';
import Score from './Score';
import LettreChoisie from './LettreChoisie';
import Timer from './Timer';

const Jeu = ({ reponseJoueur, checkTimer, scoreJoueur }) => (
  <div className="jeu">
    <Timer minutes={0} secondes={1} timer={checkTimer} />
    <Score score={scoreJoueur} />
    <Regle />
    <LettreChoisie lettres={reponseJoueur} />
  </div>
);

Jeu.propTypes = {
  scoreJoueur: PropTypes.number,
  reponseJoueur: PropTypes.string,
  checkTimer: PropTypes.func,
};

Jeu.defaultProps = {
  scoreJoueur: 0,
  reponseJoueur: '',
  checkTimer: () => {},
};

export default Jeu;
