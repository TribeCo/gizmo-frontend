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
	const isSmallScreen = useMediaQuery("(max-width:900px)");
	const itemsPerPage = isSmallScreen ? 2 : 4;

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
		<>
			<Grid
				mt={5}
				pr={3}
				pl={3}
				container
				justifyContent="space-between"
				alignItems="center"
			>
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

				{slideItems.map((item, index) => (
					<Grid
						item
						key={index}>
						<Box
							width="100%"
							sx={{
								maxWidth: { xs: 100, md: 300 },
							}}
							textAlign="center">
                                {item}
						</Box>
					</Grid>
				))}

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
		</>
	);
};

export default CardBlogSlider;
