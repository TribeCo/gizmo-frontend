import { Box, Grid } from "@mui/material";
import React from "react";
import PaymentHeader from "../PaymentHeader";
import PaymentProductCard from "../PaymentProductCard";
import ReceiptCard from "../ReceiptCard";

const Third = ({ data, totals, sendInfo, handleSubmit }) => {
	return (
		<>
			<Box sx={{ margin: { xs: 2, md: 6 } }}>
				<PaymentHeader />
			</Box>
			<Grid
				container
				maxWidth="lg"
				gap={3}>
				<Grid
					item
					lg={7}
					md={12}
					sx={{
						marginX: {
							xs: "auto",
							sm: "auto",
							md: "auto",
							lg: 0,
							xl: 0,
						},
					}}>
					<Box>
						{data.map((item, index) => (
							<PaymentProductCard
								data={item}
								index={index}
								key={index}
							/>
						))}
					</Box>
				</Grid>
				<Grid
					item
					lg={4.5}
					md={12}
					sx={{
						marginX: {
							xs: "auto",
							sm: "auto",
							md: "auto",
							lg: 0,
							xl: 0,
						},
					}}>
					<ReceiptCard
						handleSubmit={handleSubmit}
						sendInfo={sendInfo}
						data={totals}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Third;
