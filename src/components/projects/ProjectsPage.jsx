import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'





export class ProjectsPage extends Component {


  render() {
    const { projects } = this.props;

    return (
        <ProjectList projects={projects}/>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,

}
}


//compose 2 higher order components

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
  ])
  )(ProjectsPage)
