import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../app/counter/CounterSlice";
import { selectCount } from "../../app/selectors/CounterSelectors";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <>
      <p>Count: {count}</p>
      <div className="counter">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
