import { createSelector } from "reselect";

// export const converterSelector = (state) => state.converter
export const currencyListSelector = state => state.currencyList;
export const currencyListIsSubscribedSelector = createSelector(
  currencyListSelector,
  currencyList => currencyList.isSubscribed
);
export const currencyListDataSelector = createSelector(
  currencyListSelector,
  currencyList => currencyList.data
);
