import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import { Component } from "react";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/store":
      component = <Store />;
      break;
    case "/about":
      component = <About />;
      break;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      {component}
    </>
  );
}
