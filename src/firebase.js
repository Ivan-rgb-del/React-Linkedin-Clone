import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEDUWNMAGMyeK522wel2VTo1Um4FwI2ds",
  authDomain: "linkedin-clone-46415.firebaseapp.com",
  projectId: "linkedin-clone-46415",
  storageBucket: "linkedin-clone-46415.appspot.com",
  messagingSenderId: "783687230452",
  appId: "1:783687230452:web:45f30e6fe173a1cb8d4fa1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };