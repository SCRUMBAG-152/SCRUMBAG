import React, { Component } from 'react'
import Button from '../../components/CustomButtons/Button.jsx'

class ToDo extends Component {
  render () {
    const { todo } = this.props
    return (
      <div>
        <p>{todo.taskName}</p>
        <Button size='sm' onClick={() => console.log('LEFT')}>
          left
        </Button>
        <Button size='sm' onClick={() => this.deleteTask(todo.id)}>
          delete task
        </Button>
        <Button size='sm' onClick={() => console.log('RIGHT')}>
          right
        </Button>
      </div>
    )
  }
}

export default ToDo
