import { baseUrl } from "@/services";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ProductNotFound = () => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			mt={5}>
			<Typography
				variant="h3"
				sx={{
					fontSize: { xs: 30, md: 48 },
				}}>
				{"محصولی یافت نشد!"}
			</Typography>
			<Avatar
				sx={{
					height: { xs: 300, md: 400 },
					width: { xs: 300, md: 400 },
				}}
				variant="rounded"
				src={`${baseUrl}/images/media/pictures/video_2024-05-30_02-16-37-ezgif.com-video-to-gif-converter.gif`}
			/>
		</Box>
	);
};

export default ProductNotFound;
