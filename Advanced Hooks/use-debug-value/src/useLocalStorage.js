import { use } from "react";
import { useEffect, useState } from "react";

/**
 * Custom React hook that synchronizes a stateful value with localStorage.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {any|Function} initialValue - The initial value to use if there is nothing in localStorage.
 *        If a function is provided, it will be called to get the initial value.
 * @returns {[any, Function]} An array containing the current value and a setter function.
 *
 * @example
 * const [name, setName] = useLocalStorage('name', 'Guest');
 *
 * // name will be initialized from localStorage if available, otherwise 'Guest'
 * // setName will update both state and localStorage
 *
 * @note
 * This hook uses `useDebugValue` to provide debugging information in React DevTools.
 * `useDebugValue` is a React Hook that lets you display a label for custom hooks in React DevTools.
 * By default, it shows the value, but you can also pass a formatting function for more meaningful output.
 * In this hook, both the `key` and `value` are exposed to DevTools for easier debugging.
 * You can customize the debug output by passing a formatter function to `useDebugValue`, for example:
 *   useDebugValue(key, key => `Key: ${key}`);
 *   useDebugValue(value, value => `Value: ${value}`);
 * This makes it easier to inspect the state managed by your custom hook during development.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue === null) {
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(localValue);
    }
  });

  useDebugValue(value);
  useDebugValue(key);

  //You could also use it as function
  // useDebugValue(key, (key) => `Key: ${key}`);
  // useDebugValue(value, (value) => `Value: ${value}`);
  //The advantage of using useDebugValue with a function is that it allows you to format the value in a way that is more meaningful for debugging purposes.
  //For example, you could format the value as a string or an object, or even add additional information such as the type of the value.
  //This can make it easier to understand the value when debugging your application.

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);
  return [value, setValue];
}
