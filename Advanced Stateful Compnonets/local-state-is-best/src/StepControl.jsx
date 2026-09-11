export function StepControl({ step, setStep }) {
  return (
    <label className="step-control">
      Step size
      <input
        min="1"
        type="number"
        value={step}
        onChange={(event) => setStep(Math.max(1, Number(event.target.value)))}
      />
    </label>
  );
}