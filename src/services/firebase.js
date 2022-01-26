import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
   apiKey: "AIzaSyD3AWL9rySIPfbmCaAwk7KOOoq_k8p1Pk4",
   authDomain: "todo-8703e.firebaseapp.com",
   databaseURL: "https://todo-8703e-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "todo-8703e",
   storageBucket: "todo-8703e.appspot.com",
   messagingSenderId: "368963492351",
   appId: "1:368963492351:web:56f634093c4d31fd0f6fca",
   measurementId: "G-GMNQ7VNTJE"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database