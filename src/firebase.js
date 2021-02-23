import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwW2gEQEjgztSm2QhOLs2V81-6GPFV6_c",
  authDomain: "todo-app2-b5ce1.firebaseapp.com",
  projectId: "todo-app2-b5ce1",
  storageBucket: "todo-app2-b5ce1.appspot.com",
  messagingSenderId: "568101045122",
  appId: "1:568101045122:web:15b398040077c7dc17859b",
  measurementId: "G-KDKSJV39W9"
}
) ;
const db = firebaseApp.firestore();

  export default db;