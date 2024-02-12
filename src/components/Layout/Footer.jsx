import React from 'react';
import {
	Box,
	Button,
	Typography,
	Grid,
	Divider,
	List,
	ListItem,
} from '@mui/material';

import { } from '@mui/icons-material';
import Image from 'next/image';

import ShopIcon from "@/components/siteIcons/shopIcon.png";
import AmazonIcon from "@/components/comanyIcons/amazon.png";
import NoonIcon from "@/components/comanyIcons/noon.png";
import Logo from "@/components/siteIcons/logo.png";
import Link from 'next/link';

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import LinkIcon from '@mui/icons-material/Link';


const eNAMAD_Link = "/";
const noon_Link = "https://www.noon.com/";
const amazon_Link = "https://www.amazon.com/";
const telegram_channel = "/";
const instagram_channel = "/";


import eNAMAD from "@/components/siteIcons/eNAMAD.png";


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
			>
				<Box
					display="flex"
					alignItems="center"
					mr={12}
				>
					<Image
						src={ShopIcon}
						width="auto"
						height={70}
					/>
					<Box pr={3}>
						<Typography
							variant="h5"
							fontWeight="bold"
						>
							خرید مستقیم از دوبی
						</Typography>
						<Typography
							variant="body1"
							color="GrayText"

							mt={1}
						>
							فقط کافیه لینک محصول مورد <br /> نظرتون رو برامون بفرستید.
						</Typography>
					</Box>



					<Grid pr={16}>
						<Link href={noon_Link} >

							<Image
								src={NoonIcon}
								width="auto"
								height={60}
							/>
						</Link>
					</Grid>

					<Grid pr={12} pl={5} mt={2}>
						<Link href={amazon_Link} >

							<Image
								src={AmazonIcon}
								width="auto"
								height={45}
							/>
						</Link>

					</Grid>
				</Box>

				<Button
					variant='contained'
					sx={{
						bgcolor: "#FFCC70",
						color: "black",
						borderRadius: "50px",
						boxShadow: 'none',
						ml: 8,
						'&:hover': {
							bgcolor: "#FFCC70",
						}
					}}
				>
					<Typography>
						ارسال لینک
					</Typography>
				</Button>
			</Box>

			<Grid
				bgcolor="#FFFADD"
				color="black"
				display="flex"
				alignItems="center"
				container
				direction="column"
			>
				<Grid
					pt={5}
					container
					direction="row"
					justifyContent="flex-start"
				>
					<Grid
						mr={12}
					>
						<Link href={'/'}>
							<Image
								src={Logo}
								width="auto"
								height={50}
							/>
						</Link>
					</Grid>

					<Typography
						sx={{
							pt: 2,
							pr: 3,
						}}
						variant='h6'
					>
						از تنوع محصولات ما لذت ببرید، با قیمت و کیفیتی که انتظار دارید خرید کنید.
					</Typography>
				</Grid>

				<Grid
					component="footer"
					flexWrap='wrap'
					container
					justifyContent='space-around'
					display='flex'
					mb={4}
				>

						<Box
							mt={3}
							mb={3}
							sx={{
								textAlign: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							>
							
							{/* <Grid item>
								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h6' fontWeight="bold">
										لینک های مفید
									</Typography>

									<Box display="flex" alignItems="center">
										<LinkIcon sx={{ color: 'GrayText' }} />
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
									</Box>
								</Box>
							</Grid> */}



						<Grid item>
							<Box display="flex" alignItems="center" width="100%">
								<Box flexGrow={1} display="flex" alignItems="center">
									<Box flex="1" border="1px dashed #747678" marginRight={1} />
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.6628 4.91277L13.5378 3.03777C14.0253 2.55024 14.6041 2.1635 15.2411 1.89965C15.8781 1.6358 16.5608 1.5 17.2503 1.5C17.9397 1.5 18.6225 1.6358 19.2595 1.89965C19.8964 2.1635 20.4752 2.55024 20.9628 3.03777C21.4503 3.5253 21.837 4.10409 22.1009 4.74108C22.3647 5.37807 22.5005 6.06079 22.5005 6.75027C22.5005 7.43974 22.3647 8.12247 22.1009 8.75946C21.837 9.39645 21.4503 9.97523 20.9628 10.4628L17.2128 14.2128C16.7253 14.7003 16.1465 15.0871 15.5095 15.351C14.8725 15.6148 14.1898 15.7506 13.5003 15.7506C12.8108 15.7506 12.128 15.6148 11.4911 15.351C10.8541 15.0871 10.2753 14.7003 9.78777 14.2128C9.58916 13.9994 9.481 13.7173 9.48603 13.4258C9.49107 13.1343 9.6089 12.8562 9.81477 12.6498C10.0212 12.4439 10.2993 12.3261 10.5908 12.321C10.8823 12.316 11.1644 12.4242 11.3778 12.6228C11.6562 12.9021 11.987 13.1236 12.3512 13.2748C12.7154 13.426 13.1059 13.5039 13.5003 13.5039C13.8946 13.5039 14.2851 13.426 14.6493 13.2748C15.0135 13.1236 15.3443 12.9021 15.6228 12.6228L19.3728 8.87277C19.9083 8.30435 20.2013 7.54966 20.1897 6.76878C20.1781 5.98791 19.8627 5.24228 19.3105 4.69006C18.7583 4.13784 18.0126 3.82246 17.2318 3.81083C16.4509 3.7992 15.6962 4.09223 15.1278 4.62777L13.2528 6.50277C13.0394 6.70138 12.7573 6.80954 12.4658 6.8045C12.1743 6.79947 11.8962 6.68163 11.6898 6.47577C11.4839 6.26936 11.3661 5.99119 11.361 5.69971C11.356 5.40824 11.4642 5.12616 11.6628 4.91277ZM4.62777 19.3728C4.90619 19.6521 5.23699 19.8736 5.60121 20.0248C5.96543 20.176 6.35591 20.2539 6.75027 20.2539C7.14463 20.2539 7.53511 20.176 7.89933 20.0248C8.26355 19.8736 8.59435 19.6521 8.87277 19.3728L10.7478 17.4978C10.9612 17.2992 11.2432 17.191 11.5347 17.196C11.8262 17.2011 12.1044 17.3189 12.3108 17.5248C12.5166 17.7312 12.6345 18.0093 12.6395 18.3008C12.6445 18.5923 12.5364 18.8744 12.3378 19.0878L10.4628 20.9628C9.97523 21.4503 9.39645 21.837 8.75946 22.1009C8.12247 22.3647 7.43974 22.5005 6.75027 22.5005C5.35781 22.5005 4.02238 21.9474 3.03777 20.9628C2.05315 19.9782 1.5 18.6427 1.5 17.2503C1.5 15.8578 2.05315 14.5224 3.03777 13.5378L6.78777 9.78777C7.27528 9.3002 7.85406 8.91344 8.49106 8.64957C9.12805 8.3857 9.81078 8.24989 10.5003 8.24989C11.1898 8.24989 11.8725 8.3857 12.5095 8.64957C13.1465 8.91344 13.7253 9.3002 14.2128 9.78777C14.4114 10.0012 14.5195 10.2832 14.5145 10.5747C14.5095 10.8662 14.3916 11.1444 14.1858 11.3508C13.9794 11.5566 13.7012 11.6745 13.4097 11.6795C13.1182 11.6845 12.8362 11.5764 12.6228 11.3778C12.3443 11.0985 12.0135 10.8769 11.6493 10.7257C11.2851 10.5745 10.8946 10.4967 10.5003 10.4967C10.1059 10.4967 9.71543 10.5745 9.35121 10.7257C8.98699 10.8769 8.65619 11.0985 8.37777 11.3778L4.62777 15.1278C4.34848 15.4062 4.12689 15.737 3.97569 16.1012C3.82449 16.4654 3.74666 16.8559 3.74666 17.2503C3.74666 17.6446 3.82449 18.0351 3.97569 18.3993C4.12689 18.7635 4.34848 19.0943 4.62777 19.3728Z"
											fill="#747678"
										/>
									</svg>
								</Box>
							</Box>
						</Grid>
							
							<Grid item>
								<List>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												صفحه نخست
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												اخبار
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												درباره ما
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												قوانین و مقررات
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												سوالات متداول
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Box>


						<Box
							mt={3}
							mb={3}
							sx={{
								textAlign: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							>
							
							<Grid item>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h6' fontWeight="bold">
										خدمات مشتریان
									</Typography>

									<Box display="flex" alignItems="center">
										<PeopleAltIcon sx={{ color: 'GrayText' }} />
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<List>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												پنل کاربری
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												سبد خرید
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												پیگیری سفارش
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48">
												لیست علاقه مندی ها
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Box>


						<Box
							mt={3}
							mb={3}
							sx={{
								textAlign: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							>
							
							<Grid item>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h6' fontWeight="bold">
										تماس با ما
									</Typography>

									<Box display="flex" alignItems="center">
										<LocalPhoneIcon sx={{ color: 'GrayText' }} />
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
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
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: 40,
													height: 40,
													borderRadius: '50%',
													bgcolor: '#22668D',
													ml: 2,
												}}
											>
												<InstagramIcon sx={{ color: "white" }} />
											</Box>
										</Link>
										<Link href={instagram_channel}>
											<Typography variant='h6' color="#252B48">
												پیج اینستاگرام:‌ Gizmo_shop
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<Link href={telegram_channel}>
											<Box
												component="span"
												sx={{
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: 40,
													height: 40,
													borderRadius: '50%',
													bgcolor: '#22668D',
													ml: 2,
												}}
											>
												<TelegramIcon sx={{ color: 'white'}} />
											</Box>
										</Link>
										<Link href={telegram_channel}>
											<Typography variant='h6' color="#252B48">
												کانال تلگرام
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2 }}>
										<Link href={'/'}>
											<Box
												component="span"
												sx={{
													display: 'inline-flex',
													alignItems: 'center',
													justifyContent: 'center',
													width: 40,
													height: 40,
													borderRadius: '50%',
													bgcolor: '#22668D',
													ml: 2,
												}}
											>
												<LocalPhoneIcon sx={{ color: "white"}} />
											</Box>
										</Link>
										<Typography variant='h6' color="#252B48">
											شماره تماس: ‌۰۹۹۷۷۵۵۳۵۶
										</Typography>
									</ListItem>
								</List>
							</Grid>
						</Box>


						<Box
							mt={3}
							mb={3}
							sx={{
								textAlign: 'center',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							>
							
							<Grid item>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h6' fontWeight="bold">
										مجوز ها و گواهینامه ها
									</Typography>

									<Box display="flex" alignItems="center">
										<WorkspacePremiumIcon sx={{ color: 'GrayText' }} />
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
									</Box>
								</Box>
							</Grid>

							<Grid
								item
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Link href={eNAMAD_Link}>
									<Image src={eNAMAD} width={150} height="auto" />
								</Link>
							</Grid>
						</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default Footer;
