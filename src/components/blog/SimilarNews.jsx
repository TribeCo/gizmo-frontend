import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SimilarNews = ({ data }) => {
	return (
		<Grid
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			sx={{
				rowGap: 2,
			}}>
			{data.map((item, index) => (
				<Link
					href={item.slug}
					key={index}>
					<Grid
						display="flex"
						sx={{
							columnGap: 2,
							px: { xs: 4, sm: 0 },
						}}>
						<Paper
							sx={{
								borderRadius: { xs: "6px", sm: "12px" },
								overflow: "hidden",
								boxShadow: "none",
							}}>
							<CardMedia
								component="img"
								image={item.cover}
								alt={item.title}
								sx={{
									width: { xs: "130px", sm: "160px", md: "140px", lg: "130px" },
									height: "auto",
								}}
							/>
						</Paper>
						<Grid
							display="flex"
							flexDirection="column"
							justifyContent="space-between">
							<Typography
								fontWeight="bold"
								sx={{
									fontSize: { xs: 12, sm: 16, md: 16 },
									width: { xs: "8rem", sm: "22rem", md: "14rem", lg: "14rem" },
								}}>
								{item.title}
							</Typography>

							<Grid
								display="flex"
								justifyContent="start"
								alignItems="center"
								flexDirection="row"
								columnGap={1}>
								<Grid>
									<svg
										width="17"
										height="18"
										viewBox="0 0 17 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0.824707 8.99003C0.824707 5.45706 0.824707 3.69098 1.92215 2.59354C3.0196 1.49609 4.7865 1.49609 8.31864 1.49609C11.8516 1.49609 13.6177 1.49609 14.7151 2.59354C15.8126 3.69098 15.8126 5.45789 15.8126 8.99003C15.8126 12.523 15.8126 14.2891 14.7151 15.3865C13.6177 16.484 11.8508 16.484 8.31864 16.484C4.78567 16.484 3.0196 16.484 1.92215 15.3865C0.824707 14.2891 0.824707 12.5222 0.824707 8.99003Z"
											stroke="black"
											stroke-width="1.24899"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M8.3186 3.99414V8.9901L11.6492 10.6554"
											stroke="black"
											stroke-width="1.24899"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</Grid>
								<Typography
									sx={{
										fontSize: { xs: 11, sm: 12, md: 13, lg: 16 },
									}}>
									{item.date}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Link>
			))}
		</Grid>
	);
};

export default SimilarNews;
