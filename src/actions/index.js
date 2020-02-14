import { DECREMENT, INCREMENT, RESET } from "../reducers";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
