import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  availableCurrenciesSelector,
  fromCurrencySelector,
  fromValueSelector,
  toCurrencySelector,
  toValueSelector,
  inputFieldsShouldBeDisabledSelector
} from "../selectors/converter";
import {
  selectFromCurrency,
  changeFromValue,
  selectToCurrency,
  changeToValue
} from "../actions/converter";

import ConverterItem from "./ConverterItem";

const Converter = () => {
  const availableCurrencies = useSelector(availableCurrenciesSelector);
  const fromCurrency = useSelector(fromCurrencySelector);
  const fromValue = useSelector(fromValueSelector);
  const toCurrency = useSelector(toCurrencySelector);
  const toValue = useSelector(toValueSelector);
  const inputFieldsShouldBeDisabled = useSelector(
    inputFieldsShouldBeDisabledSelector
  );
  const dispatch = useDispatch();
  const selectFromCurrencyHandler = currency =>
    dispatch(selectFromCurrency(currency));
  const changeFromValueHandler = value => dispatch(changeFromValue(value));
  const selectToCurrencyHandler = currency =>
    dispatch(selectToCurrency(currency));
  const changeToValueHandler = value => dispatch(changeToValue(value));

  return (
    <div className="main-block">
      <h2>Converter</h2>
      <>
        <ConverterItem
          label="Choose currency to convert FROM"
          id="fromCurrency"
          selectedCurrencyChangeHandler={selectFromCurrencyHandler}
          selectedCurrency={fromCurrency}
          availableCurrencies={availableCurrencies}
          currencyValue={fromValue}
          currencyValueChangeHandler={changeFromValueHandler}
          inputFieldsShouldBeDisabled={inputFieldsShouldBeDisabled}
        />
        <ConverterItem
          label="Choose currency to convert TO"
          id="toCurrency"
          selectedCurrencyChangeHandler={selectToCurrencyHandler}
          selectedCurrency={toCurrency}
          availableCurrencies={availableCurrencies}
          currencyValue={toValue}
          currencyValueChangeHandler={changeToValueHandler}
          inputFieldsShouldBeDisabled={inputFieldsShouldBeDisabled}
        />
      </>
    </div>
  );
};

export default Converter;
