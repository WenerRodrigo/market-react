import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzHfbqEVh3uELe4jueh5gVu1xiqMOTnmw",
  authDomain: "shop-demo-2348b.firebaseapp.com",
  projectId: "shop-demo-2348b",
  storageBucket: "shop-demo-2348b.appspot.com",
  messagingSenderId: "48571669007",
  appId: "1:48571669007:web:ac64330ae6bea405e6217a",
  measurementId: "G-7LGGE580RF",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };