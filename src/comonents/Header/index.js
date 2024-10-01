import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Heder = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt-token");
    navigate("/Login"); // Replaces the history.replace with navigate
  };

  return (
    <nav>
      <div className="navcontainer">
        <h1>My Work</h1>
        <ul>
          <li>
            <Link to="/">Userlist</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/Wellcome">Wellcome</Link>
          </li>
          <li>
            <Link to="/Defaultcomponent">Defaultcomponent</Link>
          </li>
          <li>
            <Link to="/Propsfuction">Propsfuction</Link>
          </li>
          <li>
            <Link to="/MyButtion">MyButtion</Link>
          </li>
          <li>
            <Link to="/Randomnumber">Randomnumber</Link>
          </li>
          <li>
            <Link to="/Distination">Distination</Link>
          </li>
          <li>
            <Link to="/Todo">Todo</Link>
          </li>
          <li>
            <Link to="/Google">Google</Link>
          </li>
          <li>
            <Link to="/Eat">Eat</Link>
          </li>
          <li>
            <Link to="/Filterproject">Filterproject</Link>
          </li>
          <li>
            <Link to="/Nature">Nature</Link>
          </li>
          <li>
            <Link to="/Appstore">Appstore</Link>
          </li>
          <li>
            <Link to="/Cointoss">Cointoss</Link>
          </li>
          <li>
            <Link to="/Review">Review</Link>
          </li>
          <li>
            <Link to="/Contactform">Contactform</Link>
          </li>
          <li>
            <Link to="/Comments">Comments</Link>
          </li>
          <li>
            <Link to="/Userreview">Userreview</Link>
          </li>
          <li>
            <Link to="/Appoinment">Appoinment</Link>
          </li>
          <li>
            <Link to="/Moneymanagement">Moneymanagement</Link>
          </li>
          <li>
            <Link to="/Clock">Clock</Link>
          </li>
          <li>
            <Link to="/Digitaltimer">Digitaltimer</Link>
          </li>
          <li>
            <Link to="/Stopwatch">Stopwatch</Link>
          </li>
          <li>
            <Link to="/BlockList">Block List</Link>
          </li>
          <li>
            <Link to="/Loaderspinner">Loaderspinner</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Rigistration">Rigistration</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Tirdpartypackage">Tirdpartypackage</Link>
          </li>
          <li>
            <Link to="/Flowchart">Flowchart</Link>
          </li>
          <li>
            <Link to="/Context">Context</Link>
          </li>
          <li>
            <Link to="/Timeline">Timeline</Link>
          </li>
          <button onClick={onClickLogout}> Logout</button>
        </ul>
      </div>
    </nav>
  );
};

export default Heder;
