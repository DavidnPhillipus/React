import { use } from "react";
import { createPortal } from "react-dom";

function CustomModal({ isOpen, onClose, children }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div class={`modal-overlay ${isOpen && "show"}`}>
      <div class="modal">{children}</div>
    </div>,
    document.getElementById("#modal-conainer")
  );
}
