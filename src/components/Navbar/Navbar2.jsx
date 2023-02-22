import React, { useState } from "react";
import { BsGearWide } from "react-icons/bs";
import { MdOutlinePersonAdd } from "react-icons/md";
import Settings from "../Settings/Settings";

const Navbar2 = ({ user }) => {
	const [isOpen, setIsOpen] = useState(false);

	const indexOfAt = () => {
		return user.email.indexOf("@");
	};

	const toggleSettings = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white fixed top-0 border-b border-gray-300 w-full h-14 flex items-center justify-center">
			<div className="w-full flex items-center justify-between px-4">
				<div onClick={toggleSettings}>
					<BsGearWide className="react-icon" />
				</div>
				<div>{user.email.slice(0, indexOfAt())}</div>
				<div>
					<MdOutlinePersonAdd className="react-icon" />
				</div>
			</div>
			<Settings isOpen={isOpen} />
		</nav>
	);
};

export default Navbar2;
