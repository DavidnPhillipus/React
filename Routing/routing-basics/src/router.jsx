import { createBrowserRouter } from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import { createRoutesFromElements, Route } from "react-router-dom";
export const router = [
  { path: "/", element: <Home /> },
  { path: "/store", element: <Store /> },
  { path: "/about", element: <About /> },
];
// Alternative using createRoutesFromElements and Route

// Example usage:
// const router = createRoutesFromElements(
//   <>
//     <Route path="/" element={<Home />} />
//     <Route path="/store" element={<Store />} />
//     <Route path="/about" element={<About />} />
//   </>
// );
