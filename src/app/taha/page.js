"use client";

import { useCart } from "@/context/CartContext";
import { Button, Container, Typography } from "@mui/material";
import React from "react";

const page = () => {
	const { addToCart, removeFromCart, getCart } = useCart();
	const handleBTN = async () => {
		console.log("req");
		// await addToCart({ color: 1, product: 2, quantity: 1 });
		// await removeFromCart(60);
		await getCart();
	};
	return (
		<Container
			sx={{
				height: "100vh",
				width: "100vw",
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
			}}>
			<Button
				onClick={handleBTN}
				variant="contained">
				<Typography variant="h4">{"درخواست"}</Typography>
			</Button>
		</Container>
	);
};

export default page;
