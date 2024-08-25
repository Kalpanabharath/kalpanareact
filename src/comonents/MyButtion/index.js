import { Component } from "react";
import NameButtion from "../NameButtion";
import "./index.css";

let buttonArray = [
  { username: "kalpana", UniqueNo: 1 },
  { username: "keerthana", UniqueNo: 2 },
  { username: "Renuga", UniqueNo: 3 },
  { username: "Eswaran", UniqueNo: 4 },
  { username: "sathya", UniqueNo: 5 },
  { username: "bharath", UniqueNo: 6 },
  { username: "mohan", UniqueNo: 7 },
];

class MyButtion extends Component {
  state = { paraEl: "" };

  buttionClicked = (name) => {
    console.log(name);
    this.setState({ paraEl: name });
  };

  render() {
    let { paraEl } = this.state;
    return (
      <div className="buttionContainer">
        <h3>Who are you</h3>
        <div className="onlybuttion">
          {buttonArray.map((obj) => (
            <NameButtion object={obj} buttionClicked={this.buttionClicked} />
          ))}
        </div>
        {paraEl && <p>Well Come {paraEl}</p>}
      </div>
    );
  }
}

export default MyButtion;
