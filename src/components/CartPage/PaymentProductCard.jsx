import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { convert } from "@/utils";

const PaymentProductCard = ({ data, index }) => {
	return (
		<Box
			sx={{
				width: { md: "100%", lg: "670px" },
				height: { xs: "auto", sm: "116px", md: "173px", lg: "222px" },
				display: "flex",
				alignItems: "center",
				borderBottom: "0.5px solid",
				my: 2,
				pb: 1,
			}}
			gap={1.5}>
			<Box
				sx={{
					bgcolor: "#22668D",
					borderRadius: "25px",
					minWidth: { xs: "20px", sm: "30px", md: "50px" },
					minHeight: {
						xs: "20px",
						sm: "30px",
						md: "50px",
					},
					paddingTop: {
						xs: "2px",
						sm: "4px",
						md: "6px",
						lg: "8px",
					},
				}}>
				<Typography
					color="#FFF"
					textAlign="center"
					fontWeight={900}
					sx={{
						fontSize: {
							xs: "12px",
							sm: "16px",
							md: "20px",
							lg: "24px",
						},
					}}>
					{convert(index + 1)}
				</Typography>
			</Box>
			<Avatar
				variant="rounded"
				src={data.product.image1}
				sx={{
					width: { xs: "60px", sm: "100px", md: "146px", lg: "193px" },
					height: { xs: "60px", sm: "100px", md: "146px", lg: "193px" },
					border: "0.25px solid",
					boxShadow: "initial",
				}}
			/>
			<Box
				display="flex"
				flexDirection="column"
				sx={{
					gap: {
						lg: 5,
						xs: 1,
					},
				}}>
				<Box
					display="flex"
					sx={{
						maxWidth: {
							lg: 400,
							md: "100%",
							sm: "100%",
						},
					}}>
					<Typography
						noWrap
						fontWeight={700}
						sx={{
							fontSize: {
								xs: "12px",
								sm: "18px",
								md: "23px",
							},
						}}>
						{data.product.name}
					</Typography>
					{data.product.discount > 0 && (
						<Typography
							sx={{
								bgcolor: "red",
								marginTop: "1px",
								height: {
									xs: "10px",
									sm: "17px",
									md: "25px",
									lg: "33px",
								},
								width: { xs: "23px", sm: "40px", md: "57px", lg: "60px" },
								borderRadius: "20px",
								fontSize: {
									xs: "6px",
									sm: "10px",
									md: "14px",
									lg: "18px",
								},
								color: "white",
								marginLeft: 1,
								padding: "2px",
							}}
							fontWeight={700}
							align="center">
							{convert(data.product.discount) + "%"}
						</Typography>
					)}
				</Box>
				<Box
					display="flex"
					flexDirection="row"
					gap={15}
					ml={2}>
					<Box>
						<Box display="flex">
							<Typography
								marginRight={1}
								fontWeight={500}
								sx={{
									fontSize: {
										xs: "8px",
										sm: "12px",
										md: "16px",
										lg: "20px",
									},
								}}>
								تعداد:
							</Typography>
							<Typography
								fontWeight={500}
								sx={{
									fontSize: {
										xs: "8px",
										sm: "12px",
										md: "16px",
										lg: "20px",
									},
								}}>
								{convert(data.quantity)}
							</Typography>
						</Box>
						<Box
							display="flex"
							mt={0.5}>
							<Typography
								marginRight={1}
								fontWeight={500}
								sx={{
									fontSize: {
										xs: "8px",
										sm: "12px",
										md: "16px",
										lg: "20px",
									},
								}}>
								رنگ:
							</Typography>
							<Typography
								fontWeight={500}
								sx={{
									fontSize: {
										xs: "8px",
										sm: "12px",
										md: "16px",
										lg: "20px",
									},
								}}>
								{data.color.name}
							</Typography>
						</Box>

						<Box
							display="flex"
							mt={0.5}>
							<Typography
								marginRight={1}
								fontWeight={700}
								sx={{
									fontSize: {
										xs: "8px",
										sm: "10px",
										md: "13px",
										lg: "15px",
									},
								}}>
								کد محصول:
							</Typography>
							<Typography
								fontWeight={700}
								sx={{
									fontSize: {
										xs: "8px",
										sm: "10px",
										md: "13px",
										lg: "15px",
									},
								}}>
								{convert(data.product.id)}
							</Typography>
						</Box>
					</Box>
					<Box alignContent="end">
						{data.product.discount > 0 && (
							<Typography
								align="center"
								fontWeight="bold"
								sx={{
									color: "#B4B4B4",
									fontSize: { xs: "8px", sm: "10px", md: "13px", lg: "16px" },
								}}>
								<span style={{ textDecoration: "line-through" }}>
									{convert(data.product.price)} تومان
								</span>
							</Typography>
						)}
						<Typography
							align="center"
							sx={{
								fontSize: { xs: "10px", sm: "14px", md: "17px", lg: "20px" },
								marginTop: {},
							}}
							mt={1}
							fontWeight="700">
							{convert(data.product.discount_price)} تومان
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
export default PaymentProductCard;
