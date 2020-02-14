import React from "react";
import { decrement, increment, reset } from "../../actions";
import { useCountDispatch } from "../../hooks/count-context";

function CountDispatch() {
  const dispatch = useCountDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <button type="button" onClick={handleDecrement}>
        decrement
      </button>
      <button type="button" onClick={handleReset}>
        reset
      </button>
      <button type="button" onClick={handleIncrement}>
        increment
      </button>
    </div>
  );
}

export { CountDispatch };
