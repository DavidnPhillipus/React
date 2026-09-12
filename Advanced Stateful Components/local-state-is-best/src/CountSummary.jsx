export function CountSummary({ count, past, future }) {
  return (
    <dl className="summary">
      <div>
        <dt>Current</dt>
        <dd>{count}</dd>
      </div>
      <div>
        <dt>Changes</dt>
        <dd>{past.length}</dd>
      </div>
      <div>
        <dt>Redoable</dt>
        <dd>{future.length}</dd>
      </div>
    </dl>
  );
}
