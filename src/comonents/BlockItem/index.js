import "./index.css";
import { Link } from "react-router-dom";
let BlockItem = (props) => {
  let { blackData } = props;
  let { id, title, imageUrl, avatharUrl, author, topic } = blackData;
  console.log(imageUrl, avatharUrl);
  return (
    <Link to={`/blocks/${id}`} className="Blockitem">
      <div className="blockitemcontainer">
        <img src={imageUrl} alt="image" />
        <div className="itemscontent">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="author">
            <img src={avatharUrl} alt="avatarimage" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default BlockItem;
