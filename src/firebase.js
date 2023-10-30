// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmgrmoZCdD-RA3XqGiERwVx0bzfGwBPGw",
  authDomain: "react-login-4c726.firebaseapp.com",
  projectId: "react-login-4c726",
  storageBucket: "react-login-4c726.appspot.com",
  messagingSenderId: "942726594094",
  appId: "1:942726594094:web:7a5e583613c6ace917e9bf",
  measurementId: "G-SJHX0QDD6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider, db}
