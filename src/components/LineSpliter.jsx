import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "@/utils";

const LineSplitter = ({ text }) => {
	return (
		<Box
			mt={10}
			mb={10}
			display="flex"
			alignItems="center"
			justifyContent="center">
			<Box
				ml={6}
				width="100%"
				borderBottom={5}
				borderColor={Colors.blue}
				flexWrap="nowrap"
			/>
			<Typography
				dir="center"
				fontWeight="900"
				variant="h4"
				sx={{
					px: 3,
					whiteSpace: "nowrap",
				}}>
				{text}
			</Typography>
			<Box
				mr={6}
				width="100%"
				borderBottom={5}
				borderColor={Colors.blue}
			/>
		</Box>
	);
};

export default LineSplitter;
