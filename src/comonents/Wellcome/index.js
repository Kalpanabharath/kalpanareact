import { Component } from "react";
import "./index.css";

class Wellcome extends Component {
  state = { isLogedIn: false };

  authobuttion = () => {
    let { isLogedIn } = this.state;
    if (isLogedIn === true) {
      return <button> Logout</button>;
    }
    return <button>log In</button>;
  };

  render() {
    return (
      <div className="wellcomecontainer">
        <h3>Hello Kalpana</h3>
        {this.authobuttion()}
      </div>
    );
  }
}
export default Wellcome;
