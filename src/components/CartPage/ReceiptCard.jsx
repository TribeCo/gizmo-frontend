import React from "react";
import {
	Card,
	Typography,
	Divider,
	Box,
	Button,
	Grid,
	Container,
} from "@mui/material";
import { Colors, convert } from "@/utils";

const ReceiptCard = ({ data, sendInfo }) => {
	return (
		<Container
			sx={{
				background: "#F7F7F7",
				borderRadius: "15px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
				px: 5,
				py: 3,
			}}>
			<Typography
				align="center"
				noWrap
				sx={{
					marginBottom: { xs: "10px", sm: "10px", md: "10px", lg: "20px" },
					fontWeight: 700,
					color: "#213346",
					fontSize: { xs: "16px", sm: "18px", md: "21px", lg: "24px" },
				}}>
				{"فاکتور خرید شما"}
			</Typography>
			<Box
				display="flex"
				justifyContent="space-between"
				mt={5}
				sx={{
					px: { xs: 1, lg: 3 },
				}}>
				<Typography
					noWrap
					sx={{
						fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
						fontWeight: "700",
						color: "#44434C",
						letterSpacing: "-0.05rem",
					}}>
					{"شیوه ارسال :"}
				</Typography>
				<Typography
					noWrap
					sx={{
						fontSize: { xs: "13px", sm: "15px", md: "18px", lg: "20px" },
						fontWeight: "500",
						color: "#44434C",
						letterSpacing: "-0.05rem",
					}}>
					{"پست پیشتاز"}
				</Typography>
			</Box>
			<Box
				display="flex"
				justifyContent="space-between"
				mt={2}
				sx={{
					px: { xs: 1, lg: 3 },
				}}>
				<Typography
					noWrap
					sx={{
						fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
						fontWeight: "700",
						color: "#44434C",
						letterSpacing: "-0.05rem",
					}}>
					{"آدرس ارسال :"}
				</Typography>
				<Typography
					noWrap
					sx={{
						fontSize: { xs: "11px", sm: "13px", md: "15px", lg: "18px" },
						fontWeight: "500",
						color: "#44434C",
					}}>
					{"شیراز، دانشگاه صنعتی شیراز"}
				</Typography>
			</Box>
			<Divider
				sx={{
					borderColor: "#22668D",
					margin: "0 auto",
					mt: { xs: 1, lg: 3 },
				}}
			/>
			<Box
				sx={{
					padding: { xs: 1, lg: 3 },
					gap: 2,
					minWidth: 250,
				}}>
				<Box
					display="flex"
					justifyContent="space-between">
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "700",
							color: "#44434C",
						}}>
						قیمت کل سفارش:
					</Typography>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "500",
							color: "#44434C",
						}}>
						{convert(data.total_price_method)} تومان
					</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					sx={{
						mt: 2,
					}}>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "700",
							color: "#44434C",
						}}>
						میزان تخفیف:
					</Typography>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "500",
							color: "#44434C",
						}}>
						{convert(data.delta_discounted_method)} تومان
					</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					sx={{
						mt: 2,
					}}>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "700",
							color: "#44434C",
						}}>
						کد تخفیف:
					</Typography>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "500",
							color: "#44434C",
						}}>
						{data.coupon_code + ` (%${convert(data.coupon)})`}
					</Typography>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					sx={{
						mt: 2,
					}}>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" },
							fontWeight: "700",
							color: "#44434C",
						}}>
						مبلغ قابل پرداخت:
					</Typography>
					<Typography
						noWrap
						sx={{
							fontSize: { xs: "16px", sm: "19px", md: "22px", lg: "24px" },
							fontWeight: "700",
							color: "#44434C",
						}}>
						{convert(data.total_discounted_price_method)} تومان
					</Typography>
				</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				my={3}>
				<Button
					variant="contained"
					sx={{
						backgroundColor: Colors.orange,
						"&:hover": {
							backgroundColor: Colors.orange,
						},
						borderRadius: "25px",
						padding: "8px 30px",
						width: "80%",
					}}>
					<Typography
						fontWeight={700}
						color="#213346"
						sx={{
							fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
						}}>
						{"پرداخت"}
					</Typography>
				</Button>
			</Box>
		</Container>
	);
};

export default ReceiptCard;
