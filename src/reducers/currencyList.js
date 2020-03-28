import actionTypes from "../actions/actionTypes";

export default (
  state = { isSubscribed: false, data: {}, error: undefined },
  action
) => {
  switch (action.type) {
    case actionTypes.START_WEBSOCKET_SUBSCRIPTION_SUCCESS:
      return { ...state, isSubscribed: true };
    case actionTypes.START_WEBSOCKET_SUBSCRIPTION_FAIL:
      return { ...state, isSubscribed: false, error: action.error };
    case actionTypes.STOP_WEBSOCKET_SUBSCRIPTION:
      return { ...state, isSubscribed: false };
    case actionTypes.UPDATE_CURRENCY_LIST_ITEM_PRICE: {
      const prevPrice = (state.data[action.item] || {}).price;
      const price = action.price;
      const rate =
        price !== prevPrice
          ? price > prevPrice
            ? "UP"
            : "DOWN"
          : (state.data[action.item] || {}).rate;
      // const rate = price > prevPrice ? "UP" : "DOWN";
      return {
        ...state,
        data: {
          ...state.data,
          [action.item]: {
            ...state.data[action.item],
            price,
            prevPrice,
            rate
          }
        }
      };
    }
    default:
      return state;
  }
};
