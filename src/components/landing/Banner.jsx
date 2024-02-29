import { Colors, convert } from "@/utils";
import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
} from "@mui/material";

function Banner() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: { xs: "", md: "space-around" },
				alignItems: "center",
				my: { xs: 2, md: 6 },
				px: 5,
				flexDirection: {
					xs: "column",
					sm: "column",
					md: "column",
					lg: "row",
				},
			}}>
			<Card
				sx={{
					my: 2,
					height: { xs: 0.6 * 360, sm: 0.8 * 360, md: 360 },
					width: { xs: 0.6 * 640, sm: 0.8 * 640, md: 640 },
					borderRadius: "20px",
				}}>
				<CardActionArea>
					<CardMedia
						sx={{
							height: { xs: 0.6 * 360, sm: 0.8 * 360, md: 360 },
							width: { xs: 0.6 * 640, sm: 0.8 * 640, md: 640 },
						}}
						image="https://s3-alpha-sig.figma.com/img/bc36/d0d8/c76b5557401fdb147ae8d4fdf4595c8d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W1Eos3On05sdaMEZ8TSKCAykeGjQ3eb7UDB9SPqfGK6QHtDGl1IAj~Fgg-coofTGgMPq~hzrA4SEqJ-SeH4UWf2Ti08HGijcIN4T7Vo3uzl0-2Dz0mvto5JAFGWUqhF-tDEbVQCtk8-1cp7VDAqGyJYGMEoj~3ZUD0Jvc16ucYU14Nl1gPIL0NqFsbzMJqtwGJ1hyRplKmmoHd9HKu0EQji7ahvsfhFiWtKScku-nqhL1qUj22OMh11gu~dNDUySXnwD3FhFQm5a7PyTA8uDiSVxWdkjAGywN0sbJAjrGrPHU~svnTc~hsd3EkC-6esnyccMLV-B2vIW9qqIzX265g__">
						<Button
							sx={{
								mt: { xs: 20, sm: 25, md: 33 },
								ml: { xs: 2, md: 12 },
								px: 5,
								py: 1,
								bgcolor: Colors.orange,
								borderRadius: "40px",
								"&:hover": {
									bgcolor: Colors.orange,
								},
							}}
							variant="contained">
							<Typography
								variant="h6"
								fontWeight="700"
								fontSize="13px"
								color="#000">
								{"مشاهده جزئیات"}
							</Typography>
						</Button>
					</CardMedia>
				</CardActionArea>
			</Card>
			<Card
				sx={{
					my: 2,
					height: { xs: 0.6 * 360, sm: 0.8 * 360, md: 360 },
					width: { xs: 0.6 * 640, sm: 0.8 * 640, md: 640 },
					borderRadius: "20px",
				}}>
				<CardActionArea>
					<Box>
						<CardMedia
							sx={{
								height: { xs: 0.6 * 360, sm: 0.8 * 360, md: 360 },
								width: { xs: 0.6 * 640, sm: 0.8 * 640, md: 640 },
								objectFit: "cover",
							}}
							image="https://s3-alpha-sig.figma.com/img/2b85/a813/56f79f7934ea841e92b567ffe889262d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nCr7jqvCfdvrqeowGkVUtl7aoY2NGuT842VPnWpJ5VOt-h2jAbnbPTwIzwYhW98V0ucXLmbPCpwEt8aSyHmXm8cofl25oK9rHf0Qeuqa-tY4MnGds9dgrhlpujrmEMOvz-DXCRj0fUtE-PzdSj-Tk8RNDDuJCjS63MLkss6Fkg2A5-erLxTYaGllHU4GRHu3Iw2KeSKUpCC7ZJD~DW0c1N2cbTydrHYtuM2VU4OItQj-U1Kmdd3Fm3A4fwjwk-VLYInQ9Ssb8ZPn6gbrYh86Jh6fysQFbm2kSfpu3JdacbPzVszd6K5xqygFQoObRjNvZys0Y6qXlVaCb9eXvmb1Sg__">
							<Button
								sx={{
									mt: { xs: 20, sm: 25, md: 33 },
									ml: { xs: 2, md: 12 },
									px: 5,
									py: 1,
									bgcolor: Colors.orange,
									borderRadius: "40px",
									"&:hover": {
										bgcolor: Colors.orange,
									},
								}}
								variant="contained">
								<Typography
									variant="h6"
									fontWeight="700"
									fontSize={13}
									color="#000">
									{"مشاهده جزئیات"}
								</Typography>
							</Button>
						</CardMedia>
					</Box>
				</CardActionArea>
			</Card>
		</Box>
	);
}

export default Banner;
