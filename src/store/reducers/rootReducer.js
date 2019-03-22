import { combineReducers } from 'redux'
import authReducer  from './authReducer'
import projectReducer from './projectReducer'
import { firebaseReducer } from 'react-redux-firebase'
import taskReducer from './taskReducer'
//has access to fbConfig from index.js
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    task: taskReducer,
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer