import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getProfile, updateUserProfile } from "@/api/authApi";
import { toast } from "react-toastify";
import { Progress } from "@radix-ui/react-progress";

const MyAccount = () => {
	const [userData, setUserData] = useState({
		fname: "",
		lname: "",
		email: "",
	});
	const [passwordData, setPasswordData] = useState({
		currentPassword: "",
		newPassword: "",
		repeatNewPassword: "",
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchUserProfile();
	}, []);

	const fetchUserProfile = async () => {
		try {
			setIsLoading(true);
			const response = await getProfile();
			setUserData({
				fname: response.data.fname || "",
				lname: response.data.lname || "",
				email: response.data.email || "",
			});
		} catch (error) {
			console.error("Error fetching user profile:", error);
			toast.error("Error fetching user profile. Please try again later.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleUserDataChange = (e) => {
		const { id, value } = e.target;
		setUserData((prev) => ({ ...prev, [id]: value }));
	};

	const handlePasswordChange = (e) => {
		const { id, value } = e.target;
		setPasswordData((prev) => ({ ...prev, [id]: value }));
	};

	const validateForm = () => {
		const newErrors = {};
		if (!userData.fname) newErrors.fname = "First name is required";
		if (!userData.lname) newErrors.lname = "Last name is required";
		if (!userData.email) newErrors.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(userData.email))
			newErrors.email = "Email is invalid";

		if (
			passwordData.newPassword ||
			passwordData.repeatNewPassword ||
			passwordData.currentPassword
		) {
			if (!passwordData.currentPassword)
				newErrors.currentPassword = "Current password is required";
			if (!passwordData.newPassword)
				newErrors.newPassword = "New password is required";
			else if (passwordData.newPassword.length < 8)
				newErrors.newPassword = "Password must be at least 8 characters";
			if (passwordData.newPassword !== passwordData.repeatNewPassword)
				newErrors.repeatNewPassword = "Passwords do not match";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		try {
			setIsLoading(true);
			const formData = new FormData();
			Object.keys(userData).forEach((key) => {
				formData.append(key, userData[key]);
			});
			if (passwordData.currentPassword && passwordData.newPassword) {
				formData.append("currentPassword", passwordData.currentPassword);
				formData.append("newPassword", passwordData.newPassword);
			}

			await updateUserProfile(formData);
			toast.success("Profile updated successfully");
			setPasswordData({
				currentPassword: "",
				newPassword: "",
				repeatNewPassword: "",
			});
		} catch (error) {
			console.error("Error updating profile:", error);
			toast.error("Failed to update profile. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <Progress className="w-full" value={50} />;
	}

	return (
		<section>
			<form className="grid gap-8" onSubmit={handleSubmit}>
				<div className="grid w-full items-center gap-4">
					<h4 className="font-bold">Account Details</h4>

					<div className="grid w-full gap-2">
						<Label htmlFor="fname">First Name *</Label>
						<Input
							type="text"
							id="fname"
							placeholder="First Name"
							value={userData.fname}
							onChange={handleUserDataChange}
							aria-required="true"
						/>
						{errors.fname && (
							<p className="text-red-500 text-sm">{errors.fname}</p>
						)}
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="lname">Last Name *</Label>
						<Input
							type="text"
							id="lname"
							placeholder="Last Name"
							value={userData.lname}
							onChange={handleUserDataChange}
							aria-required="true"
						/>
						{errors.lname && (
							<p className="text-red-500 text-sm">{errors.lname}</p>
						)}
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="email">Email *</Label>
						<Input
							type="email"
							id="email"
							placeholder="Email"
							value={userData.email}
							onChange={handleUserDataChange}
							aria-required="true"
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">{errors.email}</p>
						)}
					</div>
				</div>

				<div className="grid w-full items-center gap-4">
					<h4 className="font-bold">Password Change</h4>

					<div className="grid w-full gap-2">
						<Label htmlFor="currentPassword">Current Password</Label>
						<Input
							type="password"
							id="currentPassword"
							placeholder="Current Password"
							value={passwordData.currentPassword}
							onChange={handlePasswordChange}
						/>
						{errors.currentPassword && (
							<p className="text-red-500 text-sm">{errors.currentPassword}</p>
						)}
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="newPassword">New Password</Label>
						<Input
							type="password"
							id="newPassword"
							placeholder="New Password"
							value={passwordData.newPassword}
							onChange={handlePasswordChange}
						/>
						{errors.newPassword && (
							<p className="text-red-500 text-sm">{errors.newPassword}</p>
						)}
					</div>

					<div className="grid w-full gap-2">
						<Label htmlFor="repeatNewPassword">Confirm New Password</Label>
						<Input
							type="password"
							id="repeatNewPassword"
							placeholder="Confirm New Password"
							value={passwordData.repeatNewPassword}
							onChange={handlePasswordChange}
						/>
						{errors.repeatNewPassword && (
							<p className="text-red-500 text-sm">{errors.repeatNewPassword}</p>
						)}
					</div>
				</div>

				<Button
					type="submit"
					className="bg-primary text-primary-foreground hover:bg-primary/90 mb-6 w-fit"
					disabled={isLoading}
					size="sm"
				>
					Save Changes
				</Button>
			</form>
		</section>
	);
};

export default MyAccount;
