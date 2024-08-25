import "./index.css";
let NameButtion = (props) => {
  let { buttionClicked } = props;
  let { object } = props;
  let { username } = object;

  let btnclick = () => {
    let { object } = props;
    let { username } = object;
    buttionClicked(username);
  };
  return (
    <button className="namebuttionclass" onClick={btnclick}>
      {username}
    </button>
  );
};

export default NameButtion;
