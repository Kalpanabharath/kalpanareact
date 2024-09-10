import "./index.css";
let Accountinfo = (props) => {
  let { details } = props;
  let { imgage, type, amount, bagroundcolor } = details;
  return (
    <div className="userdetail" style={{ backgroundColor: bagroundcolor }}>
      <div className="userdetainimage">
        <img src={imgage} alt="moneyimg" />
      </div>
      <div className="textdetails">
        <p>{type}</p>
        <p>`RS ${amount}`</p>
      </div>
    </div>
  );
};
export default Accountinfo;
