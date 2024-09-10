import { Component } from "react";
import "./index.css";
import Accountinfo from "../Accountinfo";
import "./index.css";
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
      "https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png ",
    type: "Your Income",
    amount: "0",
    bagroundcolor: "#06b6d4",
  },
  {
    imgage:
      "https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",
    type: "Your expenses",
    amount: "0",
    bagroundcolor: "#7c3aed",
  },
];
class Moneymanagement extends Component {
  render() {
    return (
      <div className="Moneymanagementpage">
        <div className="accountdetails">
          {accountdetails.map((obj) => (
            <Accountinfo details={obj} />
          ))}
        </div>

        <div className="moneyformanddetail">
          <div className="Moneyform">
            <h3>Add Transaction</h3>
            <form>
              <label>TITLE</label> <br />
              <input type="text" />
              <br />
              <label>AMOUNT</label>
              <br />
              <input type="text" />
              <br />
              <label>TYPE</label>
              <br />
              <select>
                <option value="option1">INCOME</option>
                <option value="option2">EXPENSES</option>
              </select>
              <button>Add</button>
            </form>
          </div>
          <div className="Moneydetails">
            <h3>History</h3>
            <div className="lineone">
              <p>TITLE</p>
              <p>AMOUNT</p>
              <p>TYPE</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Moneymanagement;
