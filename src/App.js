import "./App.css";
import Userlist from "./comonents/Userlist";
import Counter from "./comonents/Counter";
import Wellcome from "./comonents/Wellcome";
import Defaultcomponent from "./comonents/Defaultcomponent";
import Propsfuction from "./comonents/Propsfunction";
import { Component } from "react";
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
class App extends Component {
  render() {
    return (
      <div>
        <Userlist />
        <Counter />
        <Wellcome />
        <Defaultcomponent />
        <Propsfuction />
        <MyButtion />
        <Randomnumber />
        <Distination />
        <Todo />
        <Google />
        <Eat />
        <Filterproject />
        <Nature />
        <Appstore />
        <Cointoss />
        <Review />
        <Contactform />
        <Comments />
        <Userreview />
        <Appoinment />
        <Moneymanagement />
        <Clock />
        <Digitaltimer />
        <Stopwatch />
      </div>
    );
  }
}

export default App;
