import "./index.css";
let Tabletab = (props) => {
  let { obj, tabclick, isactive } = props;
  let { tabId, displayText } = obj;
  let bordervar = isactive ? "makeborder" : "";

  let buttionclicked = () => {
    tabclick(tabId);
  };
  return (
    <button className={`tabletbuttion ${bordervar} `} onClick={buttionclicked}>
      {displayText}
    </button>
  );
};
export default Tabletab;
