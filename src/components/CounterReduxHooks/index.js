import React from "react";
import { DECREMENTHOOKS, INCREMENTHOOKS, RESETHOOKS } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment, reset } from "../../actions";

import Button from "../Button";

function CounterReduxHooks() {
  const count = useSelector(state => state.hooksReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Redux Hooks</h1>
      <h2>Counter: {count}</h2>
      <Button onClick={() => dispatch({ type: DECREMENTHOOKS })}>
        Decrement
      </Button>
      <Button
        disabled={count === 0}
        onClick={() => dispatch({ type: RESETHOOKS })}
      >
        Reset
      </Button>
      <Button onClick={() => dispatch({ type: INCREMENTHOOKS })}>
        Increment
      </Button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   count: state.count
// });

// const mapDispatchToProps = { increment, decrement, reset };

export default CounterReduxHooks;
