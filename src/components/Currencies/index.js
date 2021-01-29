// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import CurrencyItem from './CurrencyItem';

// == Import
import './styles.scss';

// == Composant
const Currencies = ({
  currencies,
  handleCurrencyChoice,
  search,
  onSearch,
}) => (
  <main className="currencies">
    <input
      type="text"
      className="currencies__search"
      placeholder="Rechercher une monnaie"
      value={search}
      onChange={onSearch}
    />
    <ul>
      {currencies.map((currency) => (
        <CurrencyItem
          key={currency.name}
          {...currency}
          handleCurrencyChoice={handleCurrencyChoice}
        />
      ))}
    </ul>
  </main>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  handleCurrencyChoice: PropTypes.func,
  search: PropTypes.string,
  onSearch: PropTypes.func,
};

Currencies.defaultProps = {
  handleCurrencyChoice: () => { },
  search: '',
  onSearch: () => {},
};

// == Export
export default Currencies;
