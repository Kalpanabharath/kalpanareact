import "./index.css";
import { FaSearch } from "react-icons/fa";

let Allproductfilter = (props) => {
  let { inputubdate, inputval, gategory, ubdatecategory } = props;

  // Handle search input change
  let sendinput = (event) => {
    inputubdate(event.target.data);
  };
  let gategoryubdate = (event) => {
    ubdatecategory(event.target.getAttribute("data"));
  };
  return (
    <div className="allproductfilterpage">
      <div className="serchdiv">
        <input
          type="text"
          placeholder="Search"
          onChange={sendinput}
          value={inputval}
        />
        <FaSearch />
      </div>
      <div className="Catogory">
        <strong>Catogory</strong>
        {gategory.map((val) => (
          <p onClick={gategoryubdate} data={val.data}>
            {val.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Allproductfilter;
