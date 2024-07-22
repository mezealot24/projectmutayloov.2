import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://mutayloo-backend-emx0.onrender.com",
	headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
});

export default apiClient;
