import "./index.css";
let Productcard = (props) => {
  let { details } = props;
  let { title, price, thumbnail } = details;
  return (
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
  );
};
export default Productcard;
