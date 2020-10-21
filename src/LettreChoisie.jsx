import React from 'react';
import PropTypes from 'prop-types';

function LettreChoisie({ lettres }) {
  return (
    <p>
      Lettres choisies :
      {lettres}
    </p>
  );
}
LettreChoisie.propTypes = {
  lettres: PropTypes.string,
};

LettreChoisie.defaultProps = {
  lettres: '',
};

export default LettreChoisie;
