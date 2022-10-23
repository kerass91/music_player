import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { useState, useEffect } from "react";
const firebaseConfig = {
    apiKey: "AIzaSyBd7vMU8yBqa0QR4-QSVC0r2F-JwPlcbpI",
    authDomain: "music-player-27479.firebaseapp.com",
    projectId: "music-player-27479",
    storageBucket: "music-player-27479.appspot.com",
    messagingSenderId: "698539158457",
    appId: "1:698539158457:web:a46f15b7e4066f6ef62468",
    measurementId: "G-9VEJSYVTVV"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export  const authen = getAuth(app)
  export const provider = new GoogleAuthProvider();

 export const singinGoggle = () => {
    signInWithPopup(authen, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
    }

  export const singup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  export const logout = () => {
    return signOut(auth)
}


export const db = getFirestore(app);

// Custom hook

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user=> setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
} 

