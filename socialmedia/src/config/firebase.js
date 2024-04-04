// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxNWG9lkstn0wWWMBGkiopNmFNadhX8BE",
  authDomain: "socialmedia-77862.firebaseapp.com",
  projectId: "socialmedia-77862",
  storageBucket: "socialmedia-77862.appspot.com",
  messagingSenderId: "742122204718",
  appId: "1:742122204718:web:04241301baa0e4c9ea39bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
