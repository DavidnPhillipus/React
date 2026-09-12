import {
  useLoaderData,
  Form,
  redirect,
  useNavigate,
  useActionData,
} from "react-router-dom";
import { PostForm, postFormValidator } from "../components/PostForm";
import { getUser } from "../api/users";
import { createPost } from "../api/posts";
import { PostForm } from "../components/PostForm";

function NewPost() {
  const users = useLoaderData();
  const { state } = useNavigate();
  const errors = useActionData();

  return (
    <>
      <h1 className="page-title">New Post</h1>
      <PostForm users={users} />
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, userId, body });
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

function loader({ request: { signal } }) {
  return getUser({ signal });
}

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
};
