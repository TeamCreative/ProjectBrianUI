
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDxeH8Cvip1bSdlaOJv2GyQksxRr1Y2Jgo",
    authDomain: "twitterclone-73c70.firebaseapp.com",
    databaseURL: "https://twitterclone-73c70.firebaseio.com",
    projectId: "twitterclone-73c70",
    storageBucket: "twitterclone-73c70.appspot.com",
    messagingSenderId: "181573575438",
    appId: "1:181573575438:web:345fa6aa397206e3416d5f",
    measurementId: "G-FZVZRN0GMK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;