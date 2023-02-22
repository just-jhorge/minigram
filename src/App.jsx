import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Layout from "./components/Layout/Layout";
import UserProfile from "./pages/UserProfile";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/app" element={<Layout />}>
					<Route path="home" element={<Home />} />
				</Route>
				<Route path="/:id" element={<UserProfile />} />
			</Routes>
		</>
	);
}

export default App;
