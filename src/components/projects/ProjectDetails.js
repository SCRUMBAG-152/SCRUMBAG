import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ProjectBoard from './ProjectBoard'
import { deleteTask } from '../../store/actions/taskActions'
import ProjectPanels from './ProjectPanels'




//materialUI
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TabsButtons from './TabsButtons';



const style = {
  root: {
    flexGrow: 1
  },

}


export class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handeDelete.bind(this);
  }

  handeDelete = (task) => {
    this.props.deleteTask(task);
  }

  render() {  
  const { profile, projectID, project ,auth, classes, cards, columns,comments } = this.props; 
  
  if(!auth.uid) return <Redirect to='/pages/login-page'/>
  if (project) {
    return (
        <div className={classes.root}>
          <ProjectPanels 
            profile={profile} 
            project={project} 
            columns={columns} 
            projectID={projectID} 
            cards={cards}
            comments={comments}
            />
          {/* <CardActions>
            <Typography color="textSecondary" align="left" gutterBottom>
            Created By {project.authorCompany}
            </Typography>
            <Typography  color="textSecondary" align="right" gutterBottom>
            {moment(project.createdAt.toDate()).calendar()}
            </Typography>
          </CardActions> */}
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



const mapStateToProps = (state, ownProps) => {

  const projectID = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[projectID] : null
  const cards = state.firestore.ordered.cards;
  const columns = state.firestore.ordered.columns;
  const comments = state.firestore.ordered.comments;

  const profile = state.firebase.profile



  return {
    project: project,
    auth: state.firebase.auth,
    projectID: projectID,
    cards:cards,
    columns:columns,
    profile:profile,
    comments:comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: (task) => dispatch(deleteTask(task)),
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return ([
    { collection: 'projects' },
    { collection: 'cards', where: ['projectID', '==', `${props.match.params.id}`]},
    { collection: 'columns', where: ['projectID', '==', `${props.match.params.id}`]},
    { collection: 'comments', where: ['projectID', '==', `${props.match.params.id}`]}
    ])
  }),
)(withStyles(style)(ProjectDetails))


