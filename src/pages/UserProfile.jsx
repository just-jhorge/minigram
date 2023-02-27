import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar/Navbar2";
import { useAuth } from "../context/AuthContext";
import user from "../assets/blank-pp.webp";
import { BsGrid3X3, BsBookmark, BsViewList } from "react-icons/bs";
import { AiOutlineTag } from "react-icons/ai";
import UserStats from "../components/UserStats/UserStats";
import { Link } from "react-router-dom";

const UserProfile = () => {
	const { userData } = useAuth();

	return (
		<main className="relative">
			<Navbar2 user={userData} />
			<div className="container mt-16 mb-3">
				<div className="h-24 flex items-center justify-between gap-5 mb-2">
					<div className="h-20 w-20 rounded-full">
						<img
							src={userData.profilePicture ? userData.profilePicture : user}
							className="h-full w-full rounded-full object-cover"
							alt=""
						/>
					</div>
					<div className="h-full flex-1 flex flex-col items-start justify-center">
						<p className="text-xl font-medium mb-2">{userData.username}</p>
						<Link className="w-full" to="/update">
							<button className="w-full bg-gray-200 py-1 font-medium rounded-md">
								Edit Profile
							</button>
						</Link>
					</div>
				</div>
				<div>
					<h3 className="text-sm font-medium">{userData.firstName}</h3>
					<p className="text-sm">{userData.bio ? userData.bio : ""}</p>
				</div>
			</div>
			<div className="border-t border-b border-gray-300 grid grid-cols-3 py-2.5">
				<UserStats number={userData.posts} description="posts" />
				<UserStats number={userData.followers} description="followers" />
				<UserStats number={userData.following} description="following" />
			</div>
			<div className="flex items-center justify-evenly py-3">
				<BsGrid3X3 className="text-xl text-blue-500" />
				<BsViewList className="text-xl" />
				<BsBookmark className="text-xl" />
				<AiOutlineTag className="text-xl" />
			</div>
			<Footer />
		</main>
	);
};

export default UserProfile;
