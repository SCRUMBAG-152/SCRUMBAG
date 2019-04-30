import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import authReducer  from './authReducer'
import projectReducer from './projectReducer'
import taskReducer from './taskReducer'
import userReducer from './userReducer'
import calendarReducer from './calendarReducer'

//has access to fbConfig from index.js
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    task: taskReducer,
    auth: authReducer,
    project: projectReducer,
    userReducer: userReducer,
    calendarReduce: calendarReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer