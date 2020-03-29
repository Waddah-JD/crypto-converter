import React from "react";
import { useSelector } from "react-redux";

import {
  currencyListIsSubscribedSelector,
  currencyListDataSelector
} from "../selectors/currencyList";

const priceRateDirectionBackgroundColor = direction => {
  return direction === "UP" ? "green" : "red";
};

const CurrencyList = () => {
  const currencyListIsSubscribed = useSelector(
    currencyListIsSubscribedSelector
  );
  const currencyListData = useSelector(currencyListDataSelector);

  return (
    <div className="main-block">
      <h2>Currency List</h2>
      {currencyListIsSubscribed ? (
        Object.keys(currencyListData).map(i => (
          <p
            style={{
              backgroundColor: priceRateDirectionBackgroundColor(
                currencyListData[i].rate
              )
            }}
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
