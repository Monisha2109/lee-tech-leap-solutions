// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf_asScTl7YoAUFVmVCP4P_J-hrhHSo3w",
  authDomain: "ltls-ee73b.firebaseapp.com",
  projectId: "ltls-ee73b",
  storageBucket: "ltls-ee73b.firebasestorage.app",
  messagingSenderId: "818985056595",
  appId: "1:818985056595:web:8807996fe509870e5289a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;