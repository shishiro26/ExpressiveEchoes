// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAts-mCBoTq6N3YGrOHNxbXn2QdZ5L-Om8",
  authDomain: "expressiveechoes.firebaseapp.com",
  projectId: "expressiveechoes",
  storageBucket: "expressiveechoes.appspot.com",
  messagingSenderId: "457546457328",
  appId: "1:457546457328:web:b12bee2462ab9d9b43a235",
  measurementId: "G-96NCDZ9454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
