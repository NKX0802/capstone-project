// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; //old
import { getStorage } from "firebase/storage"; //old
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC95lK841umejYkYUfvGMTmJpXI6-RqBw",
    authDomain: "todo-app-b073e.firebaseapp.com",
    projectId: "todo-app-b073e",
    storageBucket: "todo-app-b073e.appspot.com",
    messagingSenderId: "47554545879",
    appId: "1:47554545879:web:a775edfb478140d3a8c892"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); //old
export const storage = getStorage(app); //old