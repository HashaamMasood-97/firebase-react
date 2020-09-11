import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBrCEWbVcunWjK_GZ7fgQnuQo9Gv10uEOY",
    authDomain: "react-crud-7ca4e.firebaseapp.com",
    databaseURL: "https://react-crud-7ca4e.firebaseio.com",
    projectId: "react-crud-7ca4e",
    storageBucket: "react-crud-7ca4e.appspot.com",
    messagingSenderId: "582561820943",
    appId: "1:582561820943:web:8e0f0ff653a391efd28e7a"
  };
  // Initialize Firebase
 var fire= firebase.initializeApp(firebaseConfig);
 var firebaseDb=fire.database().ref();


export{
 firebaseDb,
 fire
}







  