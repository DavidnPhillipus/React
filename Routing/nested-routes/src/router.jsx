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
      { path: "/tests*", element: <h1>Tests</h1> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          { index: true, element: <Team /> },
          { path: ":memberId", element: <Team /> },
          { path: ":new", element: <NewTeamMember /> },
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
