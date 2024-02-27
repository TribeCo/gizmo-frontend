"use client";

import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import { Colors } from "@/utils";
import { ProductCard } from ".";

{
	/*
    Inputs:
    products: a list of all product cards in folowing format:
		[
            { name: ..., description: ...},
            .
            .
            .
        ]
    
        itemsPerPage: number of product cards to show in page 
    
    swapTime_millisecond: delay time for automatic slider 
*/
}

const CardProductSlider = ({ btn, products, swapTime_millisecond }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const isSmallScreen = useMediaQuery("(max-width:900px)");
	const itemsPerPage = isSmallScreen ? 1 : 4;

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

	const productItems = [];
	for (let index = 0; index < itemsPerPage; index++) {
		productItems.push(products[(currentIndex + index) % products.length]);
	}

	return (
		<Box>
			<Box
				position="absolute"
				display="flex"
				width="100%"
				alignItems="center"
				justifyContent="space-around">
				<Box item>
					<IconButton
						variant="contained"
						sx={{
							bgcolor: Colors.blue,
							"&:hover": {
								backgroundColor: Colors.blue,
							},
						}}
						onClick={handleNext}>
						<ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
					</IconButton>
				</Box>
				<Box
					item
					display="flex">
					{productItems.map((product, index) => (
						<ProductCard
							key={index}
							product={product}
						/>
					))}
				</Box>
				<Box item>
					<IconButton
						variant="contained"
						sx={{
							bgcolor: Colors.blue,
							"&:hover": {
								backgroundColor: Colors.blue,
							},
						}}
						onClick={handlePrev}>
						<ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
					</IconButton>
				</Box>
			</Box>
			<Box>
				<Box height="240px"></Box>
				<Box
					height="190px"
					bgcolor="#DEF0F5"></Box>
			</Box>
			{btn && (
				<Box mt={3}>
					<Button
						variant="contained"
						sx={{
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
				</Box>
			)}
		</Box>
	);
};
export default CardProductSlider;
