import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CounterApp from "./Counter.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
