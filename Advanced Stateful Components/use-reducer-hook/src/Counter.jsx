import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  ADD5: "add 5",
};

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.RESET:
      return 0;
    case ACTIONS.ADD5:
      return count + action.payload.value;
    default:
      throw new Error();
  }
  return count;
}

export function Counter({ intialCount = 0 }) {
  const [count, dispatch] = useReducer(reducer, intialCount);

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
      <br />
      <br />
      <button
        onClick={() => dispatch({ type: ACTIONS.ADD5, payload: { value: 5 } })}
      >
        +5
      </button>
    </>
  );
}
