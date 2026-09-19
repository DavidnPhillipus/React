import PropTypes from "prop-types";

export function Child({ name, age, children }) {
  return (
    <div>
      <strong>Name:</strong>
      {name}
      <br />
      <strong>Age (in 10 years)</strong>
      {age + 10}
      <br />
      <p>Children:</p>
    </div>
  );
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  children: PropTypes.node,
};
