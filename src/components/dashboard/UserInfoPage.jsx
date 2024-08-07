import React from "react";
import { Paper, Button, Grid, Typography, Divider, Box } from "@mui/material";
import { Colors } from "@/utils";
import {
	createFullName,
	getGenderDescription,
	toPersianDigits,
} from "@/utils/convert";

const UserInfoPage = ({ activities, information, handleClick }) => {
	return (
		<Grid
			item
			display="flex"
			flexDirection="column">
			<Paper
				variant="outlined"
				sx={{
					px: { xs: "2rem", sm: "4rem" },
					py: "2rem",
					borderRadius: "15px",
					boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
				}}>
				<Box
					display="flex"
					flexWrap="wrap"
					justifyContent="space-between"
					alignItems="center"
					sx={{
						mb: 3,
						flexDirection: "row",
					}}>
					<Typography
						variant="h5"
						fontWeight={900}
						sx={{
							fontSize: { xs: 16, sm: 22, lg: 26 },
						}}>
						اطلاعات حساب کاربری
					</Typography>

					<Grid>
						<Button
							onClick={() => handleClick(1)}
							variant="contained"
							sx={{
								boxShadow: "none",
								display: "block",
								mx: "auto",
								border: `3px solid ${Colors.orange}`,
								color: "#000000",
								bgcolor: "#FFFFFF",
								borderRadius: "30px",
								width: { xs: "106px", sm: "190px", lg: "220px" },
								height: { xs: "33px", sm: "44px", lg: "46px" },
								"&:hover": {
									boxShadow: "none",
									bgcolor: Colors.orange,
								},
							}}>
							<Typography
								variant="h6"
								fontWeight={900}
								fontSize={20}
								sx={{
									fontSize: { xs: 10, sm: 18, lg: 20 },
								}}>
								ویرایش اطلاعات
							</Typography>
						</Button>
					</Grid>
				</Box>
				<Divider />
				<Box
					px={2}
					container
					flexDirection="column">
					<Grid
						display="flex"
						flexWrap="wrap">
						<Grid>
							<Grid
								item
								mb={1}
								mt={6}
								mr={16}>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									نام و نام خانوادگی
								</Typography>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									{createFullName(
										information.first_name,
										information.last_name,
									)}
								</Typography>
							</Grid>
							<Grid
								item
								mb={1}
								mt={6}
								mr={16}>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									جنسیت
								</Typography>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									{getGenderDescription(information.gender)}
								</Typography>
							</Grid>
						</Grid>
						<Grid>
							<Grid
								item
								mb={1}
								mt={6}
								mr={16}>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									آدرس ایمیل
								</Typography>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									{information.email}
								</Typography>
							</Grid>
							{/* <Grid
								item
								mb={1}
								mt={6}
								mr={16}>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									تاریخ تولد
								</Typography>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									{information.birth_day}
								</Typography>
							</Grid> */}
						</Grid>
						<Grid>
							<Grid
								item
								mb={1}
								mt={6}
								mr={16}>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									شماره تلفن
								</Typography>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 12, sm: 16, lg: 20 },
										color: "#44434C",
									}}>
									{toPersianDigits(information.phoneNumber)}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Paper>
			<Paper
				variant="outlined"
				sx={{
					px: { xs: "2rem", sm: "4rem" },
					py: "2rem",
					mt: 2,
					borderRadius: "15px",
					boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
				}}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="start"
					mb={3}
					sx={{
						flexDirection: { xs: "column", sm: "row" },
					}}>
					<Typography
						variant="h5"
						fontWeight={900}
						sx={{
							fontSize: { xs: 18, sm: 24, lg: 26 },
						}}>
						فعالیت ها
					</Typography>
				</Box>
				<Divider />
				<Box
					px={2}
					justifyContent="space-around"
					alignItems="center"
					display="flex"
					flexDirection="row"
					flexWrap="wrap"
					container>
					{[
						{
							label: "تعداد سفارش ها",
							value: toPersianDigits(activities.orders_count)
						},
						{
							label: "تعداد سفارش ها از دبی",
							value: toPersianDigits(activities.foreign_returns_count)
						},
						{
							label: "تعداد مرجوعی ها",
							value: toPersianDigits(activities.returns_count)
						}
					].map((item, index) => (
						<Box
							key={index}
							mt={{xs: 4, sm: 6}}
							mx={1}
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								width: { xs: "min-content", sm: "auto" }
							}}>
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{
									color: "#213346",
									fontSize: { xs: 12, sm: 18, md: 22 },
								}}>
								{item.label}
							</Typography>
							<Box
								mt={{xs: 2, sm: 3}}
								sx={{
									width: { xs: "3rem", sm: "4rem", md: "5rem" },
									height: { xs: "3rem", sm: "4rem", md: "5rem" },
									alignItems: "center",
									justifyContent: "center",
									display: "flex",
									borderRadius: "100%",
									backgroundColor: Colors.orange,
								}}>
								<Typography
									variant="h6"
									fontWeight="bold"
									sx={{
										fontSize: { xs: 16, sm: 26, md: 40 },
										mt: { xs: 0, sm: 1 },
									}}>
									{item.value}
								</Typography>
							</Box>
						</Box>
					))}
				</Box>
			</Paper>
		</Grid>
	);
};
export default UserInfoPage;
