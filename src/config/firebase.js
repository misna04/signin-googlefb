// import firebase from "firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOjolUNcdcgvCYlq8yXLUv2R6bw3aXaD4",
    authDomain: "myexploreapp.firebaseapp.com",
    projectId: "myexploreapp",
    storageBucket: "myexploreapp.appspot.com",
    messagingSenderId: "1016336403190",
    appId: "1:1016336403190:web:de92a9e10cec9da0713ad7",
    measurementId: "G-J8QCD92VJY"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// firebase.initializeApp(firebaseConfig)

export { app }
