"use client";

import React, { useState } from "react";
import {
	Box,
	Grid,
	Typography,
	Button,
	Divider,
	Paper,
	CardMedia,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { convert } from "@/utils";

const testImg =
	"https://s3-alpha-sig.figma.com/img/4050/86fb/624274b23cab9a4bbe014728fb02db1a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsXE0Xy9Sz1y43uvI03e-VnS8W5Vh7zGJxi1UjEa5KrVPe4x8JBJ6Vsr3x6HvgR3HzVXp-WqqqWdljRHN1gP4G3w81R1qMfKP8uigsRmQ2ExFGSS9nhfbi1kOQUr9jlATIUHz3ctCrMvZ10mOHLSWsdNBW2LT~6Qz188~zr3P7byaI1k-4AQcG1JXit5mNWhj79YiVjdQ5hcjgfHlF-n3w0~xNdk9OESTpTGnIthzMxFVCebpwjlKTp6Zg9g5drNn-tyo442E3q8mCw~FP~rT8ywgC~qkL3Wzn8Eu6oECYwz8Re3Oo7rm2kMQcDkLMhrJLd5Xh499jRM5tHT7meEXA__";

const ProductCard = ({ data }) => {
	const [count, setCount] = useState(data.quantity);

	const onIncrement = () => {
		setCount(count + 1);
	};

	const onDecrement = () => {
		if (count != 0) {
			setCount(count - 1);
		}
	};

	return (
		<Grid>
			<Grid
				display="flex"
				alignItems="center"
				justifyContent='space-between'
				sx={{
					width: {xs: '21.4rem', sm: '36.5rem', md: '54rem', lg: '73rem'}
				}}
				>
				<Grid
					display="flex"
					flexDirection="row"
					justifyContent="center"
					alignItems="center"
					columnGap={1}>
					<CardMedia
						image={data.product.image1}
						sx={{
							width: { xs: "55px", sm: "90px", md: "150px", lg: "193px" },
							height: { xs: "55px", sm: "90px", md: "150px", lg: "193px" },
							overflow: "hidden",
							borderRadius: "10px",
						}}
					/>
					<Grid
						display="flex"
						flexDirection="column"
						alignItems="start"
						sx={{
							rowGap: { xs: "5px", sm: '5px', md: 3, lg: 4 },
						}}>
						<Grid
							display="flex"
							justifyContent="center"
							alignItems="center"
							sx={{
								columnGap: {xs: 0.2, md: 1}
							}}>
							<Typography
								sx={{
									textWrap: 'wrap',
									width: {xs: '45px', sm: '110px', md: '160px', lg: '200px'},
									fontSize: { xs: 6, sm: 12, md: 18, lg: 24},
								}}>
								{data.product.name}
							</Typography>

							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								bgcolor="rgba(255, 0, 0, 1)"
								borderRadius="30px">
								<Typography
									sx={{
										color: "white",
										fontSize: { xs: 5, sm: 10, md: 16, lg: 18 },
										py: { xs: "1px", sm: "2px", md: "3px", lg: "4px" },
										px: { xs: "5px", sm: "8px", md: "12px", lg: "15px" },
									}}>
									%{convert(data.product.discount)}
								</Typography>
							</Box>
						</Grid>
						<Grid
							display="flex"
							justifyContent="center"
							alignItems="center"
							sx={{
								columnGap: {xs: 0.2, md: 1}
							}}>
							<Typography
								variant="h6"
								sx={{
									fontSize: { xs: 6, sm: 12, md: 16, lg: 20 },
								}}>
								رنگ:
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: 5, sm: 11, md: 15, lg: 18 },
								}}>
								{data.color.name}
							</Typography>
						</Grid>
						<Grid
							display="flex"
							justifyContent="center"
							alignItems="center"
							sx={{
								columnGap: {xs: 0.2, md: 1}
							}}>
							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: 6, sm: 12, md: 15, lg: 18 },
								}}>
								کد محصول:
							</Typography>
							<Typography
								variant="body1"
								sx={{
									fontSize: { xs: 5, sm: 11, md: 15, lg: 17 },
								}}>
								{convert(data.product.id)}
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					display="flex"
					flexDirection="row"
					alignItems="center"	
					sx={{
						mr: {xs: 1, sm: 1, md: 0, lg: 4},
						columnGap: { xs: 0, sm: 3, md: 7, lg: 14 },
					}}>
					<Grid>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Typography
								variant="h6 "
								fontWeight="bold"
								sx={{
									fontSize: { xs: 7, sm: 12, md: 16, lg: 18 },
									color: "#B4B4B4",
								}}>
								<span style={{ textDecoration: "line-through" }}>
									{convert(data.product.price)} تومان
								</span>
							</Typography>
							<Typography
								variant="h6"
								fontWeight="bold"
								sx={{
									fontSize: { xs: 8, sm: 14, md: 20, lg: 22 },
								}}>
								{convert(data.product.discount_price)} تومان
							</Typography>
						</Box>
					</Grid>
					<Grid>
						<Box
							display={"inline-flex"}
							sx={{
								alignItems: "center",
								justifyContent: "center",
								scale: { xs: "0.4", sm: "0.8", lg: "1" },
							}}>
							<Button
								sx={{
									borderRadius: "3px",
									height: "41px",
									width: "35px",
									minWidth: "0px !important",
									color: "#747678",
									borderColor: "#747678",
								}}
								onClick={onIncrement}
								variant="outlined"
								startIcon={<Add sx={{ marginLeft: "30%" }} />}
							/>

							<Typography
								variant="h6"
								fontSize={"bold"}
								sx={{
									margin: { xs: "5px", sm: "8px", md: "18px", lg: "25px" },
								}}>
								{convert(count)}
							</Typography>

							<Button
								sx={{
									borderRadius: "3px",
									height: "41px",
									width: "35px",
									minWidth: "0px !important",
									color: "#747678",
									borderColor: "#747678",
								}}
								onClick={onDecrement}
								variant="outlined"
								endIcon={<Remove sx={{ marginLeft: "-30% " }} />}
							/>
						</Box>
					</Grid>
					<Grid>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								flexWrap: "wrap",
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Typography
								variant="h6"
								fontWeight="bold"
								sx={{
									fontSize: { xs: 8, sm: 14, md: 20, lg: 22 },
								}}>
								{convert(count * data.product.discount_price)} تومان
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Grid>
			<Divider sx={{ mt: 2 }} />
		</Grid>
	);
};

export default ProductCard;
