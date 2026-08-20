import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AccessibilityProvider } from "./context/AccessibilityContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccessibilityProvider>
      <App />
    </AccessibilityProvider>
  </StrictMode>,
);
