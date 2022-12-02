import firebase from "firebase/compat/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAarUgp4j-j2z30WG4kzg4fNMUJ6N8GaHw",
  authDomain: "beta-amzn.firebaseapp.com",
  projectId: "beta-amzn",
  storageBucket: "beta-amzn.appspot.com",
  messagingSenderId: "865317782018",
  appId: "1:865317782018:web:6181bc40d8e6f9208f5d1b",
  measurementId: "G-CWV02JG78W",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);

const signInWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider());
};

const logOut = () => {
  signOut(auth);
};

const db = app.firestore();

export { firebase, auth, signInWithGoogle, logOut, db };
