// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdtV70au2w8Gg-vzTZ-nY3tBvQMcIdjy8",
  authDomain: "portfolio2-f1d00.firebaseapp.com",
  projectId: "portfolio2-f1d00",
  storageBucket: "portfolio2-f1d00.appspot.com",
  messagingSenderId: "445519222047",
  appId: "1:445519222047:web:2bc9af9ab873fb06360c2a",
  measurementId: "G-XYFXG6KZ4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);