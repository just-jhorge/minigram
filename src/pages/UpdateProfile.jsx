import React from "react";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { Form, Formik } from "formik";
import { TextArea } from "../components/FormInput/FormInput";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import user from "../assets/blank-pp.webp";

const UpdateProfile = () => {
	const { userData } = useAuth();
	const navigate = useNavigate();

	const initialValues = {
		bio: "",
	};

	const validationSchema = Yup.object().shape({
		bio: Yup.string().max(150, "Cannot exceed 150 characters"),
	});

	const handleSubmit = () => {
		console.log("form submitted");
	};

	return (
		<>
			<header className="container h-14 bg-white border-b border-gray-300 flex items-center justify-center">
				<button onClick={() => navigate(-1)}>
					<MdArrowBackIos className="react-icon" />
				</button>
				<h3 className="flex-1 text-center font-medium">Edit profile</h3>
			</header>
			<main className="container mt-5">
				<div className="flex items-center gap-3 mb-10">
					<div className="h-12 w-12 rounded-full object-cover">
						<img
							className="h-full w-full rounded-full"
							src={userData.profilePicture ? profilePicture : user}
							alt=""
						/>
					</div>
					<div>
						<p>{userData.username}</p>
						<button className="text-sm text-blue-500 font-semibold">
							Change profile picture
						</button>
					</div>
				</div>
				<div>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form>
							<TextArea label="Bio" name="bio" placeholder="" />
							<button className="form-btn px-5 mt-3" type="submit">
								Submit
							</button>
						</Form>
					</Formik>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default UpdateProfile;
