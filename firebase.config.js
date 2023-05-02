// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzkWt2oWITT9vGFttQsjuSiq7UYR6yEjQ",
  authDomain: "food-hunt-auth.firebaseapp.com",
  projectId: "food-hunt-auth",
  storageBucket: "food-hunt-auth.appspot.com",
  messagingSenderId: "250062342478",
  appId: "1:250062342478:web:1fea2dc4cf64b83d6bb61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;