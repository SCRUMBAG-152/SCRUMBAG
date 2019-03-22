import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TaskDetails from '../tasks/TaskDetails.js'


import Button from '../../customs/components/CustomButtons/Button'
import Card from '../../customs/components/Card/Card'
import CardHeader from '../../customs/components/Card/CardHeader'
import CardBody from '../../customs/components/Card/CardBody'
import CardFooter from '../../customs/components/Card/CardFooter'
import Edit from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import Refresh from '@material-ui/icons/Refresh'
import Update from '@material-ui/icons/Update'
import CreateTask from '../tasks/CreateTask.js'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
//import { Draggable } from 'react-beautiful-dnd'


export class Todo extends Component {
    state = {
        open: false
      }

    handleClick= () => {
    this.setState({
        open: true,
    });
    };

    handleClose = ()=> {
    this.setState({ open: false });
    };
    
    render() {
        const {tasks, projectID, column} = this.props
        return (
            <Card>
                <CardHeader color='info'>
                <h5 style={{ color: 'White' }}>
                    To-Do
                </h5>
                <p>Things waiting to be started</p>
                </CardHeader>
                    <CardBody>
                    { tasks && tasks.filter(task => (task.column === column)).map((task,index) => {
                        return (
                        <TaskDetails handleDelete={this.props.handleDelete} index={index} key={index} task={task}/>
                        )
                    })} 
                    <Tooltip disableFocusListener={true} onClick={this.handleClick} title="Add" aria-label="Add">
                        <Fab color="primary">
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                    </CardBody>
                <CardFooter stats>
                <div>
                    <Update />
                    Just Updated
                </div>
                </CardFooter>
                <CreateTask projectID={projectID} column={column} open={this.state.open} onClose={this.handleClose}/>
            </Card>
        )
    }
}

Todo.propTypes = {
}

export default Todo
