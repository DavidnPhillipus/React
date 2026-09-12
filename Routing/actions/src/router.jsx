import { createBrowserRouter } from "react-router-dom";
import { todoListRoute } from "./pages/TodoList";

export const router = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,
    loader: ({ request: { signal, url } }) => {
      const searchParams = new URL(url).searchParams;
      const query = searchParams.get("query") || "";
      return fetch(`localhost:3000/todos?q=${query}`, { signal });
    },
  },
  {
    path: "new",
    element: <NewTodo />,
    action: async ({ request: { signal } }) => {
      const formData = await request.formData();
      const title = formData.get("title");

      if (title === "") {
        return "Title is required";
      }

      const todo = await fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({ title, completed: false }),
        headers: {
          "Content-Type": "application/json",
        },
        signal,
      }).then((res) => res.json());

      return redirect("/");
    },
  },
]);
