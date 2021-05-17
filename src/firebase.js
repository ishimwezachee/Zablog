import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCtC63nFw21XG3IXCMLPxAgxowTkLuTWZE",
    authDomain: "zablog-73a00.firebaseapp.com",
    projectId: "zablog-73a00",
    storageBucket: "zablog-73a00.appspot.com",
    messagingSenderId: "482944539028",
    appId: "1:482944539028:web:ecc12eb381c423942dd781",
    measurementId: "G-LJZMF66RXP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;