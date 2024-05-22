import React from "react";
import { Card, Typography, Divider, Box, Button, Grid } from "@mui/material";

const ReceiptCard = () => {
	const convertToPersian = (number) => {
		const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
		return number.toString().replace(/\d/g, (x) => persianNumbers[x]);
	};

	return (
		<Card
			sx={{
				width: {
					xs: "auto", // Extra-small devices
					sm: "60%", // Small devices and up
					md: "80%", // Medium devices and up
					lg: "491px", // Large devices and up
				},
				height: {
					xs: "auto", // Extra-small devices
					sm: "auto", // Small devices and up
					md: "auto", // Medium devices and up
					lg: "607px", // Large devices and up
				},
				backgroundColor: "#F7F7F7", // Background color
				borderRadius: "15px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding some shadow
				display: "flex",
				flexDirection: "column",
				alignItems: "center", // Center items horizontally
				paddingTop: { xs: "20px", sm: "30px", md: "40px", lg: "50px" }, // Space from top
			}}>
			{/* Title at the top of the card */}
			<Typography
				sx={{
					marginBottom: { xs: "10px", sm: "", md: "", lg: "20px" },
					fontWeight: "bold",
					color: "#213346",
					letterSpacing: "-0.05rem",
					fontSize: { xs: "16px", sm: "18px", md: "21px", lg: "24px" },
				}}>
				فاکتور خرید شما
			</Typography>
			{/* Container for the two left-aligned Typography elements */}
			<Box
				sx={{
					alignSelf: "flex-start",
					marginLeft: "40px",
					padding: { xs: "10px", sm: "", md: "", lg: "20px" },
				}}>
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={5}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							شیوه ارسال :
						</Typography>
					</Grid>
					<Grid
						item
						xs={5}
						sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: { xs: "13px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "500",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							پست پیشتاز
						</Typography>
					</Grid>
					<Grid
						item
						xs={5}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							آدرس ارسال :
						</Typography>
					</Grid>
					<Grid
						item
						xs={5}
						sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: { xs: "11px", sm: "13px", md: "15px", lg: "18px" },
								fontWeight: "500",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							شیراز، دانشگاه صنعتی شیراز
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Divider
				sx={{
					borderColor: "#22668D", // Divider color
					margin: "0 auto", // Center the divider
					width: "85%", // Width relative to the card size
					marginBottom: { xs: "10px", sm: "", md: "", lg: "20px" }, // Space below the divider
					marginTop: { xs: "10px", sm: "", md: "", lg: "20px" }, // Space above the divider
					borderWidth: "1px",
					borderRadius: "5px",
				}}
			/>
			<Box
				sx={{
					alignSelf: "flex-start",
					marginLeft: "30px",
					padding: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
				}}>
				{/* Repeat this structure for each new Typography element */}
				<Grid
					container
					spacing={2}>
					<Grid
						item
						xs={6}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							قیمت کل سفارش:
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "500",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							{convertToPersian(398000)} تومان
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							میزان تخفیف:
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "500",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							{convertToPersian(398000)} تومان
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							کد تخفیف:
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "500",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							lgfdsklkjhgf
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}>
						<Typography
							sx={{
								fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							مبلغ قابل پرداخت:
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sx={{ textAlign: "center" }}>
						<Typography
							sx={{
								fontSize: { xs: "16px", sm: "19px", md: "22px", lg: "24px" },
								fontWeight: "700",
								color: "#44434C",
								letterSpacing: "-0.05rem",
							}}>
							{convertToPersian(398000)} تومان
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Button
				variant="contained"
				sx={{
					backgroundColor: "#FFCC70", // Button background color
					"&:hover": {
						backgroundColor: "#e6b85c", // Darken button color on hover
					},
					borderRadius: "25px", // Rounded corners for button
					padding: "8px 30px", // Padding inside the button
					color: "#213346", // Text color
					fontWeight: "bold", // Bold text
					fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
					width: "80%", // Match the width of the text fields
					marginBottom: "15px", // Added space for the link below the button
					letterSpacing: "-0.05rem",
				}}>
				پرداخت
			</Button>
		</Card>
	);
};

export default ReceiptCard;
