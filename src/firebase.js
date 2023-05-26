// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo2wLVvmX6j-E4Tm4VK91aHEz7xMP5-SY",
  authDomain: "react-chat-c7a23.firebaseapp.com",
  projectId: "react-chat-c7a23",
  storageBucket: "react-chat-c7a23.appspot.com",
  messagingSenderId: "548326395477",
  appId: "1:548326395477:web:9e975dfb709f7fafe28edc",
  measurementId: "G-4MEKHMN32H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);