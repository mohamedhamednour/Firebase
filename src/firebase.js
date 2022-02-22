// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app"
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAknabXTolNu0RocGnYVvgUdeaKINmYgJg",
  authDomain: "auth-mh.firebaseapp.com",
  projectId: "auth-mh",
  storageBucket: "auth-mh.appspot.com",
  messagingSenderId: "817609471128",
  appId: "1:817609471128:web:cc226d85cad6c73604cced"
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
