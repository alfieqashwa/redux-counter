import { combineReducers } from "redux";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const INCREMENTHOOKS = "INCREMENTHOOKS";
export const DECREMENTHOOKS = "DECREMENTHOOKS";
export const RESETHOOKS = "RESETHOOKS";

const initialState = { count: 42 };
const initialStateHooks = { count: 92 };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}

function hooksReducer(state = initialStateHooks, action) {
  switch (action.type) {
    case INCREMENTHOOKS:
      return {
        count: state.count + 1
      };
    case DECREMENTHOOKS:
      return {
        count: state.count - 1
      };
    case RESETHOOKS:
      return {
        count: 0
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer,
  hooksReducer
});

export default rootReducer;
