import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRERpN8ixhkZScZBE3EkXxNcFwjfaeTwY",
  authDomain: "wedding-bad4a.firebaseapp.com",
  projectId: "wedding-bad4a",
  storageBucket: "wedding-bad4a.firebasestorage.app",
  messagingSenderId: "1016300534301",
  appId: "1:1016300534301:web:7cbec17273ef4946fe24f4",
  measurementId: "G-L8PP7PL2CB",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
