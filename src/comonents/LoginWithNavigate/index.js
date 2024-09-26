import "./index.css";
import { Component } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

class Login extends Component {
  state = { email: "", password: "", showSubmiterror: false, errorMsg: "" };

  updateusername = (event) => {
    this.setState({ email: event.target.value });
  };

  updatepassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitFailure = (error) => {
    this.setState({ showSubmiterror: true, errorMsg: error });
  };
  onSubmitSuccess = (token) => {
    Cookies.set("jwt-token", token, { expires: 30 });
  };

  formonsubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userdata = { email, password };

    const url = "https://reqres.in/api/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };

    let response = await fetch(url, options);
    let data = await response.json();

    if (response.ok) {
      this.onSubmitSuccess(data.token);
      this.props.navigate("/");

      console.log(data);
    } else {
      this.onSubmitFailure(data.error);
    }
  };

  render() {
    let jwtToken = Cookies.get("jwt-token");
    if (jwtToken !== undefined) {
      return <Navigate to="/" />;
    }
    const { email, password, errorMsg, showSubmiterror } = this.state;

    return (
      <div className="classpage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="login page image"
        />
        <div className="loginform">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="login page image"
          />
          <form onSubmit={this.formonsubmit}>
            <h2>Login</h2>
            <div className="usernamediv">
              <label>Email :</label>
              <input
                type="email"
                placeholder="Enter User Mail Id"
                onChange={this.updateusername}
                value={email}
              />
            </div>
            <div className="passworddiv">
              <label>Password :</label>
              <input
                type="password"
                placeholder="Enter password"
                onChange={this.updatepassword}
                value={password}
              />
            </div>
            {showSubmiterror && <p className="error">{errorMsg}</p>}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

// Wrapper to use navigate
const LoginWithNavigate = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};

export default LoginWithNavigate;
