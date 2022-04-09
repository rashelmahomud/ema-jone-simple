// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf6SauNNO_tuzBLc4sTyMKdlqdaKD51y0",
  authDomain: "ema-jone-simple-2cb83.firebaseapp.com",
  projectId: "ema-jone-simple-2cb83",
  storageBucket: "ema-jone-simple-2cb83.appspot.com",
  messagingSenderId: "507965012499",
  appId: "1:507965012499:web:61668fbacec1dc7e9a1de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;