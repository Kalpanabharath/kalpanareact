import { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import BlockItem from "../BlockItem";
let BlockData = [
  {
    id: 1,
    title: "Block 1",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png",
    avatharUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
    author: "Author Name",
    topic: "React.js",
  },
  {
    id: 1,
    title: "Block 2",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png",
    avatharUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
    author: "Author Name",
    topic: "React.js",
  },
];
class BlockList extends Component {
  state = { blocksdata: [], isLoading: true };
  componentDidMount() {
    this.getblockdata();
  }
  getblockdata = async () => {
    let response = await fetch("https://apis.ccbp.in/blogs");
    let data = await response.json();

    let ubdateddata = data.map((obj) => ({
      id: obj.id,
      title: obj.title,
      imageUrl: obj.image_url,
      avatharUrl: obj.avatar_url,
      author: obj.author,
      topic: obj.topic,
    }));
    this.setState({ blocksdata: ubdateddata, isLoading: false });
  };
  render() {
    let { blocksdata, isLoading } = this.state;
    return (
      <div className="blocklistpage">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blocksdata.map((obj) => <BlockItem blackData={obj} key={obj.id} />)
        )}
      </div>
    );
  }
}
export default BlockList;
