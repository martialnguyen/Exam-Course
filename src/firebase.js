// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU0CWzzBbiWC0QVV6XHgMCLyCNx2WnzrQ",
  authDomain: "food-app-faef0.firebaseapp.com",
  projectId: "food-app-faef0",
  storageBucket: "food-app-faef0.firebasestorage.app",
  messagingSenderId: "43708571186",
  appId: "1:43708571186:web:c2ce34563da7f8f6de662b",
  measurementId: "G-GPVJ8FPHPH"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Thao tác với Firestore
const foodCollection = collection(db, "food");

const addFood = async (food) => {
  await addDoc(foodCollection, food);
};

const getFoods = async () => {
  const snapshot = await getDocs(foodCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const deleteFood = async (id) => {
  await deleteDoc(doc(db, "food", id));
};

const updateFood = async (id, updatedFood) => {
  try {
    const foodDoc = doc(db, "food", id);
    await updateDoc(foodDoc, updatedFood);
    console.log("Cập nhật thành công!");
  } catch (error) {
    console.error("Lỗi khi cập nhật:", error);
  }
};

export { db, addFood, getFoods, deleteFood, updateFood };
