import "./App.css";
import Userlist from "./comonents/Userlist";
import Counter from "./comonents/Counter";
import Wellcome from "./comonents/Wellcome";
import Defaultcomponent from "./comonents/Defaultcomponent";
import Propsfuction from "./comonents/Propsfunction";
import { Component } from "react";
import MyButtion from "./comonents/MyButtion";

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
      </div>
    );
  }
}

export default App;
