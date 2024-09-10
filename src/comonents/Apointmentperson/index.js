import "./index.css";

let Apointmentperson = (props) => {
  let { details, starfun } = props;
  let { personname, date, stared, id } = details;
  let starimage = stared
    ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";
  let star = () => {
    starfun(id);
  };
  return (
    <div className="apointmentlist">
      <div className="namestar">
        <p>{personname}</p>
        <img src={starimage} alt="starimg" onClick={star} />
      </div>
      <p>{date}</p>
    </div>
  );
};
export default Apointmentperson;
