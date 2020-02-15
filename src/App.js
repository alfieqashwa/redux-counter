import React from "react";
import { Provider } from "react-redux";
import { CountProvider } from "./hooks/count-context";
import CounterRedux from "./components/CounterRedux";
import CounterReduxHooks from "./components/CounterReduxHooks";
import { CountDispatch, CountDisplay } from "./components/CounterHooks";

import { store } from "./redux/store";

export default () => (
  <div style={{ textAlign: "center" }}>
    <Provider store={store}>
      <CounterRedux />
      <hr />
      <CounterReduxHooks />
    </Provider>
    <br />
    <CountProvider>
      <CountDisplay />
      <CountDispatch />
    </CountProvider>
  </div>
);
