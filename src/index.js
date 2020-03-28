import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, devTools);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
