"use client";
import { app } from "@/app/FirebaseConfig/Firebsae.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider(auth);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (user, userName, userPhoto) => {
    return updateProfile(user, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userInfo = {
    login,
    signUp,
    updateUserProfile,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
