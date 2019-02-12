import React, { Component } from "react";
import Button from "components/CustomButtons/Button.jsx";

class ToDo extends Component {
  render() {
    const { todo, toDoToBackLog } = this.props;
    return (
      <div>
        <p>{todo.taskName}</p>
        <Button onClick={() => toDoToBackLog(this.props.todo)}>left</Button>
        <Button onClick={() => console.log("right")}>right</Button>
      </div>
    );
  }
}

export default ToDo;
