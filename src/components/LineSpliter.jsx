import React from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "@/utils";

const LineSplitter = ({ text, margin = 10, font_xs = 18, font_sm = 26, font_md = 32, font_lg = 32 }) => {
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
				fontWeight='bold'
				sx={{
					fontSize: { xs: font_xs, sm: font_sm, md: font_md, lg: font_lg },
					px: {xs: 1.5, sm: 1.5, md: 2, lg: 2.5},
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
