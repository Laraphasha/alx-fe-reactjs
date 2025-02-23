import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  let countPlus = count + 1;
  let countMinus = count - 1;

  return (
    <counter style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
      <div>
        <button onClick={() => {setCount(countPlus)}}>
          Increment
        </button>
        <button onClick={() => {setCount(countMinus)}}>
          Decrement
        </button>
        <button onClick={() => {setCount(0)}}>
          Reset
        </button>
      </div>  
      <p>{count}</p>
    </counter>
  );
}

export default Counter;