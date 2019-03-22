import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNHBbPxBusTMu_o0V-EzRMjbnfX5EiIf8",
  authDomain: "project-management-5a141.firebaseapp.com",
  databaseURL: "https://project-management-5a141.firebaseio.com",
  projectId: "project-management-5a141",
  storageBucket: "project-management-5a141.appspot.com",
  messagingSenderId: "745199931090"
};

const initFire = firebase.initializeApp(config);

  export const auth = initFire.auth(); //allow other files to reference the database


  

  export default firebase;