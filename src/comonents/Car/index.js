import "./index.css";
let Car = (props) => {
  let { onClickcar, carobj } = props;
  let onClickButtion = () => {
    onClickcar(carobj.carname);
  };
  return (
    <button className="carbuttion" onClick={onClickButtion}>
      {carobj.carname}
    </button>
  );
};
export default Car;
