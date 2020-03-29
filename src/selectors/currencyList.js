import { createSelector } from "reselect";

import { currencyListSelector } from "./index";

export const currencyListIsSubscribedSelector = createSelector(
  currencyListSelector,
  currencyList => currencyList.isSubscribed
);

export const currencyListDataSelector = createSelector(
  currencyListSelector,
  currencyList => currencyList.data
);

export const currencyListErrorSelector = createSelector(
  currencyListSelector,
  currencyList => currencyList.error
);
