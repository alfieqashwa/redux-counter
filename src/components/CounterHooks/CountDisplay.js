import React from "react";
import { useCountState } from "../../hooks/count-context";

function CountDisplay() {
  const { count } = useCountState();
  return (
    <div>
      <h1>Counter Hooks</h1>
      <h2>Count: {count}</h2>
    </div>
  );
}

export { CountDisplay };
