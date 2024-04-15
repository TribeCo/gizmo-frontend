import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

import { Colors } from "@/utils";
import { baseUrl } from "@/services";

export default function NotFound() {
	return (
		<Grid
			display="flex"
			justifyContent="center"
			alignItems="center"
			bgcolor="#8ECDDD"
			width="100vw"
			height="100vh">
			<Box
				display="flex"
				sx={{
					alignItems: "center",
					justifyContent: { xs: "center", lg: "flex-end" },
					backgroundImage: {
						lg: `url("${baseUrl}/images/media/pictures/404-large.jpg")`,
						xs: `url(${baseUrl}/images/media/pictures/404-small.jpg")`,
					},
					height: "100vh",
					width: "100vw",
					backgroundSize: { lg: "cover" },
					backgroundPositionX: "center",
					backgroundRepeat: "no-repeat",
				}}>
				<Grid
					display="flex"
					flexDirection="column"
					alignItems="center"
					wrap="nowrap"
					sx={{
						mt: { xs: 40, lg: 0 },
						width: { xs: "100%", lg: "50%" },
					}}>
					<Typography
						fontWeight="bold"
						color="rgba(37, 43, 72, 1)"
						sx={{
							fontSize: { xs: 45, sm: 55, lg: 65 },
							mb: { xs: 2, lg: 3 },
						}}>
						ای واااای!!
					</Typography>
					<Typography
						fontWeight="bold"
						color="rgba(37, 43, 72, 1)"
						textAlign="center"
						sx={{
							fontSize: { xs: 32, sm: 35, lg: 45 },
							width: { xs: 340, lg: 450 },
							mb: 3,
						}}>
						چیزی که میخواستی رو فضاییا بردن!!
					</Typography>

					<Link href="/">
						<Button
							variant="contained"
							sx={{
								backgroundColor: Colors.orange,
								borderRadius: "30px",
								boxShadow: "none",
								":hover": {
									backgroundColor: Colors.orange,
								},
							}}>
							<Typography
								sx={{
									fontSize: { xs: 26, sm: 30, lg: 35 },
									px: { xs: 4, sm: 6 },
								}}
								fontWeight="bold"
								color="rgba(37, 43, 72, 1)">
								برگردیم به سایت
							</Typography>
						</Button>
					</Link>
				</Grid>
			</Box>
		</Grid>
	);
}
