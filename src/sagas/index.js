import { takeLatest, all, put } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";
import { startWebsocketSubscription } from "../actions/currencyList";
import startWebsocketSagas from "./startWebsocketSagas";
import requestExchangeRate from "./requestExchangeRate";

function* init() {
  yield put(startWebsocketSubscription());
}

function* currencyListChangesSubscriber() {
  yield takeLatest(
    actionTypes.START_WEBSOCKET_SUBSCRIPTION,
    startWebsocketSagas
  );
}

function* exchangeRatesChangeSubscriber() {
  yield takeLatest(actionTypes.SELECT_FROM_CURRENCY, requestExchangeRate);
  yield takeLatest(actionTypes.SELECT_TO_CURRENCY, requestExchangeRate);
}

export default function* rootSaga() {
  yield all([
    init(),
    currencyListChangesSubscriber(),
    exchangeRatesChangeSubscriber()
  ]);
}
