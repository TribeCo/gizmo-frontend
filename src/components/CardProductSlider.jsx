"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import { Colors } from "@/utils";
import { ProductCard } from ".";

const CardProductSlider = ({ btn, products, swapTime_millisecond }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const isSmallScreen = useMediaQuery("(max-width:900px)");
	const itemsPerPage = isSmallScreen ? 2 : 5;

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, swapTime_millisecond);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === products.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? products.length - 1 : prevIndex - 1,
		);
	};

	let productItems = [];
	if (products.length > itemsPerPage) {
		for (let index = 0; index < itemsPerPage; index++) {
			productItems.push(products[(currentIndex + index) % products.length]);
		}
	} else {
		productItems = products;
	}

	return (
		<>
			<Box mx="auto">
				<Box
					mt={2}
					position="absolute"
					display="flex"
					width="98vw"
					alignItems="center"
					justifyContent="space-around">
					<IconButton
						variant="contained"
						sx={{
							bgcolor: Colors.blue,
							transform: {
								xs: "scale(0.6)",
								sm: "scale(0.6)",
								md: "scale(1)",
							},
							"&:hover": {
								backgroundColor: Colors.blue,
							},
						}}
						onClick={handleNext}>
						<ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
					</IconButton>
					<Box
						item
						display="flex">
						{productItems.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
							/>
						))}
					</Box>
					<IconButton
						variant="contained"
						sx={{
							bgcolor: Colors.blue,
							transform: {
								xs: "scale(0.6)",
								sm: "scale(0.6)",
								md: "scale(1)",
							},
							"&:hover": {
								backgroundColor: Colors.blue,
							},
						}}
						onClick={handlePrev}>
						<ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
					</IconButton>
				</Box>
				<Box>
					<Box sx={{ height: { xs: "166px", md: "240px" } }} />
					<Box
						sx={{ height: { xs: "122px", md: "190px" } }}
						bgcolor="#DEF0F5"
					/>
				</Box>
			</Box>
			{btn && (
				<Box
					maxWidth="100vw"
					sx={{
						mt: { xs: 0, sm: 0, md: 3 },
					}}>
					<Link href={`/categories/${btn}`}>
						<Button
							variant="contained"
							sx={{
								transform: {
									xs: "scale(0.7)",
									sm: "scale(0.8)",
									md: "scale(1)",
								},
								display: "block",
								mx: "auto",
								border: `3px solid ${Colors.orange}`,
								color: "#000000",
								bgcolor: "#FFFFFF",
								borderRadius: "30px",
								width: "300px",
								height: "60px",
								"&:hover": {
									bgcolor: Colors.orange,
								},
							}}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: "700",
									fontSize: "20px",
								}}>
								{"مشاهده محصولات بیشتر"}
							</Typography>
						</Button>
					</Link>
				</Box>
			)}
		</>
	);
};
export default CardProductSlider;
