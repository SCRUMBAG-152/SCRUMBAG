import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Panels from './Panels'




export class Dashboard extends Component {


  render() {
    const { auth, notifications } = this.props;

    if(!auth.uid) return <Redirect to='/pages/login-page'/>
    return (
      <Panels notifications={notifications} />
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,

}
}


//compose 2 higher order components

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', orderBy: ['time', 'desc'], limit:10}
  ])
  )(Dashboard)
