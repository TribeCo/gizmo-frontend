"use client";
import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Colors, convert } from "@/utils";
import {
	addToFavorites,
	availableNotification,
	deleteFavorites,
} from "@/services/ProductPage";
import { useAuth } from "@/context/AuthContext";

const SelectProduct = ({ data }) => {
	const { tokens } = useAuth();

	const [selectedColor, setSelectedColor] = useState(0);
	const [like, setLike] = useState(false);
	const [count, setCount] = useState(1);

	const decCount = () => {
		if (count === 1) {
		} else {
			setCount(count - 1);
		}
	};

	const handleFavorite = async () => {
		let response;
		if (!like) {
			response = await addToFavorites({
				pid: data.id,
				access: tokens.access,
			});
		} else {
			response = await deleteFavorites({
				pid: data.id,
				access: tokens.access,
			});
		}
		if (response.message) {
			alert(response.message);
			setLike(!like);
		} else {
			if (response.status === 401) {
				alert("برای افزودن محصول به مورد علاقه ها ابتدا وارد شوید");
			} else {
				alert("مشکلی رخ داد");
				console.log(response.status);
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
			alert(response.message);
		} else {
			if (response.status === 401) {
				alert("برای فعال کردن این گذینه ابتدا باید وارد شوید");
			} else {
				alert("مشکلی پیش آمد لطقا دوباره تلاش کنید.");
				console.log(response.status);
			}
		}
	};
	return (
		<>
			<Box
				display="flex"
				maxWidth={400}
				justifyContent="space-between"
				mt={2}
				ml={3}>
				<Box>
					<Box display="flex">
						<Typography
							mr={1}
							color="#22668D"
							fontWeight={900}
							fontSize={20}>
							{`رنگ ها: `}
						</Typography>
						<Typography
							color="#22668D"
							fontWeight={400}
							fontSize={20}>
							{(data.colors.length > 0 && data.colors.at(selectedColor).name) ||
								"انتخاب نشده"}
						</Typography>
					</Box>
					<Box
						display="flex"
						mt={2}>
						{data.colors.length > 0 &&
							data.colors.map((color, index) => {
								return (
									<IconButton
										disabled={index === 2 ? true : false}
										onClick={() => setSelectedColor(index)}
										disableRipple>
										<Box
											bgcolor={color.code}
											border="0.16em solid #D9DAE2"
											borderRadius={2.5}
											width={45}
											height={45}>
											{!color.is_available ? (
												<svg
													width="39"
													height="39"
													viewBox="0 0 39 39"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M2.89624 3L35.6638 35.7676"
														stroke="#BB0000"
														stroke-width="5"
														stroke-linecap="round"
													/>
													<path
														d="M3 35.7676L35.7676 3"
														stroke="#BB0000"
														stroke-width="5"
														stroke-linecap="round"
													/>
												</svg>
											) : index === selectedColor ? (
												<Box mt={0.75}>
													<svg
														width="38"
														height="26"
														viewBox="0 0 38 26"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M3.41675 13.0002L13.8334 23.4168L34.6667 2.5835"
															stroke="#4ECB71"
															stroke-width="5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
													</svg>
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
						fontSize={20}>
						{"تعداد: "}
					</Typography>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						width={120}
						mt={2}>
						<IconButton onClick={() => setCount(count + 1)}>
							<svg
								width="35"
								height="41"
								viewBox="0 0 35 41"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H32C33.3807 0.5 34.5 1.61929 34.5 3V38C34.5 39.3807 33.3807 40.5 32 40.5H3C1.61929 40.5 0.5 39.3807 0.5 38V3Z"
									stroke="#747678"
								/>
								<path
									d="M23.875 18.9062H19.0938V14.125C19.0938 13.5383 18.6179 13.0625 18.0312 13.0625H16.9688C16.3821 13.0625 15.9062 13.5383 15.9062 14.125V18.9062H11.125C10.5383 18.9062 10.0625 19.3821 10.0625 19.9688V21.0312C10.0625 21.6179 10.5383 22.0938 11.125 22.0938H15.9062V26.875C15.9062 27.4617 16.3821 27.9375 16.9688 27.9375H18.0312C18.6179 27.9375 19.0938 27.4617 19.0938 26.875V22.0938H23.875C24.4617 22.0938 24.9375 21.6179 24.9375 21.0312V19.9688C24.9375 19.3821 24.4617 18.9062 23.875 18.9062Z"
									fill="#747678"
								/>
							</svg>
						</IconButton>
						<Typography variant="h5">{convert(count)}</Typography>
						<IconButton onClick={decCount}>
							<svg
								width="35"
								height="41"
								viewBox="0 0 35 41"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H32C33.3807 0.5 34.5 1.61929 34.5 3V38C34.5 39.3807 33.3807 40.5 32 40.5H3C1.61929 40.5 0.5 39.3807 0.5 38V3Z"
									stroke="#747678"
								/>
								<path
									d="M23.875 18.9062H11.125C10.5383 18.9062 10.0625 19.3821 10.0625 19.9688V21.0312C10.0625 21.6179 10.5383 22.0938 11.125 22.0938H23.875C24.4617 22.0938 24.9375 21.6179 24.9375 21.0312V19.9688C24.9375 19.3821 24.4617 18.9062 23.875 18.9062Z"
									fill="#747678"
								/>
							</svg>
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
				justifyContent="space-between">
				<Typography
					noWrap
					color={!data.is_available ? "#D2D2D2" : "#22668D"}
					fontWeight={900}
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
							px={7}
							pt={0.25}
							color="#fff"></Box>
						<Typography
							noWrap
							mt={0.5}
							align="center"
							fontSize={20}
							fontWeight={400}
							sx={{ color: "#BFBFBF" }}>
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
							sx={{ color: "#D2D2D2" }}>
							{"ناموجود"}
						</Typography>
					</Box>
				) : (
					<Box>
						<Typography
							noWrap
							mt={0.5}
							align="center"
							fontSize={20}
							fontWeight={400}>
							{convert(
								Math.round(data.price - (data.discount * data.price) / 100),
							) + " تومان"}
						</Typography>
					</Box>
				)}
			</Box>
			<Box
				display="flex"
				mt={6}>
				<Button
					onClick={
						!data.is_available
							? () => console.log("goToCart")
							: handleNotification
					}
					variant="contained"
					sx={{
						bgcolor: "#FFE0A9",
						color: "#000",
						borderRadius: 40,
						px: { xs: 5, md: 10 },
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
						mt: 1,
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
