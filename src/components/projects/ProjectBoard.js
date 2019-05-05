//= ========================================Imports Start=========================================//

import React from 'react'
import { connect } from 'react-redux'
import Board from 'react-trello'
import { createColumn } from '../../store/actions/projectActions'
import { createTask } from '../../store/actions/taskActions'
import { deleteTask } from '../../store/actions/taskActions'
import { deleteColumn } from '../../store/actions/projectActions'
import { dndTask } from '../../store/actions/taskActions'
import { createEvent } from '../../store/actions/calendarActions'

import CustomCard from './CustomCard'
import NewCard from './NewCard'



// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../../customs/components/CustomButtons/Button'
import CustomLaneHeader from './CustomLaneHeader'


import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

//= ========================================Imports End=========================================//
const styles = {
  Board: {
    backgroundColor: '#fff',
    boxShadow: '3px 3px 6px 0px rgba(0,0,0,0.75)',
  },
  Lane: {
    boxShadow: '4px 4px 8px 0px rgba(0,0,0,0.75)',
    backgroundColor: '#e8e8ef'
  },
  button: {
    margin: '0px',
    width: '10%',
    height: '10%',
    fontSize: '10px',
    boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)',
    backgroundColor: '#ec407a'
  },

}
export class ProjectBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  static getDerivedStateFromProps(props, state) {

    const columns = Object(props.columns)
    const tasks = Object(props.cards)
    let lanes = []

    Object.keys(columns).map(i => {
      let cards = []
      Object.keys(tasks).map(j => {
        if (tasks[j].laneId === columns[i].id) {
          cards.unshift(tasks[j])
        }
      })
      let tempColumn = {
        ...columns[i],
        style: styles.Lane,
        cards
      }
      lanes.unshift(tempColumn)
    })


    return {
      data: {
        lanes: lanes
      }
    }
  }



  onLaneAdd = (params) => {
    const projectID = this.props.projectID
    const newColumn = {
      ...params,
      projectID: projectID,
      cards: []
    }
    const newLanes = [
      ...this.state.data.lanes,
      newColumn
    ]

    this.setState({
      data: {
        lanes: [...newLanes],
      }
    })

    this.props.createColumn(newColumn)
  }

  onCardAdd = (card, laneId) => {
    const projectID = this.props.projectID
    const task = {
      title: card.title,
      description: card.description,
      dueDate: card.dueDate,
      laneId,
      projectID: projectID,
      points: card.points,
      assignedTo: card.assignedTo,
    }
    this.props.createTask(task)
    this.props.createEvent(task)
  }

  onCardDelete = (taskID) => {

    this.props.deleteTask(taskID)
  }

  onLaneDelete = (laneID) => {
    this.props.deleteColumn(laneID)
  }

  handleDragEnd = (cardID, sourceLaneID, destinationLaneID, position, cardDetails) => {
    const result = { cardID, sourceLaneID, destinationLaneID, position, cardDetails }
    this.props.dndTask(result)
  }

  render() {
    const { data } = this.state
    const { classes, users } = this.props
    console.log(users)
    return (
      <Board
        className={classes.Board}
        data={data}
        draggable
        editable
        canAddLanes
        customCardLayout
        onCardAdd={this.onCardAdd}
        onLaneAdd={this.onLaneAdd}
        addCardLink={<Button variant="contained" className={classes.button}>Add Task</Button>}
        onCardDelete={this.onCardDelete}
        addLaneTitle={"Add New Column"}
        customLaneHeader={<CustomLaneHeader onLaneDelete={this.onLaneDelete} />}
        handleDragEnd={this.handleDragEnd}
        newCardTemplate={<NewCard users={users} onCardAdd={this.onCardAdd} />}
      >
        <CustomCard />
      </Board>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createColumn: (column) => dispatch(createColumn(column)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (taskID) => dispatch(deleteTask(taskID)),
    deleteColumn: (columnID) => dispatch(deleteColumn(columnID)),
    dndTask: (result) => dispatch(dndTask(result)),
    createEvent: (event) => dispatch(createEvent(event))
  }
}
const mapStateToProps = (state, props) => {
  const users = state.firestore.ordered.users
  const profile = state.firebase.profile
  return {
    users: users,
    profile: profile
  }
}

//export default connect(null, mapDispatchToProps)(withStyles(styles)(ProjectBoard))
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((state) => [
    { collection: 'users', where: ['company', '==', `${state.profile.company}`] },
  ]))(withStyles(styles)(ProjectBoard));

