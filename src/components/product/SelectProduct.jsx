"use client";

import { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Colors, convert } from "@/utils";
import {
	addToFavorites,
	availableNotification,
	deleteFavorites,
} from "@/services/ProductPage";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { enqueueSnackbar } from "notistack";
import { baseUrl } from "@/services";
import { Add, Check, Close, Remove } from "@mui/icons-material";

const SelectProduct = ({ data }) => {
	const { tokens } = useAuth();
	const { addToCart } = useCart();

	const [selectedColor, setSelectedColor] = useState(
		data.product_color[0].color.id,
	);
	const [like, setLike] = useState(false);
	const [count, setCount] = useState(1);

	const decCount = () => {
		if (count === 1) {
		} else {
			setCount(count - 1);
		}
	};

	const incCount = () => {
		if (
			count <
			data.product_color.filter((color) => color.color.id === selectedColor)[0]
				.quantity
		)
			setCount(count + 1);
	};

	const handleAddToCart = () => {
		console.log({ color: selectedColor, product: data.id, quantity: count });
		try {
			addToCart({ color: selectedColor, product: data.id, quantity: count });
			enqueueSnackbar({
				message: "محصول با موفقیت به سبد خرید اضافه شد",
				variant: "success",
			});
		} catch (error) {
			enqueueSnackbar({
				message: error.message,
				variant: "error",
			});
		}
	};

	const handleFavorite = async () => {
		let response;
		try {
			if (!like) {
				response = await addToFavorites({
					pid: data.id,
					access: tokens ? tokens.access : "",
				});
			} else {
				response = await deleteFavorites({
					pid: data.id,
					access: tokens ? tokens.access : "",
				});
			}
			if (response.message) {
				enqueueSnackbar({ message: response.message, variant: "success" });
				setLike(!like);
			} else {
				if (response.status === 401) {
					enqueueSnackbar({
						message: "برای افزودن محصول به مورد علاقه ها ابتدا وارد شوید",
						variant: "error",
					});
				} else {
					enqueueSnackbar({
						message: "ابتدا لاگین کنید.",
						variant: "error",
					});
				}
			}
		} catch (error) {
			if (error.status === 401) {
				enqueueSnackbar({
					message: "برای افزودن محصول به مورد علاقه ها ابتدا وارد شوید",
					variant: "error",
				});
			} else {
				enqueueSnackbar({
					message: "مشکلی پیش آمد لطقا دوباره تلاش کنید.",
					variant: "error",
				});
			}
		}
	};
	const handleNotification = async () => {
		const response = await availableNotification({
			pid: data.id,
			access: tokens.access,
		});
		console.log(response);
		if (response.message) {
			enqueueSnackbar({ message: response.message, variant: "success" });
		} else {
			if (response.status === 401) {
				enqueueSnackbar({
					message: "برای فعال کردن این گذینه ابتدا باید وارد شوید",
					variant: "error",
				});
			} else {
				enqueueSnackbar({
					message: "مشکلی پیش آمد لطقا دوباره تلاش کنید.",
					variant: "error",
				});
				console.log(response.status);
			}
		}
	};

	const fetchData = async () => {
		const favResponse = await fetch(
			`${baseUrl}/api/product/${data.slug}/fav/`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${tokens.access}`,
				},
			},
		);
		const { is_fav } = await favResponse.json();
		setLike(is_fav);
	};

	useEffect(() => {
		if (tokens) {
			fetchData();
		}
	}, [tokens, data.slug]);

	return (
		<>
			<Box
				display="flex"
				maxWidth={400}
				justifyContent="space-between"
				mt={2}
				ml={3}>
				<Box>
					<Box
						display="flex"
						alignContent="center">
						<Typography
							mr={1}
							color="#22668D"
							fontWeight={900}
							sx={{
								fontSize: {
									xs: 15,
									md: 20,
								},
							}}>
							{`رنگ ها: `}
						</Typography>
						<Typography
							color="#22668D"
							fontWeight={400}
							sx={{
								fontSize: {
									xs: 15,
									md: 20,
								},
							}}>
							{(data.product_color.length > 0 &&
								data.product_color.filter(
									(color) => color.color.id === selectedColor,
								)[0].color.name) ||
								"انتخاب نشده"}
						</Typography>
					</Box>
					<Box
						display="flex"
						mt={2}>
						{data.product_color.length > 0 &&
							data.product_color.map((color, index) => {
								return (
									<IconButton
										key={index}
										disabled={color.color.quantity < 1 ? true : false}
										onClick={() => {
											setCount(1);
											setSelectedColor(color.color.id);
										}}
										disableRipple>
										<Box
											bgcolor={`#${color.color.code}`}
											display="flex"
											alignItems="center"
											justifyContent="center"
											sx={{
												width: {
													xs: 30,
													md: 45,
												},
												height: {
													xs: 30,
													md: 45,
												},
												borderRadius: { xs: 1.3, md: 2.5 },
												border: {
													xs: "0.1em solid #D9DAE2",
													md: "0.16em solid #D9DAE2",
												},
											}}>
											{color.quantity < 1 ? (
												<Close
													sx={{
														width: {
															xs: 30,
															md: 45,
														},
														height: {
															xs: 30,
															md: 45,
														},
														color: "#BB0000",
													}}
												/>
											) : color.color.id === selectedColor ? (
												<Box>
													<Check
														sx={{
															width: {
																xs: 30,
																md: 45,
															},
															height: {
																xs: 30,
																md: 45,
															},
															color: "#4ECB71",
														}}
													/>
												</Box>
											) : (
												""
											)}
										</Box>
									</IconButton>
								);
							})}
					</Box>
				</Box>
				<Box>
					<Typography
						color="#22668D"
						fontWeight={900}
						sx={{
							fontSize: {
								xs: 15,
								md: 20,
							},
						}}>
						{`تعداد: (موجودی ${
							data.product_color.filter(
								(color) => color.color.id === selectedColor,
							)[0].quantity
						})`}
					</Typography>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						sx={{
							xs: 8,
							md: 15,
						}}
						mt={2}>
						<IconButton
							onClick={incCount}
							disabled={
								data.product_color.filter(
									(color) => color.color.id === selectedColor,
								)[0].quantity <= count
							}>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="center"
								sx={{
									width: {
										xs: 30,
										md: 40,
									},
									height: {
										xs: 30,
										md: 40,
									},
									border: "1px solid #747678",
									borderRadius: 1,
								}}>
								<Add />
							</Box>
						</IconButton>
						<Typography variant="h5">{convert(count)}</Typography>
						<IconButton onClick={decCount}>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="center"
								sx={{
									width: {
										xs: 30,
										md: 40,
									},
									height: {
										xs: 30,
										md: 40,
									},
									border: "1px solid #747678",
									borderRadius: 1,
								}}>
								<Remove />
							</Box>
						</IconButton>
					</Box>
				</Box>
			</Box>
			<Box
				mt={2}
				mx={3}
				width="90%"
				border="0.1em solid #22668D"
			/>
			<Box
				mt={3}
				ml={3}
				maxWidth={data.discounted ? 400 : 300}
				display="flex"
				alignItems="center"
				justifyContent="space-between">
				<Typography
					noWrap
					color={!data.is_available ? "#D2D2D2" : "#22668D"}
					fontWeight={900}
					sx={{ fontSize: { xs: 16, md: 20 } }}
					fontSize={20}>
					{"قیمت: "}
				</Typography>
				{data.discounted ? (
					<Box>
						<Box
							mt={2}
							position="absolute"
							bgcolor="#BB0000"
							borderRadius="2em"
							px={6}
							pt={0.25}
							color="#fff"></Box>
						<Typography
							noWrap
							mt={0.5}
							align="center"
							fontWeight={400}
							sx={{ color: "#BFBFBF", fontSize: { xs: 16, md: 20 } }}>
							{convert(data.price) + " تومان"}
						</Typography>
					</Box>
				) : (
					""
				)}
				{!data.is_available ? (
					<Box>
						<Typography
							noWrap
							align="center"
							fontSize={20}
							fontWeight={400}
							sx={{ color: "#D2D2D2", fontSize: { xs: 18, md: 20 } }}>
							{"ناموجود"}
						</Typography>
					</Box>
				) : (
					<Box>
						<Typography
							noWrap
							mt={0.5}
							align="center"
							sx={{ fontSize: { xs: 18, md: 20 } }}
							fontWeight={400}>
							{convert(parseInt(data.discounted_price)) + " تومان"}
						</Typography>
					</Box>
				)}
			</Box>
			<Box
				sx={{
					mt: {
						xs: 3,
						md: 6,
					},
				}}
				display="flex"
				alignItems="center">
				<Button
					onClick={data.is_available ? handleAddToCart : handleNotification}
					variant="contained"
					sx={{
						bgcolor: "#FFE0A9",
						color: "#000",
						borderRadius: 40,
						px: { xs: 5, md: 10 },
						height: {
							xs: 40,
							md: 60,
						},
						"&:hover": {
							bgcolor: Colors.orange,
						},
					}}>
					<Typography
						noWrap
						variant="h5"
						fontWeight={900}
						sx={{
							fontSize: { xs: 16, md: 24 },
						}}>
						{data.is_available ? "افزودن به سبد خرید" : "موجود شد خبرم کن!!"}
					</Typography>
				</Button>
				<IconButton
					onClick={handleFavorite}
					sx={{
						ml: 4,
					}}>
					{like ? (
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.5 10.5L20.9 34C21.0166 34.121 23.3454 15.9343 23.5 16C23.6546 16.0657 17.332 17 17.5 17C17.668 17 20.3344 10.382 20.489 10.3162C20.6436 10.2505 19.8834 10.121 20 10L20.5 10.5ZM11.6684 27.3666C11.412 27.1558 6.42708 18.4678 6.09671 18.5C5.76633 18.5322 5.81089 22.5919 5.60004 22.8483C5.38919 23.1047 3.87118 22.0213 3.90337 22.3516C4.02296 22.9655 9.87842 29.272 10.0784 29.3C10.6993 28.545 11.6684 27.3666 11.6684 27.3666ZM3.90337 22.3516C3.98217 22.4957 4.08855 22.6227 4.21646 22.7256C4.34437 22.8285 4.49129 22.9052 4.64884 22.9514C4.80639 22.9975 4.97149 23.0121 5.13469 22.9944C5.2979 22.9768 5.45602 22.9271 5.60004 22.8483C5.74406 22.7695 5.87114 22.6631 5.97404 22.5352C6.07695 22.4073 6.15365 22.2604 6.19977 22.1028C6.24588 21.9453 6.26052 21.7802 6.24284 21.617C6.22516 21.4538 6.1755 21.2957 6.09671 21.1516C6.09671 21.1516 4.75992 21.883 3.90337 22.3516ZM11.8779 27.5383C11.8779 23.955 12.235 33.265 15 32C19.5 36.5 17.47 30.4367 20.9 34V8.30164C16.8334 4.07331 12.1067 3.37498 8.33337 5.09998C4.64337 6.78831 2.08337 10.7083 2.08337 15.2283L11.8779 27.5383ZM14.1617 32.5C15.0167 33.1733 15.9334 33.89 16.8617 34.4333C17.79 34.975 18.85 35.4166 20 35.4166V34.1666V32.9166C19.4834 32.9166 18.8767 32.7166 18.1234 32.275C17.3684 31.835 16.5867 31.2283 15.71 30.5366L14.1617 32.5ZM25.8384 32.5C28.215 30.625 31.255 28.4783 33.6384 25.7933C36.0667 23.06 37.9167 19.6716 37.9167 15.2283L20 34C20 37.6617 21.2467 20.4283 19.1 22.8483C16.9084 25.315 21.6267 27.3083 19.1 29.3L25.8384 32.5ZM37.9167 15.2283C37.9167 10.7083 35.3584 6.78831 31.6667 5.09998C27.8934 3.37498 23.17 4.07331 19.1 8.29998L18 17.5L20 10C19.5 10 8.83268 25.8593 11.5193 27.0876C10.6193 30.5876 20 30.415 20 34L37.9167 15.2283ZM19.1 29.3C18.2234 29.9916 20.755 31.0766 20 31.5166C19.2467 31.9566 20.5167 32.9166 20 32.9166V34.1666V35.4166C21.15 35.4166 22.21 34.975 23.1384 34.4333C24.0684 33.89 24.9834 33.1733 25.8384 32.5L19.1 29.3ZM15.71 30.5366C14.3834 29.4916 13.035 28.4916 11.6684 27.3666C11.6684 27.3666 10.6993 28.545 10.0784 29.3C11.4617 30.4383 12.925 31.525 14.1617 32.5L15.7117 30.5366H15.71ZM6.09671 21.1533C5.09272 19.3407 11.8662 29.6104 11.8779 27.5383L2.08337 15.2283C2.08337 17.9583 2.78337 20.305 3.90337 22.3516C4.75992 21.883 6.09671 21.1516 6.09671 21.1516V21.1533Z"
								fill="#BB0000"
							/>
						</svg>
					) : (
						<svg
							width="40"
							height="40"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.0002 9.16664L19.1002 10.0333C19.2168 10.1543 19.3566 10.2505 19.5112 10.3162C19.6658 10.382 19.8321 10.4158 20.0002 10.4158C20.1682 10.4158 20.3345 10.382 20.4891 10.3162C20.6438 10.2505 20.7836 10.1543 20.9002 10.0333L20.0002 9.16664ZM11.6685 27.3666C11.4121 27.1558 11.0825 27.0554 10.7521 27.0876C10.4217 27.1198 10.1177 27.2819 9.90683 27.5383C9.69598 27.7947 9.59562 28.1243 9.62781 28.4547C9.66 28.7851 9.82212 29.0891 10.0785 29.3L11.6685 27.3666ZM3.9035 22.3516C3.98229 22.4957 4.08868 22.6227 4.21658 22.7256C4.34449 22.8285 4.49142 22.9052 4.64897 22.9514C4.80652 22.9975 4.97161 23.0121 5.13481 22.9944C5.29802 22.9768 5.45615 22.9271 5.60016 22.8483C5.74418 22.7695 5.87127 22.6631 5.97417 22.5352C6.07707 22.4073 6.15377 22.2604 6.19989 22.1028C6.24601 21.9453 6.26064 21.7802 6.24296 21.617C6.22528 21.4538 6.17562 21.2957 6.09683 21.1516L3.9035 22.3516ZM4.5835 15.2283C4.5835 11.645 6.6085 8.63831 9.3735 7.37331C12.0602 6.14498 15.6702 6.46998 19.1002 10.0333L20.9002 8.30164C16.8335 4.07331 12.1068 3.37498 8.3335 5.09998C4.6435 6.78831 2.0835 10.7083 2.0835 15.2283H4.5835ZM14.1618 32.5C15.0168 33.1733 15.9335 33.89 16.8618 34.4333C17.7902 34.975 18.8502 35.4166 20.0002 35.4166V32.9166C19.4835 32.9166 18.8768 32.7166 18.1235 32.275C17.3685 31.835 16.5868 31.2283 15.7102 30.5366L14.1618 32.5ZM25.8385 32.5C28.2152 30.625 31.2552 28.4783 33.6385 25.7933C36.0668 23.06 37.9168 19.6716 37.9168 15.2283H35.4168C35.4168 18.89 33.9168 21.7133 31.7702 24.1333C29.5785 26.6 26.8168 28.545 24.2902 30.5366L25.8385 32.5ZM37.9168 15.2283C37.9168 10.7083 35.3585 6.78831 31.6668 5.09998C27.8935 3.37498 23.1702 4.07331 19.1002 8.29998L20.9002 10.0333C24.3302 6.47164 27.9402 6.14498 30.6268 7.37331C33.3918 8.63831 35.4168 11.6433 35.4168 15.2283H37.9168ZM24.2902 30.5366C23.4135 31.2283 22.6318 31.835 21.8768 32.275C21.1235 32.715 20.5168 32.9166 20.0002 32.9166V35.4166C21.1502 35.4166 22.2102 34.975 23.1385 34.4333C24.0685 33.89 24.9835 33.1733 25.8385 32.5L24.2902 30.5366ZM15.7102 30.5366C14.3835 29.4916 13.0352 28.4916 11.6685 27.3666L10.0785 29.3C11.4618 30.4383 12.9252 31.525 14.1618 32.5L15.7118 30.5366H15.7102ZM6.09683 21.1533C5.09284 19.3407 4.57172 17.3004 4.5835 15.2283H2.0835C2.0835 17.9583 2.7835 20.305 3.9035 22.3516L6.09683 21.1516V21.1533Z"
								fill="#213346"
							/>
						</svg>
					)}
				</IconButton>
			</Box>
		</>
	);
};

export default SelectProduct;
