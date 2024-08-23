import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = { count: 0 };
  onIncrement = () => {
    console.log("clicked");
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  onReset = () => {
    this.setState({ count: 0 });
  };
  onDecrement = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="countercontainer">
        <h1>Counter</h1>
        <p>{count}</p>
        <div className="counterbtn">
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onReset}>Reset</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
