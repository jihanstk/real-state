"use client";
import { app } from "@/app/FirebaseConfig/Firebsae.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider(auth);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userDelete = (user) => {
    return deleteUser(user);
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
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });
  }, [auth]);

  const userInfo = {
    login,
    signUp,
    updateUserProfile,
    googleLogin,
    userDelete,
    user,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
