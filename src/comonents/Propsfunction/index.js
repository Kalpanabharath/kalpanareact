import { Component } from "react";
import Car from "../Car";
import "./index.css";

class Propsfuction extends Component {
  state = {
    carsList: [
      {
        uniqueId: 1,
        carname: "ford",
      },
      {
        uniqueId: 2,
        carname: "Tesla",
      },
    ],
    carname: "",
  };

  onClickcar = (selectedcar) => {
    console.log(selectedcar);
    this.setState({ carname: selectedcar });
  };
  render() {
    let { carsList, carname } = this.state;
    return (
      <div className="propspassfun">
        <h5>Component Props Passing Function</h5>
        {carsList.map((cardetail) => (
          <Car
            key={cardetail.uniqueId}
            carobj={cardetail}
            onClickcar={this.onClickcar}
          />
        ))}
        {carname && <p>Your Clicked Car is: {carname}</p>}
      </div>
    );
  }
}

export default Propsfuction;
