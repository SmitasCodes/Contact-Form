import db from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const addDocument = async (nameInput, emailInput, messageInput) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    });
    alert("Document added");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addDocument;
