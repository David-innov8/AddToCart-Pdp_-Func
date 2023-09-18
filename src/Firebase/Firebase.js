// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_KjG95cM1nSLVIal4cfMRLeuzhV_tGQ",
  authDomain: "pdppage.firebaseapp.com",
  projectId: "pdppage",
  storageBucket: "pdppage.appspot.com",
  messagingSenderId: "501749455115",
  appId: "1:501749455115:web:603e929994ddb773932a0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)