"use client";
import { React, useState, useEffect } from "react";
import { Typography, Box, Grid, Link } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import ContactUsTextfields from "@/components/ContactUsTextfields";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Location icon
import EmailIcon from "@mui/icons-material/Email"; // Gmail icon
import LineSplitter from "@/components/LineSpliter";
import { baseUrl } from "@/services";
import { fetchGizmoInfo } from "@/services/Faq";
import { enqueueSnackbar } from "notistack";
import * as yup from "yup";
import Image from "next/image";

const validationSchema = yup.object().shape({});

function ContactUs() {
	const [gizmoinfo, setGizmoInfo] = useState([]);
	useEffect(() => {
		handleFetchGizmoInfo();
	}, []);

	const handleFetchGizmoInfo = async () => {
		try {
			const response = await fetchGizmoInfo();
			if (response) {
				setGizmoInfo(response.data);
			}
		} catch (error) {
			enqueueSnackbar({
				message: "خطا در دریافت اطلاعات.",
				variant: "error",
			});
		}
	};

	const imageUrls = [
		`${baseUrl}/images/media/pictures/handContactus.png`,
		`${baseUrl}/images/media/pictures/Contactus24.png`,
		`${baseUrl}/images/media/pictures/shealdContactus.png`,
	];

	const imageTexts = [
		"خرید آسان و راحت",
		"پشتیبانی",
		"محصولات با کیفیت و گسترده",
	];

	const imageExplanations = [
		"با طراحی کارپسندانه و ساده٬ شما به راحتی می‌توانید محصولات مورد نظر خود را جستجو کنید و با چند کلیک ساده آنها را به سبد خرید خود اضافه کنید.",
		"هر ساعتی از شبانه‌روز از طریق ایمیل٬ تلگرام٬ اینیستاگرام و سایت در کنار شما هستیم.",
		"ما در گیزموشاپ به ارائه محصولات با کیفیت و گسترده تعهد داریم. مجموعه‌ای از محصولات متنوع و با کیفیت را با دقت و بازبینی دقیق برای شما انتخاب کرده‌ایم.",
	];

	return (
		<Box
			sx={{
				padding: { xs: 0, md: "20px" }, // Adjusted padding
				paddingX: { xs: 0, md: "50px" },
			}}>
			<Box
				mt={10}
				display="flex"
				justifyContent="center"
				alignItems="center">
				<Image
					width={500}
					height={100}
					src={gizmoinfo.gif}
					alt="Gizmo GIF"
				/>
			</Box>
			<LineSplitter text={"درباره گیزموشاپ"} />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "auto",
				}}>
				{/* New Typography for the introduction text */}
				<Typography
					sx={{
						color: "black",
						fontWeight: "300",
						paddingBottom: 8, // Add some space before the main title
						paddingX: { xs: 4, md: 10 },
						fontSize: { xs: "16px", md: "32px" },
					}}>
					{gizmoinfo.description}
				</Typography>
				{/* Typography for the main title */}
				<Typography
					sx={{
						color: "black",
						fontSize: { xs: "26px", sm: "30px", md: "33px", lg: "36px" },
						fontWeight: "900",
						paddingBottom: 2,
					}}>
					سوالی دارید؟!
				</Typography>
				<ContactUsTextfields />
				{/* Typography for the subtitle */}
				<Typography
					sx={{
						color: "black",
						fontSize: { xs: "26px", sm: "30px", md: "33px", lg: "36px" },
						fontWeight: "900",
						paddingTop: 3,
					}}>
					راه‌های ارتباط با ما
				</Typography>
				{/* Grid for contact info */}
				<Grid
					container
					spacing={4}
					sx={{
						width: { xs: "100%", md: "80%" },
						margin: "auto",
						marginTop: 5,
					}}>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center">
						<Box
							component="span"
							sx={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								width: { xs: 40, sm: 45, md: 45, lg: 50 },
								height: { xs: 40, sm: 45, md: 45, lg: 50 },
								borderRadius: { xs: "20%", md: "50%" },
								bgcolor: "#22668D",
								mr: 2,
							}}>
							<LocalPhoneIcon sx={{ color: "white", fontSize: "2rem" }} />
						</Box>
						<Typography
							sx={{
								color: "#213346",
								fontSize: { xs: "20px", md: "28px" },
								fontWeight: "500",
							}}>
							شماره تماس: {gizmoinfo.phone}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center">
						<Link href={gizmoinfo.insta}>
							<Box
								component="span"
								sx={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: { xs: 40, sm: 45, md: 45, lg: 50 },
									height: { xs: 40, sm: 45, md: 45, lg: 50 },
									borderRadius: { xs: "20%", md: "50%" },
									bgcolor: "#22668D",
									mr: 2,
								}}>
								<InstagramIcon sx={{ color: "white", fontSize: "2rem" }} />
							</Box>
						</Link>
						<Typography
							variant="h6"
							sx={{
								color: "#213346",
								fontSize: { xs: "20px", md: "28px" },
								fontWeight: "500",
							}}>
							پیج اینستاگرام:‌ Gizmo_shop
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center">
						<Link href={gizmoinfo.telegram}>
							<Box
								component="span"
								sx={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: { xs: 40, sm: 45, md: 45, lg: 50 },
									height: { xs: 40, sm: 45, md: 45, lg: 50 },
									borderRadius: { xs: "20%", md: "50%" },
									bgcolor: "#22668D",
									mr: 2,
								}}>
								<TelegramIcon sx={{ color: "white", fontSize: "2rem" }} />
							</Box>
						</Link>
						<Typography
							variant="h6"
							sx={{
								color: "#213346",
								fontSize: { xs: "20px", md: "28px" },
								fontWeight: "500",
							}}>
							کانال تلگرام
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center">
						<Link>
							<Box
								component="span"
								sx={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: { xs: 40, sm: 45, md: 45, lg: 50 },
									height: { xs: 40, sm: 45, md: 45, lg: 50 },
									borderRadius: { xs: "20%", md: "50%" },
									bgcolor: "#22668D",
									mr: 2,
								}}>
								<EmailIcon sx={{ color: "white", fontSize: "2rem" }} />
							</Box>
						</Link>
						<Typography
							variant="h6"
							sx={{
								color: "#213346",
								fontSize: { xs: "20px", md: "28px" },
								fontWeight: "600",
							}}>
							{gizmoinfo.email}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						display="flex"
						alignItems="center">
						<Link>
							<Box
								component="span"
								sx={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: { xs: 40, sm: 45, md: 45, lg: 50 },
									height: { xs: 40, sm: 45, md: 45, lg: 50 },
									borderRadius: { xs: "20%", md: "50%" },
									bgcolor: "#22668D",
									mr: 2,
								}}>
								<LocationOnIcon sx={{ color: "white", fontSize: "2rem" }} />
							</Box>
						</Link>
						<Typography
							variant="h6"
							sx={{
								color: "#213346",
								fontSize: { xs: "20px", md: "28px" },
								fontWeight: "500",
							}}>
							آدرس: {gizmoinfo.address}
						</Typography>
					</Grid>
				</Grid>
				{/* Grid for photos with text */}
				<Grid
					container
					spacing={2}
					justifyContent="center"
					sx={{ width: "100%", marginTop: 5, padding: 7 }}>
					{imageUrls.map((url, index) => (
						<Grid
							item
							xs={12}
							md={4}
							key={index}
							sx={{ textAlign: "center" }}>
							<Link
								href={url}
								target="_blank"
								rel="noopener noreferrer">
								<Box
									component="img"
									src={url}
									sx={{ width: "20%", height: "auto", margin: "auto" }}
								/>
							</Link>
							<Typography
								variant="h6"
								sx={{
									color: "#252B48",
									marginTop: 2,
									fontWeight: "bold",
									marginBottom: 1,
								}}>
								{imageTexts[index]}
							</Typography>
							<Typography
								variant="body"
								sx={{ color: "gray", marginTop: 1 }}>
								{imageExplanations[index]}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}

export default ContactUs;
