import React, { useState, useContext } from "react";
import useCart from "@/hooks/useCart";
import Head from "../components/Head";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import CartContext from "@/context/CartContext"; // import the CartContext
import CartItem from "./CartItem";

const Cart = () => {
	const [selectItems, setSelectItems] = useState([]);
	const { cart = { cartItems: [] }, loading, error } = useCart();
	const navigate = useNavigate();
	const { removeCartItem, updateCartItem } = useContext(CartContext); // get removeCartItem and updateCartItem from context

	console.log("Selected Items:", selectItems);
	console.log("Cart Data:", cart);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error loading cart: {error.message}</p>;
	}

	const calculateTotalPrice = () => {
		return (
			cart?.cartItems?.reduce(
				(total, item) =>
					total + (item.product?.price || 0) * (item.quantity || 1),
				0
			) || 0
		);
	};

	const shippingCost = 3;
	const totalPrice = calculateTotalPrice();
	const finalPrice = totalPrice + shippingCost;

	const handleCheckout = () => {
		const selectedProducts =
			cart?.cartItems?.filter((item) =>
				selectItems.includes(item.product?._id)
			) || [];
		navigate("/checkout", { state: { selectedProducts } });
	};

	if (!cart || !cart.cartItems || cart.cartItems.length === 0) {
		return (
			<main className="container">
				<Head step={1} />
				<p>Your cart is empty</p>
			</main>
		);
	}

	return (
		<main className="container">
			<Head step={1} />
			<section className="w-full">
				<div className="grid grid-cols-12">
					<p className="col-span-8 md:px-2 lg:px-4 xl:px-16">Product</p>
					<p className="col-span-1 text-center">Price</p>
					<p className="col-span-2 text-center">Quantity</p>
					<p className="col-span-1 invisible">action</p>
				</div>
				<Separator className="my-4 h-1" />
				{cart.cartItems.map((item) => (
					<CartItem
						key={item.product?._id}
						item={item}
						selectItems={selectItems}
						setSelectItems={setSelectItems}
						removeCartItem={removeCartItem} // pass removeCartItem to CartItem
						updateCartItem={updateCartItem} // pass updateCartItem to CartItem
					/>
				))}
			</section>
			<section className="my-12 grid grid-cols-12">
				<div className="col-span-4"></div>
				<div className="col-span-4"></div>
				<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
					<div className="flex justify-between">
						<p className="font-medium">Total price</p>
						<p className="text-lg font-semibold">
							{totalPrice.toFixed(2)} Bath
						</p>
					</div>
					<div className="flex justify-between">
						<p className="font-medium">Shipping cost</p>
						<p className="text-lg font-semibold">{shippingCost} Bath</p>
					</div>
					<div className="flex justify-between">
						<p className="font-medium">Discount</p>
						<p className="text-lg font-semibold">0 Bath</p>
					</div>
					<Separator className="h-[2px]" />
					<div className="flex justify-between">
						<p className="font-medium">Total price</p>
						<p className="text-lg font-semibold">
							{finalPrice.toFixed(2)} Bath
						</p>
					</div>
					<Button
						onClick={handleCheckout}
						className="w-full my-2"
						disabled={selectItems.length === 0}
					>
						Checkout
					</Button>
				</div>
			</section>
		</main>
	);
};

export default Cart;
