import React from "react";
import { Box, Typography } from "@mui/material";
import { baseUrl } from "@/services";

const PaymentHeader = () => {
	return (
		<Box
			sx={{
				width: { xs: "90vw", sm: "90vw", md: "90vw", lg: "90vw", xl: "1282px" },
				height: { xs: "44px", sm: "57px", md: "72px", lg: "87px" },
				background: "#EEEEEE80",
				borderRadius: "15px",
				display: "flex",
				alignItems: "center", // Center the child content vertically
				margin: "auto", // Center the Box itself horizontally within its parent
			}}>
			<Box
				sx={{
					marginLeft: "2%",
					display: "inline-flex",
					alignItems: "center", // Align items vertically
				}}>
				<Box
					sx={{
						width: { xs: "27px", sm: "32px", md: "38px", lg: "44px" },
						height: { xs: "22px", sm: "26px", md: "30px", lg: "35px" },
					}}>
					<img
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
						src={`${baseUrl}/images/media/pictures/Credit.png`}
						alt="Product"
					/>
				</Box>
				<Typography
					sx={{
						padding: "5px",
						paddingLeft: "15px",
						letterSpacing: "-0.05rem",
						fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px" },
					}}
					fontWeight={"bold"}>
					خلاصه سفارش و اطلاعات پرداخت
				</Typography>
			</Box>
		</Box>
	);
};

export default PaymentHeader;
