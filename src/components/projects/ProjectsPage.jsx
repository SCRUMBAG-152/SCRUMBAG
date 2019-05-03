import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'


export class ProjectsPage extends Component {


  render() {
    const { projects, profile } = this.props;
    return (
      <ProjectList projects={projects} role={profile.role} />
    )
  }
}

const mapStateToProps = (state, props) => {
  const projects = state.firestore.ordered.projects
  const auth = state.firebase.auth
  const profile = state.firebase.profile
  return {
    projects: projects,
    auth: auth,
    profile: profile

  }
}


//compose 2 higher order components

export default compose(
  connect(mapStateToProps),
  firestoreConnect((state) => [
    { collection: 'projects', where: ['authorCompany', '==', `${state.profile.company}`] },
  ]))
  (ProjectsPage)
