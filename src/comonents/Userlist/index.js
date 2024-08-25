import { Component } from "react";
import UserDetail from "../UserDetail";
import "./index.css";
let userarray = [
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "kalpana",
    role: "Frontend Developer",
    no: 1,
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "keerthana",
    role: "Frontend Developer",
    no: 2,
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Bharath",
    role: "Aplication Engineer",
    no: 3,
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Mohan",
    role: "Devops Engineer",
    no: 4,
  },
];
class Userlist extends Component {
  state = {
    searchInput: "",
    userDetailsList: userarray,
  };
  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  deleteUser = (userId) => {
    let { userDetailsList } = this.state;
    let filterUsersData = userDetailsList.filter((each) => each.no !== userId);
    console.log(filterUsersData);
    this.setState({ userDetailsList: filterUsersData });
  };

  render() {
    let { searchInput, userDetailsList } = this.state;
    let searchResults = userDetailsList.filter((eachitem) =>
      eachitem.name.includes(searchInput)
    );
    return (
      <div className="usedetail">
        <h1>User List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul>
          {searchResults.map((call) => (
            <UserDetail
              user={call}
              userId={call.no}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Userlist;
