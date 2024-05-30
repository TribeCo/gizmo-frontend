import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const Loading = ({ open, handleClose }) => {
	return (
		<Backdrop
			sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={open}
			onClick={handleClose}>
			<svg
				width={0}
				height={0}>
				<defs>
					<linearGradient
						id="my_gradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%">
						<stop
							offset="0%"
							stopColor="#e01cd5"
						/>
						<stop
							offset="100%"
							stopColor="#1CB5E0"
						/>
					</linearGradient>
				</defs>
			</svg>
			<CircularProgress
				thickness={4}
				size={100}
				sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
			/>
		</Backdrop>
	);
};

export default Loading;
