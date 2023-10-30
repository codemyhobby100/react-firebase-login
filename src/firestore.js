import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
