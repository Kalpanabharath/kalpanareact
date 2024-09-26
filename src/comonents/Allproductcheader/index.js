import "./index.css";
import { BsFilterLeft } from "react-icons/bs";
let Allproductcheader = (props) => {
  let { shortoption, activeOptionId, updateActiveOptionId } = props;
  let onChangeSortby = (event) => {
    updateActiveOptionId(event.target.value);
  };
  return (
    <div>
      <h2>All Product </h2>
      <div className="sortcontainer">
        <BsFilterLeft />
        <h4>Sort By</h4>

        <select value={activeOptionId} onChange={onChangeSortby}>
          {shortoption.map((eachOption) => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displaytext}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Allproductcheader;
