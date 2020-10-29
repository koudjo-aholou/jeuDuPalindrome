import React from 'react';
import PropTypes from 'prop-types';

const CommencerUnePartie = ({ handleClick, titre }) => (
  <button
    className="commencerTexte"
    id="commencerUnePartie"
    type="button"
    onClick={() => handleClick()}
  >
    {titre}
  </button>
);

CommencerUnePartie.propTypes = {
  handleClick: PropTypes.func,
  titre: PropTypes.string,
};

CommencerUnePartie.defaultProps = {
  handleClick: () => {},
  titre: '',
};

export default CommencerUnePartie;
