import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDbyrEsiJo1bgU18nIByfTgclLgkliWldw', // unique security key, the main server has the same one to decode/encode data.
  authDomain: 'scrumbag-98898.firebaseapp.com', // domain information to access our data, internal routing once the connection has been made.
  databaseURL: 'https://scrumbag-98898.firebaseio.com', // this will get us to there public server.
  projectId: 'scrumbag-98898', // name of our project on their server
  storageBucket: 'scrumbag-98898.appspot.com', // no clue
  messagingSenderId: '395258338688' // no clue
}
const fire = firebase.initializeApp(config) // create a variable for short hand ReferenceError.
export default fire // allow other files in the project to be able to access the information.
