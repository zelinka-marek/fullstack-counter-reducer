import { useCounter } from "./contexts/counter";

function Display() {
  const { count } = useCounter();

  return <div>{count}</div>;
}

function Counter() {
  const { increase, decrease, setToZero } = useCounter();

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <button onClick={increase} aria-label="plus">
        +
      </button>
      <button onClick={decrease} aria-label="minus">
        -
      </button>
      <button onClick={setToZero} aria-label="zero">
        0
      </button>
    </div>
  );
}

export function App() {
  return (
    <div>
      <Display />
      <div style={{ marginTop: 8, marginBottom: 8 }}>
        <Counter />
      </div>
    </div>
  );
}
