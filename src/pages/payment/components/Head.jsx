import React from "react";
import { Check } from "lucide-react";

const Head = ({ step }) => {
	const steps = [
		{ name: "Shopping cart", completed: step > 1, displayClass: "block" },
		{
			name: "Checkout details",
			completed: step > 2,
			displayClass: "sm:block hidden",
		},
		{
			name: "Order complete",
			completed: step >= 3,
			displayClass: "md:block hidden",
		},
	];

	return (
		<section className="my-16">
			{/* steps */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full lg:max-w-4xl lg:mx-auto">
				{steps.map((s, index) => (
					<div
						key={index}
						className={`flex flex-col items-center ${s.displayClass}`}
					>
						{/* circle */}
						<div className="w-full flex items-center justify-start lg:justify-center gap-4">
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center ${
									s.completed
										? "bg-green-600 text-white"
										: "bg-primary text-white"
								}`}
							>
								{s.completed ? (
									<span>
										<Check />
									</span>
								) : (
									<span>{index + 1}</span>
								)}
							</div>
							<span
								className={`text-2xl ${
									s.completed ? "text-green-600" : "text-black"
								}`}
							>
								{s.name}
							</span>
						</div>
						{/* line */}
						<div
							className={`w-full h-1 mt-4 ${
								s.completed ? "bg-green-600" : "bg-gray-300"
							}`}
						></div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Head;
