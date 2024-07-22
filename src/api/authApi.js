import apiClient from "./apiClient";

// Login
export const login = async (email, password) => {
	return apiClient.post("/users/login", { email, password });
};

// Get user profile
export const getProfile = async () => {
	return apiClient.get("/users/profile");
};

// Register
export const registerProfile = async (userData) => {
	return apiClient.post("/users/register", userData);
};

// Update user profile
export const updateUserProfile = async (formData) => {
	return apiClient.post("/users/profile", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};
