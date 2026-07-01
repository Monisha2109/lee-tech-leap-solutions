import { db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// Save Internship Application
export const applyInternship = async (data) => {
  await addDoc(
    collection(db, "internshipApplications"),
    {
      ...data,
      status: "Applied",
      createdAt: serverTimestamp(),
    }
  );
};

// Check if already applied
export const checkAlreadyApplied = async (
  userId,
  internship
) => {

  const q = query(
    collection(db, "internshipApplications"),
    where("userId", "==", userId),
    where("internship", "==", internship)
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
};