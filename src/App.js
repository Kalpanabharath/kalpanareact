import "./App.css";
import UserDetail from "./comonents/UserDetail";
import Counter from "./comonents/Counter";
import Wellcome from "./comonents/Wellcome";

let userarray = [
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "kalpana",
    role: "Frontend Developer",
    no: 1,
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "keerthana",
    role: "Frontend Developer",
    no: 2,
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Bharath",
    role: "Aplication Engineer",
    no: 3,
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Mohan",
    role: "Devops Engineer",
    no: 4,
  },
];

function App() {
  return (
    <div>
      <div className="usedetail">
        <h1>User List</h1>
        <ul>
          {userarray.map((call) => (
            <UserDetail user={call} key={call.no} />
          ))}
        </ul>
      </div>
      <Counter />
      <Wellcome />
    </div>
  );
}

export default App;
