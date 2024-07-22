import { createBrowserRouter } from "react-router-dom";
// protected route
import ProtectedRoute from "./pages/ProtectedRoute";
// layout
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import ProductsList from "./pages/products-archive/ProductsList";
import Cart from "./pages/payment/cart/Cart";
import Horoscope from "./pages/horoscope/Horoscope";
import ContactUs from "./pages/contact-us/ContactUs";
import Account from "./pages/account/Account";
import MyAccount from "./pages/account/components/MyAccount";
import Address from "./pages/account/components/Address";
import Order from "./pages/account/components/Order";
import WishList from "./pages/account/components/WishList";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Checkout from "./pages/payment/checkout/Checkout";
import Complete from "./pages/payment/complete/Complete";
import HoroscopeDetail from "./pages/horoscope/HoroscopeDetail";
import ProductDetail from "./pages/products-archive/ProductDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			// home
			{
				path: "",
				element: <Home />,
			},

			// products
			{
				path: "/products",
				element: <ProductsList />,
			},
			{
				path: "/product/:id",
				element: <ProductDetail />,
			},

			// payment
			{
				path: "/cart",
				element: (
					<ProtectedRoute>
						<Cart />
					</ProtectedRoute>
				),
			},
			{
				path: "/checkout",
				element: (
					<ProtectedRoute>
						<Checkout />
					</ProtectedRoute>
				),
			},
			{
				path: "/complete",
				element: (
					<ProtectedRoute>
						<Complete />
					</ProtectedRoute>
				),
			},

			// horoscope
			{
				path: "/horoscope",
				element: <Horoscope />,
			},
			{
				path: "/horoscope/:id",
				element: <HoroscopeDetail />,
			},

			// contact us
			{
				path: "/contact-us",
				element: <ContactUs />,
			},

			// sign-in, sign-up
			{
				path: "/sign-in",
				element: <SignIn />,
			},
			{
				path: "/sign-up",
				element: <SignUp />,
			},

			// account
			{
				path: "account",
				element: (
					<ProtectedRoute>
						<Account />
					</ProtectedRoute>
				),
				children: [
					{
						path: "",
						element: <MyAccount />,
					},
					{
						path: "address",
						element: <Address />,
					},
					{
						path: "orders",
						element: <Order />,
					},
					{
						path: "wishlist",
						element: <WishList />,
					},
				],
			},
		],
	},
]);

export default router;
