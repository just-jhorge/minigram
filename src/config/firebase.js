import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDyUa4Mzbn8QNu_oerH6ApvcRC5wpz_NZE",
	authDomain: "mim-ab0fa.firebaseapp.com",
	projectId: "mim-ab0fa",
	storageBucket: "mim-ab0fa.appspot.com",
	messagingSenderId: "896948630778",
	appId: "1:896948630778:web:56a3892f4e25cb54834543",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
