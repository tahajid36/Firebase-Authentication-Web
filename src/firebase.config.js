// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJwpqeyyPoG_vwyu3fFfH59_fHHUDG_OQ",
  authDomain: "email-password-auth-cc926.firebaseapp.com",
  projectId: "email-password-auth-cc926",
  storageBucket: "email-password-auth-cc926.firebasestorage.app",
  messagingSenderId: "888766221245",
  appId: "1:888766221245:web:68c189c2dda7f86187a0d4",
  measurementId: "G-K9LHYE99N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
