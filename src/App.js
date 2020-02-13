import React from "react";
import { Provider } from "react-redux";
import { CountProvider } from "./hooks/count-context";
import CounterRedux from "./components/Counter";
import CountDispatch from "./components/CountDispatch";
import CountDisplay from "./components/CountDisplay";

import { store } from "./redux/store";

export default () => (
  <>
    <Provider store={store}>
      <CounterRedux />
    </Provider>
    <CountProvider>
      <CountDisplay />
      <CountDispatch />
    </CountProvider>
  </>
);
