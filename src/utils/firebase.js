// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkHSXVvJtCwdRlJYrAOL4rZ0w0MijiJi0",
  authDomain: "netflixgpt-b62cb.firebaseapp.com",
  projectId: "netflixgpt-b62cb",
  storageBucket: "netflixgpt-b62cb.appspot.com",
  messagingSenderId: "1005111758046",
  appId: "1:1005111758046:web:a3dbba02e628de2274464f",
  measurementId: "G-6B3XBL2WJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  export const auth = getAuth()