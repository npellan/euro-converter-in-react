// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Button = ({ open, handleOnClick }) => {
  const buttonClassName = open ? 'button button--open' : 'button';
  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleOnClick}
    >
      =
    </button>
  );
};

Button.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

// == Export
export default Button;
