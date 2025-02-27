

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVBdFew3Q3j8hAbKutCkNsvkxNnQ194lI",
  authDomain: "dulshan-me.firebaseapp.com",
  projectId: "dulshan-me",
  storageBucket: "dulshan-me.firebasestorage.app",
  messagingSenderId: "724267257759",
  appId: "1:724267257759:web:ed4df166891e2e0feb77aa",
  measurementId: "G-DP34069TCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);