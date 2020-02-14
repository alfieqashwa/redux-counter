import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../../actions";

function CounterRedux({ count, dispatch }) {
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
      <h1>Counter Redux</h1>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(CounterRedux);
