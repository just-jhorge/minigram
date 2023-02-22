import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthContextWrapper = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signup = async (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = async (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = async () => {
		return signOut(auth);
	};

	const values = { currentUser, loading, signup, login, logout };

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
