import React from "react";
import { Box, Dialog } from "@mui/material";

import LoginForm from "./LoginForm";
import ForgetPasswordForm from "./ForgetPasswordForm";
import SignupForm from "./SignupForm";

const LoginSignupModal = ({ open, onClose, popupState, setPopupState }) => {
	const renderForm = () => {
		switch (popupState) {
			case "login":
				return (
					<LoginForm
						setPopupState={setPopupState}
						onClose={onClose}
					/>
				);
			case "signup":
				return (
					<SignupForm
						onClose={onClose}
						setPopupState={setPopupState}
					/>
				);
			case "forget-password":
				return <ForgetPasswordForm onClose={onClose} />;
			default:
				return null;
		}
	};

	return (
		<Dialog
			open={open}
			onClose={onClose}
			sx={{
				"& .MuiDialog-paper": {
					p: 4,
					boxShadow:
						"0px 18.404277801513672px 36.808555603027344px 0px #0000001A",
					borderRadius: 5,
					background:
						"linear-gradient(152.12deg, rgba(255, 255, 255, 0.71) 0%, rgba(255, 255, 255, 0.22) 100%), linear-gradient(207.91deg, rgba(255, 255, 255, 0.9) 4.08%, rgba(255, 255, 255, 0.5) 48.17%, rgba(255, 255, 255, 0.9) 100%)",
				},
			}}>
			<Box>{renderForm()}</Box>
		</Dialog>
	);
};

export default LoginSignupModal;
