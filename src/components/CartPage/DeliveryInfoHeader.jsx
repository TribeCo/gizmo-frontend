import React from "react";
import { Box, Typography, SvgIcon } from "@mui/material";
import { baseUrl } from "@/services";

const headers = [
	{
		title: "انتخاب آدرس گیرنده",
		imagepath: `${baseUrl}/images/media/pictures/grommet-icons_map-location.png`,
		alt: "address",
	},
	{
		title: "اطلاعات گیرنده",
		imagepath: `${baseUrl}/images/media/pictures/material-symbols-light_description-outline-rounded.png`,
		alt: "receiver",
	},
	{
		title: "شیوه ارسال",
		imagepath: `${baseUrl}/images/media/pictures/material-symbols-light_description-outline-rounded.png`,
		alt: "packeting",
	},
];

const DeliveryInfoHeader = ({ number }) => {
	const header = headers[number]; // Assuming 'number' is a 0-based index

	if (!header) {
		return null; // or some fallback UI
	}

	return (
		<Box
			sx={{
				width: { xs: "90vw", sm: "90vw", md: "95vw", lg: "95vw", xl: "1282px" },
				height: { xs: "44px", sm: "57px", md: "72px", lg: "87px" },
				background: "#EEEEEE80",
				borderRadius: "15px",
				display: "flex",
				alignItems: "center",
				margin: "auto",
			}}>
			<Box
				sx={{
					marginLeft: "2%",
					display: "inline-flex",
					alignItems: "center",
				}}>
				<Box
					sx={{
						width: { xs: "27px", sm: "32px", md: "38px", lg: "44px" },
						height: { xs: "22px", sm: "26px", md: "30px", lg: "45px" },
					}}>
					<img
						style={{
							width: { xs: "27px", sm: "32px", md: "38px", lg: "44px" },
							height: { xs: "22px", sm: "26px", md: "30px", lg: "45px" },
							objectFit: "cover",
						}}
						src={header.imagepath}
						alt={header.alt}
					/>
				</Box>
				<Typography
					sx={{
						padding: "5px",
						paddingLeft: "15px",
						letterSpacing: "-0.05rem",
						fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px" },
						color: header.color,
					}}
					fontWeight={"bold"}>
					{header.title}
				</Typography>
			</Box>
		</Box>
	);
};

export default DeliveryInfoHeader;
