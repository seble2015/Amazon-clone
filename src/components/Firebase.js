
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAAtszlBfpPzOzlxGFzwz6BMaMIM0DOd0c",
  authDomain: "clone-1c462.firebaseapp.com",
  projectId: "clone-1c462",
  storageBucket: "clone-1c462.appspot.com",
  messagingSenderId: "924174573582",
  appId: "1:924174573582:web:534c25445a70b4b5741c5f",
  measurementId: "G-V7SYP0HE0T",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db =app.firestore();
export {db,auth};