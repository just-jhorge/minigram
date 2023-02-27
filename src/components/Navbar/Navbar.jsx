import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GoDiffAdded } from "react-icons/go";

const Navbar = () => {
	return (
		<nav className="bg-white fixed top-0 border-b border-gray-300 w-full h-14 flex items-center justify-center">
			<div className="w-full flex items-center justify-between px-4">
				<h3 className="font-bold">Minigram</h3>
				<div className="flex items-center justify-center gap-4">
					<div>
						<GoDiffAdded className="react-icon" />
					</div>
					<div className="relative">
						<AiOutlineHeart className="react-icon" />
						<div className="absolute top-0 right-0 text-xs w-2 h-2 rounded-full bg-red-500 text-white flex items-center justify-center" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
