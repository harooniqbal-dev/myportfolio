import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBc-DGTAGCB-o6FDNxHtPBF8BOC_9qSjHQ",
    authDomain: "myportfolio-46a31.firebaseapp.com",
    projectId: "myportfolio-46a31",
    storageBucket: "myportfolio-46a31.appspot.com",
    messagingSenderId: "943077616775",
    appId: "1:943077616775:web:22e948d8104beaf038dc22",
    measurementId: "G-KJPYP9B6MW"
  };
const firabaseApp=firebase.initializeApp(firebaseConfig)
const db=firabaseApp.firestore();
export {db}