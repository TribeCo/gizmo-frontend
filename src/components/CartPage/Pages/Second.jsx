"use client";

import { Box } from "@mui/material";
import react from "react";
import ProgressBar from "../ProgressBar";
import DeliveryInfoMain from "../DeliveryInfoMain";
import Summary from "../Summary";
import { SenderInformation } from "@/services/DashBoard";

const Second = () => {
	const [SenderInfo, SetSenderInfo] = react.useState({
		name_delivery: "",
		phone_delivery: "",
		description: "",
		delivery_method: "",
	});

	const handleChange = (fieldName) => (event) => {
		SetSenderInfo((prev) => ({
			...prev,
			[fieldName]: event.target.value,
		}));
	};

	// const handleSubmit = async () => {
	// 	try {
	// 		const response = await SenderInformation(SenderInfo);
	// 		console.log("Success:", response);
	// 	} catch (error) {
	// 		console.error("Error:", error);
	// 	}
	// };
	return (
		<>
			<DeliveryInfoMain handleSenderChange={handleChange} />
		</>
	);
};

export default Second;
