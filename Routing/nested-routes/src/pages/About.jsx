import { useEffect } from "react";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  // The empty array ensures this effect runs only once when the component mounts
  // and cleans up when the component unmounts.
  // The cleanup function clears the timeout to prevent memory leaks.
  // This is important to avoid navigating after the component has unmounted.
  // The cleanup function is called when the component unmounts or before the effect runs again.

  return (
    <>
      <h1>About</h1>;
    </>
  );
}

//Why is the useNavigate important and its used cases
// The useNavigate hook is important because it allows you to programmatically navigate to different routes in your application.
// It is particularly useful in scenarios where you need to redirect users based on certain conditions, such as after a form submission, when a timer expires, or when an API call is successful.
// Some common use cases for useNavigate include:
// 1. Redirecting after a form submission: After a user submits a form, you can use useNavigate to redirect them to a different page, such as a success page or the home page.
// 2. Conditional navigation: You can use useNavigate to navigate to different routes based on certain conditions, such as user authentication status or the result of an API call.
// 3. Navigation after a timer: You can use useNavigate to redirect users after a certain period of time, such as showing a message for a few seconds before navigating to another page.
// 4. Navigation on button click: You can use useNavigate to navigate to different routes when a user clicks a button or link.
// 5. Navigation in response to events: You can use useNavigate to navigate to different routes in response to events, such as a user clicking a link or button, or when a certain condition is met in your application.
// 6. Navigation in effect hooks: You can use useNavigate inside effect hooks to navigate based on certain conditions or when the component mounts or unmounts.
// 7. Navigation in asynchronous operations: You can use useNavigate to navigate after an asynchronous operation, such as fetching data from an API or performing a calculation.
// 8. Navigation in response to user interactions: You can use useNavigate to navigate based on user interactions, such as clicking a button or link, or when a certain condition is met in your application.
// 9. Navigation in response to state changes: You can use useNavigate to navigate based on changes in your application's state, such as when a user logs in or out, or when a certain condition is met.
// 10. Navigation in response to route changes: You can use useNavigate to navigate based on changes in the current route, such as when a user navigates to a different page or when a certain condition is met in your application.
