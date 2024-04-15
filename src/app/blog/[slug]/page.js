import React from "react";
import { Grid, Typography, Box, Avatar, CardMedia } from "@mui/material";
import LineSplitter from "@/components/LineSpliter";

const BlogDetail = () => {
	return (
		<Grid container>
			<Grid
				display="flex"
				flexDirection="column"
				alignItems="center"
				item
				height={900}
				md={8}>
				<Typography
					variant="h4"
					fontWeight={800}>
					{"همکاری سامسونگ برای تحقیق علمی در زمینه سلامت روان"}
				</Typography>
				<Box
					display="flex"
					justifyContent="start">
					<Avatar />
					<Typography>{"طاها موسوی"}</Typography>
				</Box>
				<CardMedia
					sx={{
						height: 461,
						width: 782,
					}}
					image="https://s3-alpha-sig.figma.com/img/132e/d24d/4890665b2d3bc87f0052beef771045f8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fqxeGymzty0RUqm0zFCKbC7isecXbsuUJjnO8aQ4~iAgANoejBQidVF1jLUl~865ltAoqZYuYooKPy~s0S3zzQmjKxFJ7YYCHP~MSuJ7h0L8EDgtPFBUs5QskmaKGg2v2JreLLGxEQbHFxrKk6F2BHAgAnWUVkAycIkrH~Ha8aqGE7W-4VhFa09-XUuOVA6eQha-65hgVoWnihVX-F~IpGMfMLplNJdNn7fhxlUgZA59nhJmK-EVsLatODUwcR6DsLj~OTavJvX~J4iUt96uuKCs6nW8kqdwOFxOskYdyeVXnqiRr1bsC48~Ce9OqRJOI6yEMlluXmlx6rABlajxsQ__"
				/>
			</Grid>
			<Grid
				item
				height={900}
				md={4}>
				<LineSplitter text={"اخبار های مرتبط"} />
				<LineSplitter text={"محصولات مرتبط"} />
			</Grid>
		</Grid>
	);
};

export default BlogDetail;
