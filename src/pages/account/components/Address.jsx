import React from "react";
import AddressCard from "./AddressCard";

const Address = () => {
	return (
		<section className="w-full grid gap-4">
			<h4 className="font-bold">Address</h4>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
				<AddressCard />
			</div>
		</section>
	);
};

export default Address;
