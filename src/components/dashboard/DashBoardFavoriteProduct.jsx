import React, { useState, useEffect } from "react";
import { Box, Divider, Grid, Typography, Paper } from "@mui/material";
import ProductCard from "@/components/ProductCard";
import { fetchFavoriteProducts } from "@/services/DashBoard";
import { useAuth } from "@/context/AuthContext";
import { enqueueSnackbar } from "notistack";
export default function DashBoardFavoriteProduct() {
	const [products, setProducts] = useState([]);
	const { tokens } = useAuth();

	useEffect(() => {
		if (tokens) {
			GetFavoriteProducts();
		}
	}, [tokens]);

	const GetFavoriteProducts = async () => {
		try {
			const response = await fetchFavoriteProducts(tokens);
			if (response) {
				setProducts(response.data);
			}
		} catch (error) {
			console.error("Error fetching favorite products:", error);
			enqueueSnackbar({
				message: "خطا در دریافت محصولات مورد علاقه.",
				variant: "error",
			});
		}
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				height: "fit-content",
				borderRadius: "15px",
				boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
			}}>
			<Box
				width={{ xs: "100%", md: "900px" }}
				height={{ xs: "100%", md: "840px" }}
				display={"flex"}
				alignItems={"flex-start"}
				padding={{ xs: 1, md: 2 }}
				flexDirection={"column"}>
				<Typography
					fontWeight={700}
					fontSize={{ xs: 20, md: 24 }}
					color={"#213346"}
					padding={2}>
					علاقه مندی ها
				</Typography>
				<Divider sx={{ width: "95%", alignSelf: "center" }} />
				<Box
					borderRadius={10}
					py={3}
					sx={{
						alignSelf: "center",
						overflowY: "auto",
						overflowX: "hidden",
						"&::-webkit-scrollbar": {
							display: "none", // Hide scrollbar for Webkit browsers (Chrome, Safari, etc.)
						},
						"-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
						"scrollbar-width": "none", // Hide scrollbar for Firefox
					}}>
					<Grid
						container
						spacing={{ xs: 1, sm: 2, md: 4 }}
						justifyContent="start">
						{products.map((product) => (
							<Grid
								item
								xs={6}
								sm={4}
								md={4}
								key={product.id}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<ProductCard product={product} />
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</Paper>
	);
}
