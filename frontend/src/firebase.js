import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAqVTd8HUqChhJTjMjYDGtQ3I44jGU08yE",
  authDomain: "ai-powered-diet-plan-sysyem.firebaseapp.com",
  projectId: "ai-powered-diet-plan-sysyem",
  storageBucket: "ai-powered-diet-plan-sysyem.firebasestorage.app",
  messagingSenderId: "673424144116",
  appId: "1:673424144116:web:37a9031aa7a113160290a1",
  measurementId: "G-6TH1WJMW40"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);