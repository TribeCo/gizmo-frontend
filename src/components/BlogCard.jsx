import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Colors } from "@/utils";

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
					}}>
					نویسنده : طاها موسوی
				</Typography>

				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						marginRight: "20px",
					}}>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							color: "#FFFFFF",
							marginRight: "140px",
							marginTop: "42px",
						}}>
						5 آبان 1402
					</Typography>
					<Button
						variant="contained"
						color="primary"
						sx={{
							borderRadius: "20px",
							backgroundColor: Colors.orange,
							color: "#252B48",
							marginTop: "30px",
							fontSize: 16,
							"&:hover": {
								backgroundColor: Colors.orange,
							},
						}}>
						<Typography>بیشتر بخوانید</Typography>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
