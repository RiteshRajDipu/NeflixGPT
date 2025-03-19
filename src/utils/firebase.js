// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA93UPDy7RBZnA1gKBD81YLlV1QGKv_dI",
  authDomain: "netflixgpt-33872.firebaseapp.com",
  projectId: "netflixgpt-33872",
  storageBucket: "netflixgpt-33872.firebasestorage.app",
  messagingSenderId: "529151657912",
  appId: "1:529151657912:web:c7c09cfbf9ff9b6301b14d",
  measurementId: "G-VLBN93Q2W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();