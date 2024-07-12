import React, { useState, useContext } from "react";
import { TextField, Button, Link, Typography, IconButton, Grid } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "@/context/AuthContext";
import * as Yup from "yup";
import { Colors } from "@/utils";
import { useCart } from "@/context/CartContext";

const LoginForm = ({ open, onClose, setPopupState }) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	// validation error variables
	const [errors, setErrors] = useState({});

	const validationSchema = Yup.object().shape({
		phoneNumber: Yup.string()
			.min(11, "تلفن همراه ۱۱ رقم است")
			.max(11, "تلفن همراه ۱۱ رقم است")
			.required("تلفن همراه الزامی است"),
		password: Yup.string().required("رمز عبور الزامی است"),
	});

	const { loginUser } = useAuth();
	const { updateCartList } = useCart();

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			await validationSchema.validate(
				{
					phoneNumber,
					password,
				},
				{ abortEarly: false },
			);
			const tokens = await loginUser(phoneNumber, password);
			updateCartList({ tokens });
			onClose();
		} catch (validationErrors) {
			const newErrors = {};
			validationErrors.inner.forEach((error) => {
				newErrors[error.path] = error.message;
			});
			setErrors(newErrors);
		}
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleForgetPassword = () => {
		setPopupState("forget-password");
	};

	const handleSignup = () => {
		setPopupState("signup");
	};

	return (
		<Grid
			sx={{
				width: {xs: "15rem", sm: "19rem"}
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontSize: {xs: "16px", sm: "20px"},
					mb: {xs: 0, sm:2}
				}}
				align="center"
				id="login-form-title"
				>
				ورود / ثبت نام
			</Typography>

			<hr
				style={{
					margin: "16px auto",
					width: "90%",
					borderColor: "rgba(0, 0, 0, 0.2)",
				}}
			/>

			<Typography
				variant="body1"
				sx={{
					fontSize: {xs: "12px", sm: "14px"}
				}}
				mb={1}>
				تلفن همراه:
			</Typography>

			<TextField
				variant="outlined"
				value={phoneNumber}
				onChange={(e) => setPhoneNumber(e.target.value)}
				fullWidth
				InputProps={{ dir: "rtl" }}
				sx={{
					bgcolor: "white",
					borderRadius: "20px",
					"& .MuiOutlinedInput-root": { borderRadius: "20px", height: {xs: "40px", sm: "45px"}  },
				}}
				/>

				{errors.phoneNumber ? (
					<Typography
						color="error"
						sx={{ fontSize: "0.70rem", paddingLeft: "15px", pt: "6px", pb: "16px" }}>
						{errors.phoneNumber}
					</Typography>
				) : (<Grid mt="16px" ></Grid>)}

			<Typography
				variant="body1"
				sx={{
					fontSize: {xs: "12px", sm: "14px"}
				}}
				mb={1}>
				رمز عبور:
			</Typography>
			<TextField
				variant="outlined"
				type={showPassword ? "text" : "password"}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
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
					borderRadius: "20px",
					"& .MuiOutlinedInput-root": { borderRadius: "20px", height: {xs: "40px", sm: "45px"} },
				}}
				/>
				{errors.password ? (
					<Typography
						color="error"
						sx={{ fontSize: "0.70rem", paddingLeft: "15px", pt: "6px", pb: "16px" }}>
						{errors.password}
					</Typography>
				) : (<Grid mt="16px" ></Grid>)}

			<Button
				variant="contained"
				color="warning"
				onClick={handleLogin}
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
					sx={{
						fontSize: {xs: "18px", sm: "20px"}
					}}
					align="center"
					id="login-button">
					ورود
				</Typography>
			</Button>

			<Link
				href="#"
				variant="body2"
				underline="false"
				color="black"
				sx={{
					fontSize: {xs: "12px", sm: "13px"}
				}}
				onClick={handleSignup}>
				ثبت نام
			</Link>

			<br />

			<Link
				href="#"
				variant="body2"
				underline="false"
				color="black"
				sx={{
					fontSize: {xs: "12px", sm: "13px"}
				}}
				onClick={handleForgetPassword}>
				فراموشی رمز عبور
			</Link>
		</Grid>
	);
};

export default LoginForm;
