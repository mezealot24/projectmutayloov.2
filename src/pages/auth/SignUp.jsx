import React, { useState, useEffect, useCallback } from "react";
import { validateEmail, validatePassword } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DateOfBirthSelector from "../auth/DateOfBirthSelector";
import { registerProfile } from "@/api/authApi"; // Import the registerProfile function
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/utils/custom-toast.css";

const SignUp = () => {
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		day: "",
		month: "",
		year: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
	}, []);

	const validateForm = useCallback(() => {
		const newErrors = {};
		if (formData.email && !validateEmail(formData.email)) {
			newErrors.email = "Invalid email address";
		}
		if (formData.password && !validatePassword(formData.password)) {
			newErrors.password =
				"Password must be at least 8 characters long and include at least one uppercase letter and one number";
		}
		if (
			formData.confirmPassword &&
			formData.password !== formData.confirmPassword
		) {
			newErrors.confirmPassword = "Passwords do not match";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}, [formData]);

	useEffect(() => {
		const timer = setTimeout(validateForm, 300);
		return () => clearTimeout(timer);
	}, [formData, validateForm]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			toast.error("Please fill in all required fields correctly.");
			return;
		}
		setLoading(true);
		setError("");
		const dob = new Date(`${formData.year}-${formData.month}-${formData.day}`);
		try {
			const response = await registerProfile({
				fname: formData.fname,
				lname: formData.lname,
				email: formData.email,
				password: formData.password,
				dob: dob.toISOString().split("T")[0],
				phone: formData.phone,
			});
			console.log("Registration successful", response.data);
			localStorage.setItem("token", response.data.token);
			toast.success("Registration successful!");
			setTimeout(() => {
				navigate("/sign-in");
			}, 1500);
		} catch (err) {
			const errorMessage = err.response?.data?.message || "Registration failed";
			toast.error(errorMessage);
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
			<ToastContainer
				position="top-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				className="z-50 fixed top-0 left-0" // เพิ่ม Tailwind classes
			/>
			<div
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
				aria-hidden="true"
			>
				<div
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				></div>
			</div>

			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Sign Up
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					ลงทะเบียนวันนี้เพื่อเปลี่ยนโชคชะตาของคุณ
				</p>
			</div>

			<div className="bg-white xl:w-3/5 w-full mx-auto p-4 shadow-lg rounded-tr-[3rem] rounded-bl-[3rem] mt-2">
				<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 p-6">
					<div className="grid grid-cols-2 gap-8">
						<div className="w-full flex flex-col gap-2">
							<Label htmlFor="fname">First Name</Label>
							<Input
								type="text"
								id="fname"
								name="fname"
								placeholder="Enter your firstname"
								value={formData.fname}
								onChange={handleInputChange}
							/>
						</div>

						<div className="w-full flex flex-col gap-2">
							<Label htmlFor="lname">Last Name</Label>
							<Input
								type="text"
								id="lname"
								name="lname"
								placeholder="Enter your lastname"
								value={formData.lname}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-8">
						<div className="w-full flex flex-col gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								type="text"
								id="email"
								name="email"
								placeholder="Enter your email"
								value={formData.email}
								onChange={handleInputChange}
							/>
							{errors.email && (
								<p className="text-sm text-red-600">{errors.email}</p>
							)}
						</div>

						<div className="w-full flex flex-col gap-2">
							<Label htmlFor="phone">Phone</Label>
							<Input
								type="text"
								id="phone"
								name="phone"
								placeholder="Enter your number"
								value={formData.phone}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							value={formData.password}
							onChange={handleInputChange}
						/>
						{errors.password && (
							<p className="text-sm text-red-600">{errors.password}</p>
						)}
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="confirmPassword">Confirm Password</Label>
						<Input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							placeholder="Confirm your password"
							value={formData.confirmPassword}
							onChange={handleInputChange}
						/>
						{errors.confirmPassword && (
							<p className="text-sm text-red-600">{errors.confirmPassword}</p>
						)}
					</div>

					<DateOfBirthSelector
						day={formData.day}
						month={formData.month}
						year={formData.year}
						setDay={(value) => setFormData((prev) => ({ ...prev, day: value }))}
						setMonth={(value) =>
							setFormData((prev) => ({ ...prev, month: value }))
						}
						setYear={(value) =>
							setFormData((prev) => ({ ...prev, year: value }))
						}
					/>

					<div>
						<Button type="submit" className="w-full">
							{loading ? "Loading..." : "Sign Up"}
						</Button>
						{error && <p className="text-sm text-red-600">{error}</p>}
					</div>
				</form>
			</div>
		</main>
	);
};

export default SignUp;
