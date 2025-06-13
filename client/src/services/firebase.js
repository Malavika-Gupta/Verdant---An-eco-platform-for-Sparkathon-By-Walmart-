// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5Mr7Po3Zyi3v1yyoTuTu4vGnG8t8t7CA",
  authDomain: "sparkathon-retail.firebaseapp.com",
  projectId: "sparkathon-retail",
  storageBucket: "sparkathon-retail.firebasestorage.app",
  messagingSenderId: "735594529583",
  appId: "1:735594529583:web:f5f58d1b2ba9996e5297da",
  measurementId: "G-XYZGLDBM18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
