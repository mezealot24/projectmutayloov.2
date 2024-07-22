import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// api
import { login } from "@/api/authApi";
// components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/utils/custom-toast.css";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const response = await login(email, password);

			if (response.data.token && response.data.user) {
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("user", JSON.stringify(response.data.user));
				toast.success("ลงชื่อเข้าใช้สำเร็จ !!");
				navigate("/");
			} else {
				setError("Access denied.");
				toast.error("Access denied.");
			}
		} catch (err) {
			console.error("Login error:", err);
			if (err.response) {
				// กรณีที่เซิร์ฟเวอร์ตอบกลับด้วยสถานะข้อผิดพลาด
				setError(err.response.data.message || "Login failed");
				toast.error(err.response.data.message || "Login failed");
			} else if (err.request) {
				// กรณีที่ไม่ได้รับการตอบกลับจากเซิร์ฟเวอร์
				setError("No response from server");
				toast.error("No response from server");
			} else {
				// ข้อผิดพลาดอื่น ๆ
				setError("An error occurred during login");
				toast.error("An error occurred during login");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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

			<div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Sign In
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Welcome back! Please sign in to your account.
					</p>
				</div>

				<form className="grid grid-cols-1 gap-y-6 py-6" onSubmit={handleLogin}>
					<div className="grid w-full max-w-sm items-center gap-2">
						<Label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Email
						</Label>
						<Input
							type="text"
							id="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="grid w-full max-w-sm items-center gap-2">
						<Label
							htmlFor="password"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Password
						</Label>
						<Input
							type="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					{error && <p style={{ color: "red" }}>{error}</p>}

					<Button type="submit" disabled={loading}>
						{loading ? "Signing in..." : "Sign In"}
					</Button>

					<div className="flex items-center justify-center gap-2">
						<p className="text-sm text-gray-700">Don't have an account?</p>
						<Link
							to="/sign-up"
							className="text-sm text-indigo-600 hover:underline"
						>
							Create account
						</Link>
					</div>
				</form>
			</div>
		</main>
	);
};

export default SignIn;
