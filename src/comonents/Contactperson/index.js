import "./index.css";
let Contactperson = (props) => {
  let { details, isfav } = props;
  let { name, mobileNo, id, isFavorite } = details;
  let favclick = () => {
    isfav(id);
  };
  let imageurl = isFavorite
    ? "https://assets.ccbp.in/frontend/react-js/star-filled-img.png"
    : "https://assets.ccbp.in/frontend/react-js/star-outline-img.png";
  return (
    <div className="personcontainer">
      <p>{name}</p>
      <p>{mobileNo}</p>
      <img src={imageurl} alt="starimage" onClick={favclick} />
    </div>
  );
};
export default Contactperson;
