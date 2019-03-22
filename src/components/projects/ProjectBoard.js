//= ========================================Imports Start=========================================//

import React from 'react'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux'
import {dndTask} from '../../store/actions/taskActions'



//import fire from '../../config/Fire.jsx'
//import { DragDropContext } from 'react-beautiful-dnd'
//import { Droppable } from 'react-beautiful-dnd'

import Backlog from '../projectColumns/Backlog'
import Todo from '../projectColumns/Todo.js'
import Doing from '../projectColumns/Doing.js'
import Done from '../projectColumns/Done.js'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import boardsStyle from '../../customs/assets/jss/material-dashboard-pro-react/views/boardsStyle'
import GridContainer from '../../customs/components/Grid/GridContainer.jsx'
import GridItem from '../../customs/components/Grid/GridItem.jsx'
import Button from '../../customs/components/CustomButtons/Button.jsx'


//= ========================================Imports End=========================================//

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

class ProjectBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
      lowerTasks: [],
      columns: {
        id: {
          Backlog: 'Backlog',
          Todo: 'Todo',
          Doing: 'Doing',
          Done: 'Done'
        }
      }
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onDragEnd = async result => {
    const { destination, source, draggableId } = result
    let sourceId = source.droppableId;
    let destinationId = destination.droppableId;

    let tasks = this.props.tasks;
    let lowerTasks = this.state.lowerTasks

    if (!destination) {
      return
    }


    const column = this.state.columns
    const newIds = Array.from(column.id)
    newIds.splice(source.index, 1)
    newIds.splice(destination.index, 0, draggableId)

    this.props.dndTask(result)


  }

  /* onDragEnd = async result => {
    const { destination, source, draggableId } = result
    let sourceId = source.droppableId;
    let destinationId = destination.droppableId;

    let tasks = this.state.staticTasks;
    let lowerTasks = this.state.lowerTasks

    if (!destination) {
      return
    }
    const column = this.state.columns
    const newIds = Array.from(column.id)
    newIds.splice(source.index, 1)
    newIds.splice(destination.index, 100, draggableId)

    this.props.dndTask(result)


  } */


  render () {
    const {classes, projectID, tasks } = this.props
    return (
        <DragDropContext
        onBeforeDragStart={this.onBeforeDragStart}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}>
          <GridContainer 
            style={{ textAlign: 'center'}}>
            <GridItem className={classes.column} xs={12} sm={6} md={4} lg={3}>
            <Droppable droppableId={this.state.columns.id.Backlog} type='TASK'>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? 'none'
                        : 'none'
                    }}
                    {...provided.droppableProps}>
                      
                          <Backlog column={this.state.columns.id.Backlog} handleDelete={this.props.handleDelete} projectID={projectID} tasks={tasks}/>
                      
                  {provided.placeholder}
                  </div>
                 )}
              </Droppable>
              </GridItem>
                
            <GridItem className={classes.column} xs={12} sm={6} md={4} lg={3}>
            <Droppable droppableId={this.state.columns.id.Todo} type='TASK'>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? 'none'
                        : 'none'
                    }}
                    {...provided.droppableProps}>
                      
                          <Todo column={this.state.columns.id.Todo} handleDelete={this.props.handleDelete} projectID={projectID} tasks={tasks}/>
                      
                  {provided.placeholder}
                  </div>
                 )}
              </Droppable>
              </GridItem>


            <GridItem className={classes.column} xs={12} sm={6} md={4} lg={3}>
            <Droppable droppableId={this.state.columns.id.Doing} type='TASK'>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? 'none'
                        : 'none'
                    }}
                    {...provided.droppableProps}>
                      
                          <Doing column={this.state.columns.id.Doing} handleDelete={this.props.handleDelete} projectID={projectID} tasks={tasks}/>
                      
                  {provided.placeholder}
                  </div>
                 )}
              </Droppable>
              </GridItem>


            <GridItem className={classes.column} xs={12} sm={6} md={4} lg={3}>
            <Droppable droppableId={this.state.columns.id.Done} type='TASK'>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? 'none'
                        : 'none'
                    }}
                    {...provided.droppableProps}>
                      
                          <Done column={this.state.columns.id.Done} handleDelete={this.props.handleDelete} projectID={projectID} tasks={tasks}/>
                      
                  {provided.placeholder}
                  </div>
                 )}
              </Droppable>
              </GridItem>
          </GridContainer>
        </DragDropContext>
    )
  }
}



ProjectBoard.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    dndTask: (result) => dispatch(dndTask(result)),
  }
}

export default connect(null, mapDispatchToProps)(withStyles(boardsStyle)(ProjectBoard))
