import { createContext, useContext, useMemo, useReducer } from "react";

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

export const CounterContext = createContext(undefined);

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Errrr("<CounterProvider /> missing");
  }

  return context;
}

export function CounterProvider(props) {
  const { children } = props;

  const [count, dispatch] = useReducer(counterReducer, 0);

  const increase = () => dispatch({ type: "inc" });
  const decrease = () => dispatch({ type: "dec" });
  const setToZero = () => dispatch({ type: "zero" });

  const value = useMemo(
    () => ({ count, increase, decrease, setToZero }),
    [count]
  );

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}
