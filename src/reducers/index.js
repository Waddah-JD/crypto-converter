import { combineReducers } from "redux";

import currencyListReducers from "./currencyList";
import converterReducers from "./converter";

export default combineReducers({
  currencyList: currencyListReducers,
  converter: converterReducers,
  // availableCurrencies: () => ["BTC", "ETH", "XRP", "LTC", "BCH"]
});
