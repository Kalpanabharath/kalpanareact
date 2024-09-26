import Comments from "../Comments";
import { BallTriangle } from "react-loader-spinner";
import Productcard from "../Productcard";
import "./index.css";

class PrimeUser extends Comments {
  state = { primeuser: false, allproduct: [], isLoading: true };

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    let response = await fetch("https://dummyjson.com/products?limit=3");
    let data = await response.json();
    let productarray = data.products;
    this.setState({ allproduct: productarray, isLoading: false });
  };

  primeuser = () => {
    const { allproduct } = this.state;
    return (
      <div className="Primeusercontainer">
        {allproduct.map((obj) => (
          <Productcard key={obj.id} details={obj} />
        ))}
      </div>
    );
  };

  notprimeuser = () => {
    return (
      <div className="imagenonprime">
        <img
          src="https://img.freepik.com/free-psd/gradient-11-11-sales-facebook-template_23-2150803487.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid"
          alt="Non-prime User Banner"
        />
      </div>
    );
  };

  loadingdiv = () => {
    return (
      <div className="primepageloader">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  };

  // Method to toggle prime user status
  handlePrimeUserToggle = () => {
    this.setState((prevState) => ({ primeuser: !prevState.primeuser }));
  };

  render() {
    const { isLoading, primeuser } = this.state;

    return (
      <div className="primeuserpage">
        <h2>Prime Offer</h2>

        {/* Button to toggle between prime and non-prime user */}
        <div className="prime-user-toggle-buttons">
          {primeuser ? (
            <button onClick={this.handlePrimeUserToggle}>
              Exit Prime User
            </button>
          ) : (
            <button onClick={this.handlePrimeUserToggle}>Make Prime</button>
          )}
        </div>

        {isLoading
          ? this.loadingdiv()
          : primeuser
          ? this.primeuser()
          : this.notprimeuser()}
      </div>
    );
  }
}

export default PrimeUser;
