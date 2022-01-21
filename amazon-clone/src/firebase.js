/*import {firebase} from "firebase";*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB1XF7F_lvLODUnU6cVirqhQWeIBV_opMU",
  authDomain: "clone-4ebd8.firebaseapp.com",
  projectId: "clone-4ebd8",
  storageBucket: "clone-4ebd8.appspot.com",
  messagingSenderId: "4263009357",
  appId: "1:4263009357:web:a8f4e4978f64ab9c175004",
  measurementId: "G-E8P5QWP6QW"
};



  
  //initialize firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth}; 