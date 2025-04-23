// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDvp4t_HcbFocPJIJA4Kgz4ZsxNwN3aAo",
  authDomain: "play-verse-ed900.firebaseapp.com",
  projectId: "play-verse-ed900",
  storageBucket: "play-verse-ed900.firebasestorage.app",
  messagingSenderId: "903232404527",
  appId: "1:903232404527:web:b2552d62fbc14906a5dada",
  measurementId: "G-27W0PD5N04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()