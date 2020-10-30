import React from 'react';
import PropTypes from 'prop-types';

const Btn = ({
  handleClick, idStyle, titre, classStyle,
}) => (
  <button
    className={classStyle}
    type="button"
    id={idStyle}
    onClick={() => handleClick()}
  >
    {titre}
  </button>
);

Btn.propTypes = {
  handleClick: PropTypes.func,
  idStyle: PropTypes.string,
  classStyle: PropTypes.string,
  titre: PropTypes.string,
};

Btn.defaultProps = {
  handleClick: () => {},
  idStyle: '',
  classStyle: '',
  titre: '',
};

export default Btn;
