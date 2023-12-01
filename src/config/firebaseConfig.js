import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/storage";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAnnuEKDwJFF8QouhP_HJoofgDqPb2QYl4",
  authDomain: "cbhouse-7ba09.firebaseapp.com",
  projectId: "cbhouse-7ba09",
  storageBucket: "cbhouse-7ba09.appspot.com",
  messagingSenderId: "89976032445",
  appId: "1:89976032445:web:dc22dcbb491caed9d5bbd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const detabase = getFirestore(app);
const auth = getAuth(app); 

export {db, app, auth};