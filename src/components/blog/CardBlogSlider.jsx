"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import {
	Box,
	Grid,
	IconButton,
	useMediaQuery,
} from "@mui/material";
import { Colors } from "@/utils";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import _24HoursSupport from "@/components/siteIcons/_24hoursSupport.png";
import BlogCard from "../BlogCard";

{
	/*
	Inputs:
	blogs: a list of all blog cards in folowing format:
		[
			[blogComponent: ...],
			.
			.
			.
		]

	itemsPerPage: number of blogs to show in page 
    
	swapTime_millisecond: delay time for automatic slider 
*/
}

const CardBlogSlider = ({ blogs, swapTime_millisecond }) => {
	const xl_lg = useMediaQuery("(max-width:1630px)");
	const lg_md = useMediaQuery("(max-width:1300px)");
	const sm_xs = useMediaQuery("(max-width:900px)");

	let itemsPerPage = 4;
	if (xl_lg) {
		itemsPerPage = 3;
	}
	if (lg_md) {
		itemsPerPage = 2;
	}
	if (sm_xs) {
		itemsPerPage = 1;
	}

	const [startIndex, setStartIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setStartIndex((prevIndex) => (prevIndex + 1) % blogs.length);
		}, swapTime_millisecond);

		return () => clearInterval(interval);
	}, []);

	const handlePrev = () => {
		setStartIndex((prevIndex) => (prevIndex - 1 + blogs.length) % blogs.length);
	};

	const handleNext = () => {
		setStartIndex((prevIndex) => (prevIndex + 1) % blogs.length);
	};

	const slideItems = [];
	for (let index = 0; index < itemsPerPage; index++) {
		slideItems.push(blogs[(startIndex + index) % blogs.length]);
	}

	return (
		<Grid
			mt={5}				
			display='flex'
			width='100%'
			justifyContent="space-between"
			alignItems="center"
			sx={{
				px: {xs: 1, sm: 2, md: 3}
			}}
		>
			<Box item>
				<IconButton
					variant="contained"
					sx={{
						bgcolor: Colors.blue,
						width: { xs: '30px', sm: '32px', md: '35px', lg: '40px' },
						height: { xs: '30px', sm: '32px', md: '35px', lg: '40px' },
						"&:hover": {
							backgroundColor: Colors.blue,
						},
					}}
					onClick={handleNext}>
					<ArrowForwardIosOutlinedIcon
						sx={{
							color: "white",
							fontSize: { xs: 18, sm: 20, md: 24, lg: 28 }
						}}
					/>
				</IconButton>
			</Box>

			<Box
				display='flex'
				flexDirection='row'
				justifyContent="space-between"
				columnGap={2}
			>

				{slideItems.map((item, index) => (
					<Box
						item
						key={index}>
						<Box
							textAlign="center">
							<BlogCard data={item} background_color="#F8F8F8" font_color="black" />
						</Box>
					</Box>
				))}
			</Box>

			<Box item>
				<IconButton
					variant="contained"
					sx={{
						bgcolor: Colors.blue,
						width: { xs: '30px', sm: '32px', md: '35px', lg: '40px' },
						height: { xs: '30px', sm: '32px', md: '35px', lg: '40px' },
						"&:hover": {
							backgroundColor: Colors.blue,
						},
					}}
					onClick={handlePrev}>
					<ArrowBackIosOutlinedIcon
						sx={{
							color: "white",
							fontSize: { xs: 18, sm: 20, md: 24, lg: 28 }
						}}
					/>
				</IconButton>
			</Box>
		</Grid>
	);
};

export default CardBlogSlider;
