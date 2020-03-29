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

  const url = `https://rest.coinapi.io/v1/exchangerate/${from}/${to}?apiKey=${process.env.REACT_APP_COINAPI_KEY}`;

  if (from && to) {
    yield put(requestExchangeRate());
    if (from === to) {
      yield put(requestExchangeRateSuccess(1));
    } else {
      const result = yield fetch(url).then(response => response.json());
      yield put(requestExchangeRateSuccess(result.rate));
    }
  }
}
