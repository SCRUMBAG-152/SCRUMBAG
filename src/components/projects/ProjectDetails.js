import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { deleteTask } from '../../store/actions/taskActions'
<<<<<<< HEAD


//materialUI
=======
import ProjectPanels from './ProjectPanels'
>>>>>>> origin/3-29-19
import { withStyles } from '@material-ui/core/styles';


export class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: 0
    }
    this.handleDelete = this.handeDelete.bind(this);
  }

  handeDelete = (task) => {
    this.props.deleteTask(task);
  }

  handleTabChange = (value) => {
    this.setState({
      value: value
    })
  }

  render() {  
  const { profile, projectID, project ,auth, classes, cards, columns,comments } = this.props; 
  
  if(!auth.uid) return <Redirect to='/pages/login-page'/>
  if (project) {
    return (
<<<<<<< HEAD
        <div className={classes.root}>
            <Typography className={classes.title} >
            {project.title}
            </Typography>
          <TabsButtons handleTabChange={this.handleTabChange}/>
          {(this.state.value === 0) &&
          <ProjectBoard columns={columns} projectID={projectID} cards={cards} />
          }

          {/* <CardActions>
            <Typography color="textSecondary" align="left" gutterBottom>
            Created By {project.authorCompany}
            </Typography>
            <Typography  color="textSecondary" align="right" gutterBottom>
            {moment(project.createdAt.toDate()).calendar()}
            </Typography>
          </CardActions> */}
=======
        <div>
          <ProjectPanels 
            profile={profile} 
            project={project} 
            columns={columns} 
            projectID={projectID} 
            cards={cards}
            comments={comments}
            />
>>>>>>> origin/3-29-19
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
    { collection: 'projects'},
    { collection: 'cards', where: ['projectID', '==', `${props.match.params.id}`]},
    { collection: 'columns', where: ['projectID', '==', `${props.match.params.id}`]},
    { collection: 'comments', where: ['projectID', '==', `${props.match.params.id}`]}
    ])
  }),
)(ProjectDetails)


