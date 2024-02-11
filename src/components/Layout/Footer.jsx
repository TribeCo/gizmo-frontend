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
				px={2}
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Box>
					<Button
						variant='contained'
						sx={{
							ml: 5,
							bgcolor: "#FFCC70",
							color: "black",
							borderRadius: "50px",
							boxShadow: 'none',
							'&:hover': {
								bgcolor: "#FFCC70",
							}
						}}
					>
						<Typography variant='body1'>
							ارسال لینک
						</Typography>
					</Button>
				</Box>

				<Box
					display="flex"
					alignItems="center"
					mr={12}
					ml={3}
				>
					<Grid >
						<Link href={noon_Link} >

							<Image
								src={NoonIcon}
								width="auto"
								height={60}
							/>
						</Link>
					</Grid>


					<Grid pr={20} pl={5}>
						<Link href={amazon_Link} >

							<Image
								src={AmazonIcon}
								width="auto"
								height={45}
							/>
						</Link>

					</Grid>


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
							dir="rtl"
							mt={1}
						>
							فقط کافیه لینک محصول مورد <br /> نظرتون رو برامون بفرستید.
						</Typography>
					</Box>

					<Image
						src={ShopIcon}
						width="auto"
						height={70}
					/>
				</Box>
			</Box>

			<Grid
				bgcolor="#FFFADD"
				color="black"
				display="flex"
				alignItems="center"
				direction="column"
			>
				<Grid
					pr={2}
					pt={5}
					container
					direction="row"
					justifyContent="flex-end"
				>
					<Typography
						mt={1}
						variant='h6'
						dir="rlt"
						mr={4}	
					>
						.از تنوع محصولات ما لذت ببرید، با قیمت و کیفیتی که انتظار دارید خرید کنید
					</Typography>

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
				</Grid>

				<Grid
					pt={6} pb={12}
					pr={16}
					container
					justifyContent="flex-end"
				>
					<Box
						direction="row"
						display="flex"
					>
						<Grid
							container
							direction="row"
							alignItems="flex-start"
							justifyContent="flex-end"
						>
							<Grid item xs={9}>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h6'>
										مجوز ها و گواهینامه ها
									</Typography>

									<Box display="flex" alignItems="center">
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
										<WorkspacePremiumIcon sx={{ color: 'GrayText' }} />
									</Box>
								</Box>
							</Grid>

							<Grid
								item
								xs={9}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Link href={eNAMAD_Link}>
									<Image src={eNAMAD} width={200} height="auto" />
								</Link>
							</Grid>
						</Grid>
					</Box>

					<Box
						direction="row"
						display="flex"
					>
						<Grid
							container
							direction="row"
							alignItems="flex-start"
							justifyContent="flex-end">
							<Grid item xs={9}>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h5'>
										تماس با ما
									</Typography>

									<Box display="flex" alignItems="center">
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
										<LocalPhoneIcon sx={{ color: 'GrayText' }} />
									</Box>
								</Box>
							</Grid>

							<Grid item xs={9}>
								<List>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
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
											<Typography variant='h6' color="#252B48" dir="rtl">
												پیج اینستاگرام:‌ Gizmo_shop
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
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
												<TelegramIcon sx={{ color: 'white', fontSize: 24 }} />
											</Box>
										</Link>
										<Link href={telegram_channel}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												کانال تلگرام
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
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
											<LocalPhoneIcon sx={{ color: "white" }} />
										</Box>
										<Typography variant='h6' color="#252B48" dir="rtl">
											شماره تماس: ‌۰۹۹۷۷۵۵۳۵۶
										</Typography>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>

					<Box
						direction="row"
						display="flex"
					>
						<Grid
							container
							direction="row"
							alignItems="flex-start"
							justifyContent="flex-end">
							<Grid item xs={9}>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h5'>
										خدمات مشتریان
									</Typography>

									<Box display="flex" alignItems="center">
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
										<PeopleAltIcon sx={{ color: 'GrayText' }} />
									</Box>
								</Box>
							</Grid>

							<Grid item xs={9}>
								<List>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												پنل کاربری
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												سبد خرید
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												پیگیری سفارش
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												لیست علاقه مندی ها
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>

					<Box
						direction="row"
						display="flex"
					>
						<Grid
							container
							direction="row"
							alignItems="flex-start"
							justifyContent="flex-end">
							<Grid item xs={9}>

								<Box sx={{ textAlign: 'right', fontWeight: 'bold' }}>
									<Typography variant='h5'>
										لینک های مفید
									</Typography>

									<Box display="flex" alignItems="center">
										<Divider
											sx={{
												width: '100%',
												borderTop: '2px dashed GrayText',
											}}
										/>
										<LinkIcon sx={{ color: 'GrayText' }} />
									</Box>
								</Box>
							</Grid>

							<Grid item xs={9}>
								<List>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												صفحه نخست
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												اخبار
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												درباره ما
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												قوانین و مقررات
											</Typography>
										</Link>
									</ListItem>
									<ListItem sx={{ py: 0.2, textAlign: 'right', ml: 3 }} dir='rtl'>
										<ArrowLeftIcon sx={{ color: "#252B48" }} />
										<Link href={'/'}>
											<Typography variant='h6' color="#252B48" dir="rtl">
												سوالات متداول
											</Typography>
										</Link>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default Footer;
