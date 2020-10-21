import React from 'react';
import PropTypes from 'prop-types';

function Score({ score }) {
  return (
    <div>
      <p>
        {' '}
        Score :
        {' '}
        {score}
        {' '}
      </p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
};
Score.defaultProps = {
  score: 0,
};
export default Score;
