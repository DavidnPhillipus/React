import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// React's StrictMode is a tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants in development mode.
// StrictMode does not render any visible UI and does not affect the production build.

// Key features of StrictMode:
// 1. Identifies components with unsafe lifecycles.
//    - For example, lifecycle methods like `componentWillMount`, `componentWillReceiveProps`,
//      and `componentWillUpdate` are flagged as unsafe because they are deprecated in newer React versions.
// 2. Warns about legacy string ref API usage.
//    - String refs (e.g., `ref="myRef"`) are considered legacy and may cause issues in future React versions.
// 3. Detects unexpected side effects.
//    - Helps identify side effects that occur during rendering, such as modifying state or DOM directly.
// 4. Ensures reusable state by checking for side effects in components.
//    - This ensures that components behave consistently when reused or re-rendered.
// 5. Logs warnings for deprecated `findDOMNode` usage.
//    - `findDOMNode` is a legacy API that is discouraged in favor of using refs directly.
// 6. Helps in identifying potential problems early during development.
//    - StrictMode encourages best practices and ensures compatibility with future React updates.

// Additional Notes:
// - StrictMode only runs in development mode and has no impact on the production build.
// - It performs checks for its descendants, meaning any component tree wrapped inside <StrictMode> will be analyzed.
// - StrictMode can be applied to specific parts of the application by wrapping only certain components.

// Example of wrapping a specific component:
// <StrictMode>
//   <SomeComponent />
// </StrictMode>

// Why use StrictMode?
// - It helps developers write better, more future-proof React code.
// - It ensures that the application adheres to React's best practices.
// - It provides warnings and feedback during development, making it easier to catch bugs early.

// In this code, StrictMode wraps the <App /> component.
// This means all components within <App /> will be checked for the above issues during development.
// It is recommended to use StrictMode to ensure code quality and compatibility with future React versions.
