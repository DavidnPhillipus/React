/**
 * App component demonstrates how to use React Portals to render
 * a modal-like alert message outside the main DOM hierarchy.
 */
export default function App() {
  // State to control whether the AlertMessage modal is open or closed.
  // useState returns the current state (isOpen) and a function to update it (setIsOpen).
  // When isOpen is true, the AlertMessage portal/modal is shown.
  // This demonstrates how React state can be used to control the visibility of UI elements,
  // especially when working with portals for overlays, modals, or tooltips.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>App Content</h1>
      <button onClick={() => setIsOpen(true)}>Show Message</button>
      {/* AlertMessage is rendered as a portal when isOpen is true */}
      <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Secret Message
        <br />
        Click to Close
      </AlertMessage>
    </div>
  );
}

/**
 * AlertMessage uses React Portal to render its children into
 * a DOM node outside the root app element. This is useful for
 * modals, tooltips, and overlays.
 */
function AlertMessage({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Ensure the portal root exists in the HTML (e.g., <div id="portal-root"></div>)
  return ReactDOM.createPortal(
    <div className="alert-message" style={styles.overlay}>
      <div className="alert-content" style={styles.content}>
        <p>{children}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

// Simple inline styles for demonstration
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
};
