import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
  apiKey: "AIzaSyBvwJa9iufkhVALKNDuN5WpGX-5zxLd3yU",
  authDomain: "banco-de-dados-firestore-d58fa.firebaseapp.com",
  projectId: "banco-de-dados-firestore-d58fa",
  storageBucket: "banco-de-dados-firestore-d58fa.appspot.com",
  messagingSenderId: "913500519837",
  appId: "1:913500519837:web:e60e195e7ad3441dd9c374",
  measurementId: "G-YCQJMXGE5T"
};
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
