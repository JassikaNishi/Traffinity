import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyD7QNXiou8McRSMhkNLO9LKCrMrqkmXOdM",
  authDomain: "sehatkal-debe5.firebaseapp.com",
  projectId: "sehatkal-debe5",
  storageBucket: "sehatkal-debe5.firebasestorage.app",
  messagingSenderId: "258053665702",
  appId: "1:258053665702:web:e491cc8824f870ca0ed567",
  measurementId: "G-0H778YLT49"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);