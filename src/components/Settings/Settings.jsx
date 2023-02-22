import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Settings = ({ isOpen }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div
			className={`${
				isOpen ? "block" : "hidden"
			} container w-full absolute top-14 py-5 shadow-lg`}
		>
			<h3 className="uppercase text-gray-500 py-2 border-b border-gray-300">
				account
			</h3>
			<ul>
				<li className="py-2 border-b border-gray-300">Edit profile</li>
				<li className="py-2 border-b border-gray-300">Language</li>
				<li className="py-2 border-b border-gray-300">Your activity</li>
				<li className="py-2 border-b border-gray-300">Notifications</li>
				<li className="py-2 text-red-500">
					<button onClick={handleLogout}>Log out</button>
				</li>
			</ul>
		</div>
	);
};

export default Settings;
