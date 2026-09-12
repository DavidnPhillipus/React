import axios from "axios";

function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`/posts/=${post.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const postsListRoute = {
  loader,
  element: <PostsList />,
};
