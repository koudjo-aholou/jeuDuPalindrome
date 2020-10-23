import React from 'react';
import PropTypes from 'prop-types';

import Regle from './Regle';
import Texte from './component/textJeu/Texte';
import ButtonJeu from './component/game/Button';

const Accueil = ({ handleClickCommencerJeu }) => (
  <div className="home">
    <Regle />
    <Texte titre="Cliquez pour commencer une partie  !" />
    <ButtonJeu handleClick={handleClickCommencerJeu} titre="Commencer une partie" />
  </div>
);

Accueil.propTypes = {
  handleClickCommencerJeu: PropTypes.func,
};

Accueil.defaultProps = {
  handleClickCommencerJeu: () => {},
};

export default Accueil;
