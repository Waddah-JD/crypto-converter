import apply from "./currencyList";
import actionTypes from "../actions/actionTypes";

const defaultState = { isSubscribed: false, data: {}, error: undefined };

describe("currencyList reducers", () => {
  test("should change 'isSubscried' when a subscription is successfully started", () => {
    expect(
      apply(defaultState, {
        type: actionTypes.START_WEBSOCKET_SUBSCRIPTION_SUCCESS
      })
    ).toEqual({ ...defaultState, isSubscribed: true });
  });

  test("should set an error message if the subscription has failed", () => {
    const errorMessage = "this is the error message";
    expect(
      apply(defaultState, {
        type: actionTypes.START_WEBSOCKET_SUBSCRIPTION_FAIL,
        error: errorMessage
      })
    ).toEqual({ ...defaultState, isSubscribed: false, error: errorMessage });
  });

  test("should change 'isSubscried' when a subscription is stopped", () => {
    expect(
      apply(defaultState, {
        type: actionTypes.STOP_WEBSOCKET_SUBSCRIPTION
      })
    ).toEqual({ ...defaultState, isSubscribed: false });
  });

  test.each([
    [
      { ...defaultState, data: {} },
      {
        type: actionTypes.UPDATE_CURRENCY_LIST_ITEM_PRICE,
        item: "x",
        price: 12.5
      },
      {
        ...defaultState,
        data: { x: { price: 12.5, prevPrice: undefined, rate: undefined } }
      }
    ],
    [
      {
        ...defaultState,
        data: { x: { price: 12.5, prevPrice: undefined, rate: undefined } }
      },
      {
        type: actionTypes.UPDATE_CURRENCY_LIST_ITEM_PRICE,
        item: "x",
        price: 420
      },
      {
        ...defaultState,
        data: { x: { price: 420, prevPrice: 12.5, rate: "UP" } }
      }
    ],
    [
      {
        ...defaultState,
        data: {
          x: { price: 420, prevPrice: 12.5, rate: "UP" },
          y: { price: 550, prevPrice: 33, rate: "DOWN" }
        }
      },
      {
        type: actionTypes.UPDATE_CURRENCY_LIST_ITEM_PRICE,
        item: "x",
        price: 69
      },
      {
        ...defaultState,
        data: {
          x: { price: 69, prevPrice: 420, rate: "DOWN" },
          y: { price: 550, prevPrice: 33, rate: "DOWN" }
        }
      }
    ]
  ])(
    "should change data after receiving updates",
    (state, action, expectedState) => {
      expect(apply(state, action)).toEqual(expectedState);
    }
  );
});
