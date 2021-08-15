import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDQZBHUOZajWoymfKsfolrzM00pDNt1PP8",
    authDomain: "todo-app-cp-6d366.firebaseapp.com",
    projectId: "todo-app-cp-6d366",
    storageBucket: "todo-app-cp-6d366.appspot.com",
    messagingSenderId: "1092489567309",
    appId: "1:1092489567309:web:8eb82a534729821e3dd004",
    measurementId: "G-BDL1E7R6Z8"
  
    }
)
const db = firebaseApp.firestore();

export default db;
