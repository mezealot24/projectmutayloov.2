import { createContext, useState, useEffect } from "react";
import {
	fetchCart,
	addToCart,
	updateCartItem,
	removeCartItem,
} from "@/api/apiCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(null);

	const loadCart = async () => {
		try {
			const response = await fetchCart();
			setCart(response.data);
		} catch (error) {
			console.error("Failed to load cart:", error);
		}
	};

	useEffect(() => {
		loadCart();
	}, []);

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				loadCart,
				addToCart,
				updateCartItem,
				removeCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
