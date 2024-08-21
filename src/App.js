import logo from "./logo.svg";
import "./App.css";

let WellcomeComponent = (props) => {
  let { greeting, name } = props;
  return (
    <h1>
      {greeting} {name}
    </h1>
  );
};

function App() {
  return <WellcomeComponent greeting="wellcome" name="kalpana" />;
}

export default App;
