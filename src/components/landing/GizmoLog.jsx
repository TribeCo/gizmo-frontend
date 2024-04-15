import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import BlogCard from "../BlogCard";
import { Colors } from "@/utils";

const GizmoLog = ({ data }) => {
	return (
		<>
			<Grid
				container
				sx={{
					px: { xs: 4, sm: 3, md: 3, lg: 5, xl: 15 },
				}}
				spacing={2}>
				{data.map((itemData) => (
					<BlogCard
						key={itemData.id}
						data={itemData}
						background_color={Colors.blue}
						font_color="white"
					/>
				))}
			</Grid>
			<Link href="/blog">
				<Button
					variant="contained"
					sx={{
						transform: {
							xs: "scale(0.7)",
							sm: "scale(0.8)",
							md: "scale(1)",
						},
						display: "block",
						mt: { xs: 0, md: 5 },
						mb: 5,
						mx: "auto",
						border: `3px solid ${Colors.orange}`,
						color: "#000000",
						bgcolor: "#FFFFFF",
						borderRadius: "30px",
						width: "300px",
						height: "60px",
						"&:hover": {
							bgcolor: Colors.orange,
						},
					}}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "700",
							fontSize: "20px",
						}}>
						{"مشاهده محصولات بیشتر"}
					</Typography>
				</Button>
			</Link>
		</>
	);
};

export default GizmoLog;
