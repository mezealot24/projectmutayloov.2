import apiClient from "./apiClient";

export const createOrder = async (orderData) => {
  try {
    const response = await apiClient.post("/orders/create", orderData);
    return response.data;
  } catch (error) {
    console.error(
      "API error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getOrder = async (orderId) => {
  try {
    const response = await apiClient.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(
      "API error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
