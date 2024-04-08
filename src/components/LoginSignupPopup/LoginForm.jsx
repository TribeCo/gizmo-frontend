import React, { useState, useContext } from "react";
import { TextField, Button, Link, Typography, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "@/context/AuthContext";
import * as Yup from "yup";

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
			loginUser(phoneNumber, password);
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
		<>
			<Typography
				variant="h4"
				align="center"
				id="login-form-title"
				mb={2}>
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
					marginBottom: "5%",
					"& .MuiOutlinedInput-root": { borderRadius: "20px" },
				}}
				error={errors.phoneNumber}
				helperText={errors.phoneNumber}
			/>

			<Typography
				variant="body1"
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
					marginBottom: "5%",
					borderRadius: "20px",
					"& .MuiOutlinedInput-root": { borderRadius: "20px" },
				}}
				error={errors.password}
				helperText={errors.password}
			/>
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
				}}>
				<Typography
					variant="h5"
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
				onClick={handleSignup}>
				ثبت نام
			</Link>

			<br />

			<Link
				href="#"
				variant="body2"
				underline="false"
				color="black"
				onClick={handleForgetPassword}>
				فراموشی رمز عبور
			</Link>
		</>
	);
};

export default LoginForm;
