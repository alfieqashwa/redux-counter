import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../../actions";

import Button from "../Button";

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
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button disabled={count === 0} onClick={handleReset}>
        Reset
      </Button>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.reducer.count
});

const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
