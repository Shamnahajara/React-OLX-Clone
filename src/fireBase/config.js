import firebase from 'firebase';
import 'firebase/auth' ;
import 'firebase/firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBbl2rQ5YQw3isQ9m8fwsR7_Q8dFT1FL0g",
    authDomain: "fir-2746b.firebaseapp.com",
    projectId: "fir-2746b",
    storageBucket: "fir-2746b.appspot.com",
    messagingSenderId: "240455340671",
    appId: "1:240455340671:web:776f33b731c88b52fbe54a",
    measurementId: "G-CYB2G3TDEB"
  };

export default firebase.initializeApp(firebaseConfig);