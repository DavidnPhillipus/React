function TodoList() {
  const todos = useLoaderData();
  const { state } = useNavigation();
  const queryRef = useRef();

  useEffect(() => {
    queryRef.current.value = quey;
  }, [query]);

  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input
              type="search"
              name="query"
              className="query"
              ref={queryRef}
            />
          </div>
          <button className="search">Search</button>
        </div>
      </Form>

      {state === "loading" ? (
        "loading"
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
