// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB57X06jI1pXwXsvYmywAide3soE_Xx09c",
  authDomain: "infinite-funserver.firebaseapp.com",
  projectId: "infinite-funserver",
  storageBucket: "infinite-funserver.appspot.com",
  messagingSenderId: "699613138650",
  appId: "1:699613138650:web:76bdfb8d69b652309edfe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
