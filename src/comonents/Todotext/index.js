import "./index.css";
let Todotext = (props) => {
  let { content, onDelete } = props;

  let deletetext = () => {
    onDelete(content.id);
    console.log(content.id);
  };
  return (
    <div className="todotext">
      <p>{content.activity}</p>
      <button onClick={deletetext}>Delete</button>
    </div>
  );
};
export default Todotext;
