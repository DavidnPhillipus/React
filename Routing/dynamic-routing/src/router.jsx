import { createBrowserRouter } from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import { createRoutesFromElements, Route } from "react-router-dom";

import TeamMember from "./pages/TeamMember";

export const router = [
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: "joe", element: <TeamMember name="joe" /> },
          { path: "sally", element: <TeamMember name="sally" /> },
        ],
      },
    ],
  },
];

function NavLayout() {
  return (
    <>
      <Navbar />
      <h1>Hi</h1>
      <Outlet />
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context={"Hi from outlet"} />
    </>
  );
}
