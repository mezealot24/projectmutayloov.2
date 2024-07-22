import React, { useState } from "react";
// components
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

const ProductGallery = ({ product }) => {
	const [selectedImage, setSelectedImage] = useState(
		product.image?.gallery?.[0] || ""
	);

	const handleImageClick = (src) => {
		setSelectedImage(src);
	};

	return (
		<section className="w-full grid gap-4 grid-cols-1 xl:grid-cols-12">
			{/* hero */}
			<div className="xl:col-span-10 xl:order-2 aspect-square">
				<img
					src={selectedImage ? selectedImage : product.image?.gallery?.[0]}
					alt={product.image?.alt || "Product Image"}
					className="hidden lg:block w-full h-full object-cover rounded-tr-[10%] rounded-bl-[10%] overflow-hidden"
				/>
				<Carousel className="w-full h-full lg:hidden">
					<CarouselContent>
						{product.image?.gallery?.map((src, index) => (
							<CarouselItem key={index} onClick={() => handleImageClick(src)}>
								<img
									src={src}
									alt={product.image?.alt || "Product Image"}
									className="w-full h-full object-cover rounded-tr-[10%] rounded-bl-[10%] overflow-hidden"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			{/* vertical gallery */}
			<div className="hidden xl:block xl:col-span-2 xl:order-1 overflow-hidden">
				<Carousel
					opts={{
						align: "start",
					}}
					orientation="vertical"
					className="w-full h-full"
				>
					<CarouselContent>
						{product.image?.gallery?.map((src, index) => (
							<CarouselItem key={index} onClick={() => handleImageClick(src)}>
								<img
									src={src}
									alt={product.image?.alt || "Product Image"}
									className="w-full h-full object-cover rounded-tr-2xl rounded-bl-2xl overflow-hidden cursor-pointer"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
};

export default ProductGallery;
