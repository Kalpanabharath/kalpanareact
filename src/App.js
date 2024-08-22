import "./App.css";
import UserDetail from "./comonents/UserDetail";

let userDetails = {
  imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "kalpana",
  role: "Frontend Developer",
};

let userarray = [
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "kalpana",
    role: "Frontend Developer",
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "keerthana",
    role: "Frontend Developer",
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Bharath",
    role: "Aplication Engineer",
  },
  {
    imageurl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Mohan",
    role: "Devops Engineer",
  },
];

function App() {
  return (
    <div className="usedetail">
      <h1>User List</h1>
      <ul>
        {userarray.map((call) => (
          <UserDetail user={call} />
        ))}
      </ul>
    </div>
  );
}

export default App;
