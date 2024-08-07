import {
	Box,
	CardMedia,
	Dialog,
	DialogContent,
	Divider,
	IconButton,
	ImageList,
	Typography,
} from "@mui/material";
import { useState } from "react";

function PhotosModal({ open, handleClose, title, imageList }) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={900}
			sx={{
				"& .MuiDialog-paper": { borderRadius: 10 },
			}}>
			<DialogContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignContent: "center",
						gap: { sm: 2, md: 4 },
					}}>
					<IconButton
						onClick={handleClose}
						sx={{ position: "absolute" }}>
						<svg
							width="30"
							height="30"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.34 8.3218C15.4361 8.23224 15.5136 8.12464 15.568 8.00513C15.6225 7.88563 15.6529 7.75656 15.6575 7.62531C15.6621 7.49405 15.6408 7.36318 15.5948 7.24015C15.5488 7.11713 15.4791 7.00437 15.3895 6.90831C15.2999 6.81224 15.1923 6.73476 15.0728 6.68029C14.9533 6.62581 14.8243 6.59541 14.693 6.59081C14.5618 6.58621 14.4309 6.60751 14.3079 6.6535C14.1848 6.69948 14.0721 6.76924 13.976 6.85881L11.05 9.58681L8.32201 6.65981C8.13948 6.47285 7.89102 6.36476 7.6298 6.35867C7.36859 6.35258 7.11536 6.44897 6.92431 6.62721C6.73327 6.80545 6.61957 7.05139 6.60755 7.3124C6.59553 7.57341 6.68615 7.82876 6.86001 8.02381L9.58801 10.9498L6.66101 13.6778C6.56155 13.7665 6.48082 13.8741 6.42354 13.9944C6.36626 14.1147 6.3336 14.2452 6.32747 14.3783C6.32135 14.5114 6.34188 14.6444 6.38786 14.7694C6.43384 14.8944 6.50434 15.009 6.59523 15.1065C6.68612 15.2039 6.79555 15.2822 6.91711 15.3367C7.03867 15.3912 7.16991 15.4209 7.3031 15.424C7.4363 15.4271 7.56877 15.4036 7.69274 15.3548C7.81671 15.306 7.92968 15.2329 8.02501 15.1398L10.951 12.4128L13.679 15.3388C13.7671 15.4401 13.8747 15.5226 13.9953 15.5814C14.116 15.6403 14.2472 15.6742 14.3813 15.6812C14.5153 15.6883 14.6494 15.6682 14.7756 15.6223C14.9017 15.5764 15.0173 15.5056 15.1155 15.414C15.2137 15.3225 15.2924 15.2121 15.3471 15.0895C15.4017 14.9669 15.4311 14.8345 15.4334 14.7003C15.4358 14.5661 15.4112 14.4328 15.3609 14.3083C15.3107 14.1839 15.2359 14.0708 15.141 13.9758L12.414 11.0498L15.34 8.3218Z"
								fill="#252B48"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0 11C0 4.925 4.925 0 11 0C17.075 0 22 4.925 22 11C22 17.075 17.075 22 11 22C4.925 22 0 17.075 0 11ZM11 20C9.8181 20 8.64778 19.7672 7.55585 19.3149C6.46392 18.8626 5.47177 18.1997 4.63604 17.364C3.80031 16.5282 3.13738 15.5361 2.68508 14.4442C2.23279 13.3522 2 12.1819 2 11C2 9.8181 2.23279 8.64778 2.68508 7.55585C3.13738 6.46392 3.80031 5.47177 4.63604 4.63604C5.47177 3.80031 6.46392 3.13738 7.55585 2.68508C8.64778 2.23279 9.8181 2 11 2C13.3869 2 15.6761 2.94821 17.364 4.63604C19.0518 6.32387 20 8.61305 20 11C20 13.3869 19.0518 15.6761 17.364 17.364C15.6761 19.0518 13.3869 20 11 20Z"
								fill="#252B48"
							/>
						</svg>
					</IconButton>
					<Box>
						<CardMedia
							sx={{
								width: { xm: 300, md: 450 },
								height: {
									xs: 300,
									sm: 450,
									md: 450,
								},
								border: "5px solid #22668D",
								borderRadius: 5,
							}}
							image={imageList[selectedIndex].image}
						/>
					</Box>
					<Box>
						<Typography
							variant="h4"
							fontWeight={700}
							mt={3}>
							{title}
						</Typography>
						<Typography
							variant="h5"
							mt={4}>
							{"تصویر محصول"}
						</Typography>
						<Divider
							sx={{
								border: 1,
								mt: 1,
							}}
						/>
						<ImageList
							cols={4}
							gap={0}>
							{imageList.map((image, index) => (
								<IconButton
									onClick={() => setSelectedIndex(index)}
									key={index}
									disableRipple>
									<CardMedia
										sx={{
											height: 90,
											width: 90,
											border: "2px solid #22668D",
											borderRadius: 5,
											mt: 2,
										}}
										image={image.image}
									/>
								</IconButton>
							))}
						</ImageList>
					</Box>
				</Box>
			</DialogContent>
		</Dialog>
	);
}

export default PhotosModal;
