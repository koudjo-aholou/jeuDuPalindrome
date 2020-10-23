import React from 'react';
import PropTypes from 'prop-types';

const SupprimerLettre = ({ suppLettre }) => (
  <div className="suppLettreStyle">
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
  suppLettre: () => {},
};

export default SupprimerLettre;
