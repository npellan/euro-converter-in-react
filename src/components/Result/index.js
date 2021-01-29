// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Result = ({ currency, value }) => (
  <div className="result">
    <p className="result__number">{value.toFixed(2)}</p>
    <p className="result__currency">{currency}</p>
  </div>
);

Result.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

// == Export
export default Result;
