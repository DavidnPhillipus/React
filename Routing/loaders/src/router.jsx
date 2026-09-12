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
        loader: ({ res: { signal } }) => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
        children: [
          { index: true, element: <Team /> },
          {
            path: ":memberId",
            loader: ({ params, request: { signal } }) => {
              return fetch(
                `https://jsonplaceholder.typicode.com/users/${params.memberId}`,
                { signal }
              ).then((res) => {
                if (res.ok) return res.json();
                throw redirect("/team");
              });
            },
            element: <TeamMember />,
          },
          { path: "new", element: <TeamMember /> },
        ],
      },
    ],
  },
];

function NavLayout() {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      {state === "loading" ? <h1>Loading...</h1> : <Outlet />}
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
