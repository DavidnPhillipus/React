export function HistoryControls({ canUndo, canRedo, undo, redo }) {
  return (
    <div className="history-controls">
      <button disabled={!canUndo} onClick={undo}>
        Undo
      </button>
      <button disabled={!canRedo} onClick={redo}>
        Redo
      </button>
    </div>
  );
}
