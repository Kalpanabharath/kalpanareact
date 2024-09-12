import "./index.css";
import { Component } from "react";
import Timer from "../Timer";
class Clock extends Component {
  state = { clockdisplay: false };
  ubdateclockdisplay = () => {
    this.setState((prevState) => ({ clockdisplay: !prevState.clockdisplay }));
  };
  render() {
    let { clockdisplay } = this.state;
    return (
      <div className="clockpage">
        <h1>Component Life Cylcle</h1>
        <button onClick={this.ubdateclockdisplay}>
          {clockdisplay ? "Show Clock" : "Hide Clock"}
        </button>
        {clockdisplay && <Timer />}
      </div>
    );
  }
}
export default Clock;
