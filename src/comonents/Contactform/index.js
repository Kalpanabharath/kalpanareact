import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Contactperson from "../Contactperson";
import "./index.css";
let initialContactsList = [
  {
    id: uuidv4(),
    name: "kalpana",
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "keerthana",
    mobileNo: 999998881,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Bharath",
    mobileNo: 9999988123,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "renuga",
    mobileNo: 9909988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "Eswaran",
    mobileNo: 9999981888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: "mohan",
    mobileNo: 8899988888,
    isFavorite: false,
  },
];

class Contactform extends Component {
  state = { personarray: initialContactsList, name: "", mobileNo: "" };
  ubdatefav = (id) => {
    this.setState((prevState) => {
      return {
        personarray: prevState.personarray.map((obj) => {
          if (obj.id === id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };

  nameonchange = (event) => {
    this.setState({ name: event.target.value });
  };
  numberonchange = (event) => {
    this.setState({ mobileNo: event.target.value });
  };
  formsubmite = (event) => {
    event.preventDefault();
    let { name, mobileNo } = this.state;
    let newcontact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    };
    this.setState((prevState) => ({
      personarray: [...prevState.personarray, newcontact],
      name: "",
      mobilenumber: "",
    }));
  };

  render() {
    let { personarray } = this.state;
    return (
      <div className="contactformpage">
        <h2>Contact Form</h2>
        <form className="contactform" onSubmit={this.formsubmite}>
          <input type="text" placeholder="Name" onChange={this.nameonchange} />
          <input
            type="number"
            placeholder="Mobile Number"
            onChange={this.numberonchange}
          />
          <button type="submit">Add Number</button>
        </form>
        <div className="Contactdetails">
          {personarray.map((obj) => (
            <Contactperson details={obj} isfav={this.ubdatefav} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contactform;
