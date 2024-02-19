"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
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

const CardProductSlider = ({
	btn,
	products,
	itemsPerPage,
	swapTime_millisecond,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

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
		<Grid md={12} item>
			<Grid
				pl={3}
				pr={3}
				container
				position="absolute"
				justifyContent="space-between"
				alignItems="center">
				<Grid item>
					<IconButton
						variant="contained"
						sx={{
							bgcolor: Colors.blue,
							position: "relative",
							"&:hover": {
								backgroundColor: Colors.blue,
							},
						}}
						onClick={handleNext}>
						<ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
					</IconButton>
				</Grid>
				<Grid
					item
					display="flex">
					{productItems.map((product, index) => (
						<ProductCard
							key={index}
							product={product}
						/>
					))}
				</Grid>
				<Grid item>
					<IconButton
						variant="contained"
						sx={{
							bgcolor: Colors.blue,
							position: "relative",
							"&:hover": {
								backgroundColor: Colors.blue,
							},
						}}
						onClick={handlePrev}>
						<ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
					</IconButton>
				</Grid>
			</Grid>
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
		</Grid>
	);
};
export default CardProductSlider;