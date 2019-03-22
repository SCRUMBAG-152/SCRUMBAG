import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ProjectBoard from './ProjectBoard'
import {deleteTask} from '../../store/actions/taskActions'



//materialUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const style = {
  root: {
    margin: '2rem'
  },
  title: {
    fontSize: '20px'
  },
}


class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handeDelete.bind(this);
  }

  handeDelete = (task) => {
    this.props.deleteTask(task);
  }

  render() {  
  const { projectID, project ,auth, classes,tasks } = this.props;
  
  if(!auth.uid) return <Redirect to='/signin'/>
  if (project) {
    return (
        <div className={classes.root}>
            <Typography className={classes.title}  gutterBottom>
            {project.title}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
            {project.description}
            </Typography>
          <ProjectBoard handleDelete={this.handleDelete} projectID={projectID} tasks={tasks} />
          <CardActions>
            <Typography color="textSecondary" align="left" gutterBottom>
            Created By {project.authorCompany}
            </Typography>
            <Typography  color="textSecondary" align="right" gutterBottom>
            {moment(project.createdAt.toDate()).calendar()}
            </Typography>
          </CardActions>
        </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}
}


ProjectDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {

  const projectID = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[projectID] : null
  const tasks = state.firestore.ordered.tasks;


  return {
    project: project,
    auth: state.firebase.auth,
    projectID: projectID,
    tasks:tasks,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (task) => dispatch(deleteTask(task)),
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props)=>[
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'tasks', where: ['projectID', '==', `${props.match.params.id}`]},
  ]),
)(withStyles(style)(ProjectDetails))


