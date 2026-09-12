import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { postsListRoute } from "./pages/PostsList";
import { usersListRoute } from "./pages/UserList";
import { todoListRoute } from "./pages/TodoList";
import { postsRoute } from "./pages/Posts";
import { userRoute } from "./pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              { index: true, ...postsListRoute },
              { path: "postId", ...postsRoute },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...usersListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todo", ...todoListRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = userRouteError();
  return (
    <div>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE === "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </div>
  );
}
