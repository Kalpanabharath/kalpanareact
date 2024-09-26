import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Userlist from "./comonents/Userlist";
import Counter from "./comonents/Counter";
import Wellcome from "./comonents/Wellcome";
import Defaultcomponent from "./comonents/Defaultcomponent";
import Propsfuction from "./comonents/Propsfunction";
import MyButtion from "./comonents/MyButtion";
import Randomnumber from "./comonents/Randomnumber";
import Distination from "./comonents/Distination";
import Todo from "./comonents/Todo";
import Google from "./comonents/Google";
import Eat from "./comonents/Eat";
import Filterproject from "./comonents/Filterproject";
import Nature from "./comonents/Nature";
import Appstore from "./comonents/Appstore";
import Cointoss from "./comonents/Cointoss";
import Review from "./comonents/Review";
import Contactform from "./comonents/Contactform";
import Comments from "./comonents/Comments";
import Userreview from "./comonents/Userreview";
import Appoinment from "./comonents/Appoinment";
import Moneymanagement from "./comonents/Moneymanagement";
import Clock from "./comonents/Clock";
import Digitaltimer from "./comonents/Digitaltimer";
import Stopwatch from "./comonents/Stopwatch";
import Heder from "./comonents/Header";
import Notfound from "./comonents/Notfound";
import BlockList from "./comonents/BlockList";
import Blockdetailwraper from "./comonents/Blockdetailwraper";
import Loaderspinner from "./comonents/Loaderspinner";
import LoginWithNavigate from "./comonents/LoginWithNavigate";
import Rigistration from "./comonents/Rigistration";
import Productedroute from "./comonents/Productedroute";
import Products from "./comonents/Products";

class App extends Component {
  render() {
    return (
      <>
        <Heder />
        <Routes>
          <Route path="/Login" element={<LoginWithNavigate />} />
          <Route path="/" element={<Productedroute element={Userlist} />} />
          <Route
            path="/Counter"
            element={<Productedroute element={Counter} />}
          />
          <Route
            path="/Wellcome"
            element={<Productedroute element={Wellcome} />}
          />
          <Route
            path="/Defaultcomponent"
            element={<Productedroute element={Defaultcomponent} />}
          />
          <Route
            path="/Propsfuction"
            element={<Productedroute element={Propsfuction} />}
          />
          <Route
            path="/MyButtion"
            element={<Productedroute element={MyButtion} />}
          />
          <Route
            path="/Randomnumber"
            element={<Productedroute element={Randomnumber} />}
          />
          <Route
            path="/Distination"
            element={<Productedroute element={Distination} />}
          />
          <Route path="/Todo" element={<Productedroute element={Todo} />} />
          <Route path="/Google" element={<Productedroute element={Google} />} />
          <Route path="/Eat" element={<Productedroute element={Eat} />} />
          <Route
            path="/Filterproject"
            element={<Productedroute element={Filterproject} />}
          />
          <Route path="/Nature" element={<Productedroute element={Nature} />} />
          <Route
            path="/Appstore"
            element={<Productedroute element={Appstore} />}
          />
          <Route
            path="/Cointoss"
            element={<Productedroute element={Cointoss} />}
          />
          <Route path="/Review" element={<Productedroute element={Review} />} />
          <Route
            path="/Contactform"
            element={<Productedroute element={Contactform} />}
          />
          <Route
            path="/Comments"
            element={<Productedroute element={Comments} />}
          />
          <Route
            path="/Userreview"
            element={<Productedroute element={Userreview} />}
          />
          <Route
            path="/Appoinment"
            element={<Productedroute element={Appoinment} />}
          />
          <Route
            path="/Moneymanagement"
            element={<Productedroute element={Moneymanagement} />}
          />
          <Route path="/Clock" element={<Productedroute element={Clock} />} />
          <Route
            path="/Digitaltimer"
            element={<Productedroute element={Digitaltimer} />}
          />
          <Route
            path="/Stopwatch"
            element={<Productedroute element={Stopwatch} />}
          />
          <Route
            path="/BlockList"
            element={<Productedroute element={BlockList} />}
          />
          <Route
            path="/blocks/:id"
            element={<Productedroute element={Blockdetailwraper} />}
          />
          <Route
            path="/Loaderspinner"
            element={<Productedroute element={Loaderspinner} />}
          />
          <Route
            path="/Rigistration"
            element={<Productedroute element={Rigistration} />}
          />
          <Route
            path="/Rigistration"
            element={<Productedroute element={Rigistration} />}
          />
          <Route
            path="/Products"
            element={<Productedroute element={Products} />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    );
  }
}

export default App;
