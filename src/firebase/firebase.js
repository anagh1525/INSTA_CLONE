import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmfJ_H6mv25-e0CSg3B5R4y8jHB1Z0j3Q",
  authDomain: "insta-clone-9de4c.firebaseapp.com",
  projectId: "insta-clone-9de4c",
  storageBucket: "insta-clone-9de4c.appspot.com",
  messagingSenderId: "923423817341",
  appId: "1:923423817341:web:9647b2be6c55b1edbc7b14",
  measurementId: "G-WQ4NVRDRC9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
