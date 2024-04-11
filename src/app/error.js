"use client";

import { baseUrl } from "@/services";
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
			bgcolor="#9BCADA">
			<Typography
				sx={{
					fontSize: { xs: 190, md: 300 },
					mt: { xs: 10, md: 0 },
				}}
				fontWeight={600}
				lineHeight={1}
				color="#252B48">
				{"707"}
			</Typography>
			<Typography
				sx={{
					fontSize: { xs: 30, md: 60 },
					mt: { xs: 5, md: 0 },
				}}
				mb={10}
				fontWeight={600}
				color="#252B48">
				{"با عرض شرمندگی سرور پوکید!!!"}
			</Typography>
			<CardMedia
				sx={{
					height: { xs: 190, md: 400 },
					width: { xs: 380, md: 800 },
				}}
				image={`${baseUrl}/images/media/pictures/photo_2024-04-08_15-42-22.jpg`}
			/>
		</Box>
	);
}
