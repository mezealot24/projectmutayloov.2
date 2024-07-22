// C:\Users\Mezealot\OneDrive\เอกสาร\GitHub\mutayloo\src\components\layout\Toastify.jsx

import React from "react";
import { ToastContainer, toast } from "react-toastify";
const Toastify = () => {
	return (
		<div>
			<ToastContainer
				position="top-left"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme="light"
				transition:Bounce
			/>
		</div>
	);
};

export default Toastify;
