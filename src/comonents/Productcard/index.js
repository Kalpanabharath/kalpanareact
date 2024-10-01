import { Link } from "react-router-dom";
import "./index.css";
let Productcard = (props) => {
  let { details } = props;
  let { title, price, thumbnail, id } = details;
  return (
    <Link to={`/product/${id}`}>
      <div className="productcardcontainer">
        <img src={thumbnail} alt="productimage" />
        <div className="producttext">
          <div className="namrrate">
            <p>{title}</p>
            <p>{`price:${price} $`}</p>
          </div>
          <button> Buy Now</button>
        </div>
      </div>
    </Link>
  );
};
export default Productcard;
