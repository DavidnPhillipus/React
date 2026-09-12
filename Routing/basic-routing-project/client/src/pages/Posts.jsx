import React from "react";
import { useLoaderData } from "react-router-dom";
import { getComments, getPosts, getUser } from "../api/posts";

function Posts() {
  const { comments, post, user } = useLoaderData();

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <div>{post.body}</div>

      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div className="card" key={comment.id}>
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal }, params: { postId } }) {
  const comments = getComments(postId, { signal });
  const post = await getPosts(postId, { signal });
  const user = getUser(post.userId, { signal });

  return { comments: await comments, post, user: await user };
}

export const postsRoute = {
  loader,
  element: <Posts />,
};
