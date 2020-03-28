import { put, select } from "redux-saga/effects";

import {
  requestExchangeRate,
  requestExchangeRateSuccess
} from "../actions/converter";

export const selectFromCurrency = state => state.converter.fromCurrency;
export const selectToCurrency = state => state.converter.toCurrency;

export default function*() {
  const from = yield select(selectFromCurrency);
  const to = yield select(selectToCurrency);

  const API_KEY = "AA60341D-2F17-4189-AB00-107FA2013A63"; // TODO move this to .env file
  const url = `https://rest.coinapi.io/v1/exchangerate/${from}/${to}?apiKey=${API_KEY}`;

  if (from && to) {
    yield put(requestExchangeRate());
    if (from === to) {
      // dispatch 1
      yield put(requestExchangeRateSuccess(1));
    } else {
      const result = yield fetch(url).then(response => response.json());
      yield put(requestExchangeRateSuccess(result.rate));
    }
  }

  // console.log("result", result);
  // //   yield put({ type: "actionTypes.REDIRECT_TO_HOMEPAGE", result });
}
