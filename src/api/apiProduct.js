import apiClient from "./apiClient";

export const getProducts = async (power) => {
  try {
    const response = await apiClient.get(`/products`, {
      params: { power },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductByPower = async (power) => {
  try {
    const response = await apiClient.get(`/products?power=${power}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
