import { db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const sendMessage = async (data) => {

  await addDoc(
    collection(db, "messages"),
    {
      ...data,
      status: "Unread",
      createdAt: serverTimestamp(),
    }
  );

};