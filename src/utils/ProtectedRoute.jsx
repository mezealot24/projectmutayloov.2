import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const token = localStorage.getItem("token");
	console.log(token);
	const user = JSON.parse(localStorage.getItem("user"));
	console.log(user);

	if (!token || !user) {
		return <Navigate to="/sign-in" />;
	}

	return children;
};

export default ProtectedRoute;
