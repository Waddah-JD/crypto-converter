import apply from "./converter";
import actionTypes from "../actions/actionTypes";

describe("converter reducers", () => {
  const defaultState = {
    availableCurrencies: ["BTC", "ETH", "XRP", "LTC", "BCH", "USD", "EUR"],
    fromCurrency: undefined,
    fromValue: 0,
    toCurrency: undefined,
    toValue: 0,
    rate: undefined
  };

  test("should change the rate value and convert exchange rate accordingly", () => {
    expect(
      apply(defaultState, {
        type: actionTypes.REQUEST_EXCHANGE_RATE_SUCCESS,
        rate: 3.7
      })
    ).toEqual({ ...defaultState, rate: 3.7, toValue: 0 });

    expect(
      apply(
        { ...defaultState, fromValue: 10 },
        {
          type: actionTypes.REQUEST_EXCHANGE_RATE_SUCCESS,
          rate: 66.6
        }
      )
    ).toEqual({ ...defaultState, rate: 66.6, fromValue: 10, toValue: 666 });
  });

  test("should throw an error if the rate is set to zero", () => {
    expect(() => {
      apply(defaultState, {
        type: actionTypes.REQUEST_EXCHANGE_RATE_SUCCESS,
        rate: 0
      });
    }).toThrow("Exchange rate can't be equal to 0");
  });

  test("should select a currency to convert from", () => {
    expect(
      apply(defaultState, {
        type: actionTypes.SELECT_FROM_CURRENCY,
        currency: "BTC"
      })
    ).toEqual({ ...defaultState, fromCurrency: "BTC" });
  });

  test("should select a currency to convert to", () => {
    expect(
      apply(defaultState, {
        type: actionTypes.SELECT_TO_CURRENCY,
        currency: "USD"
      })
    ).toEqual({ ...defaultState, toCurrency: "USD" });
  });

  test("should change only the FROM value if no rate is applied", () => {
    expect(
      apply(defaultState, { type: actionTypes.CHANGE_FROM_VALUE, value: 50 })
    ).toEqual({ ...defaultState, fromValue: 50 });
  });

  test("should change the FROM value and TO value if there is an already applied rate", () => {
    expect(
      apply(
        { ...defaultState, rate: 1.5 },
        { type: actionTypes.CHANGE_FROM_VALUE, value: 50 }
      )
    ).toEqual({ ...defaultState, rate: 1.5, fromValue: 50, toValue: 75 });
  });

  test("should change only the TO value if no rate is applied", () => {
    expect(
      apply(defaultState, { type: actionTypes.CHANGE_TO_VALUE, value: 50 })
    ).toEqual({ ...defaultState, toValue: 50 });
  });

  test("should change the TO value and FROM value if there is an already applied rate", () => {
    expect(
      apply(
        { ...defaultState, rate: 2.25 },
        { type: actionTypes.CHANGE_TO_VALUE, value: 225 }
      )
    ).toEqual({ ...defaultState, rate: 2.25, fromValue: 100, toValue: 225 });
  });

  //
  test("should throw an error if the rate is set to zero while setting TO value", () => {
    expect(() => {
      apply(
        { ...defaultState, rate: 0 },
        {
          type: actionTypes.CHANGE_TO_VALUE,
          value: 150
        }
      );
    }).toThrow("Exchange rate can't be equal to 0");
  });
});
