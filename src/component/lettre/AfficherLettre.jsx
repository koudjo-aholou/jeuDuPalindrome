import React from 'react';
import PropTypes from 'prop-types';

const AfficherLettre = ({ palindrome, whichLetter }) => (
  <div className="wrapper">
    {
      palindrome.map((lettre) => (
        <div
          className="container"
          key={`${lettre.toString()}${Math.random() * 1000 + 1}`}
        >
          <button
            className="affLettre lettreStyle"
            type="button"
            key={`${lettre.toString()}${Math.random() * 1000 + 1}`}
            onClick={() => whichLetter(lettre)}
          >
            {lettre}
          </button>
        </div>
      ))
    }
  </div>
);
AfficherLettre.propTypes = {
  palindrome: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
    ]),
  ),
  whichLetter: PropTypes.func,
};

AfficherLettre.defaultProps = {
  whichLetter: 'A',
  palindrome: ['Ada'],
};

export default AfficherLettre;
