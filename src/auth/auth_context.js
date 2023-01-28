import React, { useState } from "react";
import { auth } from "../database/firebase-config";
// import { httpGetSettings } from "../hooks/request"
// import useHttp from "../hooks/useHttp"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

//describes how the context looks like
const AuthContext = React.createContext({
  user: null,
  name: "",
  email: "",
  isLoggedIn: false,
  isLoading: false,
  handleLogin: ({ email, password }) => {},
  handleLogout: () => {},
  handleRegister: ({ email, password }) => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleLogin = async ({ email, password }) => {
    alert(email + password);
    try {
      // setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      // setIsLoading(false);
    } catch (err) {
      // setIsLoading(false);
      console.log(err);
      throw new Error(err);
    }
  };

  const handleRegister = async ({ email, password }) => {
    try {
      // setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      return user;
    } catch (err) {
      // setIsLoading(false);
      console.log("error when registering user", err);
      throw new Error(err);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    //console.log("checking auth state");
    setUser(currentUser);
    //console.log(currentUser);
  });
  const contextValue = {
    user,
    name: user?.displayname,
    email: user?.email,
    isLoggedIn: user && Object.keys(user).length !== 0,
    handleLogin,
    handleLogout,
    handleRegister,
    isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
