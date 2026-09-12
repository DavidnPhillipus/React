import { FormGroup } from "./components/FormGroup";
import { Form, useNavigation } from "react-router-dom";
import React from "react";

export function PostForm({
  users,
  isSubmitting,
  errors = {},
  defultValues = {},
}) {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  return (
    <Form method="post" action="/posts/new" className="form">
      <div className="form-row">
        <FormGroup errorMessage={errors.title} className="form-group error">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={defultValues.title}
          />
          <div className="error-message">Required</div>
        </FormGroup>
        <FormGroup errorMessage={errors.userId} className="form-group">
          <label htmlFor="userId">Author </label>
          <select name="userId" id="userId" defaultValue={defultValues.userId}>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
      <div className="form-row">
        <FormGroup errorMessage={errors.body} className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            defaultValue={defultValues.body}
          ></textarea>
        </FormGroup>
      </div>
      <div className="form-row form-btn-row">
        <Link className="btn btn-outline" to="..">
          Cancel
        </Link>
        <button disabled={isSubmitting} className="btn">
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export function postFormValidator({ title, body, userId }) {
  const errors = {};

  if (!title || title.trim() === "") {
    errors.title = "Title is required";
  }
  if (!body || body.trim() === "") {
    errors.body = "Body is required";
  }
  if (!userId || userId.trim() === "") {
    errors.userId = "Author is required";
  }

  return errors;
}
