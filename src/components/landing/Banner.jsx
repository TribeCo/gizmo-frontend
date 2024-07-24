import Link from "next/link";

import { Colors } from "@/utils";
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Container,
	Typography,
} from "@mui/material";

function Banner({ data }) {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: { xs: "", md: "space-around" },
				alignItems: "center",
				my: { xs: 2, md: 6 },
				flexDirection: {
					xs: "column",
					sm: "column",
					md: "column",
					lg: "row",
				},
			}}>
			<Card
				sx={{
					my: 2,
					height: {
						xs: 0.55 * 360,
						sm: 0.7 * 360,
						md: 0.9 * 360,
						lg: 0.85 * 360,
						xl: 1.1 * 360,
					},
					width: {
						xs: 0.55 * 640,
						sm: 0.7 * 640,
						md: 0.9 * 640,
						lg: 0.85 * 640,
						xl: 1.1 * 640,
					},
					borderRadius: "20px",
				}}>
				<Link href={`${data[0].abs_link}`}>
					<CardActionArea>
						<CardMedia
							sx={{
								height: {
									xs: 0.55 * 360,
									sm: 0.7 * 360,
									md: 0.9 * 360,
									lg: 0.85 * 360,
									xl: 1.1 * 360,
								},
								width: {
									xs: 0.55 * 640,
									sm: 0.7 * 640,
									md: 0.9 * 640,
									lg: 0.85 * 640,
									xl: 1.1 * 640,
								},
							}}
							image={data[0].image}
							alt={data[0].alt}>
							<Button
								sx={{
									mt: { xs: 18, sm: 25, md: 33, lg: 29, xl: 40 },
									ml: { xs: 2, md: 12, lg: 6, xl: 12 },
									px: { xs: 3, xl: 5 },
									py: { xs: 0.75, md: 1 },
									bgcolor: Colors.orange,
									borderRadius: "40px",
									"&:hover": {
										bgcolor: Colors.orange,
									},
								}}
								variant="contained">
								<Typography
									sx={{
										fontSize: { xs: "12px", md: "20px" },
									}}
									variant="h6"
									fontWeight="700"
									color="#000">
									{"مشاهده جزئیات"}
								</Typography>
							</Button>
						</CardMedia>
					</CardActionArea>
				</Link>
			</Card>
			<Card
				sx={{
					my: 2,
					height: {
						xs: 0.55 * 360,
						sm: 0.7 * 360,
						md: 0.9 * 360,
						lg: 0.85 * 360,
						xl: 1.1 * 360,
					},
					width: {
						xs: 0.55 * 640,
						sm: 0.7 * 640,
						md: 0.9 * 640,
						lg: 0.85 * 640,
						xl: 1.1 * 640,
					},
					borderRadius: "20px",
				}}>
				<Link href={`${data[1].abs_link}`}>
					<CardActionArea>
						<Box>
							<CardMedia
								sx={{
									height: {
										xs: 0.55 * 360,
										sm: 0.7 * 360,
										md: 0.9 * 360,
										lg: 0.85 * 360,
										xl: 1.1 * 360,
									},
									width: {
										xs: 0.55 * 640,
										sm: 0.7 * 640,
										md: 0.9 * 640,
										lg: 0.85 * 640,
										xl: 1.1 * 640,
									},
									objectFit: "cover",
								}}
								image={data[1].image}
								alt={data[1].alt}>
								<Button
									sx={{
										mt: { xs: 18, sm: 25, md: 33, lg: 29, xl: 40 },
										ml: { xs: 2, md: 12, lg: 6, xl: 12 },
										px: { xs: 3, xl: 5 },
										py: { xs: 0.75, md: 1 },
										bgcolor: Colors.orange,
										borderRadius: "40px",
										"&:hover": {
											bgcolor: Colors.orange,
										},
									}}
									variant="contained">
									<Typography
										sx={{
											fontSize: { xs: "12px", md: "20px" },
										}}
										variant="h6"
										fontWeight="700"
										color="#000">
										{"مشاهده جزئیات"}
									</Typography>
								</Button>
							</CardMedia>
						</Box>
					</CardActionArea>
				</Link>
			</Card>
		</Box>
	);
}

export default Banner;
