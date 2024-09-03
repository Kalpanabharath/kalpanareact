import "./index.css";

let Resultdiv = (props) => {
  let { resobj } = props;
  let { category, imageURL, title, description } = resobj;
  return (
    <div className="rescontainer">
      <img src={imageURL} alt={title} />
      <h3>{title} </h3>
      <p>{description}</p>
    </div>
  );
};
export default Resultdiv;
