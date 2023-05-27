import React, { useState, useEffect } from "react";
/*
export const Timer = () => {
  const [count, setCount] = useState(() => 10);
  
  return (
    <div>
      <h1>Time is: {count}</h1>
    </div>
  );
};
*/
export function Timer() {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter === 0 ? "Time's up!" : counter}</div>
    </div>
  );
}
