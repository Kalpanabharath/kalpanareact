import "./index.css";

let Appresult = (props) => {
  let { object } = props;
  let { type, image, appName } = object;
  return (
    <div className="singleresult">
      <img src={image} alt={`app ${appName}`} />
      <p>{appName}</p>
    </div>
  );
};
export default Appresult;
