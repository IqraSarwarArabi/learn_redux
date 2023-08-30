import React from "react";
import "./Counter.css";

const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <>
      <p>Count: {count}</p>
      <div className="counter">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default CounterComponent;
