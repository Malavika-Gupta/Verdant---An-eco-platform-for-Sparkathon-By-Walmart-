// services/firestore.js
import { db } from "./firebase";
import { collection, getDocs, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

// Get all products
export async function getAllProducts() {
  const productsCol = collection(db, "products");
  const productsSnapshot = await getDocs(productsCol);
  const productList = productsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return productList;
}

// Get single product by ID
export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Product not found");
  }
}

// Example: add new product (admin)
export async function addProduct(data) {
  const productsCol = collection(db, "products");
  const docRef = await addDoc(productsCol, data);
  return docRef.id;
}
