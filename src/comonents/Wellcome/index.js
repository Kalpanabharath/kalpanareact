import { Component } from "react";
import "./index.css";

class Wellcome extends Component {
  state = { isLogedIn: true };

  render() {
    let { isLogedIn } = this.state;

    return (
      <div className="wellcomecontainer">
        <h3>Hello Kalpana</h3>
        {isLogedIn && <button>Logout</button>}
        {!isLogedIn && <button>LogIn</button>}
      </div>
    );
  }
}
export default Wellcome;
