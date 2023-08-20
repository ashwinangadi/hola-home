import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
