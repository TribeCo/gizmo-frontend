import { baseUrl } from "@/services";
import { Colors, convert } from "@/utils";
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
} from "@mui/material";

function Banner({ data }) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: { xs: "", md: "space-around" },
				alignItems: "center",
				my: { xs: 2, md: 6 },
				px: { xs: 0, md: 5 },
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
						xs: 0.6 * 360,
						sm: 0.8 * 360,
						md: 1.0 * 360,
						lg: 1.1 * 360,
						xl: 1.3 * 360,
					},
					width: {
						xs: 0.6 * 640,
						sm: 0.8 * 640,
						md: 1.0 * 640,
						lg: 1.1 * 640,
						xl: 1.3 * 640,
					},
					borderRadius: "20px",
				}}>
				<CardActionArea>
					<CardMedia
						sx={{
							height: {
								xs: 0.6 * 360,
								sm: 0.8 * 360,
								md: 1.0 * 360,
								lg: 1.1 * 360,
								xl: 1.3 * 360,
							},
							width: {
								xs: 0.6 * 640,
								sm: 0.8 * 640,
								md: 1.0 * 640,
								lg: 1.1 * 640,
								xl: 1.3 * 640,
							},
						}}
						image={data[0].image}
						alt={data[0].alt}>
						<Button
							sx={{
								mt: { xs: 20, sm: 25, md: 33, lg: 34, xl: 40 },
								ml: { xs: 2, md: 12 },
								px: 5,
								py: 1,
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
			</Card>
			<Card
				sx={{
					my: 2,
					height: {
						xs: 0.6 * 360,
						sm: 0.8 * 360,
						md: 1.0 * 360,
						lg: 1.1 * 360,
						xl: 1.3 * 360,
					},
					width: {
						xs: 0.6 * 640,
						sm: 0.8 * 640,
						md: 1.0 * 640,
						lg: 1.1 * 640,
						xl: 1.3 * 640,
					},
					borderRadius: "20px",
				}}>
				<CardActionArea>
					<Box>
						<CardMedia
							sx={{
								height: {
									xs: 0.6 * 360,
									sm: 0.8 * 360,
									md: 1.0 * 360,
									lg: 1.1 * 360,
									xl: 1.3 * 360,
								},
								width: {
									xs: 0.6 * 640,
									sm: 0.8 * 640,
									md: 1.0 * 640,
									lg: 1.1 * 640,
									xl: 1.3 * 640,
								},
								objectFit: "cover",
							}}
							image={data[1].image}
							alt={data[1].alt}>
							<Button
								sx={{
									mt: { xs: 20, sm: 25, md: 33, lg: 34, xl: 40 },
									ml: { xs: 2, md: 12 },
									px: 5,
									py: 1,
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
			</Card>
		</Box>
	);
}

export default Banner;
