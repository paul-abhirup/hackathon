// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj_K1euv1KIdB13QclaDQVXVvwGHQrnsQ",
  authDomain: "waste-management-f5722.firebaseapp.com",
  projectId: "waste-management-f5722",
  storageBucket: "waste-management-f5722.appspot.com",
  messagingSenderId: "797014308649",
  appId: "1:797014308649:web:4ac700ac153f7a183be938",
  measurementId: "G-W3HCHFC731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


const analytics = getAnalytics(app);