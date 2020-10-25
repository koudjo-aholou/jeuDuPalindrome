import React from 'react';
import PropTypes from 'prop-types';

function LettreChoisie({ lettres }) {
  return (
    <p className="titre">
      Lettres choisies :
      {' '}
      <br />
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
