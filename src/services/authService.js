import { auth, db } from "../firebase/firebase";
import {
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  updateDoc,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

// Signup
export const signupUser = async (name, email, password) => {

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await sendEmailVerification(user);

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
    role: "user",
    createdAt: serverTimestamp(),
  });

  return user;
};

// Login
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userCredential.user.emailVerified) {
    await signOut(auth);
    throw new Error("Please verify your email before logging in.");
  }

  return userCredential;
};

// Logout
export const logoutUser = async () => {
  await signOut(auth);
};

// Update Profile Name
export const updateProfileName = async (uid, newName) => {
  const userRef = doc(db, "users", uid);

  await updateDoc(userRef, {
    name: newName,
  });
};

// Send Password Reset Email
export const changePassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};