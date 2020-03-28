import { createSelector } from "reselect";

import { converterSelector } from "./index";

export const availableCurrenciesSelector = createSelector(
  converterSelector,
  converter => converter.availableCurrencies
);

export const fromCurrencySelector = createSelector(
  converterSelector,
  converter => converter.fromCurrency
);

export const fromValueSelector = createSelector(
  converterSelector,
  converter => converter.fromValue
);

export const toCurrencySelector = createSelector(
  converterSelector,
  converter => converter.toCurrency
);

export const toValueSelector = createSelector(
  converterSelector,
  converter => converter.toValue
);
