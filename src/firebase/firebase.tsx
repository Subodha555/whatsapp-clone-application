import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-q5e7m8oFuIaa3dJ0S7YPsfMFXsgV4S8",
  authDomain: "whatsapp-clone-a8201.firebaseapp.com",
  projectId: "whatsapp-clone-a8201",
  storageBucket: "whatsapp-clone-a8201.appspot.com",
  messagingSenderId: "312211540857",
  appId: "1:312211540857:web:217a393b32e4d524927da8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
