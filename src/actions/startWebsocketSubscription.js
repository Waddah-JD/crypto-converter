import actionTypes from "./actionTypes";

export const startWebsocketSubscription = () => {
  return { type: actionTypes.START_WEBSOCKET_SUBSCRIPTION };
};

export const startWebsocketSubscriptionSuccess = () => {
  return { type: actionTypes.START_WEBSOCKET_SUBSCRIPTION_SUCCESS };
};

export const startWebsocketSubscriptionFail = error => {
  return {
    type: actionTypes.START_WEBSOCKET_SUBSCRIPTION_FAIL,
    error
  };
};

export const stopWebsocketSubscription = () => {
  return { type: actionTypes.STOP_WEBSOCKET_SUBSCRIPTION };
};

//

export const updateCurrencyListItemPrice = (item, price) => {
  return { type: actionTypes.UPDATE_CURRENCY_LIST_ITEM_PRICE, item, price };
};
