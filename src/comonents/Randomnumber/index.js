import { Component } from "react";
import "./index.css";

class Randomnumber extends Component {
  state = {
    randomnum: 23,
  };
  generaterandomNumber = () => {
    let mathrandom = Math.round(Math.random() * 100);
    this.setState({ randomnum: mathrandom });
  };
  render() {
    let { randomnum } = this.state;
    return (
      <div className="randomcontainer">
        <h2 className="randomheading">Random Number</h2>
        <p className="randompara">
          Generate a Random Number in the Range of 0 to 100
        </p>
        <button onClick={this.generaterandomNumber}>Generate</button>
        <h2>{randomnum}</h2>
      </div>
    );
  }
}
export default Randomnumber;
