import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Box,
	Button,
	Typography,
	Grid,
	Divider,
	List,
	SvgIcon,
	ListItem,
} from "@mui/material";
import { Colors } from "@/utils";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import ShopIcon from "@/components/siteIcons/shopIcon.png";
import AmazonIcon from "@/components/comanyIcons/amazon.png";
import NoonIcon from "@/components/comanyIcons/noon.png";
import Logo from "@/components/siteIcons/logo.png";
import eNAMAD from "@/components/siteIcons/eNAMAD.png";

const eNAMAD_Link = "/";
const noon_Link = "https://www.noon.com/";
const amazon_Link = "https://www.amazon.com/";
const telegram_channel = "/";
const instagram_channel = "/";

const Footer = () => {
	return (
		<>
			<Box
				component="footer"
				bgcolor="rgba(142, 205, 221, 0.3)"
				color="black"
				py={3}
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				sx={{
					flexDirection: { xs: "column", lg: "row" },
				}}>
				<Grid
					sx={{
						mr: { lg: 8 },
					}}>
					<Grid
						sx={{
							pl: { xs: 0, lg: 6 },
						}}>
						<Grid container>
							<Box pr={2}>
								<Image
									src={ShopIcon}
									width="auto"
									height={70}
								/>
							</Box>
							<Box>
								<Typography
									variant="h5"
									fontWeight="bold">
									خرید مستقیم از دبی
								</Typography>

								<Typography
									variant="body1"
									color="GrayText"
									sx={{
										maxWidth: "200px",
										overflowWrap: "break-word",
									}}
									mt={1}>
									فقط کافیه لینک محصول مورد نظرتون رو برامون بفرستید.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					display="flex"
					sx={{
						mt: { xs: 8, lg: 0 },
						mx: { xs: 1, lg: 0 },
					}}>
					<Grid
						sx={{
							pr: { xs: 4, lg: 8 },
						}}>
						<Link href={noon_Link}>
							<Image
								src={NoonIcon}
								width="auto"
								height={60}
							/>
						</Link>
					</Grid>

					<Grid
						sx={{
							mt: { lg: 2 },
							pr: { lg: 12 },
							pl: { xs: 4, lg: 5 },
						}}>
						<Link href={amazon_Link}>
							<Image
								src={AmazonIcon}
								width="auto"
								height={45}
							/>
						</Link>
					</Grid>
				</Grid>

				<Button
					variant="contained"
					sx={{
						bgcolor: Colors.orange,
						color: "black",
						borderRadius: "50px",
						boxShadow: "none",
						mr: { lg: 4 },
						mt: { xs: 8, lg: 0 },
						mb: { xs: 2, lg: 0 },
						"&:hover": {
							bgcolor: Colors.orange,
						},
					}}>
					<Typography
						variant="h6"
						fontSize={18}>
						ارسال لینک
					</Typography>
				</Button>
			</Box>

			<Grid
				bgcolor={Colors.yellow}
				color="black"
				display="flex"
				alignItems="center"
				container
				direction="column">
				<Grid
					pt={5}
					container
					sx={{
						flexDirection: { xs: "column", md: "row" },
						direction: { xs: "column", md: "row" },
						justifyContent: { xs: "center", md: "flex-start" },
						alignItems: { xs: "center", md: "start" },
					}}>
					<Grid
						sx={{
							mb: { xs: 2 },
							ml: { md: 8 },
						}}>
						<Link href={"/"}>
							<Image
								src={Logo}
								width="auto"
								height={50}
							/>
						</Link>
					</Grid>

					<Typography
						sx={{
							pt: { md: 2 },
							pl: { md: 3 },
							width: { xs: "65%", md: "auto" },
							textAlign: { xs: "center" },
						}}
						variant="h6">
						از تنوع محصولات ما لذت ببرید، با قیمت و کیفیتی که انتظار دارید خرید
						کنید.
					</Typography>
				</Grid>

				<Grid
					container
					direction="row"
					justifyContent="space-around"
					alignItems="flex-start"
					mb={4}>
					<Box
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Grid>
							<Grid item>
								<Box sx={{ textAlign: "left", fontWeight: "bold" }}>
									<Typography
										variant="h6"
										fontWeight="bold">
										لینک های مفید
									</Typography>

									<Box
										display="flex"
										alignItems="center">
										<SvgIcon
											component="svg"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none">
											<path
												d="M11.6628 4.91277L13.5378 3.03777C14.0253 2.55024 14.6041 2.1635 15.2411 1.89965C15.8781 1.6358 16.5608 1.5 17.2503 1.5C17.9397 1.5 18.6225 1.6358 19.2595 1.89965C19.8964 2.1635 20.4752 2.55024 20.9628 3.03777C21.4503 3.5253 21.837 4.10409 22.1009 4.74108C22.3647 5.37807 22.5005 6.06079 22.5005 6.75027C22.5005 7.43974 22.3647 8.12247 22.1009 8.75946C21.837 9.39645 21.4503 9.97523 20.9628 10.4628L17.2128 14.2128C16.7253 14.7003 16.1465 15.0871 15.5095 15.351C14.8725 15.6148 14.1898 15.7506 13.5003 15.7506C12.8108 15.7506 12.128 15.6148 11.4911 15.351C10.8541 15.0871 10.2753 14.7003 9.78777 14.2128C9.58916 13.9994 9.481 13.7173 9.48603 13.4258C9.49107 13.1343 9.6089 12.8562 9.81477 12.6498C10.0212 12.4439 10.2993 12.3261 10.5908 12.321C10.8823 12.316 11.1644 12.4242 11.3778 12.6228C11.6562 12.9021 11.987 13.1236 12.3512 13.2748C12.7154 13.426 13.1059 13.5039 13.5003 13.5039C13.8946 13.5039 14.2851 13.426 14.6493 13.2748C15.0135 13.1236 15.3443 12.9021 15.6228 12.6228L19.3728 8.87277C19.9083 8.30435 20.2013 7.54966 20.1897 6.76878C20.1781 5.98791 19.8627 5.24228 19.3105 4.69006C18.7583 4.13784 18.0126 3.82246 17.2318 3.81083C16.4509 3.7992 15.6962 4.09223 15.1278 4.62777L13.2528 6.50277C13.0394 6.70138 12.7573 6.80954 12.4658 6.8045C12.1743 6.79947 11.8962 6.68163 11.6898 6.47577C11.4839 6.26936 11.3661 5.99119 11.361 5.69971C11.356 5.40824 11.4642 5.12616 11.6628 4.91277ZM4.62777 19.3728C4.90619 19.6521 5.23699 19.8736 5.60121 20.0248C5.96543 20.176 6.35591 20.2539 6.75027 20.2539C7.14463 20.2539 7.53511 20.176 7.89933 20.0248C8.26355 19.8736 8.59435 19.6521 8.87277 19.3728L10.7478 17.4978C10.9612 17.2992 11.2432 17.191 11.5347 17.196C11.8262 17.2011 12.1044 17.3189 12.3108 17.5248C12.5166 17.7312 12.6345 18.0093 12.6395 18.3008C12.6445 18.5923 12.5364 18.8744 12.3378 19.0878L10.4628 20.9628C9.97523 21.4503 9.39645 21.837 8.75946 22.1009C8.12247 22.3647 7.43974 22.5005 6.75027 22.5005C5.35781 22.5005 4.02238 21.9474 3.03777 20.9628C2.05315 19.9782 1.5 18.6427 1.5 17.2503C1.5 15.8578 2.05315 14.5224 3.03777 13.5378L6.78777 9.78777C7.27528 9.3002 7.85406 8.91344 8.49106 8.64957C9.12805 8.3857 9.81078 8.24989 10.5003 8.24989C11.1898 8.24989 11.8725 8.3857 12.5095 8.64957C13.1465 8.91344 13.7253 9.3002 14.2128 9.78777C14.4114 10.0012 14.5195 10.2832 14.5145 10.5747C14.5095 10.8662 14.3916 11.1444 14.1858 11.3508C13.9794 11.5566 13.7012 11.6745 13.4097 11.6795C13.1182 11.6845 12.8362 11.5764 12.6228 11.3778C12.3443 11.0985 12.0135 10.8769 11.6493 10.7257C11.2851 10.5745 10.8946 10.4967 10.5003 10.4967C10.1059 10.4967 9.71543 10.5745 9.35121 10.7257C8.98699 10.8769 8.65619 11.0985 8.37777 11.3778L4.62777 15.1278C4.34848 15.4062 4.12689 15.737 3.97569 16.1012C3.82449 16.4654 3.74666 16.8559 3.74666 17.2503C3.74666 17.6446 3.82449 18.0351 3.97569 18.3993C4.12689 18.7635 4.34848 19.0943 4.62777 19.3728Z"
												fill="#747678"
											/>
										</SvgIcon>

										<Divider
											sx={{
												width: "18rem",
												borderTop: "2px dashed GrayText",
											}}
										/>
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<List>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												صفحه نخست
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												اخبار
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												درباره ما
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												قوانین و مقررات
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												سوالات متداول
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>

					<Box
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Grid>
							<Grid item>
								<Box sx={{ textAlign: "left", fontWeight: "bold" }}>
									<Typography
										variant="h6"
										fontWeight="bold">
										خدمات مشتریان
									</Typography>

									<Box
										display="flex"
										alignItems="center">
										<SvgIcon
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M10.5 21C10.5 21 9 21 9 19.5C9 18 10.5 13.5 16.5 13.5C22.5 13.5 24 18 24 19.5C24 21 22.5 21 22.5 21H10.5ZM16.5 12C17.6935 12 18.8381 11.5259 19.682 10.682C20.5259 9.83807 21 8.69347 21 7.5C21 6.30653 20.5259 5.16193 19.682 4.31802C18.8381 3.47411 17.6935 3 16.5 3C15.3065 3 14.1619 3.47411 13.318 4.31802C12.4741 5.16193 12 6.30653 12 7.5C12 8.69347 12.4741 9.83807 13.318 10.682C14.1619 11.5259 15.3065 12 16.5 12ZM7.824 21C7.60163 20.5317 7.49074 20.0183 7.5 19.5C7.5 17.4675 8.52 15.375 10.404 13.92C9.46364 13.6303 8.48392 13.4886 7.5 13.5C1.5 13.5 0 18 0 19.5C0 21 1.5 21 1.5 21H7.824ZM6.75 12C7.74456 12 8.69839 11.6049 9.40165 10.9017C10.1049 10.1984 10.5 9.24456 10.5 8.25C10.5 7.25544 10.1049 6.30161 9.40165 5.59835C8.69839 4.89509 7.74456 4.5 6.75 4.5C5.75544 4.5 4.80161 4.89509 4.09835 5.59835C3.39509 6.30161 3 7.25544 3 8.25C3 9.24456 3.39509 10.1984 4.09835 10.9017C4.80161 11.6049 5.75544 12 6.75 12Z"
												fill="#747678"
											/>
										</SvgIcon>
										<Divider
											sx={{
												width: "18rem",
												borderTop: "2px dashed GrayText",
											}}
										/>
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<List>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												پنل کاربری
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												سبد خرید
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												پیگیری سفارش
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: Colors.blue_dark }} />
										<Link href={"/"}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												لیست علاقه مندی ها
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>

					<Box
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Grid>
							<Grid item>
								<Box sx={{ textAlign: "left", fontWeight: "bold" }}>
									<Typography
										variant="h6"
										fontWeight="bold">
										تماس با ما
									</Typography>

									<Box
										display="flex"
										alignItems="center">
										<SvgIcon
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.3061 14.7611 16.1191 14.7523 15.9405 14.7948C15.7618 14.8372 15.5988 14.9291 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
												fill="#747678"
											/>
										</SvgIcon>
										<Divider
											sx={{
												width: "18rem",
												borderTop: "2px dashed GrayText",
											}}
										/>
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<List>
									<ListItem sx={{ py: 0.2 }}>
										<Link href={instagram_channel}>
											<Box
												component="span"
												sx={{
													display: "inline-flex",
													alignItems: "center",
													justifyContent: "center",
													width: 40,
													height: 40,
													borderRadius: "50%",
													bgcolor: "#22668D",
													mr: 2,
												}}>
												<InstagramIcon sx={{ color: "white" }} />
											</Box>
										</Link>
										<Link href={instagram_channel}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												پیج اینستاگرام:‌ Gizmo_shop
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<Link href={telegram_channel}>
											<Box
												component="span"
												sx={{
													display: "inline-flex",
													alignItems: "center",
													justifyContent: "center",
													width: 40,
													height: 40,
													borderRadius: "50%",
													bgcolor: "#22668D",
													mr: 2,
												}}>
												<TelegramIcon sx={{ color: "white" }} />
											</Box>
										</Link>
										<Link href={telegram_channel}>
											<Typography
												variant="h6"
												color={Colors.blue_dark}>
												کانال تلگرام
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<Link href={"/"}>
											<Box
												component="span"
												sx={{
													display: "inline-flex",
													alignItems: "center",
													justifyContent: "center",
													width: 40,
													height: 40,
													borderRadius: "50%",
													bgcolor: "#22668D",
													mr: 2,
												}}>
												<LocalPhoneIcon sx={{ color: "white" }} />
											</Box>
										</Link>
										<Typography
											variant="h6"
											color={Colors.blue_dark}>
											شماره تماس: ‌۰۹۹۷۷۵۵۳۵۶
										</Typography>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>

					<Box
						mt={3}
						mb={3}
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Grid>
							<Grid item>
								<Box sx={{ textAlign: "left", fontWeight: "bold" }}>
									<Typography
										variant="h6"
										fontWeight="bold">
										مجوز ها و گواهینامه ها
									</Typography>

									<Box
										display="flex"
										alignItems="center">
										<SvgIcon
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M15 22.0004L14.445 22.8324C14.5956 22.9329 14.7707 22.9906 14.9515 22.9994C15.1323 23.0082 15.3122 22.9677 15.4718 22.8823C15.6314 22.7969 15.7649 22.6697 15.8579 22.5144C15.9509 22.3591 16.0001 22.1815 16 22.0004H15ZM12 20.0004L12.555 19.1684C12.3907 19.0588 12.1976 19.0003 12 19.0003C11.8025 19.0003 11.6094 19.0588 11.445 19.1684L12 20.0004ZM9.00003 22.0004H8.00003C8 22.1815 8.04912 22.3591 8.14216 22.5144C8.23519 22.6697 8.36864 22.7969 8.52826 22.8823C8.68789 22.9677 8.86772 23.0082 9.04855 22.9994C9.22938 22.9906 9.40443 22.9329 9.55503 22.8324L9.00003 22.0004ZM15.555 21.1684L12.555 19.1684L11.445 20.8324L14.445 22.8324L15.555 21.1684ZM11.445 19.1684L8.44503 21.1684L9.55503 22.8324L12.555 20.8324L11.445 19.1684ZM12.762 3.43842L12.804 3.48842L14.327 2.19242L14.285 2.14242L12.762 3.43842ZM15.329 4.53442L15.394 4.52942L15.234 2.53542L15.169 2.54042L15.329 4.53442ZM16.471 5.60642L16.466 5.67142L18.46 5.83142L18.465 5.76642L16.471 5.60642ZM17.512 8.19642L17.562 8.23842L18.858 6.71542L18.808 6.67342L17.512 8.19642ZM17.562 9.76242L17.512 9.80442L18.808 11.3274L18.858 11.2854L17.562 9.76242ZM16.466 12.3294L16.471 12.3944L18.465 12.2344L18.46 12.1694L16.466 12.3294ZM15.394 13.4714L15.329 13.4664L15.169 15.4604L15.234 15.4654L15.394 13.4714ZM12.804 14.5124L12.762 14.5624L14.285 15.8584L14.327 15.8084L12.804 14.5124ZM11.238 14.5624L11.196 14.5124L9.67303 15.8084L9.71503 15.8584L11.238 14.5624ZM8.67103 13.4664L8.60603 13.4714L8.76603 15.4654L8.83103 15.4604L8.67103 13.4664ZM7.52903 12.3944L7.53403 12.3294L5.54003 12.1694L5.53503 12.2344L7.52903 12.3944ZM6.48803 9.80442L6.43803 9.76242L5.14203 11.2854L5.19203 11.3274L6.48803 9.80442ZM6.43803 8.23842L6.48803 8.19642L5.19203 6.67342L5.14203 6.71542L6.43803 8.23842ZM7.53403 5.67142L7.52903 5.60642L5.53503 5.76642L5.54003 5.83142L7.53403 5.67142ZM8.60603 4.52942L8.67003 4.53442L8.83103 2.54042L8.76603 2.53542L8.60603 4.52942ZM11.196 3.48842L11.238 3.43842L9.71503 2.14242L9.67303 2.19242L11.196 3.48842ZM8.67003 4.53442C9.14367 4.57249 9.62058 4.49752 10.0596 4.31566C10.4986 4.13381 10.8881 3.85028 11.196 3.48842L9.67303 2.19242C9.57027 2.31297 9.44035 2.40738 9.29396 2.46788C9.14758 2.52838 8.98891 2.55324 8.83103 2.54042L8.67003 4.53442ZM7.52903 5.60642C7.51741 5.46204 7.5373 5.31685 7.58731 5.18091C7.63733 5.04497 7.71628 4.92151 7.8187 4.81909C7.92113 4.71667 8.04458 4.63771 8.18052 4.5877C8.31646 4.53768 8.46165 4.5178 8.60603 4.52942L8.76603 2.53542C8.33296 2.50071 7.89752 2.56048 7.48982 2.71059C7.08211 2.86071 6.71188 3.09758 6.40472 3.40484C6.09756 3.7121 5.8608 4.0824 5.71081 4.49015C5.56082 4.8979 5.50019 5.33336 5.53503 5.76642L7.52903 5.60642ZM6.48803 8.19642C6.84989 7.88846 7.13342 7.49894 7.31527 7.05995C7.49713 6.62096 7.5721 6.14506 7.53403 5.67142L5.54003 5.83142C5.55286 5.9893 5.52799 6.14796 5.46749 6.29435C5.40699 6.44074 5.31258 6.57066 5.19203 6.67342L6.48803 8.19642ZM6.43803 9.76242C6.32757 9.66854 6.23883 9.55177 6.17798 9.4202C6.11713 9.28862 6.08561 9.14539 6.08561 9.00042C6.08561 8.85545 6.11713 8.71222 6.17798 8.58064C6.23883 8.44907 6.32757 8.3323 6.43803 8.23842L5.14203 6.71542C4.81098 6.99705 4.54508 7.34726 4.36273 7.74179C4.18038 8.13633 4.08594 8.56578 4.08594 9.00042C4.08594 9.43506 4.18038 9.86451 4.36273 10.259C4.54508 10.6536 4.81098 11.0038 5.14203 11.2854L6.43803 9.76242ZM7.53403 12.3294C7.5721 11.8558 7.49713 11.3799 7.31527 10.9409C7.13342 10.5019 6.84989 10.1124 6.48803 9.80442L5.19203 11.3274C5.31258 11.4302 5.40699 11.5601 5.46749 11.7065C5.52799 11.8529 5.55286 12.0115 5.54003 12.1694L7.53403 12.3294ZM8.60603 13.4714C8.46165 13.483 8.31646 13.4632 8.18052 13.4131C8.04458 13.3631 7.92113 13.2842 7.8187 13.1817C7.71628 13.0793 7.63733 12.9559 7.58731 12.8199C7.5373 12.684 7.51741 12.5388 7.52903 12.3944L5.53503 12.2344C5.50032 12.6675 5.56009 13.1029 5.71021 13.5106C5.86032 13.9183 6.09719 14.2886 6.40445 14.5957C6.71171 14.9029 7.08201 15.1397 7.48976 15.2896C7.89751 15.4396 8.33297 15.4993 8.76603 15.4644L8.60603 13.4714ZM12.762 14.5614C12.6682 14.6719 12.5514 14.7606 12.4198 14.8215C12.2882 14.8823 12.145 14.9138 12 14.9138C11.8551 14.9138 11.7118 14.8823 11.5803 14.8215C11.4487 14.7606 11.3319 14.6719 11.238 14.5614L9.71503 15.8584C9.99666 16.1895 10.3469 16.4554 10.7414 16.6377C11.1359 16.8201 11.5654 16.9145 12 16.9145C12.4347 16.9145 12.8641 16.8201 13.2587 16.6377C13.6532 16.4554 14.0034 16.1895 14.285 15.8584L12.762 14.5624V14.5614ZM16.471 12.3944C16.4827 12.5389 16.4638 12.6842 16.4137 12.8202C16.3636 12.9562 16.2846 13.0797 16.182 13.1822C16.0795 13.2846 15.9559 13.3635 15.8199 13.4135C15.6838 13.4634 15.5385 13.4832 15.394 13.4714L15.234 15.4654C15.6671 15.5001 16.1025 15.4404 16.5102 15.2902C16.9179 15.1401 17.2882 14.9033 17.5953 14.596C17.9025 14.2887 18.1393 13.9184 18.2893 13.5107C18.4392 13.1029 18.4999 12.6675 18.465 12.2344L16.471 12.3944ZM17.512 9.80442C17.1502 10.1124 16.8666 10.5019 16.6848 10.9409C16.5029 11.3799 16.428 11.8558 16.466 12.3294L18.46 12.1694C18.4472 12.0115 18.4721 11.8529 18.5326 11.7065C18.5931 11.5601 18.6875 11.4302 18.808 11.3274L17.512 9.80442ZM17.562 8.23842C17.6725 8.3323 17.7612 8.44907 17.8221 8.58064C17.8829 8.71222 17.9145 8.85545 17.9145 9.00042C17.9145 9.14539 17.8829 9.28862 17.8221 9.4202C17.7612 9.55177 17.6725 9.66854 17.562 9.76242L18.858 11.2854C19.1891 11.0038 19.455 10.6536 19.6373 10.259C19.8197 9.86451 19.9141 9.43506 19.9141 9.00042C19.9141 8.56578 19.8197 8.13633 19.6373 7.74179C19.455 7.34726 19.1891 6.99705 18.858 6.71542L17.562 8.23842ZM16.466 5.67142C16.428 6.14506 16.5029 6.62096 16.6848 7.05995C16.8666 7.49894 17.1502 7.88846 17.512 8.19642L18.808 6.67342C18.6875 6.57066 18.5931 6.44074 18.5326 6.29435C18.4721 6.14796 18.4472 5.9893 18.46 5.83142L16.466 5.67142ZM15.394 4.52942C15.5384 4.5178 15.6836 4.53768 15.8195 4.5877C15.9555 4.63771 16.0789 4.71667 16.1814 4.81909C16.2838 4.92151 16.3627 5.04497 16.4128 5.18091C16.4628 5.31685 16.4827 5.46204 16.471 5.60642L18.465 5.76642C18.4997 5.33335 18.44 4.89791 18.2899 4.4902C18.1397 4.0825 17.9029 3.71227 17.5956 3.40511C17.2884 3.09795 16.918 2.86119 16.5103 2.7112C16.1026 2.56121 15.6671 2.50058 15.234 2.53542L15.394 4.52942ZM12.804 3.48842C13.112 3.85028 13.5015 4.13381 13.9405 4.31566C14.3795 4.49752 14.8554 4.57249 15.329 4.53442L15.169 2.54042C15.0112 2.55324 14.8525 2.52838 14.7061 2.46788C14.5597 2.40738 14.4298 2.31297 14.327 2.19242L12.804 3.48842ZM14.285 2.14242C14.0034 1.81154 13.6522 1.54579 13.2578 1.36354C12.8634 1.1813 12.434 1.08691 11.9995 1.08691C11.565 1.08691 11.1357 1.1813 10.7413 1.36354C10.3468 1.54579 9.99666 1.81154 9.71503 2.14242L11.238 3.43842C11.3319 3.32795 11.4487 3.23922 11.5803 3.17837C11.7118 3.11751 11.8551 3.086 12 3.086C12.145 3.086 12.2882 3.11751 12.4198 3.17837C12.5514 3.23922 12.6682 3.32795 12.762 3.43842L14.285 2.14242ZM11.196 14.5124C10.9289 14.1985 10.6 13.9429 10.2297 13.7618C9.85945 13.5806 9.45583 13.4777 9.04403 13.4594L8.95603 15.4574C9.09324 15.4636 9.22772 15.4979 9.35108 15.5583C9.47443 15.6187 9.58403 15.7038 9.67303 15.8084L11.196 14.5124ZM9.04403 13.4604C8.91967 13.455 8.7951 13.4574 8.67103 13.4674L8.83103 15.4614C8.87259 15.4578 8.91434 15.4568 8.95603 15.4584L9.04403 13.4604ZM10 22.0004V14.4584H8.00003V22.0004H10ZM15.329 13.4664C15.2046 13.4563 15.0807 13.454 14.956 13.4594L15.044 15.4574C15.0857 15.4558 15.1275 15.4568 15.169 15.4604L15.329 13.4664ZM14.956 13.4594C14.5442 13.4777 14.1406 13.5806 13.7704 13.7618C13.4001 13.9429 13.0711 14.1985 12.804 14.5124L14.327 15.8084C14.4161 15.704 14.5258 15.619 14.6491 15.5588C14.7725 15.4986 14.9069 15.4644 15.044 15.4584L14.956 13.4594ZM14 14.4594V22.0004H16V14.4584L14 14.4594Z"
												fill="#747678"
											/>
											<path
												d="M14 8L11 11L10 10"
												stroke="#747678"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</SvgIcon>

										<Divider
											sx={{
												width: "18rem",
												borderTop: "2px dashed GrayText",
											}}
										/>
									</Box>
								</Box>
							</Grid>

							<Grid
								item
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Link href={eNAMAD_Link}>
									<Image
										src={eNAMAD}
										width={160}
										height="auto"
									/>
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Footer;
