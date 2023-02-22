import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar/Navbar2";
import { useAuth } from "../context/AuthContext";

const UserProfile = () => {
	const { currentUser } = useAuth();

	console.log(currentUser);

	return (
		<main className="relative">
			<Navbar2 user={currentUser} />
			<Footer />
		</main>
	);
};

export default UserProfile;
