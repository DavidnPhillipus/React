/**
 * Notes on useLayoutEffect in this component:
 *
 * - `useLayoutEffect` is used to synchronously run a side effect after all DOM mutations but before the browser has painted.
 * - In this component, it ensures that the popup's position is calculated and set *before* the browser paints the updated UI.
 * - This prevents visual glitches (such as flickering or incorrect positioning) that could occur if the popup's position was set after the paint.
 * - The effect depends on `isOpen`, so it runs whenever the popup is shown or hidden.
 * - It reads the button's position using `getBoundingClientRect()` and sets the popup's top position accordingly.
 * - If the button reference is not available or the popup is closed, it resets the popup's position to 0.
 * - Prefer `useLayoutEffect` over `useEffect` when you need to measure DOM elements and update layout synchronously to avoid visual inconsistencies.
 */
export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupTop, setPopupTop] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (buttonRef.current == null || !isOpen) return setPopupTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setPopupTop(bottom + 25);
  }, [isOpen]);

  // const now = performance.now();
  // while ( now > performance.now() - 100){
  // Do nothing
  // }

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)}>
        Show Popup
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${popupTop}px`,
            border: "1px solid black",
          }}
        >
          Tooltip
        </div>
      )}
    </>
  );
}
