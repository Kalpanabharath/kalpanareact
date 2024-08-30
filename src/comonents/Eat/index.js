import { Component } from "react";
import Fruits from "../Fruits";
import "./index.css";

let Fruitsarray = [
  {
    name: "Mango",
    imageurl: "https://assets.ccbp.in/frontend/react-js/mango-img.png",
    unicqueNo: 1,
  },
  {
    name: "Banana",
    imageurl: "https://assets.ccbp.in/frontend/react-js/banana-img.png",
    unicqueNo: 2,
  },
];
class Eat extends Component {
  state = { mango: 0, banana: 0 };
  countincrement = (key) => {
    Fruitsarray.forEach((obj) => {
      if (obj.unicqueNo === key) {
        let fruitname = obj.name.toLowerCase(); // Convert name to lowercase to match state keys
        this.setState((prevState) => {
          return { [fruitname]: prevState[fruitname] + 1 }; // Dynamic state key update
        });
      }
    });
  };

  render() {
    let { mango, banana } = this.state;
    return (
      <div>
        <h3>
          kalpana ate {mango} Mangoes {banana} Bananaes
          <div className="fruitcontainer">
            {Fruitsarray.map((obj) => (
              <Fruits
                key={obj.unicqueNo}
                Fruitsobj={obj}
                objfun={this.countincrement}
              />
            ))}
          </div>
        </h3>
      </div>
    );
  }
}
export default Eat;
