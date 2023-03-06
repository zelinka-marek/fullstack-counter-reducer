import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "inc": {
      return state + 1;
    }
    case "dec": {
      return state - 1;
    }
    case "zero": {
      return 0;
    }
    default: {
      return state;
    }
  }
}

export function App() {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <div>{state}</div>
      <div style={{ marginTop: 8, marginBottom: 8, display: "flex", gap: 6 }}>
        <button onClick={() => dispatch({ type: "inc" })} aria-label="plus">
          +
        </button>
        <button onClick={() => dispatch({ type: "dec" })} aria-label="minus">
          -
        </button>
        <button onClick={() => dispatch({ type: "zero" })} aria-label="zero">
          0
        </button>
      </div>
    </div>
  );
}
