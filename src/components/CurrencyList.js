import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  currencyListIsSubscribedSelector,
  currencyListDataSelector
} from "../selectors/currencyList";

import { selectToCurrency } from "../actions/converter";

const priceRateDirectionBackgroundColor = direction => {
  return direction === "UP" ? "green" : "red";
};

const CurrencyList = () => {
  const currencyListIsSubscribed = useSelector(
    currencyListIsSubscribedSelector
  );
  const currencyListData = useSelector(currencyListDataSelector);
  const dispatch = useDispatch();
  const selectToCurrencyHandler = currency =>
    dispatch(selectToCurrency(currency));

  const directionColor = i =>
    priceRateDirectionBackgroundColor(currencyListData[i].rate);

  return (
    <div className="main-block">
      <h2>Currency List</h2>
      {currencyListIsSubscribed ? (
        Object.keys(currencyListData).map(i => (
          <p
            onClick={() => {
              selectToCurrencyHandler(i);
            }}
            className={`${directionColor(i)}-bgc cursor-pointer`}
            key={i}
          >
            {i}: {currencyListData[i].price}
          </p>
        ))
      ) : (
        <p>loading ... </p>
      )}
    </div>
  );
};

export default CurrencyList;
