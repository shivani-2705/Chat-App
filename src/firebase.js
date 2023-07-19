
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBRe6nYC3u156hSrGjCDGEWQ7mqHcjGf6A",
  authDomain: "chat-24a5b.firebaseapp.com",
  projectId: "chat-24a5b",
  storageBucket: "chat-24a5b.appspot.com",
  messagingSenderId: "427133456458",
  appId: "1:427133456458:web:c452460defbf2de85516b3",
  measurementId: "G-BF85FLPJZ0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
