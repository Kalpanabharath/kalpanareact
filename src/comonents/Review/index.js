import { Component } from "react";
import "./index.css";

const reviews = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    company: "Tech Solutions",
    review: "Great to work with! Delivers on time and exceeds expectations.",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    company: "Web Innovators",
    review: "Incredibly knowledgeable and always willing to go the extra mile.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Brown",
    company: "Design Masters",
    review: "A true professional with a keen eye for design and detail.",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    company: "Creative Agency",
    review: "Very creative and efficient. Loved working on projects together.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "James Wilson",
    company: "Tech Innovators",
    review: "Brings innovative ideas and always delivers high-quality work.",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sarah Johnson",
    company: "Marketing Pros",
    review: "Excellent communication and superb problem-solving skills.",
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Lee",
    company: "Dev Experts",
    review: "Highly skilled and dependable. A pleasure to collaborate with.",
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Olivia Martin",
    company: "Creative Minds",
    review:
      "Great attention to detail and always brings fresh ideas to the table.",
  },
  {
    id: 9,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Robert Miller",
    company: "Web Gurus",
    review: "A fantastic team player with outstanding technical skills.",
  },
  {
    id: 10,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Sophia Garcia",
    company: "Design Experts",
    review:
      "Impressive creativity and a strong ability to deliver under pressure.",
  },
];

class Review extends Component {
  state = { userid: 0 };

  handleNext = () => {
    this.setState((prevState) => ({
      userid: (prevState.userid + 1) % reviews.length,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      userid: (prevState.userid - 1 + reviews.length) % reviews.length,
    }));
  };

  render() {
    let { userid } = this.state;
    return (
      <div className="reviewpage">
        <h2>Review </h2>
        <div className="review-container">
          <button className="arrow-button" onClick={this.handlePrev}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="previous"
            />
          </button>
          <div className="user-div">
            <img
              src={reviews[userid].image}
              alt="user"
              className="user-image"
            />
            <h3 className="user-name">{reviews[userid].name}</h3>
            <p className="user-company">{reviews[userid].company}</p>
            <p className="user-review">{reviews[userid].review}</p>
          </div>
          <button className="arrow-button" onClick={this.handleNext}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="next"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Review;
