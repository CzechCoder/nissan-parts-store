import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

// save a new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "carItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// get all foods items
export const getAllCarItems = async () => {
    const items = await getDocs(
        query(collection(firestore, 'carItems'), orderBy('id', 'desc'))
    );
    return items.docs.map((doc) => doc.data());
};