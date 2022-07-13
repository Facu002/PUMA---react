// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection,getDocs, getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6k8VMx_GFmj_GDBbGpktmnNCJgEzZcNA",
    authDomain: "clonpuma.firebaseapp.com",
    projectId: "clonpuma",
    storageBucket: "clonpuma.appspot.com",
    messagingSenderId: "867402397552",
    appId: "1:867402397552:web:647b3781516caeeac541b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };