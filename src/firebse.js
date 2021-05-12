import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEunNz_3sQ5tNb2nGcDkwLiLsq4B60TUw",
    authDomain: "fb-clone-3a0d8.firebaseapp.com",
    projectId: "fb-clone-3a0d8",
    storageBucket: "fb-clone-3a0d8.appspot.com",
    messagingSenderId: "270247837538",
    appId: "1:270247837538:web:478435692b402f286a763b",
    measurementId: "G-N1NB12VZMZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db