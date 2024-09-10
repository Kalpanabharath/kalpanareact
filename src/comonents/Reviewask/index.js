import "./index.css";
let Reviewask = (props) => {
  let { statefun } = props;
  let funstate = () => {
    statefun();
  };
  return (
    <div className="userrevierpage">
      <h2>HOW Satisefided are you width Customer Support</h2>
      <div className="Emojicontainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7IZga5RN8TyQO1vkRz5K_TMUEfA2hlVd5g&s"
          alt="emojione"
          onClick={funstate}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gxUHCjXRFXoyeq_vMBAq_gkSJeyMsZZ7fQ&s"
          alt="emojitwo"
          onClick={funstate}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcxj4j14PwrXJO30DWJOcjDzb3joNJ71UIg&s"
          alt="emojithree"
          onClick={funstate}
        />
      </div>
    </div>
  );
};
export default Reviewask;
