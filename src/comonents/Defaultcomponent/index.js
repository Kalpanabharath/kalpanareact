import "./index.css";
let Defaultcomponent = (props) => {
  let { name, greeting } = props;
  return (
    <h3>
      {greeting} {name}
    </h3>
  );
};

Defaultcomponent.defaultProps = {
  name: "kalpana",
  greeting: "Wellcome",
};

export default Defaultcomponent;
