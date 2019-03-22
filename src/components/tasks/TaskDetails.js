import React, { Component } from 'react'
import moment from 'moment' //date format
import { Draggable } from 'react-beautiful-dnd'


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '../../customs/components/CustomButtons/Button'
import Edit from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import Close from '@material-ui/icons/Close'




const style = {
  card: {
    marginBottom: '1rem',
    borderRadius: '10px'
  }
}

class TaskDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    }

  handleClick(){
    const task=this.props.task
    this.props.handleDelete(task)
  }

      render() {
        const task = this.props.task
        const index = this.props.index
        return (
          <Draggable draggableId={task.id} index={index} key={task.id}>
          {(provided, snapshot) => (
              <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
              >
            <Card style={style.card}>
              <CardContent>
              <Typography variant="h6" component="h3">
                  {task.title}
                </Typography>
                <Typography component="p">
                  {task.content}
                  </Typography>
                  <Typography component="p" style={style.time} color='textSecondary'>
                  </Typography>
                    <Button
                        color='danger'
                        simple
                        justIcon
                        onClick={this.handleClick.bind(this)}
                        >
                        <Close/>
                    </Button>
              </CardContent>
            </Card>
            </div>
          )}
        </Draggable>
    )
  }
}


export default (TaskDetails)


