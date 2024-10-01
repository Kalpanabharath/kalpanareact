import { Component } from "react";
import "./index.css";

class Productdetaildata extends Component {
  state = { name: "", imageurl: "", Category: "", discript: "", rate: "" };
  componentDidMount() {
    this.getsingleproductdata();
  }

  getsingleproductdata = async () => {
    const { id } = this.props;
    let response = await fetch(`https://dummyjson.com/products/${id}`);
    let data = await response.json();
    this.setState({
      imageurl: data.thumbnail,
      Category: data.category,
      name: data.title,
      discript: data.description,
      rate: data.price,
    });
  };
  render() {
    const { id } = this.props; // Destructure inside the render method
    let { name, imageurl, Category, discript, rate } = this.state;
    return (
      <div className="productdetaildatapage">
        <div className="detailcard">
          <img src={imageurl} alt="productimage" />
          <div className="nameandall">
            <p>{name}</p>
            <p>{Category}</p>
            <p>{rate}</p>
          </div>
          <p>{discript}</p>
        </div>
      </div>
    );
  }
}

export default Productdetaildata;
