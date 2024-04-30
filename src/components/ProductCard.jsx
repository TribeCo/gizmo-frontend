"use client";

import { Colors } from "@/utils";
import {
	Button,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	IconButton,
} from "@mui/material";
import { useState } from "react";

import { convert } from "@/utils";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
	const router = useRouter();

	const { addToCart } = useCart({
		color: 1,
		product: product.id,
		quantity: 1,
	});

	const handleAddToCart = () => {
		addToCart();
	};
	const handleGoToProduct = () => {
		console.log(product);
		const url = "/products/" + product.slug;
		router.push(url);
	};
	const [show, setShow] = useState(false);
	return (
		<CardActionArea
			disableRipple
			sx={{
				width: { xs: 0.65 * 242, md: 1.0 * 242 },
				height: { xs: 0.65 * 381, md: 1.0 * 381 },
				mx: 1,
				borderRadius: { xs: "30px", md: "40px" },
			}}
			onMouseOver={() => setShow(true)}
			onMouseLeave={() => setShow(false)}>
			{!show ? first() : second()}
		</CardActionArea>
	);

	function second() {
		console.log(product);
		return (
			<Card
				sx={{
					width: { xs: 0.65 * 242, md: 1.0 * 242 },
					height: { xs: 0.65 * 381, md: 1.0 * 381 },
					borderRadius: { xs: "30px", md: "40px" },
					background: "linear-gradient(to bottom, #FFFFFF 45%, #DEF0F5 75%)",
					border: "5px solid #5A8EAA",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
					pb: { xs: 1, md: 1.5 },
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
							mt: { xs: 0.4, md: 0.8 },
							width: { xs: 0.65 * 218, md: 1.0 * 218 },
							height: { xs: 0.65 * 218, md: 1.0 * 218 },
							objectFit: "cover",
							borderRadius: { xs: "25px", md: "30px" },
							filter: `${product.is_available ? "" : "grayscale(100%)"}`,
							WebkitFilter: `${product.is_available ? "" : "grayscale(100%)"}`,
						}}
						image={product.image2}
						alt={product.name}>
						<Box
							display={
								product.is_available &&
								!(product.discount > 0) &&
								!product.is_new
									? "none"
									: ""
							}
							sx={{
								mt: { xs: 0.7, md: 1.5 },
								ml: { xs: 1, md: 2.5 },
							}}
							position="absolute"
							bgcolor={
								!product.is_available
									? "#747678"
									: product.discount > 0 || product.net_sale
									? "#BB0000"
									: product.is_new
									? "#5B9A8B"
									: ""
							}
							borderRadius="20px"
							px={1}
							color="#fff">
							<Typography
								align="center"
								sx={{
									fontSize: { xs: "10px", md: "16px" },
									lineHeight: { xs: "22px", md: "30px" },
								}}
								fontWeight="900">
								{!product.is_available
									? "ناموجود"
									: product.discount > 0
									? convert(product.discount) + " %"
									: product.is_new
									? "جدید"
									: ""}
							</Typography>
						</Box>
					</CardMedia>
					<Box>
						<Typography
							sx={{
								my: { xs: 0.25, md: 0.75 },
								maxHeight: 40,
								lineHeight: 1.2,
								width: { xs: 0.63 * 170, md: 1.0 * 170 },
								overflow: "hidden",
								fontSize: { xs: "11px", md: "" },
							}}
							variant="subtitle1"
							align="center"
							fontWeight={900}>
							{product.name}
						</Typography>
					</Box>
					{!product.is_available ? (
						<Typography
							align="center"
							sx={{
								mt: { xs: "4px", md: "10px" },
								fontSize: { xs: "12px", md: "16px" },
							}}
							fontWeight="400"
							lineHeight="20px">
							{"ناموجود"}
						</Typography>
					) : (
						<Typography
							align="center"
							sx={{
								mt: { xs: "0px", md: "10px" },
								fontSize: { xs: "12px", md: "16px" },
							}}
							fontWeight="400"
							lineHeight="20px">
							{convert(product.discounted_price) + " تومان"}
						</Typography>
					)}
				</IconButton>
				<Button
					onClick={handleAddToCart}
					fullWidth
					variant="contained"
					sx={{
						mt: { xs: "0px", md: "10px" },
						maxWidth: { xs: 120, md: 200 },
						mx: "auto",
						bgcolor: Colors.orange,
						color: "#000",
						height: { xs: "30px", md: "40px" },
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
						sx={{
							fontSize: { xs: "10px", md: "15px" },
							opacity: "100%",
						}}>
						{product.is_available ? "افزودن به سبد خرید" : "موجود شد خبرم کن!!"}
					</Typography>
				</Button>
			</Card>
		);
	}

	function first() {
		return (
			<Card
				sx={{
					width: { xs: 0.65 * 242, md: 1.0 * 242 },
					height: { xs: 0.65 * 381, md: 1.0 * 381 },
					borderRadius: { xs: "30px", md: "40px" },
					background:
						"linear-gradient(104.6deg, rgba(255, 255, 255, 0.22) 1.9%, rgba(255, 255, 255, 0.12) 96.76%)",
					boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.1)",
				}}>
				<CardMedia
					sx={{
						width: { xs: 0.65 * 242, md: 1.0 * 242 },
						height: { xs: 0.65 * 242, md: 1.0 * 242 },
						objectFit: "cover",
						filter: `${product.is_available ? "" : "grayscale(100%)"}`,
						WebkitFilter: `${product.is_available ? "" : "grayscale(100%)"}`,
					}}
					image={product.image1}
					alt={product.name}>
					<Box
						display={
							product.is_available && !(product.discount > 0) && !product.is_new
								? "none"
								: ""
						}
						position="absolute"
						bgcolor={
							!product.is_available
								? "#747678"
								: product.discount > 0 || product.net_sale
								? "#BB0000"
								: product.is_new
								? "#5B9A8B"
								: ""
						}
						borderRadius="20px"
						px={1}
						sx={{
							mt: { xs: 1, md: 1.5 },
							ml: { xs: 1.5, md: 2.5 },
						}}
						color="#fff">
						<Typography
							align="center"
							sx={{
								fontSize: { xs: "10px", md: "16px" },
								lineHeight: { xs: "22px", md: "30px" },
							}}
							fontWeight="900">
							{!product.is_available
								? "ناموجود"
								: product.net_sale
								? "تخفیف ویژه"
								: product.discount > 0
								? convert(product.discount) + " %"
								: product.is_new
								? "جدید"
								: ""}
						</Typography>
					</Box>
				</CardMedia>
				<Box
					px={2}
					pt={1}>
					<Typography
						sx={{
							mb: { xs: 0, md: 1 },
							height: 35,
							lineHeight: 1.2,
							overflow: "hidden",
							fontSize: { xs: "12px", md: "16px" },
						}}
						align="center"
						variant="h6"
						fontWeight={900}>
						{product.name}
					</Typography>
					{!product.is_available ? (
						<Typography
							mt={2}
							color="#747678"
							align="center"
							sx={{
								fontSize: { xs: "14px", md: "20px" },
							}}
							fontWeight="400"
							lineHeight="25px">
							{"ناموجود"}
						</Typography>
					) : product.discount > 0 ? (
						<>
							{product.net_sale && (
								<Box
									sx={{
										mt: { xs: 0, md: 0.1 },
										mb: { xs: 0.1, md: 0 },
										ml: {
											xs: 14,
											md: 21,
										},
										px: { xs: 0.7, md: 1 },
										py: { xs: "2px", md: "4px" },
									}}
									position="absolute"
									bgcolor="#BB0000"
									borderRadius="20px"
									color="#fff">
									<Typography
										sx={{
											fontSize: { xs: "9px", md: "14px" },
										}}
										noWrap
										align="center"
										fontWeight="400"
										lineHeight="10px">
										{convert(product.discount) + " %"}
									</Typography>
								</Box>
							)}
							<Box
								position="absolute"
								bgcolor="#BB0000"
								borderRadius="20px"
								sx={{
									mt: { xs: 0.85, md: 1.7 },
									ml: { xs: 2.7, md: 6 },
									px: { xs: 5.5, md: 7 },
								}}
								pt="2px"
								color="#fff"
							/>
							<Typography
								align="center"
								sx={{
									my: { xs: "0px", md: "15px" },
									fontSize: { xs: "14px", md: "20px" },
									color: "#BFBFBF",
								}}
								fontWeight="400"
								lineHeight="15px">
								{convert(product.price) + " تومان"}
							</Typography>
							<Typography
								align="center"
								sx={{
									mt: { xs: "0px", md: "5px" },
									fontSize: { xs: "14px", md: "20px" },
								}}
								fontWeight="400"
								lineHeight="25px">
								{convert(((100 - product.discount) / 100) * product.price) +
									" تومان"}
							</Typography>
						</>
					) : (
						<Typography
							align="center"
							sx={{
								mt: { xs: "5px", md: "25px" },
								fontSize: { xs: "14px", md: "20px" },
							}}
							fontWeight="400"
							lineHeight="20px">
							{convert(product.price) + " تومان"}
						</Typography>
					)}
				</Box>
			</Card>
		);
	}
};

export default ProductCard;
