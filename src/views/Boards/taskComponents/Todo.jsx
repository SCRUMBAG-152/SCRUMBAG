import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import Edit from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import Refresh from '@material-ui/icons/Refresh'
import Update from '@material-ui/icons/Update'



export class Todo extends Component {

    render() {
        return (
            <Card>
            <CardHeader color='info'>
                <h4 style={{ color: 'white' }}>
                  To-do
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
            <CardBody>
            {this.props.toDos &&
                this.props.toDos.map(todos => {
                    return (
                        <Draggable draggableId={todos.id} index={2} key={todos.id}>
                        {(provided, snapshot) => (
                        <div>
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <Card raised key={todos.id}>
                                
                                    <p>{todos.taskName}</p>
                                    <Tooltip
                                    id='tooltip-top'
                                    title='Edit'
                                    placement='bottom'
                                    >
                                    <Button color='success' simple justIcon>
                                        <Refresh/>
                                    </Button>
                                    </Tooltip>
                                    <Tooltip
                                    id='tooltip-top'
                                    title='Remove'
                                    placement='bottom'
                                    >
                                    <Button
                                        onClick={() => this.props.deleteTask(todos.id)}
                                        color='danger'
                                        simple
                                        justIcon>
                                        <Edit/>
                                    </Button>
                                    </Tooltip>
                                </Card>
                            </div>
                        </div>
                        )}
                        </Draggable>
                    )
                })}
            </CardBody>
            <CardFooter stats>
            <div>
                <Update />
                Just Updated
            </div>
            </CardFooter>
        </Card>
        )
    }
}

Todo.propTypes = {
  toDos: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default Todo
