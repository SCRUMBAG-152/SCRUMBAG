import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import Edit from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import Refresh from '@material-ui/icons/Refresh'
import Update from '@material-ui/icons/Update'

import { Draggable } from 'react-beautiful-dnd'

export class BackLog extends Component {
  render () {
    return (
      <Card>
        <CardHeader color='danger'>
          <h4 style={{ color: 'White' }}>Backlog</h4>
          <p>Things waiting to be started</p>
        </CardHeader>
        <CardBody>
          {this.props.backLog &&
            this.props.backLog.map(log => {
              return (
                <Draggable draggableId={log.id} index={0} key={log.id}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <Card raised key={log.id}>
                          <h4>{log.taskName}</h4>
                          <p>Task Points: {log.taskPoints}</p>
                          {/* <p>Assigned To: {log.userID}</p> */}
                          <div>
                            <Tooltip
                              id='tooltip-top'
                              title='Edit'
                              placement='bottom'>
                              <Button color='success' simple justIcon>
                                <Refresh />
                              </Button>
                            </Tooltip>
                            <Tooltip
                              id='tooltip-top'
                              title='Remove'
                              placement='bottom'>
                              <Button
                                onClick={() => this.props.deleteTask(log.id)}
                                color='danger'
                                simple
                                justIcon>
                                <Edit />
                              </Button>
                            </Tooltip>
                          </div>
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

BackLog.propTypes = {
  backLog: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default BackLog
