import { useId } from "react";
import { useState } from "react";

/**
 * The `useId` hook is a React built-in hook (introduced in React 18) that generates a unique, stable ID for each component instance.
 *
 * ## Purpose
 * - It is primarily used to associate form elements (like `<label>` and `<input>`) with unique IDs, especially in cases where multiple instances of a component may be rendered on the same page.
 * - This helps avoid ID collisions and ensures accessibility features (like screen readers) work correctly.
 *
 * ## How it works
 * - `useId` returns a string that is unique across the entire React tree.
 * - The ID remains the same across re-renders of the component.
 * - It is especially useful for server-side rendering (SSR) and hydration, as it ensures the same ID is generated on both the server and client.
 *
 * ## Usage Example
 * ```jsx
 * const id = useId();
 * <label htmlFor={id}>Email</label>
 * <input id={id} ... />
 * ```
 *
 * ## Notes
 * - Avoid hardcoding IDs when using reusable components; prefer `useId` for generating unique IDs.
 * - Do not use `useId` for keys in lists; use it only for element IDs.
 * - If you need to combine the generated ID with a prefix or suffix, you can do so: `const id = useId(); const inputId = `email-${id}`;`
 */
export function EmailForm() {
  const [email, setEmail] = useState("");
  const id = useId(); // Generate a unique ID for the input element

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

// I have multiple input elements in the form, so I need to generate a unique ID for each one.
// The `useId` hook is used to generate a unique ID for the email input element.
// pass in the Id but with a prefix to avoid conflicts with other elements in the form.
// This ensures that the `htmlFor` attribute in the label matches the `id` of the input element.
