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
			display="flex"
			justifyContent="space-around"
			mt={9}
			px={5}>
			<Card
				sx={{
					height: "360px",
					width: "640px",
					borderRadius: "20px",
				}}>
				<CardActionArea>
					<CardMedia
						sx={{ height: "360px", width: "640px" }}
						image="https://s3-alpha-sig.figma.com/img/bc36/d0d8/c76b5557401fdb147ae8d4fdf4595c8d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W1Eos3On05sdaMEZ8TSKCAykeGjQ3eb7UDB9SPqfGK6QHtDGl1IAj~Fgg-coofTGgMPq~hzrA4SEqJ-SeH4UWf2Ti08HGijcIN4T7Vo3uzl0-2Dz0mvto5JAFGWUqhF-tDEbVQCtk8-1cp7VDAqGyJYGMEoj~3ZUD0Jvc16ucYU14Nl1gPIL0NqFsbzMJqtwGJ1hyRplKmmoHd9HKu0EQji7ahvsfhFiWtKScku-nqhL1qUj22OMh11gu~dNDUySXnwD3FhFQm5a7PyTA8uDiSVxWdkjAGywN0sbJAjrGrPHU~svnTc~hsd3EkC-6esnyccMLV-B2vIW9qqIzX265g__">
						<Box
							pt={10}
							pl={5}>
							<Typography
								variant="h3"
								fontWeight="900"
								color="#ffffff">
								{"پاور بانک انکر"}
							</Typography>
							<Typography
								mt={3}
								variant="h6"
								color="#ACACAC">{`ظرفیت ${convert(
								10000,
							)} میلی آمپر`}</Typography>
							<Button
								sx={{
									m: 9,
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
						</Box>
					</CardMedia>
				</CardActionArea>
			</Card>
			<Card
				sx={{
					height: "360px",
					width: "640px",
					borderRadius: "20px",
				}}>
				<CardActionArea>
					<Box>
						<CardMedia
							sx={{ height: "360px", width: "640px", objectFit: "cover" }}
							image="https://s3-alpha-sig.figma.com/img/2b85/a813/56f79f7934ea841e92b567ffe889262d?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nCr7jqvCfdvrqeowGkVUtl7aoY2NGuT842VPnWpJ5VOt-h2jAbnbPTwIzwYhW98V0ucXLmbPCpwEt8aSyHmXm8cofl25oK9rHf0Qeuqa-tY4MnGds9dgrhlpujrmEMOvz-DXCRj0fUtE-PzdSj-Tk8RNDDuJCjS63MLkss6Fkg2A5-erLxTYaGllHU4GRHu3Iw2KeSKUpCC7ZJD~DW0c1N2cbTydrHYtuM2VU4OItQj-U1Kmdd3Fm3A4fwjwk-VLYInQ9Ssb8ZPn6gbrYh86Jh6fysQFbm2kSfpu3JdacbPzVszd6K5xqygFQoObRjNvZys0Y6qXlVaCb9eXvmb1Sg__">
							<Box
								pt={10}
								pl={5}>
								<Typography
									variant="h3"
									fontWeight="900"
									color="#ffffff">
									{"ماگ دماسنج دار"}
								</Typography>
								<Typography
									mt={3}
									variant="h6"
									color="#44434C">
									{"فروش ویژه"}
								</Typography>
								<Button
									sx={{
										m: 9,
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
							</Box>
						</CardMedia>
					</Box>
				</CardActionArea>
			</Card>
		</Box>
	);
}

export default Banner;
