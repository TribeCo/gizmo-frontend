import React, { useState, useContext } from "react";
import {
	TextField,
	Button,
	Link,
	Box,
	Typography,
	IconButton,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthContext from "@/context/AuthContext";

import * as Yup from "yup";

const SignupForm = ({ open, onClose, setPopupState }) => {
	// form variables
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [confirmationCode, setConfirmationCode] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmation, setConfirmaiton] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [policyAgreed, setPolicyAgreed] = useState(false);

	const [phoneEnter, setPhoneEnter] = useState(false);
	const [phoneValidate, setPhoneValidate] = useState(false);
	const [informationComplition, setInformationComplition] = useState(false);

	// validation error variables
	const [errors, setErrors] = useState({});

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().required("نام الزامی است"),
		lastName: Yup.string().required("نام خانوادگی الزامی است"),
		phoneNumber: Yup.string()
			.min(11, "تلفن همراه ۱۱ رقم است")
			.max(11, "تلفن همراه ۱۱ رقم است")
			.required("تلفن همراه الزامی است"),
		email: Yup.string()
			.email("ایمیل وارد شده معتبر نیست")
			.required("ایمیل الزامی است"),
		password: Yup.string()
			.required("رمز عبور الزامی است")
			.min(8, "رمز عبور باید حداقل 8 کاراکتر داشته باشد")
			.test(
				"password-complexity",
				"رمز عبور باید شامل حروف بزرگ و کوچک، اعداد و کاراکترهای ویژه باشد",
				(value) =>
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value),
			),
		confirmation: Yup.string()
			.oneOf(
				[Yup.ref("password"), null],
				"تکرار رمز عبور باید با رمز عبور مطابقت داشته باشد",
			)
			.required("تکرار رمز عبور الزامی است"),
		policyAgreed: Yup.boolean().oneOf(
			[true],
			"شما باید با قوانین سایت موافقت کنید",
		),
	});

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleToggleConfirmationVisibility = () => {
		setShowConfirmation(!showConfirmation);
	};

	const handleAgreeChange = (event) => {
		setPolicyAgreed(event.target.checked);
	};

	const handleSignup = async (event) => {
		event.preventDefault();

		console.log("validating phone number");

		const isValidated = await confirmPhoneSignUpCode(
			phoneNumber,
			parseInt(confirmationCode, 10),
		);

		if (isValidated === 1) {
			console.log("validated");
			setPhoneValidate(true);
		}
	};

	const handleCompleteInfo = async (event) => {
		event.preventDefault();

		console.log("complete info");

		const isCompleted = await completeSignupInformation(
			phoneNumber,
			firstName,
			lastName,
			email,
			password,
		);

		if (isCompleted === 1) {
			setInformationComplition(true);
			onClose();
		}
	};

	const handleSendCode = async (event) => {
		event.preventDefault();
		// try {
		//     await validationSchema.validate({
		//         fullName,
		//         phoneNumber,
		//         email,
		//         password,
		//         confirmation,
		//         policyAgreed,
		//     }, { abortEarly: false });
		// Handle form submission if validation succeeds

		console.log("signup running");

		const isSignedUp = await signUp(phoneNumber);

		if (isSignedUp === 1) {
			console.log("here here");
			setPhoneEnter(true);
		}

		// } catch (validationErrors) {
		//   // Update the errors state with the validation errors
		//   const newErrors = {};
		//   validationErrors.inner.forEach(error => {
		//     newErrors[error.path] = error.message;
		//   });
		//   setErrors(newErrors);
		// }
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

			{phoneEnter && phoneValidate ? (
				<>
					<Typography
						variant="body1"
						mb={1}>
						نام:
					</Typography>

					<TextField
						variant="outlined"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						fullWidth
						InputProps={{ dir: "rtl" }}
						sx={{
							bgcolor: "white",
							borderRadius: "20px",
							marginBottom: "5%",
							"& .MuiOutlinedInput-root": { borderRadius: "20px" },
						}}
						error={errors.firstName}
						helperText={errors.firstName}
					/>

					<Typography
						variant="body1"
						mb={1}>
						نام خانوادگی:
					</Typography>

					<TextField
						variant="outlined"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						fullWidth
						InputProps={{ dir: "rtl" }}
						sx={{
							bgcolor: "white",
							borderRadius: "20px",
							marginBottom: "5%",
							"& .MuiOutlinedInput-root": { borderRadius: "20px" },
						}}
						error={errors.lastName}
						helperText={errors.lastName}
					/>
				</>
			) : (
				<></>
			)}

			{!phoneEnter ? (
				<>
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
						mb={2}
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
				</>
			) : (
				<></>
			)}

			{phoneEnter && !phoneValidate ? (
				<>
					<Typography
						variant="body1"
						mb={1}>
						کد تایید ارسال شده را وارد کنید
					</Typography>

					<TextField
						variant="outlined"
						value={confirmationCode}
						onChange={(e) => setConfirmationCode(e.target.value)}
						fullWidth
						mb={2}
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
				</>
			) : (
				<></>
			)}

			{phoneEnter && phoneValidate ? (
				<>
					<Typography
						variant="body1"
						mb={1}>
						ایمیل:
					</Typography>

					<TextField
						variant="outlined"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
						mb={2}
						InputProps={{ dir: "rtl" }}
						sx={{
							bgcolor: "white",
							borderRadius: "20px",
							marginBottom: "5%",
							"& .MuiOutlinedInput-root": { borderRadius: "20px" },
						}}
						error={errors.email}
						helperText={errors.email}
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

					<Typography
						variant="body1"
						mb={1}>
						تکرار رمز عبور:
					</Typography>
					<TextField
						variant="outlined"
						type={showConfirmation ? "text" : "password"}
						value={confirmation}
						onChange={(e) => setConfirmaiton(e.target.value)}
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
							"& .MuiOutlinedInput-root": { borderRadius: "20px" },
						}}
						error={errors.confirmation}
						helperText={errors.confirmation}
					/>
				</>
			) : (
				<></>
			)}
			{!phoneEnter && !phoneValidate ? (
				<>
					<Button
						variant="contained"
						color="warning"
						onClick={handleSendCode}
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
							ارسال کد
						</Typography>
					</Button>
				</>
			) : (
				<></>
			)}
			{phoneEnter && !phoneValidate ? (
				<>
					<Button
						variant="contained"
						color="warning"
						onClick={handleSignup}
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
							ثبت نام
						</Typography>
					</Button>
				</>
			) : (
				<></>
			)}
			{phoneEnter && phoneValidate ? (
				<>
					<Button
						variant="contained"
						color="warning"
						onClick={handleCompleteInfo}
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
							ثبت نام
						</Typography>
					</Button>
					<FormControlLabel
						control={
							<Checkbox
								checked={policyAgreed}
								onChange={handleAgreeChange}
							/>
						}
						label={
							<Typography variant="body1">
								<span style={{ color: "red", marginLeft: "4px" }}>*</span>
								<span>با قوانین سایت موافقم</span>
							</Typography>
						}
						error={!!errors.policyAgreed}
						helperText={errors.policyAgreed}
					/>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default SignupForm;
