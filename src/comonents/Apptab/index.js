
import "./index.css";
let Apptab = (props) => {
  let { object, profun, isactive } = props;
  let { catagory, tabid } = object;
  let border = isactive ? "makeborder" : "";
  let tabclicked = () => {
    profun(tabid);
  };
  return (
    <p onClick={tabclicked} className={border}>
      {catagory}
    </p>
  );
};
export default Apptab;
