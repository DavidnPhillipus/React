function User() {
  const { users, post, todos } = useLoaderData();

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company?.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address?.street} {user.address?.suite},{" "}
        {user.address?.city}, {user.address?.zipcode}
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {post.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

async function loader({ request: { signal }, params: { userId } }) {
  const users = getUser({ signal, params: { userId } });
  const post = await getPosts(userId, { signal });
  const todos = getTodos({ signal, params: { userId } });

  return { getUser: await users, post: await post, todos: await todos };
}

export const userRoute = {
  loader,
  element: <User />,
};
