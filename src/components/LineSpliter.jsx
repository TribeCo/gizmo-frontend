import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "@/utils";

const LineSplitter = ({ text, margin = 10 }) => {
	return (
		<Box
			mt={margin}
			display="flex"
			alignItems="center"
			justifyContent="center"
			sx={{
				mb: { xs: 3, sm: 5, md: margin },
			}}>
			<Box
				ml={4}
				width="100%"
				borderBottom={5}
				borderColor={Colors.blue}
				flexWrap="nowrap"
			/>
			<Typography
				dir="center"
				fontWeight={900}
				variant="h4"
				sx={{
					fontSize: { xs: 18, sm: 26, md: 32 },
					px: 3,
					whiteSpace: "nowrap",
				}}>
				{text}
			</Typography>
			<Box
				mr={4}
				width="100%"
				borderBottom={5}
				borderColor={Colors.blue}
			/>
		</Box>
	);
};

export default LineSplitter;
