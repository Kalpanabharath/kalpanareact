import { Component } from "react";
import "./index.css";

class Usercomment extends Component {
  state = {
    currentTime: new Date(), // Store current time in the state
  };

  componentDidMount() {
    // Update currentTime every minute
    this.timeInterval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 60000); // 60000 milliseconds = 1 minute
  }

  componentWillUnmount() {
    // Clear interval when component unmounts to prevent memory leaks
    clearInterval(this.timeInterval);
  }

  // Calculate the difference between comment time and the current time
  getTimeDifference = (time) => {
    const { currentTime } = this.state; // Get updated current time from state
    const commentTime = new Date(time);
    const timeDifference = currentTime - commentTime; // Difference in milliseconds

    const minutes = Math.floor(timeDifference / (1000 * 60)); // Convert to minutes
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)); // Convert to hours
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      return `${days} days ago`;
    }
  };
  clicklike = () => {
    const { details, like } = this.props;
    like(details.id);
  };
  deleteuser = () => {
    const { details, delfun } = this.props;
    delfun(details.id);
  };

  render() {
    let { details } = this.props;
    let { username, usercomment, time, like, backgroundColor } = details;

    let timeAgo = this.getTimeDifference(time); // Calculate time ago based on updated currentTime
    let image = like
      ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
      : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";
    let likeblue = like ? "likeblue" : "";

    return (
      <div className="singlecomment">
        <div className="commentdetail">
          <p className="nameimage" style={{ backgroundColor: backgroundColor }}>
            {username[0]}
          </p>
          <p className="username">{username}</p>
          <p className="timecalculate">{timeAgo}</p>{" "}
        </div>
        <p className="commentpara">{usercomment}</p>
        <div className="Likeanddelete">
          <div className="likediv">
            <img src={image} alt="likeimage" onClick={this.clicklike} />
            <p className={likeblue}>Like</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delimage"
            onClick={this.deleteuser}
          />
        </div>
        <div className="harizontalcommentline">
          <hr className="horizontal-lineuser" />
        </div>
      </div>
    );
  }
}

export default Usercomment;
