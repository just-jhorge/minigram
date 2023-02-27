import React from "react";
import { AiFillHome, AiOutlineSearch, AiOutlineMessage } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Footer = () => {
	const { userData } = useAuth();

	return (
		<footer className="fixed bottom-0 bg-white border-t border-gray-300 w-full h-16 flex items-center justify-center">
			<div className="container flex items-center justify-between px-7">
				<Link to="/app/home">
					<AiFillHome className="react-icon" />
				</Link>
				<div>
					<AiOutlineSearch className="react-icon" />
				</div>
				<div>
					<BiMoviePlay className="react-icon" />
				</div>
				<div className="relative">
					<AiOutlineMessage className="react-icon" />
					<div className="absolute top-0 right-0 text-xs w-2 h-2 rounded-full bg-red-500 text-white flex items-center justify-center" />
				</div>
				<Link to={`/${userData.username}`}>
					<BiUserCircle className="react-icon" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
