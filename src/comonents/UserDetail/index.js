import "./index.css";

import { Component } from "react";

class UserDetail extends Component {
  onDelete = () => {
    const { deleteUser, userId } = this.props;
    deleteUser(userId);
  };
  render() {
    let { user } = this.props;
    let { imageurl, name, role } = user;

    return (
      <li className="cardcointainer">
        <img src={imageurl} className="image" alt="userpicture" />
        <div className="text">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
        <button
          type="buttion"
          className="delete-buttion"
          onClick={this.onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
            alt="deleteicon"
            className="deleteicon"
          />
        </button>
      </li>
    );
  }
}

//functional component
// let UserDetail = (props) => {
//   let { user } = props;
//   let { imageurl, name, role, key } = user;
//   return (
//     <li className="cardcointainer">
//       <img src={imageurl} className="image" alt="userpicture" />
//       <div className="text">
//         <h3>{name}</h3>
//         <p>{role}</p>
//       </div>
//     </li>
//   );
// };

export default UserDetail;
