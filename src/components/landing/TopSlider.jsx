"use client";

import React, { useState } from "react";
import {
	Box,
	Grid,
	Typography,
	Button,
	MobileStepper,
	IconButton,
	CardMedia,
	Fade,
	Slide,
	Grow,
} from "@mui/material";

import { Colors } from "../../utils";

const fakeData = [
	{
		id: 0,
		image:
			"https://www.wacaco.com/cdn/shop/products/Barista_Kit-PNG--001-LD.png?v=1697092462&width=533",
		name: "اسپرسو ساز Wacaco Nanopresso",
		dec: "اسپرسو ساز واکاکو مدل Minipresso محصولی بسیار کاربردی و گزینه ای ایده آل برای علاقمندان به نوشیدن قهوه ای حرفه ای در شرایط و مکان های مختلف می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.",
	},
	{
		id: 1,
		image:
			"https://s3-alpha-sig.figma.com/img/f2f3/7d64/38b32147300a8a027a86c2e954e52da6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pU1iuy2FT7yCide8~~rx5B91PtYvYfEpF-hzE2Bg0NSudy8mxlr2Q3yQyy525rVKxH4NWblGEMbgj7oEEKfC--jjKzk9RhePs4IWbjZAdjyVNwjbKjPKikaYFgBKVvqMv3PigQibvEIZ-mfIgtUWFRZuzShcabx3vEVGIiLeqkRtF1QNVQLtQ68Oqjsxf3A2X8MKdRONJALEZJDRoQbrZz-8iw~noMoNfqqE23GJ-w8INtGeab~KId2luFoSSVtlV-ZeEi7hYQred-FLC9B5kfzsB4pjL06HoWSyUpVIseE9Lke57pnREjL8ZX1ljf52sUB1KrpJd5rZS4F9Noygig__",
		name: "اسپرسوساز نون مدل CM540 3D-GS",
		dec: "اسپرسو ساز واکاکو مدل Minipresso مح می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.",
	},
	{
		id: 2,
		image:
			"https://images.squarespace-cdn.com/content/v1/6243233f0ef4e647a2b30c74/1681337374071-F07F8W5GXQEPIBY4MXAM/LCM102_WOLF.png?format=1000w",
		name: "ماگ دماسنج دار",
		dec: "موقع کوهنوردی، سفر و… به همراه داشتن آب سرد یا گرم به شرط این که دمای آب تغییر نکند لازم است. فلاسک دماسنج دار با طراحی هوشمندانه و دارای سنسور دمای هوشمند برای اندازه گیری دما است که به راحتی میتوانید با ضربه زدن روی صفحه LCD آن از داغ بودن یا سرد بودن محتوای فلاسک باخبر شوید. داخل این فلاسک یک صافی استیل قرار دارد که مانع مخلوط شدن دمنوش گیاهی و چای با آب می شود و شما به راحتی میتوانید توری یا صافی را از لیوان دمنوش ساز جدا کنید و بشورید.این ماگ میتواند تا 10 ساعت سرما و گرما را در خود نگه دارد تا باعث شود وقتی که نوشیدنی را میخورید لذت ببرید.",
	},
];

const TopSlider = () => {
	const [active, setActive] = useState(0);

	const handleNext = () => {
		if (fakeData.length === active + 1) {
			setActive(0);
		} else {
			setActive(active + 1);
		}
	};
	const handlePre = () => {
		if (active === 0) {
			setActive(fakeData.length - 1);
		} else {
			setActive(active - 1);
		}
	};

	const nextActive = () => {
		if (fakeData.length === active + 1) {
			return 0;
		}
		return active + 1;
	};

	return (
		<Box
			container
			sx={{
				bgcolor: Colors.yellow,
				mx: 2,
				borderBottomLeftRadius: 50,
				borderBottomRightRadius: 50,
				pt: 10,
			}}>
			<Grid
				container
				direction="row-reverse">
				<Grid
					item
					xs={12}
					lg={7}>
					<Box
						px={4}
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center">
							<Box
								sx={{
									height: { xs: 380, sm: 500 },
									width: { xs: 380, sm: 500 },
									borderRadius: 100,
									border: "10px solid #FFFFFF",
									bgcolor: "#C6E3DD",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								{fakeData.map((data, index) => {
									return (
										<Grow
											in={active === index}
											timeout={1000}>
											<Slide
												direction="right"
												in={active === index}
												timeout={1000}>
												<Box display={active === index ? "" : "none"}>
													<CardMedia
														image={data.image}
														sx={{
															height: { xs: 300, sm: 400 },
															width: { xs: 300, sm: 400 },
														}}
													/>
												</Box>
											</Slide>
										</Grow>
									);
								})}
							</Box>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									minWidth: { xs: 300, sm: "" },
								}}>
								<IconButton
									onClick={handlePre}
									sx={{
										display: { xs: "", sm: "none" },
									}}>
									<svg
										width="16"
										height="26"
										viewBox="0 0 16 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0.991109 25.0562C0.739808 25.0562 0.482635 24.9738 0.289776 24.814C-0.095941 24.4943 -0.095941 23.9713 0.289776 23.6516L13.4918 12.711L0.482634 1.93017C0.0969173 1.61052 0.0969173 1.08746 0.482634 0.767813C0.868351 0.448166 1.49952 0.448166 1.88524 0.767813L15.6016 12.1298C15.9873 12.4495 15.9873 12.9725 15.6016 13.2922L1.69823 24.814C1.49952 24.9787 1.24822 25.0562 0.991109 25.0562Z"
											fill="black"
											fill-opacity="0.8"
										/>
									</svg>
								</IconButton>
								<MobileStepper
									steps={3}
									variant="dots"
									sx={{
										bgcolor: Colors.yellow,
										py: 7,
									}}
									position="static"
									activeStep={active}
								/>
								<IconButton
									onClick={handleNext}
									sx={{
										display: { xs: "", sm: "none" },
									}}>
									<svg
										width="16"
										height="25"
										viewBox="0 0 16 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M14.9 24.5281C15.1513 24.5281 15.4085 24.4457 15.6013 24.2859C15.9871 23.9663 15.9871 23.4432 15.6013 23.1236L2.3993 12.1829L15.4085 1.40209C15.7942 1.08244 15.7942 0.559383 15.4085 0.239737C15.0228 -0.0799103 14.3916 -0.0799103 14.0059 0.239737L0.289541 11.6017C-0.0961761 11.9214 -0.0961761 12.4444 0.289541 12.7641L14.1929 24.2859C14.3916 24.4506 14.6429 24.5281 14.9 24.5281Z"
											fill="black"
											fill-opacity="0.8"
										/>
									</svg>
								</IconButton>
							</Box>
						</Box>
						<Box
							sx={{
								display: { xs: "none", sm: "flex" },
								flexDirection: "column",
							}}
							mb={14}>
							<IconButton onClick={handleNext}>
								<svg
									width="16"
									height="25"
									viewBox="0 0 16 25"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M14.9 24.5281C15.1513 24.5281 15.4085 24.4457 15.6013 24.2859C15.9871 23.9663 15.9871 23.4432 15.6013 23.1236L2.3993 12.1829L15.4085 1.40209C15.7942 1.08244 15.7942 0.559383 15.4085 0.239737C15.0228 -0.0799103 14.3916 -0.0799103 14.0059 0.239737L0.289541 11.6017C-0.0961761 11.9214 -0.0961761 12.4444 0.289541 12.7641L14.1929 24.2859C14.3916 24.4506 14.6429 24.5281 14.9 24.5281Z"
										fill="black"
										fill-opacity="0.8"
									/>
								</svg>
							</IconButton>
							<IconButton onClick={handlePre}>
								<svg
									width="16"
									height="26"
									viewBox="0 0 16 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0.991109 25.0562C0.739808 25.0562 0.482635 24.9738 0.289776 24.814C-0.095941 24.4943 -0.095941 23.9713 0.289776 23.6516L13.4918 12.711L0.482634 1.93017C0.0969173 1.61052 0.0969173 1.08746 0.482634 0.767813C0.868351 0.448166 1.49952 0.448166 1.88524 0.767813L15.6016 12.1298C15.9873 12.4495 15.9873 12.9725 15.6016 13.2922L1.69823 24.814C1.49952 24.9787 1.24822 25.0562 0.991109 25.0562Z"
										fill="black"
										fill-opacity="0.8"
									/>
								</svg>
							</IconButton>
						</Box>
						<Box
							mb={14}
							height={200}
							width={200}
							sx={{
								borderRadius: 100,
								border: "10px solid #FFFFFF",
								bgcolor: "#C6E3DD",
								display: { xs: "none", sm: "flex" },
								justifyContent: "center",
								alignItems: "center",
							}}>
							{fakeData.map((data, index) => {
								return (
									<Fade
										in={nextActive() === index}
										timeout={1000}>
										<Box display={nextActive() === index ? "" : "none"}>
											<CardMedia
												image={data.image}
												sx={{
													height: 150,
													width: 150,
												}}
											/>
										</Box>
									</Fade>
								);
							})}
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					lg={5}
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Box width={330}>
						{fakeData.map((data, index) => {
							return (
								<Fade
									in={active === index}
									timeout={1000}>
									<Box display={active === index ? "" : "none"}>
										<Typography variant="h4">{data.name}</Typography>
										<Typography
											align="justify"
											mt={3}
											variant="body1">
											{data.dec}
										</Typography>
									</Box>
								</Fade>
							);
						})}
						<Button
							variant="contained"
							sx={{
								my: 5,
								px: 3,
								py: 2,
								bgcolor: Colors.orange,
								color: Colors.blue,
								borderRadius: 6,
								"&:hover": {
									bgcolor: Colors.orange,
								},
							}}>
							<Typography
								mr={2}
								variant="h6"
								fontWeight={900}
								noWrap>
								{"هم اکنون خرید کنید!"}
							</Typography>
							<svg
								width="35"
								height="35"
								viewBox="0 0 35 35"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<circle
									cx="17.5"
									cy="17.5"
									r="17.5"
									fill="white"
								/>
								<path
									d="M20.8454 28C21.0115 28 21.1814 27.9295 21.3088 27.7927C21.5637 27.519 21.5637 27.0712 21.3088 26.7975L12.5852 17.4305L21.1814 8.20041C21.4363 7.92674 21.4363 7.47892 21.1814 7.20525C20.9265 6.93158 20.5095 6.93158 20.2546 7.20525L11.1912 16.933C10.9363 17.2066 10.9363 17.6545 11.1912 17.9281L20.3782 27.7927C20.5095 27.9337 20.6755 28 20.8454 28Z"
									fill="#22668D"
								/>
							</svg>
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default TopSlider;
