import { useLoaderData } from "react-router-dom";
import { PostForm } from "../components/PostForm";
import { getUser } from "../api/users";
import { getPost } from "../api/posts";

function EditPost() {
  const { users } = useLoaderData();
  const errors = useActionData();
  return <>c</>;
}

async function loader({ request: { signal }, params: { postId } }) {
  const post = getPost(postId, { signal });
  const users = getUser({ signal });

  return { post: await post, users: await users };
}

async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  const errors = postFormValidator({ title, userId, body });
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const post = await updatePost(
    postId,
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
