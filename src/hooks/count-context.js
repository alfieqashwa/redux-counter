import React, { createContext, useContext } from "react";
import rootReducer from "../reducer";

export const CountStateContext = createContext();
export const CountDispatchContext = createContext();

function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(rootReducer, { count: 24 });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

function useCountState() {
  const context = useContext(CountStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}

function useCountDispatch() {
  const context = useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
}

export { CountProvider, useCountState, useCountDispatch };
