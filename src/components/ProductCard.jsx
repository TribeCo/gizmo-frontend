"use client";

import { Colors } from "@/utils";
import {
	Button,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
	IconButton,
} from "@mui/material";
import { useState } from "react";

import { convert } from "@/utils";

const handleAddToCart = () => {
	//TODO
	console.log("Go to cart");
};
const handleGoToProduct = () => {
	//TODO
	console.log("Go to Product page");
};

const ProductCard = ({ product }) => {
	const [like, setLike] = useState(false);
	const [show, setShow] = useState(false);
	return (
		<CardActionArea
			disableRipple
			sx={{
				mx: 1,
				borderRadius: "40px",
			}}
			onMouseOver={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			{!show ? first() : second()}
		</CardActionArea>
	);

	function second() {
		return (
			<Card
				sx={{
					width: 242,
					height: 381,
					borderRadius: "40px",
					background: "linear-gradient(to bottom, #FFFFFF 45%, #DEF0F5 75%)",
					border: "5px solid #5A8EAA",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					pb: 1.5,
				}}>
				<IconButton
					disableRipple
					onClick={handleGoToProduct}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						pt: 0,
					}}>
					<CardMedia
						sx={{
							mx: "auto",
							mt: 0.8,
							height: 218,
							width: 218,
							objectFit: "cover",
							borderRadius: "30px",
							filter: `${product.available ? "" : "grayscale(100%)"}`,
							WebkitFilter: `${product.available ? "" : "grayscale(100%)"}`,
						}}
						image={product.image2}
						alt={product.name}>
						<Box
							mt={1.5}
							ml={2.5}
							position="absolute"
							bgcolor={
								!product.available
									? "#747678"
									: product.is_new
									? "#5B9A8B"
									: "#BB0000"
							}
							borderRadius="20px"
							px={1}
							color="#fff">
							<Typography
								align="center"
								fontSize="16px"
								fontWeight="900"
								lineHeight="30px">
								{!product.available
									? "ناموجود"
									: product.is_new
									? "جدید"
									: "فروش ویژه"}
							</Typography>
						</Box>
					</CardMedia>

					<Box>
						<Typography
							sx={{
								my: 0.75,
								maxHeight: 40,
								lineHeight: 1.2,
								width: 170,
								overflow: "hidden",
							}}
							variant="subtitle1"
							align="center"
							fontWeight={900}>
							{product.name}
						</Typography>
						<Box
							position="absolute"
							ml={17}>
							<IconButton
								disableRipple
								onClick={() => setLike(!like)}>
								{like ? (
									<svg
										width="30"
										height="30"
										viewBox="0 0 20 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M10.2499 5.25L10.45 17C10.5083 17.0605 11.6726 7.96714 11.7499 8C11.8273 8.03286 8.66593 8.5 8.74994 8.5C8.83395 8.5 10.1671 5.19098 10.2444 5.15812C10.3218 5.12526 9.94164 5.06049 9.99994 5L10.2499 5.25ZM5.83413 13.6833C5.70594 13.5779 3.21348 9.2339 3.04829 9.25C2.8831 9.2661 2.90538 11.296 2.79996 11.4242C2.69454 11.5523 1.93553 11.0106 1.95163 11.1758C2.01142 11.4828 4.93915 14.636 5.03913 14.65C5.34959 14.2725 5.83413 13.6833 5.83413 13.6833ZM1.95163 11.1758C1.99102 11.2478 2.04422 11.3114 2.10817 11.3628C2.17212 11.4143 2.24559 11.4526 2.32436 11.4757C2.40314 11.4987 2.48568 11.5061 2.56729 11.4972C2.64889 11.4884 2.72795 11.4636 2.79996 11.4242C2.87197 11.3848 2.93551 11.3316 2.98696 11.2676C3.03841 11.2037 3.07676 11.1302 3.09982 11.0514C3.12288 10.9726 3.1302 10.8901 3.12136 10.8085C3.11252 10.7269 3.08769 10.6478 3.04829 10.5758C3.04829 10.5758 2.3799 10.9415 1.95163 11.1758ZM5.93891 13.7692C5.93891 11.9775 6.11744 16.6325 7.49994 16C9.74994 18.25 8.73496 15.2183 10.45 17V4.15082C8.41663 2.03666 6.05329 1.68749 4.16663 2.54999C2.32163 3.39416 1.04163 5.35416 1.04163 7.61416L5.93891 13.7692ZM7.08079 16.25C7.50829 16.5867 7.96663 16.945 8.43079 17.2167C8.89496 17.4875 9.42496 17.7083 9.99996 17.7083V17.0833V16.4583C9.74163 16.4583 9.43829 16.3583 9.06163 16.1375C8.68413 15.9175 8.29329 15.6142 7.85496 15.2683L7.08079 16.25ZM12.9191 16.25C14.1075 15.3125 15.6275 14.2392 16.8191 12.8967C18.0333 11.53 18.9583 9.83582 18.9583 7.61416L9.99994 17C9.99994 18.8308 10.6233 10.2142 9.54996 11.4242C8.45413 12.6575 10.8133 13.6542 9.54996 14.65L12.9191 16.25ZM18.9583 7.61416C18.9583 5.35416 17.6791 3.39416 15.8333 2.54999C13.9466 1.68749 11.585 2.03666 9.54996 4.14999L8.99994 8.75L9.99994 5C9.74994 5 4.41628 12.9296 5.75961 13.5438C5.30961 15.2938 9.99994 15.2075 9.99994 17L18.9583 7.61416ZM9.54996 14.65C9.11163 14.9958 10.3775 15.5383 9.99996 15.7583C9.62329 15.9783 10.2583 16.4583 9.99996 16.4583V17.0833V17.7083C10.575 17.7083 11.105 17.4875 11.5691 17.2167C12.0341 16.945 12.4916 16.5867 12.9191 16.25L9.54996 14.65ZM7.85496 15.2683C7.19163 14.7458 6.51746 14.2458 5.83413 13.6833C5.83413 13.6833 5.34959 14.2725 5.03913 14.65C5.73079 15.2192 6.46246 15.7625 7.08079 16.25L7.85579 15.2683H7.85496ZM3.04829 10.5767C2.5463 9.67034 5.93302 14.8052 5.93891 13.7692L1.04163 7.61416C1.04163 8.97916 1.39163 10.1525 1.95163 11.1758C2.3799 10.9415 3.04829 10.5758 3.04829 10.5758V10.5767Z"
											fill="#BB0000"
										/>
									</svg>
								) : (
									<svg
										width="26"
										height="26"
										viewBox="0 0 22 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M9.00002 2.58332L8.55002 3.01666C8.60832 3.07714 8.67822 3.12526 8.75554 3.15812C8.83286 3.19098 8.91601 3.20792 9.00002 3.20792C9.08403 3.20792 9.16718 3.19098 9.2445 3.15812C9.32182 3.12526 9.39172 3.07714 9.45002 3.01666L9.00002 2.58332ZM4.83419 11.6833C4.706 11.5779 4.54118 11.5277 4.37599 11.5438C4.21081 11.5599 4.05878 11.641 3.95335 11.7692C3.84793 11.8973 3.79775 12.0622 3.81384 12.2273C3.82994 12.3925 3.911 12.5446 4.03919 12.65L4.83419 11.6833ZM0.951687 9.17582C0.991084 9.24783 1.04428 9.31137 1.10823 9.36282C1.17219 9.41427 1.24565 9.45262 1.32442 9.47568C1.4032 9.49874 1.48574 9.50606 1.56735 9.49722C1.64895 9.48838 1.72801 9.46355 1.80002 9.42416C1.87203 9.38476 1.93557 9.33156 1.98702 9.26761C2.03847 9.20366 2.07682 9.13019 2.09988 9.05142C2.12294 8.97264 2.13026 8.8901 2.12142 8.8085C2.11258 8.72689 2.08775 8.64783 2.04835 8.57582L0.951687 9.17582ZM1.29169 5.61416C1.29169 3.82249 2.30419 2.31915 3.68669 1.68666C5.03002 1.07249 6.83502 1.23499 8.55002 3.01666L9.45002 2.15082C7.41669 0.0366551 5.05335 -0.312512 3.16669 0.549988C1.32169 1.39416 0.041687 3.35416 0.041687 5.61416H1.29169ZM6.08085 14.25C6.50835 14.5867 6.96669 14.945 7.43085 15.2167C7.89502 15.4875 8.42502 15.7083 9.00002 15.7083V14.4583C8.74169 14.4583 8.43835 14.3583 8.06169 14.1375C7.68419 13.9175 7.29335 13.6142 6.85502 13.2683L6.08085 14.25ZM11.9192 14.25C13.1075 13.3125 14.6275 12.2392 15.8192 10.8967C17.0334 9.52999 17.9584 7.83582 17.9584 5.61416H16.7084C16.7084 7.44499 15.9584 8.85666 14.885 10.0667C13.7892 11.3 12.4084 12.2725 11.145 13.2683L11.9192 14.25ZM17.9584 5.61416C17.9584 3.35416 16.6792 1.39416 14.8334 0.549988C12.9467 -0.312512 10.585 0.0366551 8.55002 2.14999L9.45002 3.01666C11.165 1.23582 12.97 1.07249 14.3134 1.68666C15.6959 2.31915 16.7084 3.82166 16.7084 5.61416H17.9584ZM11.145 13.2683C10.7067 13.6142 10.3159 13.9175 9.93835 14.1375C9.56169 14.3575 9.25835 14.4583 9.00002 14.4583V15.7083C9.57502 15.7083 10.105 15.4875 10.5692 15.2167C11.0342 14.945 11.4917 14.5867 11.9192 14.25L11.145 13.2683ZM6.85502 13.2683C6.19169 12.7458 5.51752 12.2458 4.83419 11.6833L4.03919 12.65C4.73085 13.2192 5.46252 13.7625 6.08085 14.25L6.85585 13.2683H6.85502ZM2.04835 8.57666C1.54636 7.67034 1.2858 6.65019 1.29169 5.61416H0.041687C0.041687 6.97916 0.391687 8.15249 0.951687 9.17582L2.04835 8.57582V8.57666Z"
											fill="#213346"
										/>
									</svg>
								)}
							</IconButton>
						</Box>
					</Box>
					{!product.available ? (
						<Typography
							align="center"
							fontSize="16px"
							fontWeight="400"
							lineHeight="20px"
							mt="10px">
							{"ناموجود"}
						</Typography>
					) : (
						<Typography
							align="center"
							fontSize="16px"
							fontWeight="400"
							lineHeight="20px"
							mt="10px">
							{`${convert(parseInt(product.discounted_price))} تومان`}
						</Typography>
					)}
				</IconButton>
				<Button
					onClick={handleAddToCart}
					fullWidth
					variant="contained"
					sx={{
						mt: "10px",
						maxWidth: 200,
						mx: "auto",
						bgcolor: Colors.orange,
						color: "#000",
						height: "40px",
						borderRadius: "40px",
						opacity: "70%",
						display: "block",
						"&:hover": {
							bgcolor: Colors.orange,
							opacity: "100%",
						},
					}}>
					<Typography
						fontWeight="900"
						fontSize="15px"
						sx={{ opacity: "100%" }}>
						{product.available ? "افزودن به سبد خرید" : "موجود شد خبرم کن!!"}
					</Typography>
				</Button>
			</Card>
		);
	}

	function first() {
		return (
			<Card
				sx={{
					width: 242,
					height: 381,
					borderRadius: "40px",
					background:
						"linear-gradient(104.6deg, rgba(255, 255, 255, 0.22) 1.9%, rgba(255, 255, 255, 0.12) 96.76%)",
					boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
				}}>
				<CardMedia
					sx={{
						height: 242,
						width: 242,
						objectFit: "cover",
						filter: `${product.available ? "" : "grayscale(100%)"}`,
						WebkitFilter: `${product.available ? "" : "grayscale(100%)"}`,
					}}
					image={product.image1}
					alt={product.name}>
					<Box
						mt={1.5}
						ml={2.5}
						position="absolute"
						bgcolor={
							!product.available
								? "#747678"
								: product.badge === "جدید"
								? "#5B9A8B"
								: "#BB0000"
						}
						borderRadius="20px"
						px={1}
						color="#fff">
						<Typography
							align="center"
							fontSize="16px"
							fontWeight="900"
							lineHeight="30px">
							{!product.available
								? "ناموجود"
								: product.badge
								? product.badge
								: convert(product.discount) + " %"}
						</Typography>
					</Box>
				</CardMedia>
				<CardContent>
					<Typography
						sx={{
							mb: 1,
							height: 35,
							overflow: "hidden",
						}}
						align="center"
						variant="h6"
						fontWeight={900}>
						{product.name}
					</Typography>
					{!product.available ? (
						<Typography
							mt={2}
							color="#747678"
							align="center"
							fontSize="20px"
							fontWeight="400"
							lineHeight="25px">
							{"ناموجود"}
						</Typography>
					) : product.discount > 0 ? (
						<>
							{product.badge === "تخفیف ویژه" && (
								<Box
									mt={0.1}
									ml={21}
									position="absolute"
									bgcolor="#BB0000"
									borderRadius="20px"
									px={1}
									py="4px"
									color="#fff">
									<Typography
										noWrap
										align="center"
										fontSize="14px"
										fontWeight="400"
										lineHeight="14px">
										{convert(product.discount) + " %"}
									</Typography>
								</Box>
							)}
							<Box
								mt={1.3}
								ml={6}
								position="absolute"
								bgcolor="#BB0000"
								borderRadius="20px"
								px={7}
								pt="2.5px"
								color="#fff"></Box>
							<Typography
								mt="5px"
								align="center"
								fontSize="20px"
								fontWeight="400"
								lineHeight="25px"
								sx={{ color: "#BFBFBF" }}>
								{convert(product.price) + " تومان"}
							</Typography>
							<Typography
								mt="5px"
								align="center"
								fontSize="20px"
								fontWeight="400"
								lineHeight="25px">
								{convert(((100 - product.discount) / 100) * product.price) +
									" تومان"}
							</Typography>
						</>
					) : (
						<Typography
							align="center"
							mt="25px"
							fontSize="20px"
							fontWeight="400"
							lineHeight="25px">
							{convert(product.price) + " تومان"}
						</Typography>
					)}
				</CardContent>
			</Card>
		);
	}
};

export default ProductCard;
