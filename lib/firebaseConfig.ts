import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "scrapconnect-7877a.firebaseapp.com",
  projectId: "scrapconnect-7877a",
  storageBucket: "scrapconnect-7877a.firebasestorage.app",
  messagingSenderId: "498542674850",
  appId: "1:498542674850:web:cc5024c22e15a0771ee8fb",
  measurementId: "G-ELB3PJGH0F"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
