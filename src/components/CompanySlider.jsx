"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Box,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Colors } from "@/utils";

import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import ShopIcon from "@/components/siteIcons/shopIcon.png";
import DeliveryTruck from "@/components/siteIcons/deliveryTruck.png";
import MoneyGroth from "@/components/siteIcons/moneyGroth.png";
import Quality from "@/components/siteIcons/quality.png";
import _24HoursSupport from "@/components/siteIcons/_24hoursSupport.png";

const CompanySlider = ({ brands, swapTime_millisecond, hasSecondPart }) => {
	const isSmallScreen = useMediaQuery("(max-width:900px)");
	const itemsPerPage = isSmallScreen ? 2 : 5;

	const [startIndex, setStartIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setStartIndex((prevIndex) => (prevIndex + 1) % brands.length);
		}, swapTime_millisecond);

		return () => clearInterval(interval);
	}, []);

	const handlePrev = () => {
		setStartIndex(
			(prevIndex) => (prevIndex - 1 + brands.length) % brands.length,
		);
	};

	const handleNext = () => {
		setStartIndex((prevIndex) => (prevIndex + 1) % brands.length);
	};

	let slideItems = [];
	if (brands.length > itemsPerPage) {
		for (let index = 0; index < itemsPerPage; index++) {
			slideItems.push(brands[(startIndex + index) % brands.length]);
		}
	} else {
		slideItems = brands;
	}

	return (
		<>
			<Grid
				mt={5}
				pr={3}
				pl={3}
				container
				justifyContent="space-between"
				alignItems="center">
				<Grid item>
					<IconButton
						variant="contained"
						sx={{
							transform: {
								xs: "scale(0.6)",
								sm: "scale(0.6)",
								md: "scale(1)",
							},
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

				{slideItems.map((item) => (
					<Grid
						item
						key={item.id}>
						<Box
							width="100%"
							sx={{
								maxWidth: { xs: 100, md: 300 },
							}}
							textAlign="center">
							<Link
								target="_blank"
								href={item.website}
								passHref>
								<Image
									src={item.logo}
									alt={item.name}
									height={200}
									width={200}
								/>
							</Link>
						</Box>
					</Grid>
				))}

				<Grid item>
					<IconButton
						variant="contained"
						sx={{
							transform: {
								xs: "scale(0.6)",
								sm: "scale(0.6)",
								md: "scale(1)",
							},
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
			{hasSecondPart ? (
				<Grid
					mt={12}
					component="footer"
					bgcolor="rgba(142, 205, 221, 0.3)"
					color="black"
					py={3}
					px={16}
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					flexWrap="wrap"
					width="100%">
					<Box
					mr={1}
					ml={1}
					mt={3}
					mb={3}
					sx={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						"& .image-container": {
						"& img": {
							width: "auto",
							height: 70,
							"@media (max-width: 600px)": {
							height: 40,
							},
						},
						},
						"& .typography-container": {
						"@media (max-width: 600px)": {
							"& h5": {
							fontSize: "1.2rem",
							},
							"& p": {
							fontSize: "0.9rem",
							},
						},
						},
					}}
					>
					<div className="image-container">
						<Image
						alt="shop icon"
						src={ShopIcon}
						width="auto"
						height={70}
						/>
					</div>

					<div className="typography-container">
						<Typography variant="h5" fontWeight="bold">
						خرید مستقیم از دوبی
						</Typography>
						<Typography variant="body1" color="GrayText" dir="rtl" mt={1}>
						خرید بدون واسطه
						<br /> و مستقیم از دبی
						</Typography>
					</div>
					</Box>


					<Box
						mr={1}
						ml={1}
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							"& .image-container": {
							"& img": {
								width: "auto",
								height: 70,
								"@media (max-width: 600px)": {
								height: 50,
								},
							},
							},
							"& .typography-container": {
							"@media (max-width: 600px)": {
								"& h5": {
								fontSize: "1.2rem",
								},
								"& p": {
								fontSize: "0.9rem",
								},
							},
							},
						}}>
							<div className="image-container">
						<Image
							alt="delivery truck"
							src={DeliveryTruck}
							width="auto"
							height={70}
						/></div>
						
						<div className="typography-container">
						<Typography
							variant="h5"
							fontWeight="bold">
							تحویل اکسپرس
						</Typography>
						<Typography
							variant="body1"
							color="GrayText"
							dir="rtl"
							mt={1}>
							ارسال با پست پیشتاز به
							<br /> سراسر ایران
						</Typography></div>
					</Box>

					<Box
						mr={1}
						ml={1}
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							"& .image-container": {
							"& img": {
								width: "auto",
								height: 70,
								"@media (max-width: 600px)": {
								height: 50,
								},
							},
							},
							"& .typography-container": {
							"@media (max-width: 600px)": {
								"& h5": {
								fontSize: "1.2rem",
								},
								"& p": {
								fontSize: "0.9rem",
								},
							},
							},
						}}>
							<div className="image-container">
						<Image
							alt="Quality"
							src={Quality}
							width="auto"
							height={70}
						/></div>

					<div className="typography-container">
						<Typography
							variant="h5"
							fontWeight="bold">
							ضمانت اصالت کالا
						</Typography>
						<Typography
							variant="body1"
							color="GrayText"
							dir="rtl"
							mt={1}>
							ضمانت 100% اصالت <br />
							محصولات
						</Typography> </div>
					</Box>

					<Box
						mr={1}
						ml={1}
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							"& .image-container": {
							"& img": {
								width: "auto",
								height: 70,
								"@media (max-width: 600px)": {
								height: 50,
								},
							},
							},
							"& .typography-container": {
							"@media (max-width: 600px)": {
								"& h5": {
								fontSize: "1.2rem",
								},
								"& p": {
								fontSize: "0.9rem",
								},
							},
							},
						}}>
							<div className="image-container">
						<Image
							alt="24 Hours Support"
							src={_24HoursSupport}
							width="auto"
							height={70}
						/></div>

<div className="typography-container"><Typography
							variant="h5"
							fontWeight="bold">
							پشتیبانی
						</Typography>
						<Typography
							variant="body1"
							color="GrayText"
							dir="rtl"
							mt={1}>
							پشتیبانی آنلاین 24 ساعته <br />و 7 روز هفته
						</Typography></div>
					</Box>

					<Box
						mr={1}
						ml={3}
						mb={3}
						mt={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							"& .image-container": {
							"& img": {
								width: "auto",
								height: 70,
								"@media (max-width: 600px)": {
								height: 50,
								},
							},
							},
							"& .typography-container": {
							"@media (max-width: 600px)": {
								"& h5": {
								fontSize: "1.2rem",
								},
								"& p": {
								fontSize: "0.9rem",
								},
							},
							},
						}}>
							<div className="image-container">
						<Image
							alt="Money Groth"
							src={MoneyGroth}
							width="auto"
							height={70}
						/></div>
						<div className="typography-container">
						<Typography
							variant="h5"
							fontWeight="bold">
							پرداخت امن
						</Typography>
						<Typography
							variant="body1"
							color="GrayText"
							dir="rtl"
							mt={1}>
							امکان پرداخت آنلاین
						</Typography></div>
					</Box>
				</Grid>
			) : (
				<Box height={90} />
			)}
		</>
	);
};

export default CompanySlider;
