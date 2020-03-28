import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  availableCurrenciesSelector,
  fromCurrencySelector,
  fromValueSelector,
  toCurrencySelector,
  toValueSelector
} from "../selectors/converter";
import {
  selectFromCurrency,
  changeFromValue,
  selectToCurrency,
  changeToValue
} from "../actions/converter";

const Converter = () => {
  const availableCurrencies = useSelector(availableCurrenciesSelector);
  const fromCurrency = useSelector(fromCurrencySelector);
  const fromValue = useSelector(fromValueSelector);
  const toCurrency = useSelector(toCurrencySelector);
  const toValue = useSelector(toValueSelector);
  const dispatch = useDispatch();
  const selectFromCurrencyHandler = currency =>
    dispatch(selectFromCurrency(currency));
  const changeFromValueHandler = value => dispatch(changeFromValue(value));
  const selectToCurrencyHandler = currency =>
    dispatch(selectToCurrency(currency));
  const changeToValueHandler = value => dispatch(changeToValue(value));

  return (
    <>
      <p>Converter</p>
      <>
        <label htmlFor="fromCurrency">choose FROM currency:</label>
        <select
          id="fromCurrency"
          onChange={e => selectFromCurrencyHandler(e.target.value)}
          defaultValue={fromCurrency}
        >
          <option key={undefined} value={undefined} />
          {availableCurrencies &&
            availableCurrencies.length > 0 &&
            availableCurrencies.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        <input
          type="number"
          defaultValue={fromValue}
          onChange={e => changeFromValueHandler(Number(e.target.value))}
        />
        <br />
        <label htmlFor="toCurrency">choose TO currency:</label>
        <select
          id="toCurrency"
          onChange={e => selectToCurrencyHandler(e.target.value)}
          defaultValue={toCurrency}
        >
          <option key={undefined} value={undefined} />
          {availableCurrencies &&
            availableCurrencies.length > 0 &&
            availableCurrencies.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        <input
          type="number"
          defaultValue={toValue}
          onChange={e => changeToValueHandler(Number(e.target.value))}
        />
      </>
    </>
  );
};

export default Converter;
