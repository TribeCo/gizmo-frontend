"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ProductsGrid from "@/components/ProductsGrid";
import LineSplitter from "@/components/LineSpliter";
import { fetchProducts } from "@/services/Landing";

function ProductsPage({ categoryName }) {
	const [productsList, setProductsList] = useState([]);

	useEffect(() => {
		handleGetProducts();
	}, [categoryName, productsList]);

	const handleGetProducts = async () => {
		try {
			const response = await fetchProducts(categoryName);
			if (response) {
				setProductsList(response.data);
			}
		} catch (error) {
			console.error('Error fetching products:', error);
			enqueueSnackbar({ message: error.message || "خطا در دریافت محصولات.", variant: "error" });
		}
	};

	return (
		<Box>
			<LineSplitter text={`محصولات ${categoryName}`} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: { xs: "end", xl: "center" },
					width: "100vw",
				}}>
				<ProductsGrid productsList={productsList} />
			</Box>
		</Box>
	);
}

export default ProductsPage;
