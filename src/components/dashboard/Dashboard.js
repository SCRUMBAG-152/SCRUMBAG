import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';




export class Dashboard extends Component {


  render() {
    const { projects, auth, notifications } = this.props;

    if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row dashboard-row" >
            <div className="col s12 m6 dashboard-left-column">
                <ProjectList projects={projects}/>
            </div>
            <div className="col s12 m5 offset-m1 dashboard-right-column">
                <Notifications notifications={notifications}/>
            </div>
        </div>
      </div>
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
    { collection: 'notifications', orderBy: ['time', 'desc']}
  ])
  )(Dashboard)
