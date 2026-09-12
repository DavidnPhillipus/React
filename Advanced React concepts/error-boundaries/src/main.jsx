import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundaries fallback={<h1>Something went wrong</h1>}>
      <App />
    </ErrorBoundaries>
  </StrictMode>

  // Notie that you could also use the ErrorBoundaries component directly in the App.jsx file for the child component,
  // but this way you can wrap the entire application with a single error boundary.
  //Note: Error boundaries sometimes do not catch errors in event handlers, async code, or server-side rendering.
);
