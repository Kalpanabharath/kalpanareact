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
class App extends Component {
  render() {
    return (
      <>
        <Heder />
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Wellcome" element={<Wellcome />} />
          <Route path="/Defaultcomponent" element={<Defaultcomponent />} />
          <Route path="/Propsfuction" element={<Propsfuction />} />
          <Route path="/MyButtion" element={<MyButtion />} />
          <Route path="/Randomnumber" element={<Randomnumber />} />
          <Route path="/Distination" element={<Distination />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Google" element={<Google />} />
          <Route path="/Eat" element={<Eat />} />
          <Route path="/Filterproject" element={<Filterproject />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Appstore" element={<Appstore />} />
          <Route path="/Cointoss" element={<Cointoss />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Contactform" element={<Contactform />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/Userreview" element={<Userreview />} />
          <Route path="/Appoinment" element={<Appoinment />} />
          <Route path="/Moneymanagement" element={<Moneymanagement />} />
          <Route path="/Clock" element={<Clock />} />
          <Route path="/Digitaltimer" element={<Digitaltimer />} />
          <Route path="/Stopwatch" element={<Stopwatch />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    );
  }
}

export default App;
