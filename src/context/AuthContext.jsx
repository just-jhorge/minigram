import React, { useContext, useEffect, useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthContextWrapper = ({ children }) => {
	const [userData, setUserData] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const signup = async (values) => {
		const { email, password, username, firstName, lastName } = values;

		try {
			setLoading(false);
			const response1 = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			let user = response1.user;
			const q = query(collection(db, "users"), where("uid", "==", user.uid));
			let docs = await getDocs(q);
			if (docs.docs.length === 0) {
				const response2 = await addDoc(collection(db, "users"), {
					uid: user.uid,
					username,
					firstName,
					lastName,
					email,
					profilePicture: "",
					bio: "",
					followers: 0,
					following: 0,
					posts: 0,
				});
				user = response2;
				docs = await getDocs(q);
			}

			const data = { id: docs.docs[0].id, ...docs.docs[0].data() };
			setUserData(data);
			navigate("/app/home");

			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (values) => {
		const { email, password } = values;

		try {
			setLoading(true);
			const response = await signInWithEmailAndPassword(auth, email, password);
			const user = response.user;

			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const doc = await getDocs(q);
			const data = { id: doc.docs[0].id, ...doc.docs[0].data() };
			setUserData(data);
			navigate("/app/home");
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	const logout = async () => {
		try {
			await signOut(auth);
			setUserData(null);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const values = {
		currentUser,
		userData,
		setUserData,
		loading,
		signup,
		login,
		logout,
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	});
	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextWrapper;
