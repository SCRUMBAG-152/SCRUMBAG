import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTask} from '../../store/actions/taskActions'
import { Redirect } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



class CreateTask extends Component {
constructor(props) {
    super(props);
    this.state = {
        title: '',
        content: '',
        projectID: props.projectID,
        column: props.column
    };
    }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state);
    this.handleClose();
  }

  handleClose = (e) => {
    this.props.onClose();
  };
  render() {

    const { auth, open } = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <Dialog disableRestoreFocus={true} onClose={this.handleClose} open={open}>
        <Card>
          <form onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">New Task</h5>
            <div className="input-field">
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">Task Title</label>
            </div>
            <div className="input-field">
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <label htmlFor="content">Task Description</label>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1">Create</button>
            </div>
          </form>
        </Card>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTask: (task) => dispatch(createTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask)