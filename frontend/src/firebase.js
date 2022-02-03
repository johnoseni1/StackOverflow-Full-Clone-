import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCWpGJhOGOhPo8uQHjr7It7Gn_eDaB4MH0",
  authDomain: "stackoverflow-a3fad.firebaseapp.com",
  projectId: "stackoverflow-a3fad",
  storageBucket: "stackoverflow-a3fad.appspot.com",
  messagingSenderId: "401475298830",
  appId: "1:401475298830:web:50757c6cb2dde75ba4be5f"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// export default db;
