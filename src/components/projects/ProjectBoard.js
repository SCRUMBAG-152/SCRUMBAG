//= ========================================Imports Start=========================================//

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Board from 'react-trello'
import {createColumn} from '../../store/actions/projectActions'
import {createTask} from '../../store/actions/taskActions'
import {deleteTask} from '../../store/actions/taskActions'
import {deleteColumn} from '../../store/actions/projectActions'

import uuid from "uuid";

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../../customs/components/CustomButtons/Button'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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
class ProjectBoard extends React.Component {
   constructor (props) {
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
        if (tasks[j].laneId === columns[i].id){
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


    return{
      data:{
       lanes: lanes
      }
    } 
}

 

  onLaneAdd = (params) => {
    const projectID = this.props.projectID
    const newColumn= {
        ...params,
        projectID: projectID,
        cards:[]
    }
    const newLanes = [
      ...this.state.data.lanes,
      newColumn
    ]

    this.setState({
      data:{
        lanes: [...newLanes],
      }
    })

    this.props.createColumn(newColumn)
  }

  onCardAdd = (card, laneId) => {
    const projectID = this.props.projectID
    const task = {
      title: card.title,
      label: card.label,
      description: card.description,
      laneId,
      projectID: projectID
    }
    this.props.createTask(task)
  }

  onCardDelete = (taskID) => {

    this.props.deleteTask(taskID)
  }

  render () {
    const {data} = this.state
    const {classes} = this.props
    return (
        <Board 
        className={classes.Board}
        data={data}
        draggable
        editable
        canAddLanes
        laneDraggable={false}
        onCardAdd={this.onCardAdd}
        onLaneAdd={this.onLaneAdd}
        addCardLink={<Button variant="contained" className={classes.button}>Add Task</Button>}
        onCardDelete={this.onCardDelete}
        onLaneAction={console.log("haha")}
        >
        </Board>
    )
  }
}

ProjectBoard.propTypes = {
  classes: PropTypes.object.isRequired,
}


const mapDispatchToProps = (dispatch) => {
  return {
    createColumn: (column) => dispatch(createColumn(column)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (taskID) => dispatch(deleteTask(taskID)),
    deleteColumn: (columnID) => dispatch(createColumn(columnID)),



  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ProjectBoard))

 