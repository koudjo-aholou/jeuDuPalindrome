import React from 'react';
import PropTypes from 'prop-types';

import Regle from './component/game/Regle';
import Texte from './component/textJeu/Texte';
import CommencerUnePartie from './component/game/CommencerPartie';

const Accueil = ({ handleClickCommencerJeu }) => (
  <section id="accueil">
    <Regle />
    <Texte titre="Cliquez pour commencer une partie  !" />
    <CommencerUnePartie handleClick={handleClickCommencerJeu} titre="Commencer une partie" />
  </section>
);

Accueil.propTypes = {
  handleClickCommencerJeu: PropTypes.func,
};

Accueil.defaultProps = {
  handleClickCommencerJeu: () => {},
};

export default Accueil;
