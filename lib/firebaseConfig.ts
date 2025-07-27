import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
