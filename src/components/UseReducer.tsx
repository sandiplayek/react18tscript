import { error } from "console";
import React, { useReducer } from "react";
interface Statee {
  count: number;
  error: string | null;
}
interface Action {
  type: "increment" | "decrement";
}
function reducer(state: Statee, action: Action) {
  const { type } = action;
  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : "",
      };
    }
    case "decrement":
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : "",
      };

    default:
      return state;
  }
}

const UseReducer = () => {
  const [stateReducer, dispatchh] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div style={{ border: "1px solid green" }}>
      <div>Use reducer Hook used {stateReducer.count} </div>
      {stateReducer.error && (
        <div style={{ border: "2px solid red" }}>{stateReducer.error}</div>
      )}
      <button onClick={() => dispatchh({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatchh({ type: "decrement" })}>
        decrement
      </button>
    </div>
  );
};

export default UseReducer;
