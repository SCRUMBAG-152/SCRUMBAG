import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ProjectBoard from './ProjectBoard'
import { deleteTask } from '../../store/actions/taskActions'


//materialUI
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TabsButtons from './TabsButtons';



const style = {
  root: {
    margin: '1rem'
  },
  title: {
    fontSize: '20px',
    textAlign: 'center',
    backgroundColor: '#9c27b0',
    color: '#fff'
    
  },
  secondary: {
    textAlign: 'center',
    backgroundColor: 'rgba(125,125,153,0.5)',    
  },
}


class ProjectDetails extends Component {
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
  const { projectID, project ,auth, classes, cards, columns } = this.props; 
  
  if(!auth.uid) return <Redirect to='/pages/login-page'/>
  if (project) {
    return (
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


  return {
    project: project,
    auth: state.firebase.auth,
    projectID: projectID,
    cards:cards,
    columns:columns
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
    { collection: 'columns', where: ['projectID', '==', `${props.match.params.id}`]}
    ])
  }),
)(withStyles(style)(ProjectDetails))


