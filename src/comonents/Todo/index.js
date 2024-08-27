import { Component } from "react";
import "./index.css";
import Todotext from "../Todotext";

let myTodo = [
  { activity: "Code Review", id: 1 },
  { activity: "Write Documentation", id: 2 },
  { activity: "Fix Bug #32", id: 3 },
  { activity: "Design Homepage", id: 4 },
  { activity: "Update Dependencies", id: 5 },
  { activity: "Team Meeting", id: 6 },
  { activity: "Review Pull Requests", id: 7 },
  { activity: "Optimize Performance", id: 8 },
  { activity: "Write Unit Tests", id: 9 },
  { activity: "Research New Tech", id: 10 },
  { activity: "Deploy to Staging", id: 11 },
  { activity: "Plan Next Sprint", id: 12 },
  { activity: "Create Mockups", id: 13 },
  { activity: "Debug API", id: 14 },
  { activity: "Setup CI/CD Pipeline", id: 15 },
  { activity: "Refactor Codebase", id: 16 },
  { activity: "Conduct Usability Testing", id: 17 },
  { activity: "Prepare Presentation", id: 18 },
  { activity: "Test New Features", id: 19 },
  { activity: "Code Cleanup", id: 20 },
];

class Todo extends Component {
  state = { todolist: myTodo };
  delete = (id) => {
    let { todolist } = this.state;
    let deletedlistarray = todolist.filter((obj) => obj.id !== id);
    console.log(deletedlistarray);
    this.setState({ todolist: deletedlistarray });
  };

  render() {
    let { todolist } = this.state;

    return (
      <div className="todocontainer">
        <h1>Simple To-Do</h1>
        <div className="todotextcontainer">
          {todolist.map((obj) => (
            <Todotext key={obj.id} content={obj} onDelete={this.delete} />
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
