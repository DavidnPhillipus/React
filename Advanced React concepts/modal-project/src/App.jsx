export default function App() {
  const [isCustomModalOpen, setCustomModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <CustomModal
        isOpen={isCustomModalOpen}
        onClose={() => setCustomModalOpen(false)}
      >
        <div>
          <p>
            This is a <strong>CUSTOM</strong> modal.
          </p>
          <button onClick={() => setCustomModalOpen(false)}>Close</button>
        </div>
      </CustomModal>
    </div>
  );
}

// The Dialog component is a custom modal that uses React Portals to render its content outside the main app DOM hierarchy.
// It listens for the Escape key to close the modal and uses a portal to render the modal
// content into a specific DOM node (e.g., a div with id "modal-container").
//You need to do morre research on the dialog component and how it works with portals.
//It is a good example of how to create reusable modal components in React.
// The CustomModal component is a reusable modal that can be opened and closed, and it uses the createPortal function to render its content outside the main app DOM hierarchy.
// It is in the code in the video, but not in the code provided here.
