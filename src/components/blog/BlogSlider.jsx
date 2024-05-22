"use client";

import React, { useState, useEffect } from "react";
import { Colors } from "@/utils";
import {
	Box,
	Button,
	Card,
	CardMedia,
	Grid,
	IconButton,
	Paper,
	SvgIcon,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

const BlogSlider = ({ banners }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 3000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? banners.length - 1 : prevIndex - 1,
		);
	};

	return (
		<Grid
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			sx={{
				mt: { xs: 2, sm: 4, md: 6, lg: 8 },
				rowGap: { xs: 2, sm: 4, md: 6, lg: 8 },
			}}>
			<Card
				sx={{
					my: 2,
					borderRadius: "20px",
					overflow: false,
				}}>
				<CardMedia
					image={banners[currentIndex].image}
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "flex-start",
						height: { xs: 145, sm: 250, md: 380, lg: 500 },
						width: { xs: 330, sm: 580, md: 880, lg: 1180 },
					}}>
					<Paper
						sx={{
							bgcolor: "white",
							width: { xs: 40, sm: 70, md: 80, lg: 110 },
							height: { xs: 60, sm: 95, md: 110, lg: 140 },
							columnGap: { xs: 0, sm: "3px", md: "5px", lg: 1 },
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderBottomLeftRadius: "20px",
							boxShadow: "none",
						}}>
						<Grid
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							sx={{
								rowGap: { xs: 1, sm: 2, md: "12px", lg: 2 },
							}}>
							<IconButton
								onClick={handleNext}
								sx={{
									ml: { xs: 1, sm: 0 },
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: { xs: 10, sm: 26, md: 32, lg: 40 },
									height: { xs: 10, sm: 26, md: 32, lg: 40 },
									bgcolor: Colors.blue,
									"&:hover": {
										backgroundColor: Colors.blue,
									},
								}}>
								<ArrowForwardIosOutlinedIcon
									sx={{
										color: "white",
										fontSize: {
											xs: "12px",
											sm: "22px",
											md: "24px",
											lg: "26px",
										},
									}}
								/>
							</IconButton>
							<IconButton
								onClick={handlePrev}
								sx={{
									ml: { xs: 1, sm: 0 },
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: { xs: 10, sm: 26, md: 32, lg: 40 },
									height: { xs: 10, sm: 26, md: 32, lg: 40 },
									bgcolor: Colors.blue,
									"&:hover": {
										backgroundColor: Colors.blue,
									},
								}}>
								<ArrowBackIosOutlinedIcon
									sx={{
										color: "white",
										fontSize: {
											xs: "12px",
											sm: "22px",
											md: "24px",
											lg: "26px",
										},
									}}
								/>
							</IconButton>
						</Grid>
						<Grid
							display="flex"
							flexDirection="column"
							alignItems="center"
							sx={{
								scale: { xs: "1.5", sm: "3", lg: "4" },
							}}>
							<SvgIcon
								width="8"
								height="83"
								viewBox="0 0 8 83"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle
									cx="4"
									cy="79"
									r="4"
									transform="rotate(-90 4 79)"
									fill="#D9D9D9"
								/>
								<circle
									cx="4"
									cy="60.25"
									r="4"
									transform="rotate(-90 4 60.25)"
									fill="#D9D9D9"
								/>
								<circle
									cx="4"
									cy="41.5"
									r="4"
									transform="rotate(-90 4 41.5)"
									fill="#D9D9D9"
								/>
								<circle
									cx="4"
									cy="22.75"
									r="4"
									transform="rotate(-90 4 22.75)"
									fill="#D9D9D9"
								/>
								<circle
									cx="4"
									cy="4"
									r="4"
									transform="rotate(-90 4 4)"
									fill="#D9D9D9"
								/>
							</SvgIcon>
						</Grid>
					</Paper>
				</CardMedia>
			</Card>
		</Grid>
	);
};

export default BlogSlider;
