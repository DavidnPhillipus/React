import Child from "./Child";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <h1 className={`${styles.header}  ${styles.header - lighter}`}>Parent</h1>
      <Child />
    </>
  );
}
