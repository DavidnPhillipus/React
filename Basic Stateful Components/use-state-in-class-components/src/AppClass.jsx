export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kyle",
    };
  }
  render() {
    // function handleClick() {
    //   this.setState({ name: "John" });
    // }
    // // The above function will not work because `this` is not bound to the class instance.
    // // To fix this, we can use an arrow function or bind the function to the class instance.
    // const handleClick = () => {
    //   this.setState({ name: "John" });
    // };

    return (
      <h1 onClick={() => this.setState({ name: "Sally" })}>
        {this.state.name}
      </h1>
    );
  }
}
