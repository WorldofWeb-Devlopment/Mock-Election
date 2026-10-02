// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBgyUqVdhVvvxYOYlaoAVCC2SoeIqH9j20",
  authDomain: "mockup-election.firebaseapp.com",
  projectId: "mockup-election",
  storageBucket: "mockup-election.firebasestorage.app",
  messagingSenderId: "32402997582",
  appId: "1:32402997582:web:64d5f46c4d92bf7afcde1f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
