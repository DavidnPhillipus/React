/**
 * App Component
 *
 * This component demonstrates the concept of one-way data flow in React.
 * One-way data flow means that data flows in a single direction, from parent to child components.
 * In this example, the `App` component manages the state of the application and passes data
 * and functions as props to child components (`TodoItem`).
 *
 * Key Concepts:
 *
 * 1. **State Management**:
 *    - The `App` component uses the `useState` hook to manage two pieces of state:
 *      - `newTodoName`: Tracks the value of the input field for creating a new todo.
 *      - `todos`: An array of todo objects, each containing `name`, `completed`, and `id`.
 *    - The state is updated using the `setNewTodoName` and `setTodos` functions.
 *
 * 2. **Adding a New Todo**:
 *    - The `addNewTodo` function is triggered when the form is submitted.
 *    - It prevents the default form submission behavior, checks if the input is empty,
 *      and updates the `todos` state by appending a new todo object.
 *    - After adding the new todo, the input field is cleared by resetting `newTodoName`.
 *
 * 3. **Updating a Todo (One-Way Data Flow)**:
 *    - The `toggleTodo` function is used to update the `completed` status of a todo.
 *    - It receives the `todoId` and the new `completed` value as arguments.
 *    - The `todos` state is updated by mapping over the current todos and modifying
 *      the matching todo object. The updated state is then passed down to the child components.
 *
 * 4. **Deleting a Todo**:
 *    - The `deleteTodo` function removes a todo from the `todos` state.
 *    - It filters out the todo with the matching `todoId` and updates the state.
 *
 * 5. **Rendering and Prop Passing**:
 *    - The `App` component renders a list of `TodoItem` components by mapping over the `todos` array.
 *    - Each `TodoItem` receives its data (`name`, `completed`, `id`) and functions (`toggleTodo`, `deleteTodo`) as props.
 *    - This demonstrates one-way data flow: the parent (`App`) passes data and functions to the child (`TodoItem`),
 *      and the child communicates changes back to the parent via the provided functions.
 *
 * 6. **Form Handling**:
 *    - The form uses the `onSubmit` event to trigger the `addNewTodo` function.
 *    - The input field uses the `onChange` event to update the `newTodoName` state.
 *    - This ensures that the input field is controlled by React, maintaining a single source of truth.
 *
 * Summary:
 * - The `App` component is the central hub for managing state and logic.
 * - Data flows from the `App` component to the `TodoItem` components via props.
 * - Changes in the child components are communicated back to the parent via callback functions.
 * - This unidirectional flow of data ensures predictable and maintainable state management.
 */
import { useState } from "react";
import "./styles.css";
import { TodoItem } from "./TodoItem";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  function addNewTodo() {
    e.preventDefault();
    // Prevent the form from submitting
    // and refreshing the page
    if (newTodoName === "") return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };

        return todo;
      });
    });
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>

      <form onSubmit={addNewTodo} id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
}

export default App;
