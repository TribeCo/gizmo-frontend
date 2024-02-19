import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Colors } from "@/utils";
import { Box } from "@mui/material";

export default function BlogCard() {
	return (
		<Card
			sx={{
				maxWidth: 397,
				maxHeight: 452,
				backgroundColor: "#22668D",
				borderRadius: "35px",
			}}>
			<CardMedia
				height="140"
				image="https://s3-alpha-sig.figma.com/img/132e/d24d/4890665b2d3bc87f0052beef771045f8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BK4tHGOh6OE1NsjTP~0NTpkNcAWydkh9Rn0eN5kycxJg~eq~YPY5TRtd1~YIUOM5WXrHNDtmKjnyvESl1D3wjaAhhgDbt8xfDrgbZvppfML2OO0BsitPyCOvqpzqHjOftrgI1b57T0XrUTZuljn9NIyDJNV-HQGqvntf~AcTaKj8YVZCmuj3YV7LDPsJl22Ia1vquRurD7z54E2gRD-ybttDOY9FXmcYqdHiqZBnkYihgc1WR11RnNF06e0KTis8m7qqnnhYGtg5Ri4j~kJysDA80vMcE7-qvaoq7aEJcup6fuSxnBizqjGuUTvg4mOunSrobtBWxg-dRhMoJHXfog__"
				sx={{ width: "397px", height: "255px" }}
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant="h5"
					sx={{
						color: "#FFFFFF",
						marginLeft: "20px",
						fontSize: 22,
					}}>
					همکاری سامسونگ برای تحقیق در زمینه سلامت روان
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						color: "#FFFFFF",
						marginLeft: "20px",
						marginTop: "9px",
						fontSize: 16,
						fontWeight: "200",
					}}>
					نویسنده : طاها موسوی
				</Typography>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mt: "30px",
						px: 2,
					}}>
					<Button
						variant="contained"
						color="primary"
						sx={{
							borderRadius: "20px",
							backgroundColor: Colors.orange,
							color: "#252B48",
							fontSize: 16,
							"&:hover": {
								backgroundColor: Colors.orange,
							},
						}}>
						<Typography>بیشتر بخوانید</Typography>
					</Button>
					<Box
						display="flex"
						pt={1}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M3 12C3 7.757 3 5.636 4.318 4.318C5.636 3 7.758 3 12 3C16.243 3 18.364 3 19.682 4.318C21 5.636 21 7.758 21 12C21 16.243 21 18.364 19.682 19.682C18.364 21 16.242 21 12 21C7.757 21 5.636 21 4.318 19.682C3 18.364 3 16.242 3 12Z"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12 6V12L16 14"
								stroke="white"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								color: "#FFFFFF",
								pl: "5px",
								pt: "4px",
							}}>
							5 آبان 1402
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
