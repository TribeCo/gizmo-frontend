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

{
	/*
    Inputs:
    logos: a list of all product cards in folowing format:
		[
            [imageFile: ..., companyURL: ...],
            .
            .
            .
        ]
    * note that all images can be found in @/components/comanyIcons

    itemsPerPage: number of logos to show in page 
    
    swapTime_millisecond: delay time for automatic slider 
*/
}

const CompanySlider = ({ logos, swapTime_millisecond }) => {
	const isSmallScreen = useMediaQuery("(max-width:900px)");
	const itemsPerPage = isSmallScreen ? 2 : 5;

	const [startIndex, setStartIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
		}, swapTime_millisecond);

		return () => clearInterval(interval);
	}, []);

	const handlePrev = () => {
		setStartIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
	};

	const handleNext = () => {
		setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
	};

	const slideItems = [];
	for (let index = 0; index < itemsPerPage; index++) {
		slideItems.push(logos[(startIndex + index) % logos.length]);
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
				// sx={ {
				//     mt:
				// }}
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
							<Link
								href={item[1]}
								passHref>
								<Image
									src={item[0]}
									alt="company-logo-item"
									width="auto"
									height={50}
								/>
							</Link>
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
					}}>
					<Image
						src={ShopIcon}
						width="auto"
						height={70}
					/>

					<Typography
						variant="h5"
						fontWeight="bold">
						خرید مستقیم از دوبی
					</Typography>
					<Typography
						variant="body1"
						color="GrayText"
						dir="rtl"
						mt={1}>
						خرید بدون واسطه
						<br /> و مستقیم از دبی
					</Typography>
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
					}}>
					<Image
						src={DeliveryTruck}
						width="auto"
						height={70}
					/>

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
					</Typography>
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
					}}>
					<Image
						src={Quality}
						width="auto"
						height={70}
					/>

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
					</Typography>
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
					}}>
					<Image
						src={_24HoursSupport}
						width="auto"
						height={70}
					/>

					<Typography
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
					</Typography>
				</Box>

				<Box
					mr={1}
					ml={1}
					mb={3}
					mt={3}
					sx={{
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Image
						src={MoneyGroth}
						width="auto"
						height={70}
					/>

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
					</Typography>
				</Box>
			</Grid>
		</>
	);
};

export default CompanySlider;
