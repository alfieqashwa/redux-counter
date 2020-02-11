import React from "react";
import { connect } from "react-redux";

function Counter({ count, dispatch }) {
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>Counter Redux</h1>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(Counter);
