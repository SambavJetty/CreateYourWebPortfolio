// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCekcvvWA7rj9KX2GngxB2QAesk_LM83GM",
  authDomain: "createyourportfolio-59c25.firebaseapp.com",
  projectId: "createyourportfolio-59c25",
  storageBucket: "createyourportfolio-59c25.appspot.com",
  messagingSenderId: "820872966737",
  appId: "1:820872966737:web:033493a1353b187d8b3e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);