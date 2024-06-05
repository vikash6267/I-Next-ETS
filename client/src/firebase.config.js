import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDl8zSbGbiIxFSqbJEcI9iUGd-BxNAsFlw",
  authDomain: "i-next-f32c2.firebaseapp.com",
  projectId: "i-next-f32c2",
  storageBucket: "i-next-f32c2.appspot.com",
  messagingSenderId: "774913226444",
  appId: "1:774913226444:web:41f9b02a2a7cdadbfdf469",
  measurementId: "G-PP536Y7GQD"
};


const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app) ; 