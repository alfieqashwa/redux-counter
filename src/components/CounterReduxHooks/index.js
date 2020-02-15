import React from "react";
import { DECREMENTHOOKS, INCREMENTHOOKS, RESETHOOKS } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment, reset } from "../../actions";

function CounterReduxHooks() {
  const count = useSelector(state => state.hooksReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Redux Hooks</h1>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={() => dispatch({ type: DECREMENTHOOKS })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: RESETHOOKS })}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch({ type: INCREMENTHOOKS })}>
        Increment
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   count: state.count
// });

// const mapDispatchToProps = { increment, decrement, reset };

export default CounterReduxHooks;
