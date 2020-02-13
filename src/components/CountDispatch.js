import React from "react";
import { INCREMENT, DECREMENT, RESET } from "../reducer";
import { useCountDispatch } from "../hooks/count-context";

function CountDispatch() {
  const dispatch = useCountDispatch();

  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };
  const reset = () => {
    dispatch({ type: RESET });
  };
  return (
    <div>
      <button type="button" onClick={decrement}>
        decrement
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
      <button type="button" onClick={increment}>
        increment
      </button>
    </div>
  );
}

export default CountDispatch;
