"use client";
import React, { useState } from "react";
import { Card, Box, TextField, Grid, Button, Typography } from "@mui/material";
import { baseUrl } from "@/services";

const ContactUsTextfields = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		title: "",
		text: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const deleteAddress = async (addressId) => {
		if (!addressId) {
			alert("No address selected for deletion");
			return;
		}
		const confirmDeletion = window.confirm(
			"Are you sure you want to delete this address?",
		);
		if (!confirmDeletion) {
			return; // Stop if the user cancels the deletion
		}
		try {
			const response = await fetch(
				`${baseUrl}/api/addresses/delete/${addressId}/`,
				{
					// Replace the URL with your actual endpoint
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer YOUR_TOKEN_HERE`, // Replace YOUR_TOKEN_HERE with your actual token
					},
				},
			);
			if (!response.ok) {
				throw new Error("Failed to delete the address");
			}
			alert("Address deleted successfully");
			fetchAddresses(); // Refresh the list of addresses after deletion
		} catch (error) {
			console.error("Error deleting address:", error);
			alert("Error deleting address");
		}
	};

	const handleSubmit = async () => {
		try {
			const response = await fetch(`${baseUrl}/api/ticket/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data);
			} else {
				throw new Error("Something went wrong with the request");
			}
		} catch (error) {
			console.error("Error submitting the form:", error);
		}
	};
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				paddingY: "20px",
			}}>
			<Card
				sx={{
					height: { xs: "auto", md: "340px" },
					width: { xs: "90vw", md: "80vw" },
					backgroundColor: "#BDDDE7", // Custom background color
					padding: "30px", // Keep uniform padding for top, left, and right
					paddingTop: 2,
					borderRadius: "20px",
					margin: "20px", // Add some margin around the card
					display: "flex", // Use flex
					flexDirection: "column", // Stack children vertically
					alignItems: "center", // Center align the children
				}}>
				<Grid
					container
					spacing={{ xs: 2, md: 4 }}>
					{" "}
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
							onChange={handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px" },
								borderRadius: "20px",
							}}
						/>
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
							onChange={handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px" },
								borderRadius: "20px",
							}}
						/>
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
							onChange={handleChange}
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
							onChange={handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px" },
								borderRadius: "20px",
							}}
						/>
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
							onChange={handleChange}
							variant="outlined"
							fullWidth
							sx={{
								backgroundColor: "#FFFFFF",
								"& .MuiOutlinedInput-root": { borderRadius: "20px" },
								borderRadius: "20px",
							}}
						/>
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
							onChange={handleChange}
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
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						{/* <TextField label="توضیحات بیشتر" variant="outlined" fullWidth multiline rows={4} sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px', height: '155px' }, borderRadius: '20px', position: 'relative', bottom: '95px' }} /> */}
					</Grid>
				</Grid>
				<Button
					onClick={handleSubmit}
					variant="contained"
					sx={{
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
