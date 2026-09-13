import { use } from "react";
import { forwardRef, useImperativeHandle } from "react";

/**
 * useImperativeHandle is a React hook that customizes the instance value that is exposed to parent components when using refs.
 *
 * In this component, useImperativeHandle is used to expose a `focus` method to parent components, allowing them to programmatically
 * focus the input element by calling `ref.current.focus()`. This is useful when you want to control a child component's internal
 * behavior (like focusing an input) from a parent component, without exposing the entire DOM node.
 *
 * @see https://react.dev/reference/react/useImperativeHandle
 *
 * @param {React.Ref} ref - The forwarded ref from the parent component.
 * @param {Function} createHandle - A function that returns an object containing the imperative methods (e.g., focus).
 * @param {Array} [deps] - Optional array of dependencies for memoizing the handle object.
 *
 * Note:
 * - useImperativeHandle should be used together with React.forwardRef.
 * - Only the methods and properties returned from useImperativeHandle will be accessible via the ref in the parent.
 * - This pattern helps encapsulate component logic and prevents exposing the entire DOM node or component instance.
 */
function Input(props, ref) {
  useImperativeHandle(ref, () => ({
    focus: () => {
      if (ref.current) {
        ref.current.focus();
      }
    },
    // You can add more methods here if needed
  }));
  return <input {...props} ref={ref} />;
}

export default forwardRef(Input);
