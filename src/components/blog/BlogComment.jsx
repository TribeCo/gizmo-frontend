"use client";

import { Box, Typography, Divider, Avatar, Grid } from "@mui/material";
import { createComment } from "@/services/Blog";
import { useAuth } from "@/context/AuthContext";
import BlogSendComment from "./BlogSendComment";

const BlogComment = ({ aid, comments }) => {
	const { tokens } = useAuth();

	const handleSendComment = async (values) => {
		try {
			await createComment({
				aid,
				access: tokens.access,
				data: {
					text: values.text,
					anonymous: values.anonymous,
				},
			});
			enqueueSnackbar({
				message: "کامنت با موفقیت ثبت شد.",
				variant: "success",
			});
		} catch (error) {
			enqueueSnackbar({ message: error.message, variant: "error" });
		}
	};

	return (
		<Box
			maxWidth="lg"
			sx={{
				mt: 4,
				mb: 4,
			}}>
			{comments.map((comment) => {
				return (
					<>
						<Box
							key={comment.id}
							display="flex"
							flexDirection="column">
							<Grid
								display="flex"
								alignItems="center">
								<Avatar
									src={comment.image}
									sx={{ width: 30, height: 30, mr: 2 }}
								/>
								<Box sx={{ display: "flex" }}>
									<Typography
										noWrap
										variant="caption"
										color="#747678">
										{comment.days_since_creation}
									</Typography>
								</Box>
							</Grid>

							<Grid>
								<Box
									sx={{
										display: "flex",
										flexDirection: { xs: "column", md: "row" },
									}}>
									<Typography
										noWrap
										variant="h6">
										{comment.anonymous ? "کاربر" : comment.user_full_name}
									</Typography>
								</Box>
								<Box sx={{ mt: 2, ml: 5 }}>
									<Typography color="#747678">{comment.text}</Typography>
								</Box>
							</Grid>
						</Box>
						<Divider
							sx={{
								maxWidth: "lg",
								my: 2,
								mx: "auto",
							}}
						/>
					</>
				);
			})}
			<BlogSendComment handleSendComment={handleSendComment} />
		</Box>
	);
};

export default BlogComment;
