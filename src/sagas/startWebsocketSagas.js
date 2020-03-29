import { call, take, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";

import {
  startWebsocketSubscriptionSuccess,
  startWebsocketSubscriptionFail,
  stopWebsocketSubscription,
  updateCurrencyListItemPrice
} from "../actions/currencyList";

function websocketInitChannel() {
  return eventChannel(emitter => {
    const ccStreamer = new WebSocket(
      `wss://streamer.cryptocompare.com/v2?api_key=${process.env.REACT_APP_CRYPTOCOMPAREAPI_KEY}`
    );

    ccStreamer.onopen = () => {
      const subRequest = {
        action: "SubAdd",
        subs: [
          "0~Coinbase~BTC~USD",
          "0~Coinbase~ETH~USD",
          "0~Coinbase~XRP~USD",
          "0~Coinbase~LTC~USD",
          "0~Coinbase~BCH~USD"
        ]
      };
      ccStreamer.send(JSON.stringify(subRequest));
      return emitter(startWebsocketSubscriptionSuccess());
    };

    ccStreamer.onerror = error => {
      console.log("WebSocket error " + error);
      console.dir(error);
      return emitter(startWebsocketSubscriptionFail(error));
    };

    ccStreamer.onmessage = event => {
      if (event.type === "error") {
        // TODO : what to do?
        console.log("oooooops", event.error);
      } else {
        const parsedEventData = JSON.parse(event.data);
        if (parsedEventData.TYPE === "0") {
          return emitter(
            updateCurrencyListItemPrice(parsedEventData.FSYM, parsedEventData.P)
          );
        }
        //  else if (parsedEventData.TYPE === "16") {
        //   console.log("MESSAGE: ", parsedEventData);
        // } else {
        //   console.log("NO IDEA: ", parsedEventData);
        // }
      }
    };

    ccStreamer.onclose = () => {
      return emitter(stopWebsocketSubscription());
    };

    return () => {
      // REQUIRED
    };
  });
}

export default function* startWebsocketSagas() {
  const channel = yield call(websocketInitChannel);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}
