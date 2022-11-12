import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCElysMBJH1Zoi0Y0lLLbJgIzFspset0kw",
  authDomain: "whatspp-clone-65f4b.firebaseapp.com",
  projectId: "whatspp-clone-65f4b",
  storageBucket: "whatspp-clone-65f4b.appspot.com",
  messagingSenderId: "866243615493",
  appId: "1:866243615493:web:2c5332847b66c0e86bf56c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth }; 
export default db;