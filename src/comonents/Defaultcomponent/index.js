import "./index.css";

let Defaultcomponent = (props) => {
  let { name, greeting } = props;
  return (
    <h3 className="defaulthead">
      {greeting} {name}
    </h3>
  );
};

Defaultcomponent.defaultProps = {
  name: "kalpana",
  greeting: "Wellcome",
};

export default Defaultcomponent;
