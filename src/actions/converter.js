import actionTypes from "./actionTypes";

export const requestExchangeRate = () => {
  return { type: actionTypes.REQUEST_EXCHANGE_RATE };
};

export const requestExchangeRateSuccess = rate => {
  return { type: actionTypes.REQUEST_EXCHANGE_RATE_SUCCESS, rate };
};

export const selectFromCurrency = currency => {
  return { type: actionTypes.SELECT_FROM_CURRENCY, currency };
};

export const changeFromValue = value => {
  return { type: actionTypes.CHANGE_FROM_VALUE, value };
};

export const selectToCurrency = currency => {
  return { type: actionTypes.SELECT_TO_CURRENCY, currency };
};

export const changeToValue = value => {
  return { type: actionTypes.CHANGE_TO_VALUE, value };
};
