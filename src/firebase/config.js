import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJvdTXPuHI3q4moYM_jP7F06qaZ9N19C8",
    authDomain: "elin-limitlessapp.firebaseapp.com",
    databaseURL: "https://elin-limitlessapp-default-rtdb.firebaseio.com",
    projectId: "elin-limitlessapp",
    storageBucket: "elin-limitlessapp.appspot.com",
    messagingSenderId: "909918339571",
    appId: "1:909918339571:web:864b8746a1ef8db8f11286"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const proStorage = firebase.storage();
  const proFireStore = firebase.firestore();

  export { proStorage, proFireStore};