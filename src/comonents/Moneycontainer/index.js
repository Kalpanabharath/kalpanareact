import "./index.css";
let Moneycontainer = (props) => {
  let { details, deldetail } = props;
  let { title, amount, selectoption, id } = details;
  let delfun = () => {
    deldetail(id);
  };
  return (
    <div className="singleinfo">
      <p>{title}</p>
      <p>RS {amount}</p>
      <p>{selectoption}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delimg"
        onClick={delfun}
      />
    </div>
  );
};
export default Moneycontainer;
