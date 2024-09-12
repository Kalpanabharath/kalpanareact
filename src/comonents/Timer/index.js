import { Component } from "react";
import "./index.css";
class Timer extends Component {
  state = { currentTiming: new Date() };
  componentDidMount() {
    let curtime = setInterval(this.ubdatetime, 1000);
  }
  ubdatetime = () => {
    this.setState({ currentTiming: new Date() });
  };
  componentWillUnmount() {
    clearInterval(this.curtime);
  }
  render() {
    let { currentTiming } = this.state;
    return (
      <div className="clocktime">
        <p>{currentTiming.toLocaleTimeString()}</p>
      </div>
    );
  }
}
export default Timer;
