import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// components
import ProductCard from "@/components/ProductCard";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import FilterBar from "./components/FilterBar";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

// api
import { getProducts } from "@/api/apiProduct";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [isSortOpen, setIsSortOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [selectedPower, setSelectedPower] = useState("");

	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const power = params.get("power");
		setSelectedPower(power || "");

		const fetchProducts = async () => {
			try {
				const response = await getProducts(power || "");
				setProducts(response);
			} catch (error) {
				console.error(error);
			}
		};
		fetchProducts();
	}, [location.search]);

	const toggleSortOptions = () => {
		setIsSortOpen(!isSortOpen);
	};

	const toggleFilterOptions = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const handleFilterChange = (power) => {
		setSelectedPower(power);
		setIsFilterOpen(false); // Close filter options after selection
	};

	const handleSortChange = (option) => {
		setIsSortOpen(false); // Close sort options after selection

		// Sort products based on the selected option
		let sortedProducts = [...products];
		if (option === "Alphabetically") {
			sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
		} else if (option === "Price High to Low") {
			sortedProducts.sort((a, b) => b.price - a.price);
		} else if (option === "Price Low to High") {
			sortedProducts.sort((a, b) => a.price - b.price);
		}
		setProducts(sortedProducts);
	};

	return (
		<main>
			<BreadcrumbBanner />

			{/* filter */}
			<FilterBar
				selectedPower={selectedPower}
				onFilterChange={handleFilterChange}
				onSortChange={handleSortChange}
				isSortOpen={isSortOpen}
				toggleSortOptions={toggleSortOptions}
				isFilterOpen={isFilterOpen}
				toggleFilterOptions={toggleFilterOptions}
			/>

			{/* grid */}
			<section className="container mx-auto mb-16">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{products.map((product) => (
						<Link
							to={`/product/${product._id}`}
							key={product._id}
							className="cursor-pointer"
						>
							<ProductCard product={product} />
						</Link>
					))}
				</div>

				{/* pagination */}
				<div className="w-full pt-16">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">2</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</section>

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</main>
	);
};

export default ProductsList;
