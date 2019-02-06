import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDbyrEsiJo1bgU18nIByfTgclLgkliWldw",
    authDomain: "scrumbag-98898.firebaseapp.com",
    databaseURL: "https://scrumbag-98898.firebaseio.com",
    projectId: "scrumbag-98898",
    storageBucket: "scrumbag-98898.appspot.com",
    messagingSenderId: "395258338688"
};
const fire = firebase.initializeApp(config);
export default fire;