import { Component } from "react";
import "./index.css";
let imagetext = [
  {
    imageurl:
      " https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/products/pictures/item/free/original/eYeIBBxuzX-bpl-32-hd-television-492166140-i-1-1200wx1200h.jpeg",
    name: "Tv",
    unicqueNo: 2,
  },
  {
    imageurl:
      "https://m.economictimes.com/thumb/msid-98897778,width-1200,height-1200,resizemode-4,imgsize-35708/6-latest-mobile-phones-with-12gb-ram-in-india.jpg",
    name: "Mobile",
    unicqueNo: 2,
  },
  {
    imageurl: "https://www.asus.com/media/Odin/Websites/global/Series/9.png",
    name: "Laptop",
    unicqueNo: 3,
  },
  {
    imageurl:
      "https://m.media-amazon.com/images/I/51b9LjzmPCL._AC_UF1000,1000_QL80_.jpg",
    name: "Tablet",
    unicqueNo: 4,
  },
  {
    imageurl:
      "https://www.jiomart.com/images/product/original/rvyp0qdmw7/ksboy-t55-fitpro-bluetooth-calling-smart-watch-tracker-heart-oxygen-monitor-men-women-smart-watch-product-images-orvyp0qdmw7-p593652219-0-202303142153.jpg?im=Resize=(1000,1000)",
    name: "Smart Watch",
    unicqueNo: 5,
  },
  {
    imageurl:
      "https://img.freepik.com/premium-vector/modern-realistic-frige-white-background_88188-342.jpg",
    name: "Tablet",
    unicqueNo: 6,
  },
];

class Distination extends Component {
  state = {
    boxarray: imagetext,
  };
  ubdatecard = (event) => {
    console.log(event.target.value);
    let searchfilter = imagetext.filter((obj) =>
      obj.name.includes(event.target.value)
    );
    this.setState({ boxarray: searchfilter });
  };
  render() {
    let { boxarray } = this.state;
    return (
      <div className="DistinationContainer">
        <h1>Distination Search</h1>
        <input type="search" onChange={this.ubdatecard} />
        <div className="imagecontainer">
          {boxarray.map((obj) => (
            <div key={obj.unicqueNo} className="imagewithtext">
              <img
                src={obj.imageurl}
                alt={obj.name}
                className="distinationimage"
              />
              <p>{obj.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Distination;
