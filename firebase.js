// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdaJVM0mwu8v10pEKgco20hF8gvMFTIyc",
  authDomain: "notes-fca4c.firebaseapp.com",
  projectId: "notes-fca4c",
  storageBucket: "notes-fca4c.appspot.com",
  messagingSenderId: "238682488614",
  appId: "1:238682488614:web:89a916cc1a8854ed484be7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
