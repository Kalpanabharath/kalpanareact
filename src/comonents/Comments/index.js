import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Usercomment from "../Usercomment";
import "./index.css";
class Comments extends Component {
  state = { userarray: [], username: "", usercomment: "" };
  statename = (event) => {
    this.setState({ username: event.target.value });
  };
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  statecomment = (event) => {
    this.setState({ usercomment: event.target.value });
  };
  creteobj = () => {
    let { username, usercomment } = this.state;
    let obj = {
      username,
      usercomment,
      time: new Date().toLocaleString(),
      like: false,
      id: uuidv4(),
      backgroundColor: this.getRandomColor(), // Add static background color
    };
    this.setState((prevState) => ({
      userarray: [...prevState.userarray, obj],
      username: "",
      usercomment: "",
    }));
  };
  likeubdate = (id) => {
    this.setState((prevState) => ({
      userarray: prevState.userarray.map((obj) =>
        obj.id === id ? { ...obj, like: !obj.like } : obj
      ),
    }));
  };
  deletecomment = (id) => {
    this.setState((prevState) => ({
      userarray: prevState.userarray.filter((obj) => obj.id !== id),
    }));
  };

  render() {
    let { userarray, username, usercomment } = this.state;
    return (
      <div className="commentpage">
        <div className="inputandimage">
          <div className="textside">
            <h1>Comments</h1>
            <p>Say something about 4.0 technologys</p>

            <input
              type="text"
              placeholder="Name"
              onChange={this.statename}
              value={username}
            />
            <textarea
              id="message"
              rows="10"
              cols="35"
              placeholder="Your Comments"
              onChange={this.statecomment}
              value={usercomment}
            />
            <button onClick={this.creteobj}>Add comment</button>
          </div>
          <div className="imageside">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="commentimage"
            />
          </div>
        </div>
        <div className="harizontal">
          <hr className="horizontal-line" />
        </div>
        <div className="Commentcount">
          <p>{userarray.length}</p>
          <p>Comments</p>
        </div>
        <div className="usercommentscontainer">
          {userarray.map((obj) => (
            <Usercomment
              details={obj}
              like={this.likeubdate}
              delfun={this.deletecomment}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Comments;
