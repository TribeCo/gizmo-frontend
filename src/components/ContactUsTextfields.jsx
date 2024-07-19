"use client";

import React, { useState } from "react";
import * as yup from "yup";
import { Card, Box, TextField, Grid, Button, Typography } from "@mui/material";

import { baseUrl } from "@/services";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";

const validationSchema = yup.object().shape({
	name: yup.string().required("لطفا نام و نام خانوادگی را وارد کنید"),
	email: yup
		.string()
		.required("لطفا ایمیل خود را وارد کنید")
		.email("ایمیل وارد شده صحیح نمی باشد"),
	phoneNumber: yup
		.string()
		.required("لطفا شماره تلفن را وارد کنید.")
		.matches(
			/^(0{1}9|\+{1}9{1}8{1}9{1})[0-9]{9}$/,
			"شماره تلفن وارد شده صحیح نمیباشد",
		),
	title: yup.string().required("لطفا موضوع پیام را وارد نمایید"),
	text: yup.string().required("لطفا توضیحات پیام را وارد کنید"),
});

const ContactUsTextfields = () => {
	const [touched, setTouched] = useState({
		name: false,
		email: false,
		phoneNumber: false,
		title: false,
		text: false,
	});

	const handleTouch = ({ name }) => {
		const newTouched = {
			name: touched.name,
			email: touched.email,
			phoneNumber: touched.phoneNumber,
			title: touched.title,
			text: touched.text,
		};
		switch (name) {
			case "name":
				newTouched.name = true;
				break;
			case "email":
				newTouched.email = true;
				break;
			case "phoneNumber":
				newTouched.phoneNumber = true;
				break;
			case "title":
				newTouched.title = true;
				break;
			case "text":
				newTouched.text = true;
				break;
			default:
				return;
		}
		setTouched(newTouched);
	};
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phoneNumber: "",
			title: "",
			text: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values, { resetForm }) => {
			try {
				const response = await fetch(`${baseUrl}/api/ticket/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});
				if (response.ok) {
					await response.json();
					resetForm();
					enqueueSnackbar({
						message: "پیام شما با موفقیت ارسال شد",
						variant: "success",
					});
				} else {
					enqueueSnackbar({ message: "خطایی رخ داد", variant: "error" });
				}
			} catch (error) {
				enqueueSnackbar({ message: "خطایی رخ داد", variant: "error" });
			}
		},
	});

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Card
				sx={{
					width: { xs: "90vw", md: "80vw" },
					backgroundColor: "#BDDDE7",
					px: 5,
					py: 3,
					borderRadius: "20px",
					margin: "20px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Grid
					container
					spacing={{ xs: 2, md: 4 }}>
					{/* Increased spacing between Grid items */}
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							sx={{
								padding: 1,
								paddingLeft: 3,
								fontSize: 16,
								fontWeight: 500,
							}}>
							نام و نام خانوادگی:
						</Typography>
						<TextField
							name="name"
							onFocus={() => handleTouch({ name: "name" })}
							value={formik.values.name}
							onChange={formik.handleChange}
							variant="outlined"
							fullWidth
							sx={{
							backgroundColor: "#FFFFFF",
							"& .MuiOutlinedInput-root": {
							borderRadius: "20px",
							height: "40px",
							fontSize: "14px",
							},
							borderRadius: "20px"
							}}
							/>
						{touched.name && formik.errors.name && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.name}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							sx={{
								padding: 1,
								paddingLeft: 3,
								fontSize: 16,
								fontWeight: 500,
							}}>
							آدرس ایمیل:
						</Typography>
						<TextField
							name="email"
							onFocus={() => handleTouch({ name: "email" })}
							value={formik.values.email}
							onChange={formik.handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px",
								height: "40px", },
								borderRadius: "20px",
							}}
						/>
						{touched.email && formik.errors.email && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.email}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ display: { xs: "none", md: "block" } }}>
						<Typography
							sx={{
								padding: 1,
								paddingLeft: 3,
								fontSize: 16,
								fontWeight: 500,
							}}>
							توضیحات بیشتر:
						</Typography>
						<TextField
							name="text"
							onFocus={() => handleTouch({ name: "text" })}
							value={formik.values.text}
							onChange={formik.handleChange}
							variant="outlined"
							fullWidth
							multiline
							rows={4}
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": {
									borderRadius: "20px",
									height: "135px",
								},
								borderRadius: "20px",
							}}
						/>
						{touched.text && formik.errors.text && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.text}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ position: "relative", bottom: { xs: 0, md: "120px" } }}>
						<Typography
							sx={{
								padding: 1,
								paddingLeft: 3,
								fontSize: 16,
								fontWeight: 500,
							}}>
							شماره تلفن:
						</Typography>
						<TextField
							name="phoneNumber"
							onFocus={() => handleTouch({ name: "phoneNumber" })}
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px",
								height: "40px", },
								borderRadius: "20px",
							}}
						/>
						{touched.phoneNumber && formik.errors.phoneNumber && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.phoneNumber}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ position: "relative", bottom: { xs: 0, md: "120px" } }}>
						<Typography
							sx={{
								padding: 1,
								paddingLeft: 3,
								fontSize: 16,
								fontWeight: 500,
							}}>
							موضوع پیام شما:
						</Typography>
						<TextField
							name="title"
							onFocus={() => handleTouch({ name: "title" })}
							value={formik.values.title}
							onChange={formik.handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px",
								height: "40px", },
								borderRadius: "20px",
							}}
						/>
						{touched.title && formik.errors.title && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.title}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ display: { xs: "block", md: "none" } }}>
						<Typography
							sx={{
								padding: 1,
								paddingLeft: 3,
								fontSize: 16,
								fontWeight: 500,
							}}>
							توضیحات بیشتر:
						</Typography>
						<TextField
							name="text"
							onFocus={() => handleTouch({ name: "text" })}
							value={formik.values.text}
							onChange={formik.handleChange}
							variant="outlined"
							fullWidth
							multiline
							rows={4}
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": {
									borderRadius: "20px",
									height: "155px",
								},
								borderRadius: "20px",
							}}
						/>
						{touched.text && formik.errors.text && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.text}
							</Typography>
						)}
					</Grid>
				</Grid>
				<Button
					onClick={formik.handleSubmit}
					variant="contained"
					sx={{
						mt: 2,
						backgroundColor: "black", // Button background color
						color: "white", // Text color
						position: "relative",
						bottom: { xs: 0, md: "80px" },
						fontWeight: "bold", // Bold text
						fontSize: "20px",
						borderRadius: "25px", // Rounded corners
						width: { xs: "100%", md: "32%" }, // Match the width of the center text fields
						"&:hover": {
							backgroundColor: "rgba(0,0,0,0.8)", // Slightly darker on hover
						},
					}}>
					ارسال تیکت
				</Button>
			</Card>
		</Box>
	);
};

export default ContactUsTextfields;
