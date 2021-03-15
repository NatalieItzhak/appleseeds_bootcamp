import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };


  return (
    <div className="cont">
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <h3>{count}</h3>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;