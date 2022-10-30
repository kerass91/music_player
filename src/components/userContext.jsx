import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import axios from "axios";

import { onSnapshot, doc } from "firebase/firestore";


export const AuthContext = createContext();

const userContext = ({ children }) => {
   
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [watchlist, setWatchlist] = useState([]);

  // watchlist
/*   useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      const unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]); */

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  
  
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        watchlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default userContext;

/* export const CryptoState = () => {
  return useContext(Crypto);
}; */