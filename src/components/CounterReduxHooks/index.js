import React from "react";
import { DECREMENT, INCREMENT, RESET } from "../../reducers";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment, reset } from "../../actions";

function CounterReduxHooks() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter Redux Hooks</h1>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={() => dispatch({ type: DECREMENT })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: RESET })}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch({ type: INCREMENT })}>
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
