import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
	return (
		<main className="relative">
			<Navbar />
			<div className="my-14">
				<Outlet />
			</div>
			<Footer />
		</main>
	);
};

export default Layout;
