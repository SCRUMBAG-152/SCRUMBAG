//= ========================================Imports Start=========================================//

import React from "react";
import PropTypes from "prop-types";
import fire from "../../config/Fire.jsx";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from 'react-beautiful-dnd';


import BackLog from "./taskComponents/Backlog.jsx";
import Todo from "./taskComponents/Todo.jsx";
import Doing from "./taskComponents/Doing.jsx";
import Done from "./taskComponents/Done.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import boardsStyle from "../../assets/jss/material-dashboard-pro-react/views/boardsStyle";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

// import ToDo from '../../components/ToDo/ToDo.jsx'
import AddTask from "./AddTask";

//= ========================================Imports End=========================================//
class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      taskPressed: false,
      value: 0,
      toDos: [],
      doing: [],
      done: [],
      backLog: [],
      taskName: "",
      taskPoints: "",
      columnID: "1O7NHVhZYmGgQzRGAPg3",
      columns: []
    };
  }
  handleColumnChange = event => {
    console.log(
      "in handle column change id",
      event.target.name,
      event.target.value
    );

    // this.setState({
    //   columnID: id
    // });
    const ids = {
      ToDo: "NGhFjQbPhxqLWDi0e1pf",
      Doing: "CjECfaNBTOmx7JG85d5s",
      Done: "B6ZGS5apr1Xt93ctAufH",
      Backlog: "1O7NHVhZYmGgQzRGAPg3"
    };
    const id = ids[event.target.value];
    console.log("this is the id", id);
    this.setState({
      columnID: id
    });
  };
  handleAddTaskChange = e => {
    console.log("name, value", e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleTaskClick() {
    this.setState(prevState => ({
      taskPressed: !prevState.taskPressed
    }));
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  getTasks = async () => {
    console.log("getting new tasks");
    const projectRef = await fire
      .collection("Columns")
      .where("projectID", "==", "HogJ2XkOGTbEadJwAtoM")
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );

    console.log("project reference", projectRef);
    console.log("project id");

    this.setState({
      taskName: "",
      taskPoints: "",
      // columnID: projectRef.id,
      columns: projectRef
    });
    this.getBackLog();

    this.getTodo();

    this.getDoing();

    this.getDone();
  };

  getBackLog = async () => {
    // BACKLOG
    const columnBacklog = await fire
      .collection("Columns")
      .where("columnName", "==", "Backlog")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0]);

    const taskBacklog = await fire
      .collection("Tasks")
      .where("columnID", "==", columnBacklog)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );

    this.setState({
      backLog: taskBacklog
    });
  };

  getTodo = async () => {
    // TO-DO
    const columnTodo = await fire
      .collection("Columns")
      .where("columnName", "==", "ToDo")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0]);

    const taskToDo = await fire
      .collection("Tasks")
      .where("columnID", "==", columnTodo)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );

    this.setState({
      toDos: taskToDo
    });
  };

  getDoing = async () => {
    // DOING
    const columnDoing = await fire
      .collection("Columns")
      .where("columnName", "==", "Doing")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0]);

    const taskDoing = await fire
      .collection("Tasks")
      .where("columnID", "==", columnDoing)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );

    this.setState({
      doing: taskDoing
    });
  };

  getDone = async () => {
    // Done
    const columnDone = await fire
      .collection("Columns")
      .where("columnName", "==", "Done")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0]);

    const taskDone = await fire
      .collection("Tasks")
      .where("columnID", "==", columnDone)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          };
        })
      );

    this.setState({
      done: taskDone
    });
  };

  // deleteBagLogTask
  // get id and go into firebase and delete backlog task
  // get BackLogTasks
  async componentDidMount() {
    // const companyRef = await fire.collection("Companies").get().then(snapshot => snapshot.forEach((doc) => docs.push(doc.data()))
    const companyRef = await fire
      .collection("Companies")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.data()));

    this.getBackLog();

    this.getTodo();

    this.getDoing();

    this.getDone();

    this.getTasks();

    this.setState({
      companyRef
    });
  }

  newTask = async () => {
    const { columnID, taskName, taskPoints } = this.state;
    console.log("data", columnID);
    await fire.collection("Tasks").add({
      columnID,
      taskName,
      taskPoints,
      userID: []
    });

    this.getTasks();
    console.log("Completed Adding a Task.");
  };

  deleteTask = async id => {
    await fire
      .collection("Tasks")
      .doc(id)
      .delete();

    this.getBackLog();
    this.getTodo();
    this.getDoing();
    this.getDone();
  };

  onBeforeDragStart = () => {
    /*...*/
  };

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = () => {

  };


  render() {
    const { classes } = this.props;
    const { taskName, taskPoints, columnID, columns, taskPressed } = this.state;

    console.log("columnID", columnID);
    // const taskPressed = this.state.taskPressed;
    // let taskBox;

    // if (taskPressed) {
    //   taskBox = (
    //     <AddTask
    //       taskName={taskName}
    //       taskPoints={taskPoints}
    //       columnID={columnID}
    //       columns={columns}
    //       newTask={this.newTask}
    //       getTasks={this.getTasks}
    //       handleColumnChange={this.handleColumnChange}
    //       handleAddTaskChange={this.handleAddTaskChange}
    //     >
    //       Show
    //     </AddTask>
    //   );
    // } else {
    //   taskBox = null;
    // }

    return (
      <div>
        <Button size="sm" onClick={this.handleTaskClick}>
          Add Task
        </Button>
        {taskPressed && (
          <AddTask
            taskName={taskName}
            taskPoints={taskPoints}
            columnID={columnID}
            columns={columns}
            newTask={this.newTask}
            getTasks={this.getTasks}
            handleColumnChange={this.handleColumnChange}
            handleAddTaskChange={this.handleAddTaskChange}
          >
            Show
          </AddTask>
        )}
        <DragDropContext
          onBeforeDragStart={this.onBeforeDragStart}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <GridContainer style={{ textAlign: "center" }}>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Droppable droppableId="droppable-1" type="TASK">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{ backgroundColor: snapshot.isDraggingOver ? 'none' : 'none' }}
                  {...provided.droppableProps}
                >
                  <BackLog 
                    backLog={this.state.backLog} 
                    deleteTask={this.deleteTask} 
                    columnID={"one"}
                  >
                  </BackLog>
                {provided.placeholder}
                </div>
              )}
              </Droppable>
            </GridItem>

            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Droppable droppableId="droppable-2" type="TASK">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{ backgroundColor: snapshot.isDraggingOver ? 'none' : 'none' }}
                  {...provided.droppableProps}
                >
                  <Todo 
                    toDos={this.state.toDos} 
                    deleteTask={this.deleteTask} 
                    columnID={"two"}
                  >
                  </Todo>
                {provided.placeholder}
                </div>
              )}
              </Droppable>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Droppable droppableId="droppable-3" type="TASK">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{ backgroundColor: snapshot.isDraggingOver ? 'none' : 'none' }}
                  {...provided.droppableProps}
                >
                  <Doing 
                    doing={this.state.doing} 
                    deleteTask={this.deleteTask} 
                    columnID={"three"}
                  >
                  </Doing>
                {provided.placeholder}
                </div>
              )}
              </Droppable>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Droppable droppableId="droppable-4" type="TASK">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{ backgroundColor: snapshot.isDraggingOver ? 'none' : 'none' }}
                  {...provided.droppableProps}
                >
                  <Done 
                    done={this.state.done} 
                    deleteTask={this.deleteTask} 
                    columnID={"four"}
                  >
                  </Done>
                {provided.placeholder}
                </div>
              )}
              </Droppable>
            </GridItem>
          </GridContainer>
          </DragDropContext>
      </div>
    );
  }
}

Boards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(boardsStyle)(Boards);
