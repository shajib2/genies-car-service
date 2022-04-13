// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc0DFhPzU4ar0h8F2nXX0ygThhrNGmvPs",
    authDomain: "genies-car-services.firebaseapp.com",
    projectId: "genies-car-services",
    storageBucket: "genies-car-services.appspot.com",
    messagingSenderId: "1052128684873",
    appId: "1:1052128684873:web:44baf89b02deb67b890898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;