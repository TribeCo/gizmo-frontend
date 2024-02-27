"use client";
import { Colors, convert } from "@/utils";
import {
	Box,
	Button,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Paper,
	Rating,
	Typography,
} from "@mui/material";
import Image from "next/image";
import noon from "./comanyIcons/noon.png";
import { useState } from "react";
import PhotosModal from "./PhotosModal";
import { Add, Close } from "@mui/icons-material";

const arr = {
	"توان دستگاه": "850 وات",
	"فشار بخار": "15 بار",
	"قابلیت تولید کف شیر": "دارد",
	"حجم مخزن": "1.5 لیتر آب",
	"نشانگر میزان آب": "دارد",
};

function ProductInfo() {
	const [openDialog, setOpenDialog] = useState(false);
	const [selectedColor, setSelectedColor] = useState(0);
	const [like, setLike] = useState(false);
	const [count, setCount] = useState(1);

	const decCount = () => {
		if (count === 1) {
		} else {
			setCount(count - 1);
		}
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<Grid container>
			<Grid
				item
				mt={6}
				sm={12}
				md={6}>
				<Box>
					<Box
						position="absolute"
						display="flex"
						sx={{
							flexDirection: {
								md: "row-reverse",
								sm: "column",
								xs: "column",
							},
						}}>
						<Box>
							<CardMedia
								image="https://s3-alpha-sig.figma.com/img/f2f3/7d64/38b32147300a8a027a86c2e954e52da6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pU1iuy2FT7yCide8~~rx5B91PtYvYfEpF-hzE2Bg0NSudy8mxlr2Q3yQyy525rVKxH4NWblGEMbgj7oEEKfC--jjKzk9RhePs4IWbjZAdjyVNwjbKjPKikaYFgBKVvqMv3PigQibvEIZ-mfIgtUWFRZuzShcabx3vEVGIiLeqkRtF1QNVQLtQ68Oqjsxf3A2X8MKdRONJALEZJDRoQbrZz-8iw~noMoNfqqE23GJ-w8INtGeab~KId2luFoSSVtlV-ZeEi7hYQred-FLC9B5kfzsB4pjL06HoWSyUpVIseE9Lke57pnREjL8ZX1ljf52sUB1KrpJd5rZS4F9Noygig__"
								sx={{
									// border: "1px solid",
									m: {
										xs: "0 1.3rem 0 1.3rem",
										sm: 3,
										md: "8rem 0 0 0",
										lg: "8rem 0 0 4rem",
									},
									mt: { xs: 5, sm: 0 },
									height: {
										xs: 380,
										sm: 380,
										md: 350,
										lg: 400,
										xl: 450,
									},
									width: {
										xs: 380,
										sm: 380,
										md: 350,
										lg: 400,
										xl: 450,
									},
								}}
							/>
						</Box>
						<Box
							ml="2rem"
							display="flex"
							flexDirection="column"
							justifyContent="center">
							<Typography
								variant="h5"
								fontWeight={800}
								noWrap
								sx={{
									color: { xs: "#000000", sm: "#ffffff" },
									fontSize: { xs: 25, sm: 30 },
									mt: { xs: 2, sm: 4 },
								}}>
								{"تصاویر محصول"}
							</Typography>
							<Box
								sx={{
									display: "flex",
									flexDirection: {
										md: "column",
										sm: "row",
										xs: "row",
									},
								}}>
								<IconButton
									disableRipple
									sx={{
										mt: 1,
									}}>
									<CardMedia
										image="https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkT~k9c0jfB0djJsoSBJ~2zMqMQIDWayZZBvNo1Z-AguG~qtemTvGOfK9RV8q5~LXBZoVTF9JT4keTBE59I9EILWHczZ2In2mnTMUOKPEFWGr4VWKT-Md0PG4S6jWXOj69wrFNrb7mxxwPq161tHfNZ8~7L~xUfgEPj6bRVtCEGfysaYHp-HkHb-IgO41tNC0oODRSp36bYX3gJzixAQ0zyyuq6-nD9KHTvgh1mQ6kHadEx3ruooK53pjXi3EI6U6v3HBKL7KglIy9yf1haW4bjsnRUpzGOkftALIUp10z8-Omm8lYSqO3JxFxv7ruVA-McSuPPSjRlVt21n8X5vXg__"
										sx={{
											border: "0.2em solid #22668D",
											borderRadius: 3,
											height: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
											width: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
										}}
									/>
								</IconButton>
								<IconButton
									disableRipple
									sx={{
										mt: 1,
									}}>
									<CardMedia
										image="https://s3-alpha-sig.figma.com/img/7832/cae5/08b444fc9e51e32ed3f58d547dbfb93c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsK0FljZ87ZnVJl1S3Q~73XDwvVAW2oIY2J6~ucjymms~IXEQApBIODliBIISmcNPAcvVVliUWPwpBir0kuC~aP7YWiyZ2aIXzX0mNLJ2LcNT~4yOmDSwIlAMDxedd4HVi5hM1aUX-ZYUkZepNoguPHW6K3mXMWp~AHQUl3i7VvDko1K5Gt65uk9MdQIxR5Le~lZoYkbf7f7REejId3~V-4RuzsyuXP-eSUlwJUQ2Q28HCNNK0Zj9cq8skkdsg7IvvmZK6ahBPvaf3KtzKEiJIuFgyjeiUKQ8A4ysTo20jBFVvdH23pNvheg40NRki0mUt-EuuzIhJLzLnj5bz0CBQ__"
										sx={{
											border: "0.2em solid #22668D",
											borderRadius: 3,
											height: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
											width: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
										}}
									/>
								</IconButton>
								<IconButton
									onClick={() => setOpenDialog(true)}
									disableRipple
									sx={{
										mt: 1,
									}}>
									<CardMedia
										image="https://s3-alpha-sig.figma.com/img/a95b/553d/07b7f8faa305d5e35585d3a62a1ffdd3?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkT~k9c0jfB0djJsoSBJ~2zMqMQIDWayZZBvNo1Z-AguG~qtemTvGOfK9RV8q5~LXBZoVTF9JT4keTBE59I9EILWHczZ2In2mnTMUOKPEFWGr4VWKT-Md0PG4S6jWXOj69wrFNrb7mxxwPq161tHfNZ8~7L~xUfgEPj6bRVtCEGfysaYHp-HkHb-IgO41tNC0oODRSp36bYX3gJzixAQ0zyyuq6-nD9KHTvgh1mQ6kHadEx3ruooK53pjXi3EI6U6v3HBKL7KglIy9yf1haW4bjsnRUpzGOkftALIUp10z8-Omm8lYSqO3JxFxv7ruVA-McSuPPSjRlVt21n8X5vXg__"
										sx={{
											border: "0.2em solid #22668D",
											borderRadius: 3,
											height: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
											width: {
												xs: 100,
												sm: 100,
												md: 120,
												lg: 135,
												xl: 135,
											},
										}}>
										<Typography
											sx={{
												backdropFilter: "blur(2px)",
												borderRadius: 2,
											}}
											color="#FFF"
											fontWeight={900}
											pb={3.5}
											fontSize={65}>
											{"..."}
										</Typography>
									</CardMedia>
								</IconButton>
							</Box>
						</Box>
					</Box>
					<Box
						borderRadius="0 4em 18em 0"
						bgcolor="#90B2C5"
						sx={{
							height: { xs: 400, sm: 570 },
							mb: { xs: 20, sm: 0 },
							width: { xs: 370, sm: 600, md: 500, lg: 600, xl: 675 },
						}}
					/>
				</Box>
			</Grid>
			<Grid
				item
				pl={2}
				mt={6}
				sm={12}
				md={6}
				maxWidth="400px">
				<Box>
					<Box display="flex">
						<Typography
							variant="h3"
							fontSize={32}
							fontWeight={600}>
							{"اسپرسوساز نون مدل CM540 3D-GS"}
						</Typography>
						<Box
							ml={2.5}
							bgcolor={"#BB0000"}
							borderRadius={20}
							color="#fff">
							<Typography
								align="center"
								pt={1}
								variant="body1"
								px={2}
								fontWeight={900}>
								{convert(10) + " %"}
							</Typography>
						</Box>
					</Box>
					<Box
						display="flex"
						mt={2}
						ml={2}>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.5 7.52818L2.1225 7.47485C2.10815 7.31478 2.0327 7.16639 1.9118 7.06049C1.79091 6.9546 1.63387 6.89935 1.4733 6.90621C1.31273 6.91308 1.16098 6.98153 1.04957 7.09736C0.938149 7.21318 0.875632 7.36747 0.875 7.52818H1.5ZM15.8633 9.04735L15.275 12.4473L16.5075 12.6607L17.095 9.26068L15.8633 9.04735ZM10.0375 16.7082H6.16333V17.9582H10.0375V16.7082ZM5.40417 16.0107L4.7275 8.18318L3.48167 8.29068L4.15917 16.1182L5.40417 16.0107ZM15.275 12.4473C14.8525 14.889 12.6508 16.7082 10.0375 16.7082V17.9582C13.2258 17.9582 15.9758 15.734 16.5075 12.6607L15.275 12.4473ZM10.0458 3.24985L9.49333 6.62068L10.7267 6.82235L11.2792 3.45235L10.0458 3.24985ZM4.99 7.53818L6.18917 6.50485L5.3725 5.55818L4.175 6.59152L4.99 7.53818ZM8.37 3.14318L8.76667 1.61485L7.55667 1.30152L7.16 2.82902L8.37 3.14318ZM9.365 1.31485L9.48583 1.35402L9.86833 0.164017L9.7475 0.124851L9.365 1.31485ZM7.76917 4.67985C8.02948 4.19318 8.23116 3.67735 8.37 3.14318L7.16 2.82902C7.04607 3.26788 6.88047 3.69168 6.66667 4.09152L7.76917 4.67985ZM9.48583 1.35402C9.60474 1.39005 9.71261 1.45554 9.79944 1.54441C9.88626 1.63328 9.94923 1.74264 9.9825 1.86235L11.1925 1.54902C11.1064 1.22527 10.9398 0.928543 10.7083 0.686403C10.4768 0.444264 10.1879 0.264569 9.86833 0.164017L9.48583 1.35402ZM8.76667 1.61485C8.78328 1.55483 8.81275 1.49914 8.85304 1.45165C8.89334 1.40416 8.94348 1.36601 9 1.33985L8.4575 0.214017C8.01417 0.427351 7.68083 0.822351 7.55667 1.30152L8.76667 1.61485ZM9 1.33985C9.11405 1.28538 9.24458 1.27644 9.365 1.31485L9.7475 0.124851C9.32193 -0.0115497 8.86026 0.0203614 8.4575 0.214017L9 1.33985ZM10.795 8.15318H15.1117V6.90318H10.795V8.15318ZM2.9325 16.8382L2.1225 7.47485L0.8775 7.58235L1.68583 16.9457L2.9325 16.8382ZM2.125 16.9273V7.52818H0.875V16.9273H2.125ZM1.68583 16.9457C1.68329 16.9154 1.68791 16.8849 1.69778 16.8562C1.70765 16.8274 1.72339 16.8011 1.744 16.7787C1.76461 16.7564 1.78964 16.7386 1.8175 16.7264C1.84536 16.7143 1.87544 16.7081 1.90583 16.7082V17.9582C2.51083 17.9582 2.98417 17.4398 2.9325 16.8382L1.68583 16.9457ZM11.2792 3.45235C11.3831 2.81879 11.3536 2.17051 11.1925 1.54902L9.9825 1.86318C10.0999 2.31595 10.1215 2.78826 10.0458 3.24985L11.2792 3.45235ZM6.16333 16.7082C5.97251 16.7079 5.78873 16.6361 5.64821 16.507C5.50769 16.3779 5.42062 16.2008 5.40417 16.0107L4.15917 16.1182C4.20253 16.62 4.4324 17.0873 4.80342 17.4279C5.17444 17.7686 5.65966 17.9578 6.16333 17.9582V16.7082ZM6.18917 6.50485C6.75583 6.01652 7.36583 5.43568 7.77 4.67985L6.66667 4.09152C6.37833 4.63235 5.91917 5.08818 5.3725 5.55818L6.18917 6.50485ZM17.095 9.26068C17.1452 8.97151 17.1315 8.67486 17.055 8.39151C16.9784 8.10817 16.8409 7.84499 16.6519 7.6204C16.463 7.39581 16.2272 7.21524 15.9612 7.09135C15.6951 6.96746 15.4052 6.90324 15.1117 6.90318V8.15318C15.5842 8.15318 15.945 8.57985 15.8633 9.04735L17.095 9.26068ZM1.90583 16.7082C2.0275 16.7082 2.125 16.8065 2.125 16.9273H0.875C0.875 17.4957 1.33583 17.9582 1.90583 17.9582V16.7082ZM9.49333 6.62068C9.46227 6.8095 9.47265 7.00281 9.52376 7.18722C9.57488 7.37162 9.6655 7.54269 9.78933 7.68857C9.91317 7.83445 10.0673 7.95164 10.2409 8.03201C10.4146 8.11239 10.6036 8.15318 10.795 8.15318V6.90318C10.7848 6.90323 10.7748 6.90187 10.7656 6.89758C10.7563 6.8933 10.7482 6.88704 10.7416 6.87924C10.7351 6.87144 10.7304 6.8623 10.7278 6.85247C10.7252 6.84263 10.7248 6.83235 10.7267 6.82235L9.49333 6.62068ZM4.7275 8.18318C4.7172 8.0625 4.73487 7.9411 4.78065 7.82897C4.82643 7.71683 4.89818 7.61717 4.99 7.53818L4.17333 6.59068C3.93168 6.79904 3.74296 7.06181 3.62271 7.35736C3.50247 7.65292 3.45412 7.9728 3.48167 8.29068L4.7275 8.18318Z"
								fill="#4ECB71"
							/>
						</svg>
						<Typography
							ml={1}
							mr={3}
							color="#747678"
							fontSize={14}
							fontWeight={400}>
							{`${convert(70)} % از خریداران، این کالا را پیشنهاد کردند. `}
						</Typography>
						<Rating
							readOnly
							value={0}
							precision={1}
							icon={
								<svg
									style={{ marginRight: 1, marginLeft: 1 }}
									width="18"
									height="18"
									viewBox="0 0 18 18"
									color="#FFCC70"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4.52993 5.829C2.68493 6.24675 1.76243 6.45525 1.54268 7.161C1.32368 7.866 1.95218 8.60175 3.20993 10.0725L3.53543 10.4528C3.89243 10.8705 4.07168 11.0797 4.15193 11.3377C4.23218 11.5965 4.20518 11.8755 4.15118 12.4327L4.10168 12.9405C3.91193 14.9032 3.81668 15.8843 4.39118 16.32C4.96568 16.7565 5.82968 16.3582 7.55618 15.5632L8.00393 15.3577C8.49443 15.1312 8.73968 15.0187 8.99993 15.0187C9.26018 15.0187 9.50543 15.1312 9.99668 15.3577L10.4429 15.5632C12.1702 16.3582 13.0342 16.7557 13.6079 16.3207C14.1832 15.8842 14.0879 14.9032 13.8982 12.9405M14.7899 10.0725C16.0477 8.6025 16.6762 7.86675 16.4572 7.161C16.2374 6.45525 15.3149 6.246 13.4699 5.829L12.9929 5.721C12.4687 5.6025 12.2069 5.54325 11.9962 5.3835C11.7862 5.22375 11.6512 4.9815 11.3812 4.497L11.1352 4.056C10.1849 2.352 9.71018 1.5 8.99993 1.5C8.28968 1.5 7.81493 2.352 6.86468 4.056"
										stroke="#FFCC70"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
							}
							emptyIcon={
								<svg
									style={{ marginRight: 1, marginLeft: 1 }}
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4.52993 5.829C2.68493 6.24675 1.76243 6.45525 1.54268 7.161C1.32368 7.866 1.95218 8.60175 3.20993 10.0725L3.53543 10.4528C3.89243 10.8705 4.07168 11.0797 4.15193 11.3377C4.23218 11.5965 4.20518 11.8755 4.15118 12.4327L4.10168 12.9405C3.91193 14.9032 3.81668 15.8843 4.39118 16.32C4.96568 16.7565 5.82968 16.3582 7.55618 15.5632L8.00393 15.3577C8.49443 15.1312 8.73968 15.0187 8.99993 15.0187C9.26018 15.0187 9.50543 15.1312 9.99668 15.3577L10.4429 15.5632C12.1702 16.3582 13.0342 16.7557 13.6079 16.3207C14.1832 15.8842 14.0879 14.9032 13.8982 12.9405M14.7899 10.0725C16.0477 8.6025 16.6762 7.86675 16.4572 7.161C16.2374 6.45525 15.3149 6.246 13.4699 5.829L12.9929 5.721C12.4687 5.6025 12.2069 5.54325 11.9962 5.3835C11.7862 5.22375 11.6512 4.9815 11.3812 4.497L11.1352 4.056C10.1849 2.352 9.71018 1.5 8.99993 1.5C8.28968 1.5 7.81493 2.352 6.86468 4.056"
										stroke="#213346"
										stroke-width="1.5"
										stroke-linecap="round"
									/>
								</svg>
							}
						/>
						<Typography
							ml={2}
							fontSize={12}
							fontWeight={400}
							color="#747678">{`(${convert(0)} نظر)`}</Typography>
					</Box>
					<Box
						display="flex"
						mt={2}
						ml={2}>
						<Typography
							ml={1}
							color="#252B48"
							fontSize={14}
							fontWeight={400}>
							{`دسته بندی:`}
						</Typography>
						<Button sx={{ height: 20 }}>
							<Typography
								fontSize={14}
								fontWeight={400}>
								{"آشپزخانه"}
							</Typography>
						</Button>
						<Button sx={{ height: 20 }}>
							<Typography
								fontSize={14}
								fontWeight={400}>
								{"وسایل برقی"}
							</Typography>
						</Button>
					</Box>
					<Box
						display="flex"
						mt={2}
						ml={2}>
						<Typography
							ml={1}
							mr={1}
							color="#252B48"
							fontSize={14}
							fontWeight={400}>
							{`برند:`}
						</Typography>
						<Image
							src={noon}
							height={24}
							style={{
								borderRadius: 10,
							}}
						/>
					</Box>
					<Typography
						color="#22668D"
						mt={2}
						ml={3}
						fontWeight={900}
						fontSize={20}>
						{"ویژگی ها: "}
					</Typography>
					<Box
						mt={2}
						ml={5}>
						{Object.keys(arr).map((key) => {
							return (
								<Typography color="#22668D">{`•   ${key} : ${arr[key]}`}</Typography>
							);
						})}
					</Box>
					<Box
						display="flex"
						mt={2}
						ml={3}>
						<Box mr={15}>
							<Box display="flex">
								<Typography
									mr={1}
									color="#22668D"
									fontWeight={900}
									fontSize={20}>
									{`رنگ ها: `}
								</Typography>
								<Typography
									color="#22668D"
									fontWeight={400}
									fontSize={20}>
									{["مشکی", "قهوه ای", "کرم"].at(selectedColor)}
								</Typography>
							</Box>
							<Box
								display="flex"
								mt={2}>
								{["#000000", "#894B03", "#D6CA8E"].map((color, index) => {
									return (
										<IconButton
											onClick={() => setSelectedColor(index)}
											disableRipple>
											<Box
												bgcolor={color}
												border="0.16em solid #D9DAE2"
												borderRadius={2.5}
												width={45}
												height={45}
												mr={0.5}>
												{index === selectedColor ? (
													<Close
														fontSize="large"
														sx={{ color: "#FF0000" }}
													/>
												) : (
													""
												)}
											</Box>
										</IconButton>
									);
								})}
							</Box>
						</Box>
						<Box>
							<Typography
								color="#22668D"
								fontWeight={900}
								fontSize={20}>
								{"تعداد: "}
							</Typography>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								width={120}
								mt={2}>
								<IconButton onClick={() => setCount(count + 1)}>
									<svg
										width="35"
										height="41"
										viewBox="0 0 35 41"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H32C33.3807 0.5 34.5 1.61929 34.5 3V38C34.5 39.3807 33.3807 40.5 32 40.5H3C1.61929 40.5 0.5 39.3807 0.5 38V3Z"
											stroke="#747678"
										/>
										<path
											d="M23.875 18.9062H19.0938V14.125C19.0938 13.5383 18.6179 13.0625 18.0312 13.0625H16.9688C16.3821 13.0625 15.9062 13.5383 15.9062 14.125V18.9062H11.125C10.5383 18.9062 10.0625 19.3821 10.0625 19.9688V21.0312C10.0625 21.6179 10.5383 22.0938 11.125 22.0938H15.9062V26.875C15.9062 27.4617 16.3821 27.9375 16.9688 27.9375H18.0312C18.6179 27.9375 19.0938 27.4617 19.0938 26.875V22.0938H23.875C24.4617 22.0938 24.9375 21.6179 24.9375 21.0312V19.9688C24.9375 19.3821 24.4617 18.9062 23.875 18.9062Z"
											fill="#747678"
										/>
									</svg>
								</IconButton>
								<Typography variant="h5">{convert(count)}</Typography>
								<IconButton onClick={decCount}>
									<svg
										width="35"
										height="41"
										viewBox="0 0 35 41"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H32C33.3807 0.5 34.5 1.61929 34.5 3V38C34.5 39.3807 33.3807 40.5 32 40.5H3C1.61929 40.5 0.5 39.3807 0.5 38V3Z"
											stroke="#747678"
										/>
										<path
											d="M23.875 18.9062H11.125C10.5383 18.9062 10.0625 19.3821 10.0625 19.9688V21.0312C10.0625 21.6179 10.5383 22.0938 11.125 22.0938H23.875C24.4617 22.0938 24.9375 21.6179 24.9375 21.0312V19.9688C24.9375 19.3821 24.4617 18.9062 23.875 18.9062Z"
											fill="#747678"
										/>
									</svg>
								</IconButton>
							</Box>
						</Box>
					</Box>
					<Box
						mt={2}
						px={3}
						width="90%"
						border="0.1em solid #22668D"
					/>
					<Box
						mt={3}
						ml={3}
						maxWidth={400}
						display="flex"
						justifyContent="space-between">
						<Typography
							color="#22668D"
							fontWeight={900}
							fontSize={20}>
							{"قیمت: "}
						</Typography>
						<Box>
							<Box
								mt={2}
								position="absolute"
								bgcolor="#BB0000"
								borderRadius="2em"
								px={7}
								pt={0.25}
								color="#fff"></Box>
							<Typography
								mt={0.5}
								align="center"
								fontSize={20}
								fontWeight={400}
								sx={{ color: "#BFBFBF" }}>
								{convert(10000) + " تومان"}
							</Typography>
						</Box>
						<Box>
							<Typography
								mt={0.5}
								align="center"
								fontSize={20}
								fontWeight={400}>
								{convert(9000) + " تومان"}
							</Typography>
						</Box>
					</Box>

					<Box
						display="flex"
						mt={6}>
						<Button
							variant="contained"
							sx={{
								bgcolor: "#FFE0A9",
								color: "#000",
								borderRadius: 40,
								px: 10,
								py: 1.5,
								"&:hover": {
									bgcolor: Colors.orange,
								},
							}}>
							<Typography
								variant="h5"
								fontWeight={900}>
								{"افزودن به سبد خرید"}
							</Typography>
						</Button>
						<IconButton
							onClick={() => setLike(!like)}
							sx={{
								mt: 1,
								ml: 4,
							}}>
							{like ? (
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20.5 10.5L20.9 34C21.0166 34.121 23.3454 15.9343 23.5 16C23.6546 16.0657 17.332 17 17.5 17C17.668 17 20.3344 10.382 20.489 10.3162C20.6436 10.2505 19.8834 10.121 20 10L20.5 10.5ZM11.6684 27.3666C11.412 27.1558 6.42708 18.4678 6.09671 18.5C5.76633 18.5322 5.81089 22.5919 5.60004 22.8483C5.38919 23.1047 3.87118 22.0213 3.90337 22.3516C4.02296 22.9655 9.87842 29.272 10.0784 29.3C10.6993 28.545 11.6684 27.3666 11.6684 27.3666ZM3.90337 22.3516C3.98217 22.4957 4.08855 22.6227 4.21646 22.7256C4.34437 22.8285 4.49129 22.9052 4.64884 22.9514C4.80639 22.9975 4.97149 23.0121 5.13469 22.9944C5.2979 22.9768 5.45602 22.9271 5.60004 22.8483C5.74406 22.7695 5.87114 22.6631 5.97404 22.5352C6.07695 22.4073 6.15365 22.2604 6.19977 22.1028C6.24588 21.9453 6.26052 21.7802 6.24284 21.617C6.22516 21.4538 6.1755 21.2957 6.09671 21.1516C6.09671 21.1516 4.75992 21.883 3.90337 22.3516ZM11.8779 27.5383C11.8779 23.955 12.235 33.265 15 32C19.5 36.5 17.47 30.4367 20.9 34V8.30164C16.8334 4.07331 12.1067 3.37498 8.33337 5.09998C4.64337 6.78831 2.08337 10.7083 2.08337 15.2283L11.8779 27.5383ZM14.1617 32.5C15.0167 33.1733 15.9334 33.89 16.8617 34.4333C17.79 34.975 18.85 35.4166 20 35.4166V34.1666V32.9166C19.4834 32.9166 18.8767 32.7166 18.1234 32.275C17.3684 31.835 16.5867 31.2283 15.71 30.5366L14.1617 32.5ZM25.8384 32.5C28.215 30.625 31.255 28.4783 33.6384 25.7933C36.0667 23.06 37.9167 19.6716 37.9167 15.2283L20 34C20 37.6617 21.2467 20.4283 19.1 22.8483C16.9084 25.315 21.6267 27.3083 19.1 29.3L25.8384 32.5ZM37.9167 15.2283C37.9167 10.7083 35.3584 6.78831 31.6667 5.09998C27.8934 3.37498 23.17 4.07331 19.1 8.29998L18 17.5L20 10C19.5 10 8.83268 25.8593 11.5193 27.0876C10.6193 30.5876 20 30.415 20 34L37.9167 15.2283ZM19.1 29.3C18.2234 29.9916 20.755 31.0766 20 31.5166C19.2467 31.9566 20.5167 32.9166 20 32.9166V34.1666V35.4166C21.15 35.4166 22.21 34.975 23.1384 34.4333C24.0684 33.89 24.9834 33.1733 25.8384 32.5L19.1 29.3ZM15.71 30.5366C14.3834 29.4916 13.035 28.4916 11.6684 27.3666C11.6684 27.3666 10.6993 28.545 10.0784 29.3C11.4617 30.4383 12.925 31.525 14.1617 32.5L15.7117 30.5366H15.71ZM6.09671 21.1533C5.09272 19.3407 11.8662 29.6104 11.8779 27.5383L2.08337 15.2283C2.08337 17.9583 2.78337 20.305 3.90337 22.3516C4.75992 21.883 6.09671 21.1516 6.09671 21.1516V21.1533Z"
										fill="#BB0000"
									/>
								</svg>
							) : (
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20.0002 9.16664L19.1002 10.0333C19.2168 10.1543 19.3566 10.2505 19.5112 10.3162C19.6658 10.382 19.8321 10.4158 20.0002 10.4158C20.1682 10.4158 20.3345 10.382 20.4891 10.3162C20.6438 10.2505 20.7836 10.1543 20.9002 10.0333L20.0002 9.16664ZM11.6685 27.3666C11.4121 27.1558 11.0825 27.0554 10.7521 27.0876C10.4217 27.1198 10.1177 27.2819 9.90683 27.5383C9.69598 27.7947 9.59562 28.1243 9.62781 28.4547C9.66 28.7851 9.82212 29.0891 10.0785 29.3L11.6685 27.3666ZM3.9035 22.3516C3.98229 22.4957 4.08868 22.6227 4.21658 22.7256C4.34449 22.8285 4.49142 22.9052 4.64897 22.9514C4.80652 22.9975 4.97161 23.0121 5.13481 22.9944C5.29802 22.9768 5.45615 22.9271 5.60016 22.8483C5.74418 22.7695 5.87127 22.6631 5.97417 22.5352C6.07707 22.4073 6.15377 22.2604 6.19989 22.1028C6.24601 21.9453 6.26064 21.7802 6.24296 21.617C6.22528 21.4538 6.17562 21.2957 6.09683 21.1516L3.9035 22.3516ZM4.5835 15.2283C4.5835 11.645 6.6085 8.63831 9.3735 7.37331C12.0602 6.14498 15.6702 6.46998 19.1002 10.0333L20.9002 8.30164C16.8335 4.07331 12.1068 3.37498 8.3335 5.09998C4.6435 6.78831 2.0835 10.7083 2.0835 15.2283H4.5835ZM14.1618 32.5C15.0168 33.1733 15.9335 33.89 16.8618 34.4333C17.7902 34.975 18.8502 35.4166 20.0002 35.4166V32.9166C19.4835 32.9166 18.8768 32.7166 18.1235 32.275C17.3685 31.835 16.5868 31.2283 15.7102 30.5366L14.1618 32.5ZM25.8385 32.5C28.2152 30.625 31.2552 28.4783 33.6385 25.7933C36.0668 23.06 37.9168 19.6716 37.9168 15.2283H35.4168C35.4168 18.89 33.9168 21.7133 31.7702 24.1333C29.5785 26.6 26.8168 28.545 24.2902 30.5366L25.8385 32.5ZM37.9168 15.2283C37.9168 10.7083 35.3585 6.78831 31.6668 5.09998C27.8935 3.37498 23.1702 4.07331 19.1002 8.29998L20.9002 10.0333C24.3302 6.47164 27.9402 6.14498 30.6268 7.37331C33.3918 8.63831 35.4168 11.6433 35.4168 15.2283H37.9168ZM24.2902 30.5366C23.4135 31.2283 22.6318 31.835 21.8768 32.275C21.1235 32.715 20.5168 32.9166 20.0002 32.9166V35.4166C21.1502 35.4166 22.2102 34.975 23.1385 34.4333C24.0685 33.89 24.9835 33.1733 25.8385 32.5L24.2902 30.5366ZM15.7102 30.5366C14.3835 29.4916 13.0352 28.4916 11.6685 27.3666L10.0785 29.3C11.4618 30.4383 12.9252 31.525 14.1618 32.5L15.7118 30.5366H15.7102ZM6.09683 21.1533C5.09284 19.3407 4.57172 17.3004 4.5835 15.2283H2.0835C2.0835 17.9583 2.7835 20.305 3.9035 22.3516L6.09683 21.1516V21.1533Z"
										fill="#213346"
									/>
								</svg>
							)}
						</IconButton>
					</Box>
				</Box>
			</Grid>
			{openDialog && (
				<PhotosModal
					open={openDialog}
					handleClose={handleClose}
					title="اسپرسوساز نون مدل CM540 3D-GS"
				/>
			)}
		</Grid>
	);
}

export default ProductInfo;
