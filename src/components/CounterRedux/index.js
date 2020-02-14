import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../../actions";

function CounterRedux({ count, decrement, increment, reset }) {
  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleReset = () => {
    reset();
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

const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
