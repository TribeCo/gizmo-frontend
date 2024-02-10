import { Container, Grid, List, Typography } from "@mui/material";

const Comment = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{ mt: 4, mb: 4 }}>
			<Grid
				container
				spacing={3}>
				<List></List>
			</Grid>
			<Grid
				container
				spacing={3}>
				<Grid
					item
					xs={12}
					md={8}
					lg={8}>
					<Typography>{"ثبت نظر"}</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
					lg={4}>
					<Typography>{"امتیاز دهی"}</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Comment;
