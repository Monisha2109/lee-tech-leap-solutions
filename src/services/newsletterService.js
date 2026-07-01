import { db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const subscribeNewsletter = async (email) => {
  // Check if email already exists
  const q = query(
    collection(db, "newsletter"),
    where("email", "==", email)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    throw new Error("You are already subscribed.");
  }

  // Save to Firestore
  await addDoc(collection(db, "newsletter"), {
    email,
    createdAt: serverTimestamp(),
  });
};