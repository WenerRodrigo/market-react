import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-ykWvLdaG1qINyrjOG8OWLqplekUakbM",
  authDomain: "market-aa40b.firebaseapp.com",
  projectId: "market-aa40b",
  storageBucket: "market-aa40b.appspot.com",
  messagingSenderId: "526767366537",
  appId: "1:526767366537:web:156fcb248a1797b05b4158",
  measurementId: "G-CBYZW2NKYW"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };