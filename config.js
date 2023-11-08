import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBo86Ur4x5QJ2BPRmqTEZMXEpoUqtHvuLk",
  authDomain: "projeto-67-29e87.firebaseapp.com",
  projectId: "projeto-67-29e87",
  storageBucket: "projeto-67-29e87.appspot.com",
  messagingSenderId: "365270548969",
  appId: "1:365270548969:web:f72a6bd9e08809e00b4b78",
  measurementId: "G-HRDL6NJ3PN"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
