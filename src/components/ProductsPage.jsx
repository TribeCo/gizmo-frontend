"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ProductsGrid from "@/components/ProductsGrid";
import LineSplitter from "@/components/LineSpliter";
// import { products } from '@/utils/fakeProduct';

function ProductsPage({ categoryName }) {
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					`https://gizmoshop.liara.run/api/${categoryName}/products/`,
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setProductsList(data.data);
			} catch (error) {
				console.error("There was a problem with the fetch operation:", error);
			}
		};

		fetchProducts();
	}, [categoryName]); // Re-fetch when categoryName changes

	return (
		<Box>
			<LineSplitter text={`محصولات ${categoryName}`} />
			<Box
				sx={{
					display: "flex", // Use flexbox layout
					flexDirection: "column", // Stack children vertically
					justifyContent: "center", // Center children vertically
					alignItems: { xs: "end", xl: "center" }, // Center children horizontally
					width: "100%", // Optional: Adjust width as needed
					height: "100%", // Optional: Adjust height as needed
				}}>
				<ProductsGrid productsList={productsList} />
			</Box>
		</Box>
	);
}

export default ProductsPage;
