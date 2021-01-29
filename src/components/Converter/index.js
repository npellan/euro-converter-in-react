// == Import npm
import React from 'react';

import currenciesData from 'src/data/currencies';

import Header from 'src/components/Header';
import Button from 'src/components/Button';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

// == Import
import './styles.scss';

// == Composant
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      baseAmount: 1,
      currentCurrency: {
        name: 'United States Dollar',
        rate: 1.094103,
      },
      search: '',
    };
  }

  /**
   * Fonction qui ouvre la liste des devises
   */
  handleToggleCurrenciesList = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  /**
   * Fonction qui change la devise
   */
  handleCurrencyChoice = (event) => {
    const foundCurrency = currenciesData.find(
      (currency) => currency.name === event.currentTarget.textContent,
    );

    this.setState({
      currentCurrency: {
        name: foundCurrency.name,
        rate: foundCurrency.rate,
      },
    });
  }

  /**
   * Fonction qui "suit" le changement de l'input et modifie la recherche dans le state
   */
  handleSearchInputChange= (event) => {
    this.setState({ search: event.target.value });
  }

  /**
   * Fonction qui filtre les devises en fonction de la recherche effectuée
   */
  getFilteredCurrencies = () => {
    const { search } = this.state;

    if (search.trim() === '') {
      return currenciesData;
    }

    return currenciesData.filter(
      (currency) => currency.name.toLowerCase().trim().includes(search.toLowerCase().trim()),
    );
  }

  render() {
    const {
      open,
      baseAmount,
      currentCurrency,
      search,
    } = this.state;

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        <Button
          type="button"
          open={open}
          handleOnClick={this.handleToggleCurrenciesList}
        />
        {
          open && (
            <Currencies
              currencies={this.getFilteredCurrencies()}
              handleCurrencyChoice={this.handleCurrencyChoice}
              search={search}
              onSearch={this.handleSearchInputChange}
            />
          )
        }
        <Result
          currency={currentCurrency.name}
          value={currentCurrency.rate * baseAmount}
        />

      </div>
    );
  }
}

// == Export
export default Converter;
