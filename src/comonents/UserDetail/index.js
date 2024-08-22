import "./index.css";

let UserDetail = (props) => {
  let { user } = props;
  let { imageurl, name, role } = user;
  return (
    <li className="cardcointainer">
      <img src={imageurl} className="image" />
      <div className="text">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </li>
  );
};

export default UserDetail;
