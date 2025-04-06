// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCavHTCP-bGWka-6j-BPxSUn4nre0bm09A",
  authDomain: "ayahuasca-b9e60.firebaseapp.com",
  projectId: "ayahuasca-b9e60",
  storageBucket: "ayahuasca-b9e60.appspot.com",
  messagingSenderId: "1088932363369",
  appId: "1:1088932363369:web:ee26e29d56f546d04d36f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;