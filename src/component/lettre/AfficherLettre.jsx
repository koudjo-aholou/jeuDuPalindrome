import React from 'react';
import PropTypes from 'prop-types';

const AfficherLettre = ({ palindrome, whichLetter }) => (
  <div>
    {
      palindrome.map((lettre, i) => (
        <button
          className="affLettre lettreStyle"
          type="button"
          key={`${lettre.toString()}${i + 4}`}
          onClick={() => whichLetter(lettre)}
        >
          {lettre}
        </button>
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
