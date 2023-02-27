import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import GooglePlay from "../../assets/google-play.png";
import Microsoft from "../../assets/microsoft.png";
import { Input } from "../FormInput/FormInput";
import { footerContent1, footerContent2 } from "../../data/data";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
	const { signup, loading } = useAuth();

	const initialValues = {
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string()
			.min(4, "Must be at least 4 characters")
			.max(20, "Must be at most 20 characters")
			.required("Required!"),
		firstName: Yup.string()
			.max(20, "Cannot be more than 20 characters")
			.required("Required!"),
		lastName: Yup.string()
			.max(25, "Cannot be more than 25 characters")
			.required("Required!"),
		email: Yup.string().email("Invalid email address").required("Required!"),
		password: Yup.string()
			.min(6, "Must be at least 6 characters")
			.required("Required!"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password")], "Passwords do not match")
			.required("Required!"),
	});

	return (
		<main className="container flex flex-col items-center justify-evenly h-screen w-full">
			<div className="w-3/4 flex flex-col items-center justify-center">
				<h3 className="text-2xl font-bold mb-16">Minigram</h3>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={signup}
				>
					<Form className="flex flex-col w-full gap-4">
						<Input type="text" name="username" placeholder="Username" />
						<Input type="text" name="firstName" placeholder="First Name" />
						<Input type="text" name="lastName" placeholder="Last Name" />
						<Input type="email" name="email" placeholder="Email" />
						<Input type="password" name="password" placeholder="Password" />
						<Input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
						/>
						<button type="submit" className="form-btn">
							{loading ? "Loading..." : "Sign up"}
						</button>
					</Form>
				</Formik>
			</div>
			<div>
				<p>
					Already have an account?{" "}
					<Link to="/" className="text-blue-500 font-semibold">
						Log in
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
					{footerContent1.map((item, idx) => (
						<p key={idx}>{item}</p>
					))}
				</div>
				<div className="w-full flex items-center justify-center gap-3 mb-2">
					{footerContent2.map((item, idx) => (
						<p key={idx}>{item}</p>
					))}
				</div>
				<div className="center-items ">
					<p>Contact Uploading &amp; Non-users</p>
				</div>
			</div>
		</main>
	);
};

export default Signup;
