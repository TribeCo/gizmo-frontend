"use client";

import { Box, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			width="100vw"
			height="100vh"
			bgcolor="#8ECDDD">
			{/* <Typography
				fontWeight={600}
				fontSize={300}
				color="#252B48">
				{error.name}
			</Typography> */}
			<Typography
				fontWeight={600}
				fontSize={60}
				color="#252B48">
				{"با عرض شرمندگی سرور پوکید!!!"}
			</Typography>
			<CardMedia
				sx={{
					height: 200,
					width: 400,
				}}
				image=""
			/>
		</Box>
	);
}
