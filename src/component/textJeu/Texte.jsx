import React from 'react';
import PropTypes from 'prop-types';

const Texte = ({ titre, reponse }) => (
  <p>
    {' '}
    {titre}
    {' '}
    {
      reponse
    }
  </p>
);

Texte.propTypes = {
  titre: PropTypes.string,
  reponse: PropTypes.string,
};

Texte.defaultProps = {
  titre: '',
  reponse: '',
};
export default Texte;
