import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { updateUserProfile } from "@/api/authApi";
import { toast } from "react-toastify";

const SideBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [user, setUser] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(null);
	const fileInputRef = useRef(null);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		if (storedUser) {
			setUser(storedUser);
			setPreviewUrl(storedUser.imgProfile);
		}
	}, []);

	const handleNavigate = (value) => {
		if (value === "Log Out") {
			handleLogout();
		} else {
			navigate(
				`/account${value !== "Account" ? `/${value.toLowerCase()}` : ""}`
			);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/");
	};

	const handleAvatarClick = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const objectUrl = URL.createObjectURL(file);
		setPreviewUrl(objectUrl);

		const formData = new FormData();
		formData.append("imgProfile", file);

		try {
			const response = await updateUserProfile(formData);
			console.log("Server response:", response);

			if (response.data && response.data.user) {
				const updatedUser = response.data.user;
				localStorage.setItem("user", JSON.stringify(updatedUser));
				setUser(updatedUser);
				setPreviewUrl(updatedUser.imgProfile);
				toast.success("Profile picture updated successfully");
			} else {
				throw new Error("Invalid server response");
			}
		} catch (error) {
			console.error("Error uploading profile picture:", error);
			setPreviewUrl(user.imgProfile);
			toast.error("Error uploading profile picture. Please try again.");
		} finally {
			URL.revokeObjectURL(objectUrl);
		}
	};

	return (
		<aside className="w-full">
			<div className="flex flex-col px-4 py-12 gap-8 bg-base-200 rounded-lg">
				<div className="flex flex-col">
					<Avatar
						className="self-center aspect-square w-[82px] h-auto cursor-pointer"
						onClick={handleAvatarClick}
					>
						<AvatarImage src={previewUrl || user?.imgProfile} />
						<AvatarFallback>{user?.fname?.[0]}</AvatarFallback>
					</Avatar>
					<input
						type="file"
						ref={fileInputRef}
						onChange={handleFileChange}
						style={{ display: "none" }}
						accept="image/*"
					/>
					<p className="text-center mt-2 text-2xl font-semibold">
						{user?.fname}
					</p>
				</div>

				<nav className="px-8 lg:hidden">
					<Select onValueChange={handleNavigate}>
						<SelectTrigger className="w-full">
							<SelectValue
								placeholder={location.pathname.split("/")[2] || "Account"}
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="Account">Account</SelectItem>
								<SelectItem value="Address">Address</SelectItem>
								<SelectItem value="Orders">Orders</SelectItem>
								<SelectItem value="Wishlist">Wishlist</SelectItem>
								<SelectItem value="Log Out">Log Out</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</nav>

				<nav className="px-8 flex flex-col gap-4">
					{["Account", "Address", "Orders", "Wishlist", "Log Out"].map(
						(item) => (
							<Link
								key={item}
								to={
									item !== "Log Out"
										? `/account${
												item !== "Account" ? `/${item.toLowerCase()}` : ""
										  }`
										: "#"
								}
								onClick={item === "Log Out" ? handleLogout : undefined}
								className={`${
									location.pathname.split("/")[2] === item.toLowerCase() &&
									"font-bold pb-2 border-b-2 border-base-500"
								}`}
							>
								{item}
							</Link>
						)
					)}
				</nav>
			</div>
		</aside>
	);
};

export default SideBar;
