import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { CounterProvider } from "./contexts/counter";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
