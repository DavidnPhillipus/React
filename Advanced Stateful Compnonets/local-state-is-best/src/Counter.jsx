export function Counter({ count, step, changeCount }) {
  // This is a controlled component
  // It receives the count and changeCount function as props
  // It uses the count prop to display the current count
  // It uses the changeCount function to update the count
  // It uses the reset function to reset the count
  // This is a controlled component

  return (
    <>
      <button aria-label={`Decrease by ${step}`} onClick={() => changeCount(-1)}>
        -
      </button>
      <output aria-live="polite">{count}</output>
      <button aria-label={`Increase by ${step}`} onClick={() => changeCount(1)}>
        +
      </button>
    </>
  );
}
