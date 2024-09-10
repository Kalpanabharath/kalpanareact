import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import Apointmentperson from "../Apointmentperson";
class Appoinment extends Component {
  state = { appointmentlist: [], personname: "", date: "" };
  ubdatename = (event) => {
    this.setState({ personname: event.target.value });
  };
  ubdatedate = (event) => {
    this.setState({ date: event.target.value });
  };
  formsubmit = (event) => {
    let { date, personname } = this.state;
    event.preventDefault();
    let personobj = {
      personname,
      date,
      stared: false,
      id: uuidv4(),
    };
    this.setState((prevState) => ({
      appointmentlist: [...prevState.appointmentlist, personobj],
      date: "",
      personname: "",
    }));
  };

  starubdate = (id) => {
    this.setState((prevState) => ({
      appointmentlist: prevState.appointmentlist.map((obj) => {
        if (obj.id === id) {
          return { ...obj, stared: !obj.stared }; // Toggling the stared status
        } else {
          return obj; // Return the object as is if the id doesn't match
        }
      }),
    }));
  };

  render() {
    let { appointmentlist } = this.state;
    return (
      <div className="appoinmentpage">
        <div className="Appoinmentinputimage">
          <div className="appointmenttaxt">
            <h1>Appointment</h1>
            <form onSubmit={this.formsubmit}>
              <label>Title</label> <br />
              <input
                type="text"
                onChange={this.ubdatename}
                value={this.state.personname}
              />{" "}
              <br />
              <label>Date</label>
              <br />
              <input
                type="datetime-local"
                onChange={this.ubdatedate}
                value={this.state.date}
              ></input>
              <br />
              <button>Add</button>
            </form>
          </div>
          <div className="apponintmentimage">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointementimage"
            />
          </div>
        </div>
        <div className="harizondalline">
          <hr className="harizontalline" />
        </div>
        <div className="appointmentstared">
          <h2>Appointment</h2>
          <p>stared</p>
        </div>
        <div className="appointmentcontainer">
          {appointmentlist.map((obj) => (
            <Apointmentperson details={obj} starfun={this.starubdate} />
          ))}
        </div>
      </div>
    );
  }
}
export default Appoinment;
