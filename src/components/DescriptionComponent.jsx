"use client";

import React, { useState } from "react";
import {
	Tabs,
	Tab,
	Typography,
	Box,
	Grid,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
} from "@mui/material";

const DescriptionComponent = ({
	introductionContent,
	CommentsSection,
	productInfo,
}) => {
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	return (
		<Grid mt={4}>
			<Tabs
				value={selectedTab}
				onChange={handleTabChange}
				sx={{
					borderBottom: "1px solid #9D9DA0",
					mb: 2,
				}}>
				<Tab
					value={0}
					label={
						<Typography
							variant="h6"
							fontWeight="bold"
							color="#9D9DA0">
							معرفی
						</Typography>
					}
				/>
				<Tab
					value={1}
					label={
						<Typography
							variant="h6"
							fontWeight="bold"
							color="#9D9DA0">
							مشخصات
						</Typography>
					}
				/>
				<Tab
					value={2}
					label={
						<Typography
							variant="h6"
							fontWeight="bold"
							color="#9D9DA0">
							نظرات
						</Typography>
					}
				/>
			</Tabs>
			<TabPanel
				value={selectedTab}
				index={0}>
				<Introduction content={introductionContent} />
			</TabPanel>
			<TabPanel
				value={selectedTab}
				index={1}>
				<ProductTable productInfo={productInfo} />
			</TabPanel>
			<TabPanel
				value={selectedTab}
				index={2}>
				{CommentsSection}
			</TabPanel>
		</Grid>
	);
};

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<Grid
			role="tabpanel"
			hidden={value !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			{...other}>
			{value === index && <Box p={2}>{children}</Box>}
		</Grid>
	);
};

const Introduction = ({ content }) => {
	return (
		<Box
			maxWidth="lg"
			sx={{
				mx: "auto",
			}}>
			<Typography variant="body1">{content}</Typography>
		</Box>
	);
};

const ProductTable = ({ productInfo }) => {
	return (
		<Grid
			container
			justifyContent="center"
			sx={{
				marginBottom: "16px",
				mx: "auto",
			}}
			maxWidth="lg">
			<TableContainer
				component={Paper}
				elevation={0}>
				<Table>
					<TableBody>
						{productInfo.map((item, index) => (
							<TableRow
								key={index}
								sx={{
									backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
								}}>
								<TableCell align="left">
									<Typography variant="body1">{item.attribute}</Typography>
								</TableCell>
								<TableCell align="left">
									<Typography variant="body1">{item.value}</Typography>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
};

export default DescriptionComponent;
