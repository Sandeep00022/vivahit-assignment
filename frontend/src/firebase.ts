// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "photo-video-gallery.firebaseapp.com",
  projectId: "photo-video-gallery",
  storageBucket: "photo-video-gallery.appspot.com",
  messagingSenderId: "474782928341",
  appId: "1:474782928341:web:c8cc262d53418977f0415c",
  measurementId: "G-MBD7BT5T0C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
