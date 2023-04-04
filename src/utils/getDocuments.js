import { collection, getDocs } from "firebase/firestore";
import db from "../config/firebaseConfig";

const getDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, "messages"));

  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

export default getDocuments;
