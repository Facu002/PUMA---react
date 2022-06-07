// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection,getDocs, getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };