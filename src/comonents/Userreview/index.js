import { Component } from "react";
import Reviewask from "../Reviewask";
import Reviewreplay from "../Reviewreplay";
import "./index.css";

class Userreview extends Component {
  state = { clicked: false };

  ubdatestate = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  render() {
    let { clicked } = this.state;
    return (
      <div>
        {clicked ? <Reviewreplay /> : <Reviewask statefun={this.ubdatestate} />}
      </div>
    );
  }
}

export default Userreview;
