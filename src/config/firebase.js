import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARh11-L7nTbZMLepWJLyAb5JqDVqA1dfU",
  authDomain: "tararani-cc5a5.firebaseapp.com",
  projectId: "tararani-cc5a5",
  storageBucket: "tararani-cc5a5.appspot.com",
  messagingSenderId: "322977379882",
  appId: "1:322977379882:web:8e84e0a2c072b1e0c4f553",
  measurementId: "G-8YKQ75QGST"
};

firebase.initializeApp(firebaseConfig);

export default firebase;