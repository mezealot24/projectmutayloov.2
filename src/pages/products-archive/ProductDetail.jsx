import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// api
import { getProductById } from "@/api/apiProduct";
// components
import ProductGallery from "./components/ProductGallery";
import ProductAction from "./components/ProductAction";
import ProductTab from "./components/ProductTab";
import RelatedProducts from "@/components/RelatedProducts";
import BreadcrumbSmall from "@/components/BreadcrumbSmall";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchProduct = async () => {
			const data = await getProductById(id);
			setProduct(data);
		};
		fetchProduct();
	}, [id]);

	return (
		<main>
			<section className="container mx-auto py-4">
				<BreadcrumbSmall pagename={product.name} />
			</section>

			<section className="container mx-auto">
				<div className="grid grid-cols-12 gap-8">
					<div className="col-span-12 lg:col-span-7">
						<ProductGallery product={product} />
					</div>
					<div className="col-span-12 lg:col-span-5">
						<ProductAction product={product} />
					</div>
				</div>
			</section>

			<section className="container mx-auto my-16">
				<ProductTab product={product} />
			</section>

			<section>
				<RelatedProducts />
			</section>
		</main>
	);
};

export default ProductDetail;
