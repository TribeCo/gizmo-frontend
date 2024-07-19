"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ProductsGrid from "@/components/ProductsGrid";
import LineSplitter from "@/components/LineSpliter";
import { baseUrl } from "@/services";
// import { products } from '@/utils/fakeProduct';

function ProductsPage({ categoryName }) {
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					`${baseUrl}/api/${categoryName}/products/`,
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
	}, [categoryName]);

	return (
		<Box>
			<LineSplitter text={`محصولات ${categoryName}`} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: { xs: "end", xl: "center" },
					width: "100%",
					height: "100%",
				}}>
				<ProductsGrid productsList={productsList} />
			</Box>
		</Box>
	);
}

export default ProductsPage;
