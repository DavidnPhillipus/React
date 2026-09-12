export function TodoItem({ completed, tittle, id }) {
  return (
    <>
      <li key={todo.id} className={completed ? "strike-through" : undefined}>
        {todo.title}
      </li>
    </>
  );
}
