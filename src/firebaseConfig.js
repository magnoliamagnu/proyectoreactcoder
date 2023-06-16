import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCTtUkuWmwihqXRibh-U4otryWau6vAnkI",
  authDomain: "juanperezvintage-27fbb.firebaseapp.com",
  projectId: "juanperezvintage-27fbb",
  storageBucket: "juanperezvintage-27fbb.appspot.com",
  messagingSenderId: "926965411556",
  appId: "1:926965411556:web:717af299c9717097a786f1"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)