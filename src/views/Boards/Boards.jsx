//= ========================================Imports Start=========================================//

import React from 'react'
import PropTypes from 'prop-types'
import fire from '../../config/Fire.jsx'
import {DragDropContext} from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';


import BackLog from './taskComponents/Backlog.jsx'
import Todo from './taskComponents/Todo.jsx'
import Doing from './taskComponents/Doing.jsx'
import Done from './taskComponents/Done.jsx'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import boardsStyle from '../../assets/jss/material-dashboard-pro-react/views/boardsStyle'
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'


// import ToDo from '../../components/ToDo/ToDo.jsx'
import AddTask from './addTask.jsx'

//= ========================================Imports End=========================================//
class Boards extends React.Component {
  constructor (props) {
    super(props)
    this.handleTaskClick = this.handleTaskClick.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      taskPressed: false,
      value: 0,
      toDos: [],
      doing: [],
      done: [],
      backLog: []
    }
  }

  handleTaskClick () {
    this.setState(prevState => ({
      taskPressed: !prevState.taskPressed
    }))
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  getBackLog = async () => {
    // BACKLOG
    const columnBacklog = await fire
      .collection('Columns')
      .where('columnName', '==', 'Backlog')
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0])

    const taskBacklog = await fire
      .collection('Tasks')
      .where('columnID', '==', columnBacklog)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    this.setState({
      backLog: taskBacklog
    })
  }

  getTodo = async () => {
    // TO-DO
    const columnTodo = await fire
      .collection('Columns')
      .where('columnName', '==', 'ToDo')
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0])

    const taskToDo = await fire
      .collection('Tasks')
      .where('columnID', '==', columnTodo)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    this.setState({
      toDos: taskToDo
    })
  }

  getDoing = async () => {
    // DOING
    const columnDoing = await fire
      .collection('Columns')
      .where('columnName', '==', 'Doing')
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0])

    const taskDoing = await fire
      .collection('Tasks')
      .where('columnID', '==', columnDoing)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    this.setState({
      doing: taskDoing
    })
  }

  getDone = async () => {
    // Done
    const columnDone = await fire
      .collection('Columns')
      .where('columnName', '==', 'Done')
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.id)[0])

    const taskDone = await fire
      .collection('Tasks')
      .where('columnID', '==', columnDone)
      .get()
      .then(snapshot =>
        snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id
          }
        })
      )

    this.setState({
      done: taskDone
    })
  }

  // deleteBagLogTask
  // get id and go into firebase and delete backlog task
  // get BackLogTasks
  async componentDidMount () {
    // const companyRef = await fire.collection("Companies").get().then(snapshot => snapshot.forEach((doc) => docs.push(doc.data()))
    const companyRef = await fire
      .collection('Companies')
      .get()
      .then(snapshot => snapshot.docs.map(doc => doc.data()))

    this.getBackLog()

    this.getTodo()

    this.getDoing()

    this.getDone()

    this.setState({
      companyRef
    })
  }

  /* newTask = async task => {
    await fire.collection('Tasks').add({
      columnID: '1O7NHVhZYmGgQzRGAPg3',
      taskName: 'newTasks',
      taskPoints: 5,
      userID: []
    })
    this.componentDidMount()
    console.log('Completed Adding a Task.')
  } */

  deleteTask = async id => {
    await fire
      .collection('Tasks')
      .doc(id)
      .delete()

    this.getBackLog()
    this.getTodo()
    this.getDoing()
    this.getDone()
  }

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

  render () {
    const { classes } = this.props
    const { doing, toDos, backLog, done } = this.state
    const taskPressed = this.state.taskPressed
    let taskBox

    if (taskPressed) {
      taskBox = <AddTask>Show</AddTask>
    } else {
      taskBox = null
    }

    return (
      <div>
        <Button size='sm' onClick={this.handleTaskClick}>
          Add Task
        </Button>
        {taskBox}
        <DragDropContext
          onBeforeDragStart={this.onBeforeDragStart}
          onDragStart={this.onDragStart}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
          <GridContainer style={{textAlign: 'center'}}>
          <Droppable droppableId="droppable-1" type="PERSON">
          {(provided, snapshot) => (
            <div
              xs={12} sm={6} md={4} lg={3}
              ref={provided.innerRef}
              style={{ backgroundColor: snapshot.isDraggingOver ? 'none' : 'none' }}
              {...provided.droppableProps}
            >
            <GridItem >
              <BackLog backLog={this.state.backLog} deleteTask={this.deleteTask} columnID={"one"}></BackLog>
            </GridItem>
            {provided.placeholder}
            </div>
          )}
          </Droppable>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Todo toDos={this.state.toDos} deleteTask={this.deleteTask} columnID={"two"}>></Todo>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
            <Doing doing={this.state.doing} deleteTask={this.deleteTask} columnID={"three"}>></Doing>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <Done done={this.state.done} deleteTask={this.deleteTask} columnID={"four"}>></Done>
            </GridItem>
          </GridContainer>
        </DragDropContext>
      </div>
    )
  }
}

Boards.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(boardsStyle)(Boards)
