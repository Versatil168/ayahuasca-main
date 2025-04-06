// src/services/firebase.ts
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  Timestamp,
  DocumentData
} from "firebase/firestore";

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
const db = getFirestore(app);

// Testimonial interface
export interface Testimonial {
  id?: string;
  name: string;
  content: string;
  rating: number;
  createdAt?: Timestamp;
}

// Add a new testimonial
export const addTestimonial = async (testimonial: Omit<Testimonial, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "testimonials"), {
      ...testimonial,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding testimonial:", error);
    throw error;
  }
};

// Subscribe to testimonials (real-time updates)
export const subscribeToTestimonials = (
  callback: (testimonials: Testimonial[]) => void
) => {
  const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
  
  return onSnapshot(q, (querySnapshot) => {
    const testimonials: Testimonial[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as DocumentData;
      testimonials.push({
        id: doc.id,
        name: data.name,
        content: data.content,
        rating: data.rating,
        createdAt: data.createdAt
      });
    });
    callback(testimonials);
  });
};

export default app;