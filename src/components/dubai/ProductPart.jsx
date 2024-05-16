"use client";
import React from "react";

import { useState } from "react";
import { createOrder, createProduct } from "@/services/Dubai";
import { useAuth } from "@/context/AuthContext";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	TextField,
	Typography,
} from "@mui/material";
import SuccessDialog from "./SuccessDialog";
import { enqueueSnackbar } from "notistack";

import * as yup from "yup";

const schema = yup.object({
	url: yup
		.string()
		.required("لطفا لینک محصول را وارد نمایید")
		.url("لطفا یک لینک معتبر وارد کنید"),
});

const ProductPart = () => {
	const [showDialog, setShowDialog] = useState(false);
	const [product, setProduct] = useState({
		id: 0,
		name: "",
		discounted: false,
		discount: 0,
		image_link: "",
		product_url: "",
		site: "",
		price: "",
	});
	const handleClose = () => {
		setShowDialog(false);
	};

	const [url, setUrl] = useState("");

	const [showProduct, setShowProduct] = useState(false);

	const sendUrlBtn = async () => {
		try {
			await schema.validate({ url });
			try {
				enqueueSnackbar({ message: "در حال جستجو...", variant: "info" });
				const { data } = await createProduct(url);
				enqueueSnackbar({ message: "محصول یافت شد!", variant: "success" });
				setProduct(data);
				setShowProduct(true);
			} catch (error) {
				enqueueSnackbar({ message: "خطایی رخ داد!", variant: "error" });
			}
		} catch (error) {
			enqueueSnackbar({ message: error.message, variant: "error" });
		}
	};

	const { tokens } = useAuth();
	return (
		<>
			<Container maxWidth="xl">
				<Box
					sx={{
						mt: 5,
						px: 2,
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						alignItems: "center",
					}}>
					<TextField
						dir="ltr"
						onChange={(e) => setUrl(e.target.value)}
						name="url"
						id="url"
						type="url"
						value={url}
						label={" ... لینک محصول مورد نظر را بنداز اینجا"}
						fullWidth
					/>
					<Button
						onClick={sendUrlBtn}
						variant="contained"
						sx={{
							mt: 3,
							gap: 1.5,
							px: 8,
							borderRadius: 3,
						}}>
						<svg
							width="21"
							height="21"
							viewBox="0 0 21 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.7129 18.1576L16.6236 14.0684C16.4391 13.8838 16.1889 13.7813 15.9264 13.7813H15.2578C16.3898 12.3334 17.0625 10.5123 17.0625 8.53125C17.0625 3.81855 13.2439 0 8.53125 0C3.81855 0 0 3.81855 0 8.53125C0 13.2439 3.81855 17.0625 8.53125 17.0625C10.5123 17.0625 12.3334 16.3898 13.7812 15.2578V15.9264C13.7812 16.1889 13.8838 16.4391 14.0684 16.6236L18.1576 20.7129C18.5432 21.0984 19.1666 21.0984 19.548 20.7129L20.7088 19.5522C21.0943 19.1666 21.0943 18.5432 20.7129 18.1576ZM8.53125 13.7813C5.63144 13.7813 3.28125 11.4352 3.28125 8.53125C3.28125 5.63145 5.62734 3.28125 8.53125 3.28125C11.4311 3.28125 13.7812 5.62734 13.7812 8.53125C13.7812 11.4311 11.4352 13.7813 8.53125 13.7813Z"
								fill="white"
							/>
						</svg>
						<Typography
							variant="h6"
							fontWeight={900}>
							{"جستجو کن"}
						</Typography>
					</Button>
				</Box>
				{showProduct ? (
					<Box
						sx={{
							mt: 10,
							direction: "rtl",
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							justifyContent: { xs: "center", md: "start" },
						}}>
						<Box>
							<CardMedia
								image={product.image_link}
								sx={{
									height: 400,
									width: 400,
									borderRadius: 10,
									ml: { xs: 0, md: 7 },
									mb: 3,
								}}
							/>
						</Box>
						<Box>
							<Typography
								variant="h4"
								fontWeight={900}>
								{product.name}
							</Typography>
							<Box
								mt={4}
								display="flex"
								gap={2}>
								<Typography
									variant="h6"
									color="#22668D"
									fontWeight={900}>
									{"Link: "}
								</Typography>
								<Typography
									sx={{
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "ellipsis",
									}}
									variant="h6"
									color="#70CEE5">
									{product.product_url}
								</Typography>
							</Box>
							<Box
								mt={2}
								display="flex"
								gap={2}>
								<Typography
									variant="h6"
									color="#22668D"
									fontWeight={900}>
									{"Call site: "}
								</Typography>
								<Typography variant="h6">{product.site}</Typography>
							</Box>
							<Box
								mt={2}
								display="flex"
								gap={2}>
								<Typography
									variant="h6"
									color="#22668D"
									fontWeight={900}>
									{"Discount: "}
								</Typography>
								<Typography variant="h6">{product.discount}</Typography>
							</Box>
							<Box
								mt={2}
								display="flex"
								gap={10}>
								<Typography
									variant="h6"
									color="#22668D"
									fontWeight={900}>
									{"Price: "}
								</Typography>
								<Typography
									variant="h6"
									fontWeight={900}>
									{`${product.price} AED`}
								</Typography>
							</Box>
							<Box
								display="flex"
								sx={{
									justifyContent: { xs: "center", md: "start" },
								}}>
								<Button
									onClick={async () => {
										console.log(product.id);
										const response = await createOrder({
											pid: product.id,
											tokens: tokens,
										});
										console.log(response);
										setShowDialog(true);
									}}
									variant="contained"
									color="secondary"
									sx={{
										mt: 4,
										px: 3,
										borderRadius: 4,
									}}>
									<Typography
										color="#252B48"
										variant="h6"
										fontWeight={900}>
										{"تایید محصول و استعلام قیمت"}
									</Typography>
								</Button>
							</Box>
						</Box>
					</Box>
				) : (
					""
				)}
			</Container>
			<SuccessDialog
				handleClose={handleClose}
				showDialog={showDialog}
			/>
		</>
	);
};

export default ProductPart;
