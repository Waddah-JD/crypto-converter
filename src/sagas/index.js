import { takeLatest, all, put } from "redux-saga/effects";

import actionTypes from "../actions/actionTypes";
import { startWebsocketSubscription } from "../actions/startWebsocketSubscription";
import startWebsocketSagas from "./startWebsocketSagas";

function* init() {
  yield put(startWebsocketSubscription());
}

function* currencyListChanges() {
  yield takeLatest(
    actionTypes.START_WEBSOCKET_SUBSCRIPTION,
    startWebsocketSagas
  );
}

export default function* rootSaga() {
  yield all([init(), currencyListChanges()]);
}
