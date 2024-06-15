// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt7m2KN0ISxl69uuQ8KvemJrIWVveebVw",
  authDomain: "login-cheff-amigo.firebaseapp.com",
  projectId: "login-cheff-amigo",
  storageBucket: "login-cheff-amigo.appspot.com",
  messagingSenderId: "976243033625",
  appId: "1:976243033625:web:0282c21a924e8ba851cc88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
