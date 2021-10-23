import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      counter
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Counter;
