import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setError(undefined);
    setLoading(true);
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error?.name === "AbortError") return;
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  let jsx;
  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (data) {
    jsx = (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    );
  } else if (error) {
    jsx = <h2>Error: {error.message}</h2>;
  } else {
    jsx = <h2>No users found</h2>;
  }

  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  );
}

export default App;
