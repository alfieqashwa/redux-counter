import React from "react";
import { decrement, increment, reset } from "../../actions";
import { useCountDispatch } from "../../hooks/count-context";

import Button from "../Button";

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
      <Button onClick={handleDecrement}>decrement</Button>
      <Button onClick={handleReset}>reset</Button>
      <Button onClick={handleIncrement}>increment</Button>
    </div>
  );
}

export { CountDispatch };
