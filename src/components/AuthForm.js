import React, { useEffect, useState } from "react";

// import { authenti } from "../database/firebase-config";
import  { auth } from "../database/firebase-config";


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
