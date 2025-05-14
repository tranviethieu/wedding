// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCRERpN8ixhkZScZBE3EkXxNcFwjfaeTwY",
  authDomain: "wedding-bad4a.firebaseapp.com",
  projectId: "wedding-bad4a",
  storageBucket: "wedding-bad4a.appspot.com",
  messagingSenderId: "1016300534301",
  appId: "1:1016300534301:web:7cbec17273ef4946fe24f4",
  measurementId: "G-L8PP7PL2CB",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
