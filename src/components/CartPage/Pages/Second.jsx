"use client";

import React, { useState, useEffect } from "react";
import {
	Box,
	FormControlLabel,
	Checkbox,
	Typography,
	Grid,
	TextField,
	Radio,
	RadioGroup,
	Button,
} from "@mui/material";
import {
	MakeDefaultAddress,
	fetchAddresses,
	formatFullAddress,
} from "@/services/DashBoard";
import { useAuth } from "@/context/AuthContext";
import { enqueueSnackbar } from "notistack";

import DeliveryInfoCard from "../DeliveryInfoCard";
import DeliveryInfoHeader from "../DeliveryInfoHeader";

const Second = ({ formik, setCurrentAddress, loading }) => {
	const { tokens } = useAuth();
	const [checkedAddresses, setCheckedAddresses] = useState({});
	const [addresses, setAddresses] = useState([]);

	useEffect(() => {
		if (tokens) {
			loading(true);
			handleGetAddress();
			loading(false);
		}
	}, [tokens]);

	const handleGetAddress = async () => {
		try {
			const response = await fetchAddresses(tokens);
			if (response) {
				setAddresses(response.data);
				const ca = response.data.find((address) => address.current);
				setCurrentAddress(ca);
			}
		} catch (error) {
			enqueueSnackbar({
				message: "خطا در دریافت آدرس‌ها.",
				variant: "error",
			});
		}
	};

	const handleChange = async (event, id) => {
		const newCheckedState = Object.keys(checkedAddresses).reduce(
			(state, key) => ({ ...state, [key]: false }),
			{ [event.target.name]: event.target.checked },
		);
		setCheckedAddresses(newCheckedState);
		if (event.target.checked) {
			loading(true);
			await MakeCurrent(id);
			const resetCheckedState = Object.keys(checkedAddresses).reduce(
				(state, key) => ({ ...state, [key]: false }),
				{},
			);
			setCheckedAddresses(resetCheckedState);
			loading(false);
		}
	};

	const MakeCurrent = async (id) => {
		loading(true);
		try {
			const response = await MakeDefaultAddress(id, tokens);
			if (response && response.messages) {
				setAddresses((await fetchAddresses(tokens)).data);
				setCurrentAddress(currentAddress);
				enqueueSnackbar({ message: response.messages, variant: "success" });
			}
		} catch (error) {
			console.error("Error setting default address:", error);
			enqueueSnackbar({
				message: "خطا در تنظیم آدرس پیش‌فرض.",
				variant: "error",
			});
		}
		loading(false);
	};

	const currentAddress = addresses.find((address) => address.current);
	const otherAddress = addresses.filter((address) => !address.current);

	return (
		<Box>
			<DeliveryInfoHeader number={0} />
			<Box
				sx={{
					py: { xs: 4, md: 7 },
					display: "flex",
					flexDirection: "column",
					px: 5,
					gap: 1,
					width: { xs: "auto", xl: "1282px" },
				}}>
				<Typography
					sx={{
						fontSize: { xs: "14px", sm: "20px", md: "24px", lg: "28px" },
						fontWeight: "700",
						color: "#213346",
						mb: 2,
					}}>
					{"آدرس انتخاب شده برای ارسال :"}
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px" },
						fontWeight: "400",
						mb: { xs: 3, md: 10 },
					}}>
					{formatFullAddress(addresses.find((address) => address.current))}
				</Typography>
				<Typography
					sx={{
						fontSize: { xs: "14px", sm: "20px", md: "24px", lg: "28px" },
						fontWeight: "700",
						color: "#213346",
						mb: 0.5,
					}}>
					{"آدرس‌های ذخیره شده :"}
				</Typography>
				{otherAddress.map((address, index) => (
					<FormControlLabel
						sx={{ ml: { xs: 0, md: 0.5 } }}
						key={index}
						control={
							<Checkbox
								checked={checkedAddresses[`checkbox${index}`] || false}
								onChange={(e) => handleChange(e, address.id)}
								name={`checkbox${index}`}
							/>
						}
						label={
							<Typography
								sx={{
									fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px" },
									fontWeight: "400",
								}}>
								{formatFullAddress(address)}
							</Typography>
						}
					/>
				))}
				<Typography
					sx={{
						fontSize: { xs: "14px", sm: "20px", md: "24px", lg: "28px" },
						fontWeight: "700",
						color: "#213346",
						mt: { xs: 4, md: 7 },
						mb: 3,
					}}>
					{"اضافه کردن آدرس جدید :"}
				</Typography>
				<DeliveryInfoCard setAddress={setAddresses} />
			</Box>
			<DeliveryInfoHeader number={1} />
			<Box
				sx={{
					py: { xs: 4, md: 7 },
					display: "flex",
					flexDirection: "column",
					px: 5,
					gap: 1,
					width: { xs: "auto", xl: "1282px" },
				}}>
				<Typography
					sx={{
						fontSize: { xs: "14px", sm: "20px", md: "24px", lg: "28px" },
						fontWeight: "700",
						color: "#213346",
						mb: 2,
					}}>
					{"اطلاعات گیرنده :"}
				</Typography>
				<Grid
					container
					spacing={2}
					sx={{ pl: { xs: 0, md: 2 } }}>
					<Grid
						item
						xs={12}
						sm={6}>
						<Typography
							variant="body1"
							sx={{ padding: "5px", paddingLeft: "15px" }}>
							{"نام و نام خانوادگی :"}
						</Typography>
						<TextField
							fullWidth
							variant="outlined"
							name="name_delivery"
							onChange={formik.handleChange}
							value={formik.values.name_delivery}
							sx={{
								borderRadius: "20px",
								"& .MuiOutlinedInput-root": {
									borderRadius: "20px",
								},
								width: { xs: "320", sm: "380", md: "420", lg: "550px" },
								backgroundColor: "#EEEEEE",
							}}
						/>
						{formik.errors.name_delivery && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.name_delivery}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}>
						<Typography
							variant="body1"
							sx={{ padding: "5px", paddingLeft: "15px" }}>
							{"شماره تماس :"}
						</Typography>
						<TextField
							fullWidth
							variant="outlined"
							name="phone_delivery"
							onChange={formik.handleChange}
							value={formik.values.phone_delivery}
							sx={{
								borderRadius: "20px",
								"& .MuiOutlinedInput-root": {
									borderRadius: "20px",
								},
								width: { xs: "320", sm: "380", md: "420", lg: "550px" },
								backgroundColor: "#EEEEEE",
							}}
						/>
						{formik.errors.phone_delivery && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.phone_delivery}
							</Typography>
						)}
					</Grid>
					<Grid
						item
						xs={12}>
						<Typography
							variant="body1"
							sx={{ padding: "5px", paddingLeft: "15px" }}>
							{"توضیحات بیشتر:"}
						</Typography>
						<TextField
							fullWidth
							multiline
							rows={4}
							variant="outlined"
							name="description"
							onChange={formik.handleChange}
							value={formik.values.description}
							sx={{
								borderRadius: "20px",
								"& .MuiOutlinedInput-root": {
									borderRadius: "20px",
									height: "120px",
								},
								width: { xs: "320", sm: "380", md: "420", lg: "550px" },
								backgroundColor: "#EEEEEE",
							}}
						/>
						{formik.errors.description && (
							<Typography
								variant="subtitle2"
								mt={0.5}
								ml={1}
								color="error">
								{formik.errors.description}
							</Typography>
						)}
					</Grid>
				</Grid>
			</Box>
			<DeliveryInfoHeader number={2} />
			<RadioGroup
				sx={{
					display: "flex",
					flexDirection: "row",
					py: 5,
					px: { xs: 5, md: 10 },
					gap: { xs: 3, lg: 5 },
					width: { xs: "auto", xl: "1282px" },
				}}
				name="delivery_method"
				value={formik.values.delivery_method}
				onChange={formik.handleChange}>
				<FormControlLabel
					value="c"
					control={<Radio />}
					label={
						<Typography
							sx={{
								fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#747678",
							}}>
							{"درون شهری : هزینه ثابت"}
						</Typography>
					}
				/>
				<FormControlLabel
					value="b"
					control={<Radio />}
					label={
						<Typography
							sx={{
								fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#747678",
							}}>
							{"ارسال با اتوبوس : هزینه متغیر"}
						</Typography>
					}
				/>
				<FormControlLabel
					value="p"
					control={<Radio />}
					label={
						<Typography
							sx={{
								fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#747678",
							}}>
							{"پست معمولی : هزینه اقتصادی"}
						</Typography>
					}
				/>
				<FormControlLabel
					value="t"
					control={<Radio />}
					label={
						<Typography
							sx={{
								fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
								fontWeight: "700",
								color: "#747678",
							}}>
							{"تیپاکس (پس کرایه) : سریع و گران"}
						</Typography>
					}
				/>
			</RadioGroup>
			{formik.errors.delivery_method && (
				<Typography
					variant="subtitle2"
					ml={5}
					color="error">
					{formik.errors.delivery_method}
				</Typography>
			)}
		</Box>
	);
};

export default Second;
