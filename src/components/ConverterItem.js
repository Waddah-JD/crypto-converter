import React from "react";

const ConverterItem = ({
  label,
  id,
  selectedCurrencyChangeHandler,
  selectedCurrency,
  availableCurrencies,
  currencyValue,
  currencyValueChangeHandler,
  inputFieldsShouldBeDisabled
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      onChange={e => selectedCurrencyChangeHandler(e.target.value)}
      value={selectedCurrency}
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
      step="any"
      value={currencyValue}
      onChange={e => currencyValueChangeHandler(Number(e.target.value))}
      disabled={inputFieldsShouldBeDisabled}
    />
  </div>
);

export default ConverterItem;
