import React from 'react';
import PropTypes from 'prop-types';

const Texte = ({ titre, reponse, roleId }) => (
  <div>
    <p>
      {titre}
      {' '}
      <span id={roleId}>{reponse}</span>
    </p>
  </div>
);

Texte.propTypes = {
  titre: PropTypes.string,
  reponse: PropTypes.string,
  roleId: PropTypes.string,
};

Texte.defaultProps = {
  titre: '',
  reponse: '',
  roleId: '',
};
export default Texte;
