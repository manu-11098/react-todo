import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "todo-8703e.firebaseapp.com",
   databaseURL: "https://todo-8703e-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "todo-8703e",
   storageBucket: "todo-8703e.appspot.com",
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: "1:368963492351:web:56f634093c4d31fd0f6fca",
   measurementId: "G-GMNQ7VNTJE"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database