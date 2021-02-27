// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmxLPQJP-B1Hdff4c5hWnWYoXPF_o_lPs",
  authDomain: "listadosuper-6cfce.firebaseapp.com",
  projectId: "listadosuper-6cfce",
  storageBucket: "listadosuper-6cfce.appspot.com",
  messagingSenderId: "912098335718",
  appId: "1:912098335718:web:25e25a298e109827855427",
  measurementId: "G-1CPKXVG1JH"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const db = firebase.firestore();

export {
  db
}