"use client";

import React, { useEffect } from "react";
import ProductCard from "@/components/CartPage/ProductCard";
import Summary from "@/components/CartPage/Summary";
import CartHeader from "@/components/CartPage/CartHeader";
import ProgressBar from "@/components/CartPage/ProgressBar";

import { Box } from "@mui/material";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const TempPage = () => {
	const { getCart } = useCart();
	useEffect(() => {
		const getData = async () => {
			const res = await getCart();
			// const
		};
		getData();
	}, []);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				rowGap: { xs: 2, sm: 5, md: 8 },
				pb: { xs: 4, sm: 12 },
			}}>
			<Box
				sx={{
					pt: { xs: 0, sm: 5 },
					display: "flex",
					flexWrap: "nowrap",
					alignItems: "center",
					justifyContent: "center",
					marginTop: 6,
					marginBottom: 2,
				}}>
				<ProgressBar activeStep={0} />
			</Box>
			<CartHeader />
			<ProductCard />
			<Summary />
		</Box>
	);
};

export default TempPage;
