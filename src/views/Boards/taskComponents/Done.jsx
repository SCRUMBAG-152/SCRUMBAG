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



export class Done extends Component {

    render() {
        return (
            <Card>
            <CardHeader color='rose'>
                <h4 style={{ color: 'white' }}>
                  Done
                </h4>
                <p>Category subtitle</p>
              </CardHeader>
            <CardBody>
            {this.props.done &&
                this.props.done.map(dones => {
                    return (
                        <Draggable draggableId={dones.id} index={4}>
                        {(provided, snapshot) => (
                        <div>
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <Card raised key={dones.id}>
                                
                                    <p>{dones.taskName}</p>
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
                                        onClick={() => this.props.deleteTask(dones.id)}
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

Done.propTypes = {
  done: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default Done
