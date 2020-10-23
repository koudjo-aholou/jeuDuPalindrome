import React from 'react';
import PropTypes from 'prop-types';

const ButtonJeu = ({ handleClick, titre }) => (
  <div>
    <button
      className="commencerTexte"
      type="button"
      onClick={() => handleClick()}
    >
      {titre}
    </button>
  </div>
);

ButtonJeu.propTypes = {
  handleClick: PropTypes.func,
  titre: PropTypes.string,
};

ButtonJeu.defaultProps = {
  handleClick: () => {},
  titre: '',
};

export default ButtonJeu;
