import React, { useState, useEffect } from "react";
import { Colors } from "@/utils";
import eye from "@/components/siteIcons/eye-slash.svg";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import {
	Button,
	Typography,
	Stack,
	Paper,
	Box,
	TextField,
	InputAdornment,
	IconButton,
	Select,
	MenuItem,
	Grid,
	Container,
	Divider,
} from "@mui/material";
import {
	EditPassword,
	EditProfile,
	fetchInformation,
} from "@/services/DashBoard";
import { enqueueSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function DashBoardEditProfile({ information }) {
	const [secondField, setSecondField] = React.useState("password");
	const [thirdField, setThirdField] = React.useState("password");
	const [forthField, setForthField] = React.useState("password");
	const { tokens } = useAuth();
	const [newProfileData, setNewProfileData] = useState({
		first_name: "",
		last_name: "",
		phoneNumber: "",
		gender: "",
		email: "",
	});

	const GetInformation = async () => {
		try {
			const data = await fetchInformation(tokens);
			if (!data) {
				router.replace("/login");
			}
			setNewProfileData(data);
		} catch (error) {
			console.error("Error fetching information:", error);
			enqueueSnackbar({
				message: error.message || "خطا در دریافت اطلاعات.",
				variant: "error",
			});
		}
	};

	useEffect(() => {
		async function GetInfo() {
			await GetInformation();
		}
		GetInfo();

		return () => {};
	}, []);

	const [newProfilePassword, setNewProfilePassword] = useState({
		new_password_confirm: "",
		password: "",
		new_password: "",
	});

	const handleInputChange = (event) => {
		event.target.value = event.target.value.replace(/[^0-9]/g);
		if (event.target.value == "undefined") {
			event.target.value = "";
		}
	};

	const editNewProfile = async () => {
		try {
			const response = await EditProfile(newProfileData, tokens);
			if (response) {
				enqueueSnackbar({
					message: response.messages || "پروفایل با موفقیت به‌روزرسانی شد.",
					variant: "success",
				});
			}
		} catch (error) {
			console.error("خطا در ارسال داده به API:", error);
			enqueueSnackbar({
				message: error.message || "به‌روزرسانی پروفایل ناموفق بود.",
				variant: "error",
			});
		} finally {
			await GetInformation();
		}
	};

	const editNewProfilePassword = async () => {
		try {
			if (
				newProfilePassword.new_password !==
				newProfilePassword.new_password_confirm
			) {
				enqueueSnackbar({
					message:
						"رمزهای عبور مطابقت ندارند. لطفاً مطمئن شوید که رمز عبور جدید و تأیید رمز عبور شما مطابقت دارند.",
					variant: "error",
				});
				return;
			}
			const response = await EditPassword(newProfilePassword, tokens);
			if (response) {
				enqueueSnackbar({
					message: response.messages || "رمز عبور با موفقیت به‌روزرسانی شد.",
					variant: "success",
				});
			}
		} catch (error) {
			console.error("خطا در ارسال داده به API:", error);
			enqueueSnackbar({
				message: error.message || "به‌روزرسانی رمز عبور ناموفق بود.",
				variant: "error",
			});
		} finally {
			console.log("I am in finally block");

			setNewProfilePassword((obj) => ({
				...obj,
				new_password_confirm: "",
				password: "",
				new_password: "",
			}));
		}
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				px: { xs: "2rem", sm: "4rem" },
				py: "2rem",
				borderRadius: "15px",
				boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
			}}>
			{/* first part */}
			<Box
				sx={{
					width: { xs: "100%", md: "840px" },
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}>
				<Typography
					variant="h6"
					fontSize={18}
					fontWeight={700}>
					ویرایش اطلاعات کاربری
				</Typography>
				<Divider
					sx={{
						mb: 3,
					}}
				/>
				<Box
					display="flex"
					sx={{
						flexDirection: { xs: "column", sm: "row" },
					}}
					gap={2}>
					<TextField
						label="نام"
						variant="outlined"
						value={newProfileData.first_name}
						onChange={(e) =>
							setNewProfileData({
								...newProfileData,
								first_name: e.target.value,
							})
						}
						fullWidth
						sx={{ mb: 2, "& .MuiInputBase-root": { borderRadius: "50px" } }}
					/>
					<Select
						value={newProfileData.gender}
						onChange={(e) =>
							setNewProfileData({
								...newProfileData,
								gender: e.target.value,
							})
						}
						displayEmpty
						fullWidth
						sx={{ mb: 2, borderRadius: "50px" }}>
						<MenuItem value="u">یک مورد را انتخاب کنید</MenuItem>
						<MenuItem value="m">مرد</MenuItem>
						<MenuItem value="f">زن</MenuItem>
						<MenuItem value="u">مایل به گفتن ندارم</MenuItem>
					</Select>
				</Box>
				<Box
					display="flex"
					sx={{
						flexDirection: { xs: "column", sm: "row" },
					}}
					gap={2}>
					<TextField
						label="نام خانوادگی"
						variant="outlined"
						value={newProfileData.last_name}
						onChange={(e) =>
							setNewProfileData({
								...newProfileData,
								last_name: e.target.value,
							})
						}
						fullWidth
						sx={{ mb: 2, "& .MuiInputBase-root": { borderRadius: "50px" } }}
					/>
					<TextField
						label="شماره تلفن"
						variant="outlined"
						type="tel"
						value={newProfileData.phoneNumber}
						disabled
						fullWidth
						sx={{ mb: 2, "& .MuiInputBase-root": { borderRadius: "50px" } }}
					/>
				</Box>
				<Box>
					<TextField
						label="آدرس ایمیل"
						variant="outlined"
						type="email"
						value={newProfileData.email}
						disabled
						fullWidth
						sx={{ mb: 2, "& .MuiInputBase-root": { borderRadius: "50px" } }}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mb: 5,
					}}>
					<Button
						variant="contained"
						onClick={editNewProfile}
						sx={{
							width: 215,
							bgcolor: "orange",
							color: "black",
							borderRadius: "50px",
							boxShadow: "none",
							height: 34,
							"&:hover": {
								bgcolor: "orange",
							},
						}}>
						{"ذخیره تغییرات"}
					</Button>
				</Box>
			</Box>

			{/* second part */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}>
				<Typography
					variant="h6"
					fontSize={18}
					fontWeight={700}>
					تغییر رمز عبور
				</Typography>

				<TextField
					label="رمز عبور قدیمی"
					variant="outlined"
					type={thirdField}
					value={newProfilePassword.password}
					onChange={(e) =>
						setNewProfilePassword({
							...newProfilePassword,
							password: e.target.value,
						})
					}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={() =>
										setThirdField(
											thirdField === "password" ? "text" : "password",
										)
									}
									edge="end">
									{thirdField === "password" ? (
										<VisibilityOff />
									) : (
										<Visibility />
									)}
								</IconButton>
							</InputAdornment>
						),
						style: { borderRadius: "50px" },
					}}
					fullWidth
					sx={{ mb: 2 }}
				/>
				<Box
					display="flex"
					sx={{
						flexDirection: { xs: "column", sm: "row" },
					}}
					gap={2}>
					<TextField
						label="رمز عبور جدید"
						variant="outlined"
						type={secondField}
						value={newProfilePassword.new_password}
						onChange={(e) =>
							setNewProfilePassword({
								...newProfilePassword,
								new_password: e.target.value,
							})
						}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={() =>
											setSecondField(
												secondField === "password" ? "text" : "password",
											)
										}
										edge="end">
										{secondField === "password" ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							),
							style: { borderRadius: "50px" },
						}}
						fullWidth
						sx={{ mb: 2 }}
					/>

					<TextField
						label="تکرار رمز عبور"
						variant="outlined"
						type={forthField}
						value={newProfilePassword.new_password_confirm}
						onChange={(e) =>
							setNewProfilePassword({
								...newProfilePassword,
								new_password_confirm: e.target.value,
							})
						}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={() =>
											setForthField(
												forthField === "password" ? "text" : "password",
											)
										}
										edge="end">
										{forthField === "password" ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							),
							style: { borderRadius: "50px" },
						}}
						fullWidth
						sx={{ mb: 2 }}
					/>
				</Box>

				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						variant="contained"
						onClick={editNewProfilePassword}
						sx={{
							width: 200,
							bgcolor: "orange",
							color: "black",
							borderRadius: "50px",
							boxShadow: "none",
							height: 34,
							"&:hover": {
								bgcolor: "orange",
							},
						}}>
						ذخیره تغییرات
					</Button>
				</Box>
			</Box>
		</Paper>
	);
}
