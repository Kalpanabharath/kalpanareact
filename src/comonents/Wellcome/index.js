import { Component } from "react";
import "./index.css";

class Wellcome extends Component {
  state = { isLogedIn: true };

  render() {
    let { isLogedIn } = this.state;
    let authbuttion;
    if (isLogedIn === true) {
      authbuttion = <button>Logout</button>;
    } else {
      authbuttion = <button>LogIn</button>;
    }

    return (
      <div className="wellcomecontainer">
        <h3>Hello Kalpana</h3>
        {authbuttion}
      </div>
    );
  }
}
export default Wellcome;
