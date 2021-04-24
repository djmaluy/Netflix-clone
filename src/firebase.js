import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIqR9SLffqq2DfEinuUp06Iko0ZHfXceQ",
  authDomain: "netflix-build-clone-10eac.firebaseapp.com",
  projectId: "netflix-build-clone-10eac",
  storageBucket: "netflix-build-clone-10eac.appspot.com",
  messagingSenderId: "720753784467",
  appId: "1:720753784467:web:821e1ec6b0daaca2b23f66",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
