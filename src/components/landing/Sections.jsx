import { Box, CardMedia, Grid, Typography, IconButton } from "@mui/material";
import Link from "next/link";

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
					<Link href={`/categories/${item.slug}`}>
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
									width: { xs: 130, md: 260 },
									height: { xs: 140, md: 280 },
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
										height: { xs: 70, md: 140 },
									}}
								/>
								<Box
									sx={{
										border: "3px Dashed #22668D",
										px: "auto",
										width: { xs: 130, md: 260 },
										height: { xs: 70, md: 140 },
										bgcolor: `#${item.color}`,
										borderRadius: "100px",
									}}
								/>
							</Box>
							<Typography
								variant="h6"
								sx={{
									pt: { xs: 1, md: 2 },
									fontSize: { xs: 16, md: 24 },
								}}
								fontWeight="800"
								display="block"
								noWrap={true}
								color="black">
								{item.name}
							</Typography>
						</IconButton>
					</Link>
				</Grid>
			))}
		</Grid>
	);
}

export default Sections;
