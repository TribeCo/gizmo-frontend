import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Colors } from "@/utils";
import { Box, Grid } from "@mui/material";

export default function BlogCard({ background_color, font_color }) {
	return (
		<Card
			sx={{
				backgroundColor: background_color,
				borderRadius: {xs: '12px', sm: '25px', md: "35px"},
			}}>
			<CardMedia
				image="https://s3-alpha-sig.figma.com/img/132e/d24d/4890665b2d3bc87f0052beef771045f8?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BK4tHGOh6OE1NsjTP~0NTpkNcAWydkh9Rn0eN5kycxJg~eq~YPY5TRtd1~YIUOM5WXrHNDtmKjnyvESl1D3wjaAhhgDbt8xfDrgbZvppfML2OO0BsitPyCOvqpzqHjOftrgI1b57T0XrUTZuljn9NIyDJNV-HQGqvntf~AcTaKj8YVZCmuj3YV7LDPsJl22Ia1vquRurD7z54E2gRD-ybttDOY9FXmcYqdHiqZBnkYihgc1WR11RnNF06e0KTis8m7qqnnhYGtg5Ri4j~kJysDA80vMcE7-qvaoq7aEJcup6fuSxnBizqjGuUTvg4mOunSrobtBWxg-dRhMoJHXfog__"
				sx={{ 
					width: {xs: '110px', sm: '190px', md: '290px', lg: '380px', xl: '365px'}, 
					height: {xs: '75px', sm: '130px', md: '192px', lg: "255px", xl: '250px'} 
				}}
			/>
			<CardContent>
				<Typography
					variant="h5"
					color={font_color}
					align="justify"
					sx={{
						textAlign: 'start',
						fontSize: {xs: 9, sm: 16, md: 18, lg: 20},
						width: {xs: '78px', sm: '158px', md: '258px', lg: '348px', xl: '333px'},
					}}>
					همکاری سامسونگ برای تحقیق در زمینه سلامت روان
				</Typography>
				<Typography
					align="justify"
					variant="body2"
					color={font_color}
					sx={{
						marginTop: "9px",
						fontSize: {xs: 7, sm: 12, md: 14, lg: 16},
						fontWeight: "200",
					}}>
					نویسنده : طاها موسوی
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: {xs: 'column', md: 'row'},
						justifyContent: "space-between",
						mt: "30px",
					}}>
					<Button
						variant="contained"
						sx={{
							borderRadius: "20px",
							backgroundColor: Colors.orange,
							color: "#252B48",
							"&:hover": {
								backgroundColor: Colors.orange,
							},
						}}>
						<Typography
							variant="body1"
							sx={{
								fontSize: {xs: 8, sm: 10, md: 12, lg: 16},
							}}
						>
							بیشتر بخوانید
						</Typography>
					</Button>
					<Box
						display="flex"
						pt={1}
					>
						
						{font_color === 'white' ? (
						<Grid
							sx={{
								scale: {xs: '0.6', sm: '1'}
							}}
						>	
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
					</Grid>
						) : (
							<Grid
								sx={{
									scale: {xs: '0.6', sm: '1'}
								}}
							>
								<svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.848145 8.38847C0.848145 4.85549 0.848144 3.08942 1.94559 1.99198C3.04304 0.894531 4.80994 0.894531 8.34208 0.894531C11.8751 0.894531 13.6411 0.894531 14.7386 1.99198C15.836 3.08942 15.836 4.85633 15.836 8.38847C15.836 11.9214 15.836 13.6875 14.7386 14.785C13.6411 15.8824 11.8742 15.8824 8.34208 15.8824C4.80911 15.8824 3.04304 15.8824 1.94559 14.785C0.848144 13.6875 0.848145 11.9206 0.848145 8.38847Z" stroke="black" stroke-width="1.24899" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M8.34204 3.39258V8.38854L11.6727 10.0539" stroke="black" stroke-width="1.24899" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</Grid>
						)}

						<Typography
							variant="body2"
							color={font_color}
							sx={{
								fontSize: {xs: 8, md: 12, lg: 15},
								pl: {xs: 0, sm: "5px"},
								pt: {xs: '8px', sm: "4px"},
							}}>
							5 آبان 1402
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
