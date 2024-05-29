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
			mt={12}>
			<Typography variant="h3">{"محصولی یافت نشد!"}</Typography>
			<Avatar
				sx={{
					height: 400,
					width: 400,
				}}
				variant="rounded"
				src={`${baseUrl}/images/media/pictures/video_2024-05-30_02-16-37-ezgif.com-video-to-gif-converter.gif`}
			/>
		</Box>
	);
};

export default ProductNotFound;
