"use client";

import { useState } from "react";
import PhotosModal from "../PhotosModal";
import { CardMedia, IconButton, Typography } from "@mui/material";

const MorePhoto = ({ title, image, imageList }) => {
	const [openDialog, setOpenDialog] = useState(false);

	const handleClose = () => setOpenDialog(false);
	return (
		<>
			<IconButton
				onClick={() => setOpenDialog(true)}
				disableRipple
				sx={{
					mt: 1,
				}}>
				<CardMedia
					image={image}
					sx={{
						border: "0.2em solid #22668D",
						borderRadius: 3,
						height: {
							xs: 100,
							sm: 100,
							md: 120,
							lg: 135,
							xl: 135,
						},
						width: {
							xs: 100,
							sm: 100,
							md: 120,
							lg: 135,
							xl: 135,
						},
					}}>
					<Typography
						sx={{
							backdropFilter: "blur(2px)",
							borderRadius: 2,
							py: "auto",
							pt: { xs: 2.5, md: 3 },
							pb: { xs: 1.5, md: 0.5 },
							fontSize: { xs: 40, md: 65 },
						}}
						color="#FFF"
						fontWeight={900}>
						{"•••"}
					</Typography>
				</CardMedia>
			</IconButton>
			{openDialog && (
				<PhotosModal
					open={openDialog}
					handleClose={handleClose}
					mainImage={image}
					title={title}
					imageList={imageList}
				/>
			)}
		</>
	);
};

export default MorePhoto;
