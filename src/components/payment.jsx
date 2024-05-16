const image =
	"https://gn02.liara.run/images/media/pictures/payment_success_vector.png";

import { CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const payment = () => {
	return (
		<Container
			sx={{
				justifyContent: "center",
				alignItems: "center",
				bgcolor: "#FFF",
			}}>
			<CardMedia image="" />
			<Typography>{"پرداخت با موفقیت انجام شد"}</Typography>
		</Container>
	);
};

export default payment;
