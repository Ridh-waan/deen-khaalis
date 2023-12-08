// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth'; // if you need authentication
import 'firebase/firestore'; // if you need Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDus6-w1aX10SzoPPKW-yMEWRhHkwf9VWY",
    authDomain: "deen-khaalis.firebaseapp.com",
    projectId: "deen-khaalis",
    storageBucket: "deen-khaalis.appspot.com",
    messagingSenderId: "503980790630",
    appId: "1:503980790630:web:72745079b1ac605c0a6ea7",
    measurementId: "G-LG31W0PX14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;