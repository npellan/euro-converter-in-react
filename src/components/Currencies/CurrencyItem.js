// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const CurrencyItem = ({ name, handleCurrencyChoice }) => (
  <li className="currencies__item" onClick={handleCurrencyChoice}>
    {name}
  </li>
);

CurrencyItem.propTypes = {
  name: PropTypes.string.isRequired,
  handleCurrencyChoice: PropTypes.func,
};

CurrencyItem.defaultProps = {
  handleCurrencyChoice: () => { },
};

// == Export
export default CurrencyItem;
