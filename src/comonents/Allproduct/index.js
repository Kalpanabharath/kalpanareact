import "./index.css";
import { Component } from "react";
import Productcard from "../Productcard";
import { ColorRing } from "react-loader-spinner";
import Allproductcheader from "../Allproductcheader";
let sortbyoption = [
  {
    optionId: "?sortBy=price&order=asc",
    displaytext: "Sort (Low-Heigh)",
  },
  {
    optionId: "?sortBy=price&order=desc",
    displaytext: "Sort (Heigh-Low)",
  },
];

class Allproduct extends Component {
  state = {
    allproduct: [],
    isLoading: true,
    activeOptionId: sortbyoption[0].optionId,
  };

  componentDidMount() {
    this.getproductlist();
  }

  getproductlist = async () => {
    let { activeOptionId } = this.state;
    let url = `https://dummyjson.com/products${activeOptionId}`;
    let response = await fetch(url);
    let data = await response.json();
    let productarray = data.products;
    this.setState({ allproduct: productarray, isLoading: false }); // Set isLoading to false
  };
  updateActiveOptionId = (activeOptionId) => {
    this.setState({ activeOptionId }, this.getproductlist);
  };

  render() {
    let { allproduct, isLoading } = this.state;

    return (
      <div className="allproductpage">
        <Allproductcheader
          shortoption={sortbyoption}
          activeOptionId={sortbyoption[0].optionId}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        {isLoading ? ( // Conditional rendering based on isLoading
          <div className="pageloader">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["black"]}
            />
          </div>
        ) : (
          <div className="allproductcontainer">
            {allproduct.map((obj) => (
              <Productcard key={obj.id} details={obj} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Allproduct;
