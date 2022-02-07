import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpOt9HUS8qQsrvXGuJB-YcCPn1dcctGBU",
  authDomain: "chat-kor.firebaseapp.com",
  databaseURL: "https://chat-kor-default-rtdb.firebaseio.com",
  projectId: "chat-kor",
  storageBucket: "chat-kor.appspot.com",
  messagingSenderId: "454206852579",
  appId: "1:454206852579:web:c2a7c4fe0d6779a6e764d6",
  measurementId: "G-JVFW6HQXFE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
