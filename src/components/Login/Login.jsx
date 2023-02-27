import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { Formik, Form } from "formik";
import { useAuth } from "../../context/AuthContext";
import { Input } from "../FormInput/FormInput";
import GooglePlay from "../../assets/google-play.png";
import Microsoft from "../../assets/microsoft.png";

const Login = () => {
	const { login, loading } = useAuth();

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email("Invalid email address").required("Required!"),
		password: Yup.string().required("Required!"),
	});

	return (
		<main className="container flex flex-col items-center justify-evenly h-screen w-full">
			<div className="w-3/4 flex flex-col items-center justify-center">
				<h3 className="text-2xl font-bold mb-16">Minigram</h3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={login}
				>
					<Form className="flex flex-col w-full gap-4">
						<Input type="email" name="email" placeholder="Email" />
						<Input type="password" name="password" placeholder="Password" />
						<button type="submit" className="form-btn">
							{loading ? "Loading..." : "Log in"}
						</button>
					</Form>
				</Formik>
				<div className="w-full flex items-center justify-center gap-3 my-5">
					<div className="w-full h-[1px] bg-gray-300" />
					<p className="uppercase text-gray-400">or</p>
					<div className="w-full h-[1px] bg-gray-300" />
				</div>
				<div className="mb-5 flex items-center gap-2 text-sm text-blue-900">
					<AiFillFacebook className="react-icon" />
					<p>Log in with Facebook</p>
				</div>
				<p className="text-sm text-blue-800">Forgot password?</p>
			</div>
			<div>
				<p>
					Don't have an account?{" "}
					<Link to="/signup" className="text-blue-500 font-semibold">
						Sign up
					</Link>
				</p>
			</div>
			<div>
				<p className="text-sm text-center mb-3">Get the app.</p>
				<div className="flex items-center gap-3">
					<img src={GooglePlay} className="h-10" alt="Google Play" />
					<img src={Microsoft} className="h-10" alt="Microsoft" />
				</div>
			</div>
			<div className="w-[90%] text-gray-500 text-xs">
				<div className="w-full flex items-center justify-between mb-2">
					<p>MiniG</p>
					<p>About</p>
					<p>Blog</p>
					<p>Jobs</p>
					<p>Help</p>
					<p>API</p>
					<p>Privacy</p>
					<p>Terms</p>
				</div>
				<div className="w-full flex items-center justify-center gap-3 mb-2">
					<p>Top Accounts</p>
					<p>Locations</p>
					<p>Minigram Lite</p>
				</div>
				<div className="center-items ">
					<p>Contact Uploading &amp; Non-users</p>
				</div>
			</div>
		</main>
	);
};

export default Login;
