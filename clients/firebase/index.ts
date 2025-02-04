// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-UnMLkeyXkkaYOCqGrUndL04yHTry5A0',
  authDomain: 'loyal-flames-287200.firebaseapp.com',
  projectId: 'loyal-flames-287200',
  storageBucket: 'loyal-flames-287200.firebasestorage.app',
  messagingSenderId: '429311515736',
  appId: '1:429311515736:web:7199a7392e4848176efe2d',
  measurementId: 'G-28591N427Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
export const initAuth = () => {
  return getAuth(app);
};

export const getCurrentUser = () => {
  const auth = getAuth(app);

  return auth.currentUser; // This will be the user object or null
};

export const db = getFirestore(app);
