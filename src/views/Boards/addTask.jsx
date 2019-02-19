import fire from "config/Fire.jsx";
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Button } from "@material-ui/core";

// import { bool } from "prop-types";

class AddTask extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     taskName: "",
  //     taskPoints: "",
  //     columnID: "1O7NHVhZYmGgQzRGAPg3",
  //     columns: []
  //     // isHidden: true
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  // }

  /* handleChangeIndex = index => {
    this.setState({ value: index });
  }; */

  /* toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  } */

  // handleChange = e => {
  //   //console.log("name, value", e.target.name, e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // getTasks = async () => {
  //   const projectRef = await fire
  //     .collection("Columns")
  //     .where("projectID", "==", "HogJ2XkOGTbEadJwAtoM")
  //     .get()
  //     .then(snapshot =>
  //       snapshot.docs.map(doc => {
  //         return {
  //           ...doc.data(),
  //           id: doc.id
  //         };
  //       })
  //     );

  /* const emptyTasks = await fire
      .collection("Tasks")
      .where("taskName", "==", "")
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.data()));
      console.log("empty task reference", emptyTasks); */

  /* const columnRef = await fire
          .collection('Columns') */

  //   this.setState({
  //     taskName: "",
  //     taskPoints: "",
  //     columnID: projectRef.id,
  //     columns: projectRef
  //   });
  // };

  // async componentDidMount() {
  //   // const companyRef = await fire.collection("Companies").get().then(snapshot => snapshot.forEach((doc) => docs.push(doc.data()))

  //   this.getTasks();
  // }

  // /* deleteEmpty() {
  //   const emptyTasks = fire
  //     .collection("Columns")
  //     .where("taskName", "==", "")
  //     .get()
  //     .then(snapshot => snapshot.docs.map(doc => doc.data()));
  //     console.log("empty task reference", emptyTasks);
  // } */

  // newTask = async () => {
  //   await fire.collection("Tasks").add({
  //     columnID: this.state.columnID,
  //     taskName: this.state.taskName,
  //     taskPoints: this.state.taskPoints,
  //     userID: []
  //   });

  //   this.getTasks();
  //   console.log("Completed Adding a Task.");
  // };

  render() {
    // const { projectRef } = this.state;
    const {
      taskName,
      taskPoints,
      columnID,
      columns,
      newTask,
      getTasks,
      handleAddTaskChange,
      handleColumnChange
    } = this.props;
    //console.log(columns, "columns");
    // //let columns = this.state.columns;
    // let optionItems = columns.map((column, index) => {
    //   //console.log("columns", column.id);
    //   return (
    //     <option
    //       name={column.id}
    //       key={column.id}
    //       //value={index}
    //       onClick={(event, column) => handleColumnChange(event, column)}
    //     >
    //       {column.columnName}
    //     </option>
    //   );
    // });

    // onClick={() => this.newTask()}

    return (
      <div id="AddTask">
        <GridContainer>
          <GridItem /* xs={12} sm={6} md={6} lg={3} */>
            <Card>
              <CardHeader color="warning">ADD A TASK</CardHeader>
              <CardBody>
                <form>
                  <label>
                    Task Name:
                    <input
                      type="text"
                      name="taskName"
                      onChange={event => handleAddTaskChange(event)}
                      value={taskName}
                    />
                  </label>
                  <br />
                  <label>
                    Task Points:
                    <input
                      type="number"
                      name="taskPoints"
                      onChange={event => handleAddTaskChange(event)}
                      value={taskPoints}
                    />
                  </label>
                  <br />
                  <label>
                    Column:
                    <select
                      name="columnID"
                      onChange={event => handleColumnChange(event)}
                    >
                      {/* {<option />} */}
                      {/* {optionItems} */}
                      {columns.map((column, index) => {
                        return (
                          <option
                            name={column.id}
                            key={column.id}
                            //value={index}
                            // onClick={(event, column) =>
                            //   handleColumnChange(event, column.id)
                            // }
                          >
                            {column.columnName}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </form>
              </CardBody>
              <CardFooter>
                <Button size="small" color="secondary">
                  Cancel
                </Button>
                <Button size="small" onClick={() => newTask()}>
                  Save
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default AddTask;
