// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbX8U_52sh4Wd7BxO-n3AOWhFFLY5w7rw",
    authDomain: "fir-practice-f8242.firebaseapp.com",
    projectId: "fir-practice-f8242",
    storageBucket: "fir-practice-f8242.appspot.com",
    messagingSenderId: "232284515398",
    appId: "1:232284515398:web:a034731fbca89db5cc6e47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;