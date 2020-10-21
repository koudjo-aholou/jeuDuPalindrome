import React from 'react';
import PropTypes from 'prop-types';

const FelicitationGagne = ({ continuerJeu }) => (
  <div>
    <p>Felicitation vous avez gagne !!!</p>
    <button
      type="button"
      onClick={() => continuerJeu(true)}
    >
      Un autre palindrome !
    </button>
  </div>
);

FelicitationGagne.propTypes = {
  continuerJeu: PropTypes.func,
};

FelicitationGagne.defaultProps = {
  continuerJeu: () => {},
};

export default FelicitationGagne;
