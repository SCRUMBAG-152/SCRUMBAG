//= ========================================Imports Start=========================================//

import React from 'react'
import PropTypes from 'prop-types'
import fire from '../../config/Fire.jsx'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import Update from '@material-ui/icons/Update'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
// import ToDo from '../../components/ToDo/ToDo.jsx'
import dashboardStyle from 'assets/jss/material-dashboard-pro-react/views/dashboardStyle'
import AddTask from './addTask.jsx'

//= ========================================Imports End=========================================//

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.handleTaskClick = this.handleTaskClick.bind(this)
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
    this.setState({ taskPressed: true })
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

    // This will re-render the page when any of the data in the database has changed.
    this.getBackLog() // Call a function to query the Backlog

    this.getTodo() // Call a function to query the Todo

    this.getDoing() // Call a function to query the Doing

    this.getDone() // Call a function to query the Done

    this.setState({
      companyRef
    })
  }

  newTask = async task => {
    await fire.collection('Tasks').add({
      columnID: '1O7NHVhZYmGgQzRGAPg3',
      taskName: 'newTasks',
      taskPoints: 5,
      userID: []
    })
    this.componentDidMount()
    console.log('Completed Adding a Task.')
  }

  deleteTask = async id => {
    console.log('this is the id', id)
    // console.log("task", task.columnID);
    await fire
      .collection('Tasks')
      .doc(id)
      .delete()

    this.getBackLog()

    // const delTask = await fire
    //   .collection("Tasks")
    //   .where("taskName", "==", "newTasks")
    //   .get()
    //   .then(snapshot => snapshot.docs.map(doc => doc.id));
    // this.componentDidMount();
    // console.log("Deleted a Task.", delTask);
  }

  toDoToBackLog = todo => {
    const { toDos } = this.state
    const task = toDos.find(to => to.columnBacklog === todo.columnID)

    this.setState(
      prevState => ({
        backLog: [...prevState.backLog, task]
      }),
      () => this.remove(task)
    )
  }

  remove = task => {
    this.setState({
      toDos: this.state.toDos.filter(todo => todo.taskName !== task.taskName)
    })
  }

  render () {
    const { classes } = this.props
    const { doing, toDos, backLog, done } = this.state

    console.log(toDos)
    return (
      <div>
        <button onClick={() => this.newTask()}>Add Task</button>
        <button onClick={() => this.deleteTask(this.task)}>Delete Task</button>
        <AddTask>Show</AddTask>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='danger'>
                <h4 style={{ color: 'White' }} className={classes.cardTitle}>
                  Backlog
                </h4>
                <p>Things waiting to be started</p>
              </CardHeader>
              <CardBody>
                {backLog &&
                  backLog.map(log => {
                    return (
                      <div key={log.taskName}>
                        <p>{log.taskName}</p>
                        <Button
                          size='sm'
                          onClick={() => this.deleteTask(log.id)}>
                          delete task
                        </Button>
                        <Button size='sm' onClick={() => console.log('right')}>
                          right
                        </Button>
                      </div>
                    )
                  })}
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='info'>
                <h4 style={{ color: 'white' }} className={classes.cardTitle}>
                  To-do
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
              <CardBody>
                {toDos &&
                  toDos.map(todos => {
                    return (
                      <div key={todos.taskName}>
                        <p>{todos.taskName}</p>
                        <Button size='sm' onClick={() => console.todos('Left')}>
                          Left
                        </Button>
                        <Button
                          size='sm'
                          onClick={() => this.deleteTask(todos.id)}>
                          delete task
                        </Button>
                        <Button
                          size='sm'
                          onClick={() => console.todos('Right')}>
                          right
                        </Button>
                      </div>
                    )
                  })}

                {/* {toDos.map(todo => (
                  <div key={todo.taskName}>
                    <ToDo todo={todo} toDoToBackLog={this.toDoToBackLog} />
                  </div>
                ))} */}
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='success'>
                <h4 style={{ color: 'white' }} className={classes.cardTitle}>
                  Doing
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
              <CardBody>
                {/* doing &&
                  doing.map(doings => {
                    return (
                      <div key={doings.taskName}>
                        <p>{doings.taskName}</p>;
                        <Button
                          size='sm'
                          onClick={() => console.doings('Left')}>
                          Left
                        </Button>
                        <Button
                          size='sm'
                          onClick={() => this.deleteTask(doings.id)}>
                          delete task
                        </Button>
                        <Button
                          size='sm'
                          onClick={() => console.doings('Right')}>
                          right
                        </Button>
                      </div>
                    )
                  }) */}

                {/* <Tasks checkedIndexes={[3]} tasksIndexes={[3]} tasks={bugs} /> */}
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color='rose'>
                <h4 style={{ color: 'white' }} className={classes.cardTitle}>
                  Done
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
              <CardBody>
                {done &&
                  done.map(log => (
                    <div key={log.taskName}>
                      <p>{log.taskName}</p>
                      <Button size='sm' onClick={e => console.log(e, log)}>
                        left
                      </Button>
                      {/* <Button size='sm' onClick={() => console.log('right')}>
                        right
                      </Button> */}
                    </div>
                  ))}
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(dashboardStyle)(Dashboard)
