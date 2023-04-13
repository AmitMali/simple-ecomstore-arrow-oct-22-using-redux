import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(0);
  console.log(count);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(countMinus({ inputValue }))}> -</button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(countPlus({ inputValue }))}> +</button>
      </div>
      <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="number"
          className="form-input"
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default Counter;
