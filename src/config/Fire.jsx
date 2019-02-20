import firebase from "firebase";
// import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDbyrEsiJo1bgU18nIByfTgclLgkliWldw", // unique security key, the main server has the same one to decode/encode data.
  authDomain: "scrumbag-98898.firebaseapp.com", // domain information to access our data, internal routing once the connection has been made.
  databaseURL: "https://scrumbag-98898.firebaseio.com", // this will get us to there public server.
  projectId: "scrumbag-98898", // name of our project on their server
  storageBucket: "scrumbag-98898.appspot.com", // no clue
  messagingSenderId: "395258338688" // no clue
};
const initFire = firebase.initializeApp(config); // create a variable for short hand ReferenceError.

const fire = firebase.firestore();

export default fire; // allow other files in the project to be able to access the information.
export const auth = initFire.auth(); //allow other files to reference the database
export const persistence = initFire.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});
