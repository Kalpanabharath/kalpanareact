import { Component } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import Accountinfo from "../Accountinfo";
import Moneycontainer from "../Moneycontainer";

let accountdetails = [
  {
    imgage:
      "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",
    type: "Your Balance",
    amount: "0",
    bagroundcolor: "#84cc16",
  },
  {
    imgage:
      "https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",
    type: "Your Income",
    amount: "0",
    bagroundcolor: "#06b6d4",
  },
  {
    imgage:
      "https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",
    type: "Your Expenses",
    amount: "0",
    bagroundcolor: "#7c3aed",
  },
];

class Moneymanagement extends Component {
  state = {
    moneydetail: accountdetails,
    title: "",
    amount: "",
    selectoption: "Income",
    moneydetalarray: [],
  };

  titlestore = (event) => {
    this.setState({ title: event.target.value });
  };

  amountstore = (event) => {
    this.setState({ amount: event.target.value });
  };

  selectstore = (event) => {
    this.setState({ selectoption: event.target.value });
  };

  formsubmit = (event) => {
    event.preventDefault();
    const { title, amount, selectoption, moneydetail } = this.state;
    let ubdatemoneydetail = [...moneydetail];

    if (selectoption === "Income") {
      ubdatemoneydetail[0].amount =
        parseInt(ubdatemoneydetail[0].amount, 10) + parseInt(amount, 10);
      ubdatemoneydetail[1].amount =
        parseInt(ubdatemoneydetail[1].amount, 10) + parseInt(amount, 10);
    } else {
      ubdatemoneydetail[0].amount =
        parseInt(ubdatemoneydetail[0].amount, 10) - parseInt(amount, 10);
      ubdatemoneydetail[2].amount =
        parseInt(ubdatemoneydetail[2].amount, 10) + parseInt(amount, 10);
    }

    let moneydetalarrayobj = {
      title,
      amount,
      selectoption,
      id: uuidv4(), // Unique ID for each transaction
    };

    this.setState((prevState) => ({
      moneydetalarray: [...prevState.moneydetalarray, moneydetalarrayobj],
      title: "",
      amount: "",
      selectoption: "Income",
      moneydetail: ubdatemoneydetail,
    }));
  };

  deletefunction = (id) => {
    let { moneydetalarray, moneydetail } = this.state;
    let delobj = moneydetalarray.find((obj) => obj.id == id);
    let ubdatemoneydetail = [...moneydetail];
    if (delobj.selectoption == "Income") {
      ubdatemoneydetail[0].amount =
        parseInt(ubdatemoneydetail[0].amount) - parseInt(delobj.amount);
      ubdatemoneydetail[1].amount =
        parseInt(ubdatemoneydetail[1].amount) - parseInt(delobj.amount);
    } else {
      ubdatemoneydetail[0].amount =
        parseInt(ubdatemoneydetail[1].amount) - parseInt(delobj.amount);

      ubdatemoneydetail[2].amount =
        parseInt(ubdatemoneydetail[2].amount) - parseInt(delobj.amount);
    }
    let updatedArray = moneydetalarray.filter((obj) => obj.id !== id); // Remove the item by ID
    this.setState({
      moneydetalarray: updatedArray,
      moneydetail: ubdatemoneydetail,
    });
  };

  render() {
    let { moneydetail, moneydetalarray, title, amount, selectoption } =
      this.state;

    return (
      <div className="Moneymanagementpage">
        <div className="accountdetails">
          {moneydetail.map((obj, index) => (
            <Accountinfo key={index} details={obj} />
          ))}
        </div>

        <div className="moneyformanddetail">
          <div className="Moneyform">
            <h3>Add Transaction</h3>
            <form onSubmit={this.formsubmit}>
              <label>TITLE</label> <br />
              <input type="text" onChange={this.titlestore} value={title} />
              <br />
              <label>AMOUNT</label>
              <br />
              <input type="number" onChange={this.amountstore} value={amount} />
              <br />
              <label>TYPE</label>
              <br />
              <select onChange={this.selectstore} value={selectoption}>
                <option value="Income">INCOME</option>
                <option value="Expenses">EXPENSES</option>
              </select>
              <button type="submit">Add</button>
            </form>
          </div>

          <div className="Moneydetails">
            <h3>History</h3>
            <div className="lineone">
              <p>TITLE</p>
              <p>AMOUNT</p>
              <p>TYPE</p>
            </div>
            <div className="dynamicubdate">
              {moneydetalarray.map((obj) => (
                <Moneycontainer
                  key={obj.id}
                  details={obj}
                  deldetail={() => this.deletefunction(obj.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moneymanagement;
