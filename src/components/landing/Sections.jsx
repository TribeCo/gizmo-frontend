import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	Typography,
	Button,
	IconButton,
} from "@mui/material";

function Sections({ data }) {
	return (
		<Grid
			container
			px={5}>
			{data.map((item) => (
				<Grid
					key={item.id}
					item
					xs={6}
					md={3}>
					<IconButton
						disableRipple
						sx={{
							mx: "auto",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<CardMedia
							sx={{
								width: { xs: 156, md: 260 },
								height: { xs: 168, md: 280 },
								position: "absolute",
								mb: 5,
								px: "auto",
							}}
							image={item.image}
							alt={item.name}
						/>
						<Box>
							<Box
								sx={{
									px: "auto",
									height: { xs: 84, md: 140 },
								}}
							/>
							<Box
								sx={{
									border: "3px Dashed #22668D",
									px: "auto",
									width: { xs: 156, md: 260 },
									height: { xs: 84, md: 140 },
									bgcolor: `#${item.color}`,
									borderRadius: "100px",
								}}
							/>
						</Box>
						<Typography
							pt={2}
							variant="h6"
							fontWeight="800"
							display="block"
							noWrap={true}
							color="black">
							{item.name}
						</Typography>
					</IconButton>
				</Grid>
			))}
		</Grid>
	);
}

export default Sections;
