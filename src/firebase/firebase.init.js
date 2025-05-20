// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1TZcjLESZN02IivZZI3L55GlCl7xgJEw",
  authDomain: "coffee-shop-app-7870d.firebaseapp.com",
  projectId: "coffee-shop-app-7870d",
  storageBucket: "coffee-shop-app-7870d.firebasestorage.app",
  messagingSenderId: "638870775635",
  appId: "1:638870775635:web:13d79fc546293b695763a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);