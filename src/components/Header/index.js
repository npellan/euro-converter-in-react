// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({ baseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <h2 className="header__subtitle">{baseAmount} euro{baseAmount > 1 ? 's' : ''}</h2>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number,
};

Header.defaultProps = {
  baseAmount: 1,
};

// == Export
export default Header;
