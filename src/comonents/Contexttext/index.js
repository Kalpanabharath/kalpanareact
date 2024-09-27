import Context from "../../context/Context";

let Contextext = () => {
  return (
    <Context.Consumer>
      {(value) => {
        let { firstcontexttext } = value;
        return <p>firstcontexttext</p>;
      }}
    </Context.Consumer>
  );
};
export default Contextext;
