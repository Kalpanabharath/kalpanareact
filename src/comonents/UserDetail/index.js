import "./index.css";

import { Component } from "react";

class UserDetail extends Component {
  render() {
    let { user } = this.props;
    let { imageurl, name, role, key } = user;

    return (
      <li className="cardcointainer">
        <img src={imageurl} className="image" alt="userpicture" />
        <div className="text">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
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
