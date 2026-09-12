export function HistoryStatus({ canUndo, canRedo }) {
  if (canUndo && canRedo) return <p>History is ready in both directions.</p>;
  if (canUndo) return <p>You can undo the latest change.</p>;
  if (canRedo) return <p>You can redo the latest undone change.</p>;
  return <p>Make a change to start a history.</p>;
}
