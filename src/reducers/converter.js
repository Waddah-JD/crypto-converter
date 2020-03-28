import actionTypes from "../actions/actionTypes";

export default (
  state = {
    availableCurrencies: ["BTC", "ETH", "XRP", "LTC", "BCH", "USD", "EUR"],
    fromCurrency: undefined,
    fromValue: 1,
    toCurrency: undefined,
    toValue: undefined,
    rate: undefined
  },
  action
) => {
  switch (action.type) {
    case actionTypes.REQUEST_EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        rate: action.rate,
        toValue: state.fromValue * action.rate
      };
    case actionTypes.SELECT_FROM_CURRENCY:
      return { ...state, fromCurrency: action.currency };
    case actionTypes.CHANGE_FROM_VALUE:
      return {
        ...state,
        fromValue: action.value,
        toValue: state.rate ? action.value * state.rate : state.toValue
      };
    case actionTypes.SELECT_TO_CURRENCY:
      return { ...state, toCurrency: action.currency };
    case actionTypes.CHANGE_TO_VALUE:
      return {
        ...state,
        toValue: action.value,
        fromValue: state.rate ? action.value / state.rate : state.fromValue
      };
    default:
      return state;
  }
};
