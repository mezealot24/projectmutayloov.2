import React from "react";

const WishList = () => {
	return (
		<div className="container">
			<div className="flex flex-col items-center pt-4 pb-10 w-full font-medium bg-white lg:hidden">
				<div className="flex gap-1 self-start pr-11  text-sm leading-6 whitespace-nowrap text-zinc-600">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/248cdae6db3f07246219743ced74a85f18d452ccca7b9bbcdfd47edc9f91c26b?"
						className="shrink-0 my-auto w-full aspect-square"
					/>
					<a href="">back</a>
				</div>
				<div className="text-center mt-10 text-4xl tracking-tight leading-10 text-black">
					My Account
				</div>
			</div>
			<div className="flex flex-col justify-center px-4 w-full bg-white">
				<div className="mb-8 flex flex-col items-center px-3 pt-10 w-full bg-gray-100 lg:bg-white rounded-lg">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e19d8bcb267405cdd6e6fb28e58bf63a37908129177f6b0d6ae6533d774cff?"
						className="aspect-square w-[82px] lg:hidden"
					/>
					<div className="mt-1.5 text-xl font-semibold leading-8 text-black lg:hidden">
						Narathip Thakham
					</div>
					<div className="lg:hidden flex gap-5 justify-between self-stretch py-2 pr-2 pl-3.5 mt-10 text-base leading-7 whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-500 text-neutral-900">
						<div className="my-auto">Account</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/6556996aa3f4a3c86d89e3d0686f793f44d2d30536607a1a2d2e23b205bc8977?"
							className="shrink-0 w-6 aspect-square"
						/>
					</div>
					<div className="flex flex-col self-stretch px-8 pt-10 lg:pt-0 mt-10 lg:mt-4">
						<div className="text-xl font-semibold leading-8 text-black">
							Your Wishlist
						</div>
						<div className="lg:grid lg grid-cols-3 lg:gap-8">
							<div className="items-start px-10 pb-2 mt-10 text-sm leading-5 whitespace-nowrap border-b border-gray-200 border-solid text-zinc-500">
								Product
								<div className="hidden lg:block lg:flex justify-start py-4  border-gray-200 border-solid">
									<div className="hidden lg:block lg:flex gap-4">
										<img
											loading="lazy"
											src="https://via.placeholder.com/60x72"
											className="shrink-0 my-auto w-2/5 aspect-square"
										/>
										<div className="flex gap-4">
											<div className="flex flex-col justify-center my-auto">
												<div className="shrink-0 bg-sky-500 h-[72px]" />
											</div>
											<div className="flex flex-col justify-center text-sm leading-5 text-neutral-900">
												<div className="font-semibold">Tray Table</div>
												<div className="mt-2 text-xs leading-5 text-zinc-500">
													Color: Black
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="hidden lg:block items-center px-10 pb-2 mt-10 text-sm leading-5 whitespace-nowrap border-b border-gray-200 border-solid text-zinc-500">
								Price
								<div className="mt-8">$19.19</div>
							</div>
							<div className="hidden lg:block items-center text-start px-10 pb-2 mt-10 text-sm leading-5 whitespace-nowrap border-b border-gray-200 border-solid text-zinc-500">
								Action
								<div className="flex justify-start items-start">
									<button className="justify-center items-center px-6 py-1.5 mt-8 text-base font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg">
										Add to cart
									</button>
								</div>
							</div>
						</div>
						<div className="lg:hidden flex flex-col justify-center py-4 border-b border-gray-200 border-solid">
							<div className="flex gap-4">
								<img
									loading="lazy"
									src="https://via.placeholder.com/60x72"
									className="shrink-0 my-auto w-2/5 aspect-square"
								/>
								<div className="flex gap-4">
									<div className="flex flex-col justify-center my-auto">
										<div className="shrink-0 bg-sky-500 h-[72px]" />
									</div>
									<div className="flex flex-col justify-center text-sm leading-5 text-neutral-900">
										<div className="font-semibold">Tray Table</div>
										<div className="mt-2 text-xs leading-5 text-zinc-500">
											Color: Black
										</div>
										<div className="mt-2">$19.19</div>
									</div>
								</div>
							</div>
							<button className="justify-center items-center px-6 py-1.5 mt-4 text-base font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg">
								Add to cart
							</button>
						</div>
						<div className="lg:hidden flex flex-col justify-center pt-4 pb-1 border-b border-gray-200 border-solid">
							<div className="flex gap-4">
								<img
									loading="lazy"
									src="https://via.placeholder.com/60x72"
									className="shrink-0 my-auto w-2/5 aspect-square"
								/>
								<div className="flex gap-4">
									<div className="flex flex-col justify-center my-auto">
										<div className="shrink-0 bg-sky-500 h-[72px]" />
									</div>
									<div className="flex flex-col justify-center text-sm leading-5 text-neutral-900">
										<div className="font-semibold">Sofa</div>
										<div className="mt-2 text-xs leading-5 text-zinc-500">
											Color: beige
										</div>
										<div className="mt-2">$345</div>
									</div>
								</div>
							</div>
							<button className="mb-8 marker:justify-center items-center px-6 py-1.5 mt-4 text-base font-medium tracking-tight leading-7 text-center text-white bg-purple-600 rounded-lg">
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishList;
