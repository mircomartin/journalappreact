import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPVREPK6_MKRLUgO0kRvvWrYYsFecQx-0",
    authDomain: "journalcasa-b3e3a.firebaseapp.com",
    databaseURL: "https://journalcasa-b3e3a.firebaseio.com",
    projectId: "journalcasa-b3e3a",
    storageBucket: "journalcasa-b3e3a.appspot.com",
    messagingSenderId: "153792280621",
    appId: "1:153792280621:web:be3b432d76d7c35107e0a4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Base datos
const db = firebase.firestore(); 

//Habilito el registro via google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

export {
    db,
    googleAuthProvider,
    firebase
}