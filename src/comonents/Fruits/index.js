import "./index.css";

let Fruits = (props) => {
  let { Fruitsobj, objfun } = props;
  let addcount = () => {
    objfun(Fruitsobj.unicqueNo);
  };
  return (
    <div className="Fruitdiv">
      <img src={Fruitsobj.imageurl} alt={Fruitsobj.name} />
      <button onClick={addcount}>Eat {Fruitsobj.name}</button>
    </div>
  );
};
export default Fruits;
