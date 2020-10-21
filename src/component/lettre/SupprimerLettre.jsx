import React from 'react';
import PropTypes from 'prop-types';

const SupprimerLettre = ({ suppLettre }) => (
  <div>
    <button
      type="button"
      onClick={() => suppLettre(true)}
    >
      Effacer
    </button>
  </div>
);
SupprimerLettre.propTypes = {
  suppLettre: PropTypes.func,
};

SupprimerLettre.defaultProps = {
  suppLettre: null,
};

export default SupprimerLettre;
