"use client";

import React, { useEffect, useState } from "react";
import {
	Card,
	Box,
	FormControlLabel,
	Switch,
	Divider,
	Checkbox,
	TextField,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	IconButton,
	InputAdornment,
	Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

const FilterCard = ({
	filterList,
	dropdownOptions,
	minPrice,
	setMinPrice,
	maxPrice,
	setMaxPrice,
	setSelectedBrands,
	isModal = false,
}) => {
	const initialState = {
		dropdownFilter: [],
		textFieldFilter1: "",
		textFieldFilter2: "",
		rawTextFieldFilter1: "", // Add raw state
		rawTextFieldFilter2: "", // Add raw state
	};

	filterList.forEach((filter) => {
		initialState[filter.name] = false;
	});

	const [filters, setFilters] = useState(initialState);

	useEffect(() => {
		setFilters((prevState) => {
			const newState = { ...prevState };
			filterList.forEach((filter) => {
				if (newState[filter.name] === undefined) {
					newState[filter.name] = false;
				}
			});
			return newState;
		});
	}, [filterList]);

	// Adjusted function to format numbers with commas and convert to Persian digits
	const formatNumberWithCommas = (value) => {
		const englishValue = value.replace(/[^\d]/g, ""); // Strip non-numeric characters
		const formattedValue = englishValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
		const convertedToPersian = formattedValue.replace(
			/\d/g,
			(digit) => persianDigits[digit],
		);
		return convertedToPersian;
	};

	const normalizeInput = (value) => {
		const persianDigits = [
			/۰/g,
			/۱/g,
			/۲/g,
			/۳/g,
			/۴/g,
			/۵/g,
			/۶/g,
			/۷/g,
			/۸/g,
			/۹/g,
		];
		let englishValue = value;
		persianDigits.forEach((regex, index) => {
			englishValue = englishValue.replace(regex, index.toString());
		});
		return englishValue.replace(/,/g, "");
	};

	const handleToggle = (filter) => (event) => {
		filter.setState(event.target.checked);
	};

	const handleDropdownChange = (option) => {
		const currentIndex = filters.dropdownFilter.indexOf(option);
		const newChecked = [...filters.dropdownFilter];

		if (currentIndex === -1) {
			newChecked.push(option);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setFilters({ ...filters, dropdownFilter: newChecked });
		setSelectedBrands(newChecked);
	};

	// Inside FilterCard component, when handling text field changes for price range
	const handleMinPriceChange = (filter, rawFilter) => (event) => {
		const numericValue = normalizeInput(event.target.value); // Normalize input to get raw numeric value
		const formattedValue = formatNumberWithCommas(numericValue);
		setFilters({
			...filters,
			[filter]: formattedValue,
			[rawFilter]: numericValue,
		});
		setMinPrice(numericValue); // Use the passed setter function to update minPrice
		console.log(minPrice);
	};

	const handleMaxPriceChange = (filter, rawFilter) => (event) => {
		const numericValue = normalizeInput(event.target.value); // Normalize input to get raw numeric value
		const formattedValue = formatNumberWithCommas(numericValue);
		setFilters({
			...filters,
			[filter]: formattedValue,
			[rawFilter]: numericValue,
		});
		setMaxPrice(numericValue); // Use the passed setter function to update maxPrice
		console.log(maxPrice);
	};

	const resetFilters = () => {
		setMinPrice(0);
		setMaxPrice(500_000_000);

		filterList.forEach((element) => {
			element.setState(false);
		});

		setFilters(initialState);
	};

	return (
		<Box
			sx={
				!isModal
					? {
							height: "100%",
							display: { xs: "none", lg: "flex" },
							justifyContent: "center",
							alignItems: "center",
					  }
					: {
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
					  }
			}>
			<Card
				sx={{
					width: { xs: "100%", xl: "340px" }, // Takes full width of the Box container
					height: "100%", // Takes full height of the Box container
					bgcolor: "#FFFFFF",
					borderColor: "#C0C2CE40",
					borderWidth: "1px",
					borderStyle: "solid",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around", // Adjust based on your content
					alignItems: "center",
					padding: "20px", // Add padding inside the card
					borderRadius: "25px",
					position: "relative", // To position the reset button absolutely within the card
				}}>
				{/* Reset Button */}
				<Button
					onClick={resetFilters}
					sx={{
						color: "red",
						position: "absolute",
						top: 20,
						right: 20,
						".MuiTypography-root": {
							fontSize: {
								xs: "0.75rem", // Smaller screens
								sm: "0.9rem", // Larger screens
							},
							fontWeight: "bold",
						},
					}}>
					<DeleteIcon />
					<Typography>حذف فیلترها</Typography>
				</Button>
				{/* Typography "فیلتر ها" at the top right */}
				<Typography
					variant="h5"
					sx={{
						width: "100%",
						fontWeight: "bold",
						mb: 3,
						mt: 0.8,
						fontSize: {
							xs: "1rem", // For extra-small screens
							sm: "1.2rem", // For small screens
							md: "1.5rem", // For medium screens (default h5 size)
						},
					}}>
					فیلترها
				</Typography>
				{filterList.map((filter) => (
					<React.Fragment key={filter.name}>
						<FormControlLabel
							key={filter.name}
							control={
								<Switch
									checked={filter.state}
									onChange={handleToggle(filter)}
								/>
							}
							label={filter.label}
							labelPlacement="start"
							sx={{
								margin: "auto",
								width: "100%",
								padding: "15px",
								justifyContent: "space-between",
								marginBlock: "0.1rem",
								".MuiTypography-root": { fontWeight: "bold" }, // Apply bold font to label
							}}
						/>
						<Divider sx={{ width: "100%", bgcolor: "#C0C2CE40" }} />
					</React.Fragment>
				))}
				{/* Accordion for Checkbox Filters */}
				<Accordion
					sx={{
						width: "100%",
						boxShadow: "none",
						marginBlock: "0.1rem",
						padding: "5px",
						backgroundColor: "#FFFFFF",
					}}
					disableGutters>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel-checkboxes-content"
						id="panel-checkboxes-header"
						sx={{
							"&.Mui-focused": { boxShadow: "none" },
							"&:hover": { backgroundColor: "transparent" },
						}}>
						<Typography sx={{ fontWeight: "bold" }}>برندها</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ flexDirection: "column", display: "flex" }}>
						{dropdownOptions.map((option) => (
							<FormControlLabel
								key={option}
								control={
									<Checkbox
										checked={filters.dropdownFilter.indexOf(option) > -1}
										onChange={() => handleDropdownChange(option)}
									/>
								}
								label={option}
								sx={{ ml: 0, p: 0 }}
							/>
						))}
					</AccordionDetails>
				</Accordion>
				{/* Accordion for TextFields */}
				<Accordion
					sx={{
						width: "100%",
						boxShadow: "none",
						marginBlock: "0.1rem",
						padding: "5px",
						backgroundColor: "#FFFFFF",
					}}
					disableGutters>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel-textfields-content"
						id="panel-textfields-header"
						sx={{
							"&.Mui-focused": { boxShadow: "none" },
							"&:hover": { backgroundColor: "transparent" },
						}}>
						<Typography sx={{ fontWeight: "bold" }}>محدوده قیمت</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{ flexDirection: "column" }}>
						<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
							<Typography sx={{ color: "rgba(0, 0, 0, 0.7)", mr: 1 }}>
								از
							</Typography>
							<TextField
								type="text"
								variant="standard"
								value={filters.textFieldFilter1}
								onChange={handleMinPriceChange(
									"textFieldFilter1",
									"rawTextFieldFilter1",
								)}
								InputProps={{
									endAdornment: (
										<InputAdornment
											position="end"
											sx={{ color: "rgba(0, 0, 0, 0.7)" }}>
											تومان
										</InputAdornment>
									),
									sx: {
										textAlign: "center",
										fontWeight: "bold",
										"& input": {
											textAlign: "center",
											fontWeight: "bold",
										},
									},
								}}
								sx={{ flex: 1 }}
							/>
						</Box>
						<Box
							sx={{
								display: "flex",
								// alignItems: "center"
							}}>
							<Typography sx={{ color: "rgba(0, 0, 0, 0.7)", mr: 1 }}>
								تا
							</Typography>
							<TextField
								type="text"
								variant="standard"
								value={filters.textFieldFilter2}
								onChange={handleMaxPriceChange(
									"textFieldFilter2",
									"rawTextFieldFilter2",
								)}
								InputProps={{
									endAdornment: (
										<InputAdornment
											position="end"
											sx={{ color: "rgba(0, 0, 0, 0.7)" }}>
											تومان
										</InputAdornment>
									),
									sx: {
										textAlign: "center",
										fontWeight: "bold",
										"& input": {
											textAlign: "center",
											fontWeight: "bold",
										},
									},
								}}
								sx={{ flex: 1 }}
							/>
						</Box>
					</AccordionDetails>
				</Accordion>
			</Card>
		</Box>
	);
};

export default FilterCard;
