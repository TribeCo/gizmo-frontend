"use client";
import React, { useState } from "react";
import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from "@mui/material";

const FilterBar = ({ filterNames, onFilterChange }) => {
	const [activeFilter, setActiveFilter] = useState(0);

	const handleFilterChange = (event, newValue) => {
		setActiveFilter(newValue);
		onFilterChange(filterNames[newValue]);
	};

	return (
		<Box
			position="static"
			sx={{
				display: "flex",
				width: { xs: "95%", md: "95%", xl: "1100px" },
				justifyContent: { xs: "center", md: "start" },
				alignItems: "center",
				px: 2,
				py: 0.2,
				margin: "0 auto",
				bgcolor: "#EEEEEE99",
				borderRadius: "15px",
				height: { xs: "48px", md: "auto" },
			}}>
			<Typography
				sx={{
					fontWeight: "bold",
					fontSize: "20px",
					display: { xs: "none", md: "inline" },
				}}>
				مرتب سازی :
			</Typography>
			<Box
				sx={{
					maxWidth: {
						xs: 320,
						sm: 640,
					},
					mx: { xs: "auto", sm: 2 },
					display: "flex",
					justifyContent: "center",
				}}>
				<Tabs
					variant="scrollable"
					scrollButtons="auto"
					value={activeFilter}
					onChange={handleFilterChange}
					sx={{
						".MuiTabs-indicator": {
							backgroundColor: "#22668D",
						},
						".Mui-selected": {
							color: "#22668D",
						},
						flexGrow: 1,
						"& .MuiTabs-flexContainer": {
							flexDirection: "flex-start",
						},
						"& .MuiTab-root": {
							opacity: 1, // Prevents opacity changes on click
						},
						"& .MuiButtonBase-root": {
							// Remove the ripple effect
							"&:hover": {
								backgroundColor: "transparent",
							},
						},
					}}>
					{filterNames.map((name, index) => (
						<Tab
							key={index}
							label={name}
							wrapped
							disableRipple
							sx={{
								fontSize: { xs: "12px", sm: "14px" },
								fontWeight: "500",
							}}
						/>
					))}
				</Tabs>
			</Box>
		</Box>
	);
};

export default FilterBar;
