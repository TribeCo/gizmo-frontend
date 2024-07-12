import React, { useState, useContext } from "react";
import {
	Modal,
	TextField,
	Button,
	Typography,
	IconButton,
	Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useAuth } from "@/context/AuthContext";
import { Colors } from "@/utils";

const ForgetPasswordForm = ({ onClose }) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [confirmationCode, setConfirmationCode] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);

	const [newPass, setNewPass] = useState("");
	const [passConf, setPassConf] = useState("");

	const [isPhoneSent, setIsPhoneSent] = useState(false);

	const { forgetPassword, changePassword } = useAuth();

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleToggleConfirmationVisibility = () => {
		setShowConfirmation(!showConfirmation);
	};

	const handleRecovery = async (event) => {
		event.preventDefault();

		const isPhoneSent = await forgetPassword(phoneNumber);

		if (isPhoneSent === 1) {
			console.log("phone sent");
			setIsPhoneSent(true);
		}
	};

	const handleChangePassword = async (event) => {
		event.preventDefault();

		const passChanged = await changePassword(
			phoneNumber,
			newPass,
			confirmationCode,
		);

		if (passChanged) {
			console.log("pass changed");
			onClose();
		}
	};

	return (
		<Grid
		sx={{
			width: {xs: "15rem", sm: "19rem"}
		}}
		>
			<Typography
				variant="h4"
				align="center"
				id="login-form-title"
				sx={{
					fontSize: {xs: "16px", sm: "20px"},
					mb: {xs: 0, sm:2}
				}}
				>
				بازیابی کلمه عبور
			</Typography>

			<hr
				style={{
					margin: "16px auto",
					width: "90%",
					borderColor: "rgba(0, 0, 0, 0.2)",
				}}
			/>


			{!isPhoneSent ? (
				<>
					<Typography
						variant="body1"
						sx={{
							fontSize: {xs: "12px", sm: "14px"}
						}}	
						mb={1}>
						تلفن همراه:‌
					</Typography>
					<TextField
						variant="outlined"
						type="text"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						fullWidth
						InputProps={{
							dir: "rtl",
						}}
						sx={{
							bgcolor: "white",
							marginBottom: "5%",
							borderRadius: "20px",
							"& .MuiOutlinedInput-root": { borderRadius: "20px", height: {xs: "40px", sm: "45px"}  },
						}}
					/>
					<Button
						variant="contained"
						color="warning"
						onClick={handleRecovery}
						fullWidth
						sx={{
							color: "black",
							bgcolor: "#FFCC70",
							marginTop: "5%",
							marginBottom: "5%",
							borderRadius: "20px",
							"&:hover": {
								bgcolor: Colors.orange,
							},
						}}>
						<Typography
							variant="h5"
							align="center"
							sx={{
								fontSize: {xs: "18px", sm: "20px"}
							}}
							id="login-button">
							بازیابی کلمه عبور
						</Typography>
					</Button>
				</>
			) : (
				<>
					<Typography
						variant="body1"
						sx={{
							fontSize: {xs: "12px", sm: "14px"}
						}}
						mb={1}>
						کد ارسال شده را وارد کنید
					</Typography>
					<TextField
						variant="outlined"
						type="text"
						value={confirmationCode}
						onChange={(e) => setConfirmationCode(e.target.value)}
						fullWidth
						InputProps={{
							dir: "rtl",
						}}
						sx={{
							bgcolor: "white",
							marginBottom: "5%",
							borderRadius: "20px",
							"& .MuiOutlinedInput-root": { borderRadius: "20px",  height: {xs: "40px", sm: "45px"}  },
						}}
					/>

					<Typography
						variant="body1"
						sx={{
							fontSize: {xs: "12px", sm: "14px"}
						}}
						mb={1}>
						رمز عبور جدید:
					</Typography>
					<TextField
						variant="outlined"
						type={showPassword ? "text" : "password"}
						value={newPass}
						onChange={(e) => setNewPass(e.target.value)}
						fullWidth
						InputProps={{
							dir: "rtl",
							endAdornment: (
								<IconButton
									onClick={handleTogglePasswordVisibility}
									edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							),
						}}
						sx={{
							bgcolor: "white",
							marginBottom: "5%",
							borderRadius: "20px",
							"& .MuiOutlinedInput-root": { borderRadius: "20px",  height: {xs: "40px", sm: "45px"}  },
						}}
					/>

					<Typography
						variant="body1"
						sx={{
							fontSize: {xs: "12px", sm: "14px"}
						}}
						mb={1}>
						تکرار رمز عبور جدید:
					</Typography>
					<TextField
						variant="outlined"
						type={showConfirmation ? "text" : "password"}
						value={passConf}
						onChange={(e) => setPassConf(e.target.value)}
						fullWidth
						InputProps={{
							dir: "rtl",
							endAdornment: (
								<IconButton
									onClick={handleToggleConfirmationVisibility}
									edge="end">
									{showConfirmation ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							),
						}}
						sx={{
							bgcolor: "white",
							marginBottom: "5%",
							borderRadius: "20px",
							"& .MuiOutlinedInput-root": { borderRadius: "20px",  height: {xs: "40px", sm: "45px"}  },
						}}
					/>

					<Button
						variant="contained"
						color="warning"
						onClick={handleChangePassword}
						fullWidth
						sx={{
							color: "black",
							bgcolor: "#FFCC70",
							marginTop: "5%",
							marginBottom: "5%",
							borderRadius: "20px",
							"&:hover": {
								bgcolor: Colors.orange,
							},
						}}>
						<Typography
							variant="h5"
							align="center"
							id="login-button">
							تغییر رمز عبور
						</Typography>
					</Button>
				</>
			)}
		</Grid>
	);
};

export default ForgetPasswordForm;
