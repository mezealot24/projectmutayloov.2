import apiClient from "./apiClient";

export const addAddress = (addressData) => {
	return apiClient.post("/addresses/add", addressData); // addressData ควรมี customer_id
};

export const getAllAddresses = async () => {
	return apiClient.get("/addresses");
};

export const getAddressById = async (id) => {
	return apiClient.get(`/addresses/${id}`);
};

export const getAddressesByCustomerId = async (customerId) => {
	return apiClient.get(`/addresses/customer/${customerId}`);
};

export const updateAddress = (id, addressData) => {
	return apiClient.patch(`/addresses/${id}`, addressData); // addressData ควรมี customer_id
};

export const deleteAddress = async (id) => {
	return apiClient.delete(`/addresses/${id}`);
};
