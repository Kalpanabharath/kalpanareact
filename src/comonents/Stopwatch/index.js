import { Component } from "react";
import "./index.css";

class Stopwatch extends Component {
  state = { minute: 0, seconds: 0 };

  // Start Timer and assign intervalId
  startonclick = () => {
    if (!this.intervalId) {
      // Check if intervalId exists to prevent multiple intervals
      this.intervalId = setInterval(this.startTimer, 1000); // 1000ms = 1 second
    }
  };

  // Timer logic to update seconds and minute
  startTimer = () => {
    this.setState((prevState) => {
      const { seconds, minute } = prevState;
      if (seconds === 59) {
        return { seconds: 0, minute: minute + 1 }; // Increment minute when seconds reach 60
      } else {
        return { seconds: seconds + 1 };
      }
    });
  };

  // Stop Timer by clearing interval
  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null; // Clear the intervalId to allow restarting
    }
  };

  // Reset Timer and clear interval
  resetTimer = () => {
    this.setState({ minute: 0, seconds: 0 });
    this.stopTimer(); // Stop and reset
  };

  render() {
    const { seconds, minute } = this.state;
    return (
      <div className="Stopwatchpage">
        <h3>Stopwatch</h3>
        <div className="coundowncontainer">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="watchimage"
            />
            <p>Timer</p>
          </div>
          <div className="timer">
            <span className="minute">{minute}</span>:
            <span className="seconds">{seconds}</span>
          </div>
          <div className="stopwatchbuttons">
            <p onClick={this.startonclick}>Start</p>
            <p onClick={this.stopTimer}>Stop</p>
            <p onClick={this.resetTimer}>Reset</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
