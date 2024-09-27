import "./index.css";
import { Component } from "react";
import Productcard from "../Productcard";
import { ColorRing } from "react-loader-spinner";
import Allproductcheader from "../Allproductcheader";
import Allproductfilter from "../Allproductfilter";
let category = [
  { text: "beauty", data: "/category/beauty" },
  { text: "fragrances", data: "/category/fragrances" },
  { text: "furniture", data: "/category/furniture" },
  { text: "groceries", data: "/category/groceries" },
  { text: "home-decoration", data: "/category/home-decoration" },
  { text: "kitchen-accessories", data: "/category/kitchen-accessories" },
  { text: "laptops", data: "/category/laptops" },
  { text: "mens-shirts", data: "/category/mens-shirts" },
  { text: "mens-shoes", data: "/category/mens-shoes" },
  { text: "mens-watches", data: "/category/mens-watches" },
  { text: "mobile-accessories", data: "/category/mobile-accessories" },
  { text: "motorcycle", data: "/category/motorcycle" },
  { text: "skin-care", data: "/category/skin-care" },
  { text: "smartphones", data: "/category/smartphones" },
  { text: "sports-accessories", data: "/category/sports-accessories" },
  { text: "sunglasses", data: "/category/sunglasses" },
  { text: "tablets", data: "/category/tablets" },
  { text: "tops", data: "/category/tops" },
  { text: "vehicle", data: "/category/vehicle" },
  { text: "womens-bags", data: "/category/womens-bags" },
  { text: "womens-dresses", data: "/category/womens-dresses" },
  { text: "womens-jewellery", data: "/category/womens-jewellery" },
  { text: "womens-shoes", data: "/category/womens-shoes" },
  { text: "womens-watches", data: "/category/womens-watches" },
];

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
    allproduct: [], // Keep this unchanged for all products
    isLoading: true,
    activeOptionId: sortbyoption[0].optionId,
    searchinput: "", // Handle search input separately
    category: "",
  };

  componentDidMount() {
    this.getproductlist();
  }

  // Updates search input value
  ubdatesearchinput = (value) => {
    this.setState({ searchinput: value });
  };

  // Fetches product list
  getproductlist = async () => {
    let { activeOptionId, category } = this.state;
    let url = `https://dummyjson.com/products${category}${activeOptionId}`;
    let response = await fetch(url);
    let data = await response.json();
    let productarray = data.products;
    this.setState({ allproduct: productarray, isLoading: false });
  };

  // Updates active option for sorting
  updateActiveOptionId = (activeOptionId) => {
    this.setState({ activeOptionId }, this.getproductlist);
  };
  ubdatecategory = (val) => {
    this.setState({ category: val }, this.getproductlist);
  };

  render() {
    let { allproduct, isLoading, searchinput } = this.state;

    // Filter products based on search input
    let filteredProducts = allproduct.filter((obj) =>
      obj.title.toLowerCase().includes(searchinput.toLowerCase())
    );

    return (
      <div className="allproductfullpage">
        <Allproductcheader
          shortoption={sortbyoption}
          activeOptionId={sortbyoption[0].optionId}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <div className="allproductpage">
          <div className="filtercontainer">
            <Allproductfilter
              inputubdate={this.ubdatesearchinput}
              inputval={searchinput}
              ubdatecategory={this.ubdatecategory}
              gategory={category}
            />
          </div>
          <div className="productscontainer">
            {isLoading ? (
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
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((obj) => (
                    <Productcard key={obj.id} details={obj} />
                  ))
                ) : (
                  <p>No products found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Allproduct;
