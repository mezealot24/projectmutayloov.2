import apiClient from "./apiClient";

// get cart
export const fetchCart = () => apiClient.get("/cart");

// add to cart
export const addToCart = (productId, quantity) =>
	apiClient.post("/cart/add", { productId, quantity });

// update cart
export const updateCartItem = (productId, quantity) =>
	apiClient.post("/cart/update", { productId, quantity });

// remove from cart
export const removeCartItem = (productId) =>
	apiClient.post("/cart/remove", { productId });
