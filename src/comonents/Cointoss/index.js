import { Component } from "react";
import "./index.css";
let coinface = {
  head: "https://assets.ccbp.in/frontend/react-js/heads-img.png",
  tails: "https://assets.ccbp.in/frontend/react-js/tails-img.png",
};

class Cointoss extends Component {
  state = { face: "head", head: 0, tails: 0, count: 0 };
  toss = () => {
    let toss = ["head", "tails"];
    let randomIndex = Math.floor(Math.random() * toss.length);
    let tossResult = toss[randomIndex];
    this.setState((prevstate) => {
      return {
        face: tossResult,
        count: prevstate.count + 1,
        head: tossResult === "head" ? prevstate.head + 1 : prevstate.head,
        tails: tossResult === "tails" ? prevstate.tails + 1 : prevstate.tails,
      };
    });
  };
  render() {
    let { face, head, tails, count } = this.state;
    return (
      <div className="cointosspage">
        <h1>Coin Toss Game</h1>
        <p>Head (or) Tails</p>
        <img src={coinface[`${face}`]} alt="coinface" />
        <button onClick={this.toss}>Coin Toss</button>
        <div className="tossvalcontainer">
          <p>{`Total: ${count}`}</p>
          <p>{`Heads: ${head}`}</p>
          <p>{`Tails: ${tails}`}</p>
        </div>
      </div>
    );
  }
}
export default Cointoss;
