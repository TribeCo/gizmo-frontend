"use client";
import React, { useState } from "react";
import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterBar = ({ filterNames, onFilterChange }) => {
	const [activeFilter, setActiveFilter] = useState(null);

	const handleFilterChange = (event, newValue) => {
		setActiveFilter(newValue);
		onFilterChange(filterNames[newValue]);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				width: { xs: "95%", md: "95%", xl: "1100px" },
				gap: 1,
			}}>
			<AppBar
				position="static"
				sx={{
					width: "100%",
					margin: "0 auto",
					bgcolor: "#EEEEEE99",
					borderRadius: "15px",
					boxShadow: "none",
					color: "black",
					display: "flex",
					minHeight: "56px",
					height: { xs: "48px", md: "auto" },
				}}>
				<Toolbar
					sx={{
						minHeight: "48px !Important",
						// overflow: "auto",
					}}>
					<Box
						display="flex"
						alignItems="center">
						{/* <FilterListIcon
							sx={{ mr: 1, display: { xs: "none", sm: "block" } }}
						/> */}
						<Typography
							sx={{
								fontWeight: "bold",
								fontSize: "20px",
								width: { md: "max-content" },
								display: { xs: "none", md: "block" },
							}}>
							مرتب سازی :
						</Typography>
						<Tabs
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
							}}
							variant="fullWidth">
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
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default FilterBar;
