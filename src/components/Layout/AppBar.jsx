"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import {
	Typography,
	Box,
	Grid,
	Button,
	IconButton,
	MenuItem,
	SvgIcon,
	Modal,
	Menu,
	Backdrop,
	Paper,
	InputBase,
	List,
	Dialog,
} from "@mui/material";
import { Colors } from "@/utils";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "@/components/siteIcons/logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuList from "@/components/Layout/Menu";

const AppBar = ({ isLanding }) => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorElProfile, setAnchorElProfile] = useState(null);
	const [loginOpen, setLoginOpen] = useState(false);
	const [popupState, setPopupState] = useState("phone-login");
	const categories = [
		{ name: "لوازم آشپزخانه", slug: "kitchenware" },
		{ name: "لوازم بهداشتی", slug: "hygiene-products" },
		{ name: "لوازم جانبی", slug: "accessories" },
		{ name: "لوازم ورزشی", slug: "sports-equipment" },
		{ name: "لوازم برقی", slug: "electrical-appliances" },
	];

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleProfileOpen = (event) => {
		setAnchorElProfile(event.currentTarget);
	};

	const handleProfileClose = () => {
		setAnchorElProfile(null);
	};

	const handleLoginModalOpen = (e) => {
		setLoginOpen(true);
	};

	const handleLoginModalClose = (e) => {
		setLoginOpen(false);
		setPopupState("phone-login");
	};

	return (
		<>
			<Box
				bgcolor={Colors.yellow}
				borderRadius={isLanding ? "50px 50px 0px 0px" : "50px"}
				mt={2}
				mr={2}
				ml={2}
				py={3}
				px={3}>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					flexWrap="nowrap">
					<Grid
						container
						justifyContent="space-between"
						alignItems="center"
						flexWrap="nowrap">
						<Grid
							item
							display="flex"
							alignItems="center">
							<Grid
								sx={{
									pr: 2,
									scale: { xs: "1", sm: "1.3" },
									display: { lg: "felx", xl: "none" },
								}}
								onClick={handleOpen}>
								<SvgIcon
									width="24"
									height="18"
									viewBox="0 0 24 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M2.00016 0.666992H10.3335C10.7755 0.666992 11.1994 0.842587 11.512 1.15515C11.8246 1.46771 12.0002 1.89163 12.0002 2.33366C12.0002 2.77569 11.8246 3.19961 11.512 3.51217C11.1994 3.82473 10.7755 4.00033 10.3335 4.00033H2.00016C1.55813 4.00033 1.13421 3.82473 0.821651 3.51217C0.509091 3.19961 0.333496 2.77569 0.333496 2.33366C0.333496 1.89163 0.509091 1.46771 0.821651 1.15515C1.13421 0.842587 1.55813 0.666992 2.00016 0.666992ZM13.6668 14.0003H22.0002C22.4422 14.0003 22.8661 14.1759 23.1787 14.4885C23.4912 14.801 23.6668 15.225 23.6668 15.667C23.6668 16.109 23.4912 16.5329 23.1787 16.8455C22.8661 17.1581 22.4422 17.3337 22.0002 17.3337H13.6668C13.2248 17.3337 12.8009 17.1581 12.4883 16.8455C12.1758 16.5329 12.0002 16.109 12.0002 15.667C12.0002 15.225 12.1758 14.801 12.4883 14.4885C12.8009 14.1759 13.2248 14.0003 13.6668 14.0003ZM2.00016 7.33366H22.0002C22.4422 7.33366 22.8661 7.50926 23.1787 7.82182C23.4912 8.13438 23.6668 8.5583 23.6668 9.00033C23.6668 9.44236 23.4912 9.86628 23.1787 10.1788C22.8661 10.4914 22.4422 10.667 22.0002 10.667H2.00016C1.55813 10.667 1.13421 10.4914 0.821651 10.1788C0.509091 9.86628 0.333496 9.44236 0.333496 9.00033C0.333496 8.5583 0.509091 8.13438 0.821651 7.82182C1.13421 7.50926 1.55813 7.33366 2.00016 7.33366Z"
										fill="#22668D"
									/>
								</SvgIcon>
							</Grid>

							<Grid
								pb={1}
								display="flex"
								alignItems="center"
								sx={{
									pr: { xs: "0", lg: 2 },
									width: { xs: 75, sm: "auto" },
								}}>
								<Link href={"/"}>
									<Image
										alt="logo"
										src={Logo}
										width={90}
										height="auto"
									/>
								</Link>
							</Grid>

							<Grid
								item
								sx={{
									display: { xs: "none", lg: "contents" },
								}}>
								<IconButton
									disableRipple
									onClick={handleMenuOpen}
									sx={{
										color: "black",
										transition: "0.3s",
										"&:hover": {
											backgroundColor: "transparent",
											scale: "1.08",
										},
									}}>
									<Typography
										variant="h6"
										noWrap
										fontWeight="bold"
										fontSize={19}>
										دسته بندی ها
									</Typography>
									<ExpandMoreIcon />
								</IconButton>

								<Menu
									id="categories"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleMenuClose}
									PaperProps={{
										sx: {
											backdropFilter: "blur(15px)",
											backgroundColor: "rgba(199, 227, 221, 0.8)",
											"& .MuiMenuItem-root": {
												borderBottom: "5px solid rgba(199, 227, 221, 0.34)",
												"&:last-child": {
													borderBottom: "none",
												},
											},
										},
									}}>
									{categories.map((category) => (
										<MenuItem
											key={category.slug}
											onClick={handleMenuClose}>
											<Link
												href={`/categories/${category.name}`}
												passHref>
												<Typography
													component="a"
													style={{ textDecoration: "none", color: "inherit" }}>
													{category.name}
												</Typography>
											</Link>
										</MenuItem>
									))}
								</Menu>
								<Grid
									sx={{
										transition: "0.3s",
										"&:hover": {
											scale: "1.08",
										},
									}}>
									<Link href={"/dubai"}>
										<Typography
											pl={1}
											variant="h6"
											noWrap
											fontWeight="bold"
											fontSize={19}>
											خرید از دبی
										</Typography>
									</Link>
								</Grid>

								<Grid
									sx={{
										transition: "0.3s",
										"&:hover": {
											scale: "1.08",
										},
									}}>
									<Link href={"/contact"}>
										<Typography
											pl={3}
											variant="h6"
											noWrap
											fontWeight="bold"
											fontSize={19}>
											ارتباط با ما
										</Typography>
									</Link>
								</Grid>

								<Grid
									sx={{
										transition: "0.3s",
										"&:hover": {
											scale: "1.08",
										},
									}}>
									<Link href={"/faq"}>
										<Typography
											pl={3}
											variant="h6"
											noWrap
											fontWeight="bold"
											fontSize={19}>
											سوالات متداول
										</Typography>
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Grid
						item
						display="flex"
						alignItems="center"
						justifyContent="flex-end">
						<SearchField />

						<Button
							variant="contained"
							sx={{
								borderRadius: "24px",
								ml: 2,
								boxShadow: "none",
								bgcolor: Colors.blue,
								color: "white",
								display: { xs: "none", xl: "flex" },
								"&:hover": {
									backgroundColor: Colors.blue,
									boxShadow: "none",
								},
							}}>
							<Typography
								variant="h6"
								noWrap
								sx={{
									display: { xs: "none", xl: "flex" },
									p: { xs: "0px", xl: "2px" },
								}}>
								ورود / ثبت نام
							</Typography>
						</Button>

						<IconButton
							onClick={handleProfileOpen}
							variant="contained"
							sx={{
								p: { sm: "7px" },
								display: { xs: "flex", xl: "none" },
								scale: { xs: "0.9", sm: "1" },
								ml: { xs: "2px", sm: "14px" },
								color: "white",
								bgcolor: Colors.blue,
								boxShadow: "none",
								"&:hover": {
									bgcolor: Colors.blue,
									boxShadow: "none",
								},
							}}>
							<PersonOutlineOutlinedIcon
								fontSize="medium"
								sx={{
									display: { xs: "flex", sm: "none" },
								}}
							/>
							<PersonOutlineOutlinedIcon
								fontSize="large"
								sx={{
									display: { xs: "none", sm: "flex" },
								}}
							/>
						</IconButton>

						<Menu
							id="categories"
							anchorEl={anchorElProfile}
							keepMounted
							open={Boolean(anchorElProfile)}
							onClose={handleProfileClose}
							PaperProps={{
								sx: {
									mt: 1,
									backdropFilter: "blur(15px)",
									backgroundColor: "rgba(34, 102, 141, 1)",
									"& .MuiMenuItem-root": {
										borderBottom: "1px solid white",
										"&:last-child": {
											borderBottom: "none",
										},
									},
								},
							}}>
							<MenuItem
								sx={{ justifyContent: "center" }}
								onClick={handleProfileClose}>
								<PersonOutlineOutlinedIcon
									sx={{
										color: "white",
										mr: 1,
										mb: 1,
										scale: { xs: "1", sm: "1.2" },
									}}
								/>
								<Typography
									fontWeight={600}
									sx={{ color: "white", mb: 1, fontSize: { xs: 16, sm: 18 } }}>
									پوریا کرمی
								</Typography>
							</MenuItem>
							<MenuItem
								sx={{ justifyContent: "center", mt: { xs: 0, sm: 1 } }}
								onClick={handleProfileClose}>
								<Typography
									sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
									پنل کاربری
								</Typography>
							</MenuItem>
							<MenuItem
								sx={{ justifyContent: "center", mt: { xs: 0, sm: 1 } }}
								onClick={handleProfileClose}>
								<Typography
									sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
									سبد خرید
								</Typography>
							</MenuItem>
							<MenuItem
								sx={{ justifyContent: "center", mt: { xs: 0, sm: 1 } }}
								onClick={handleProfileClose}>
								<Typography
									sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
									پیگیری سفارش
								</Typography>
							</MenuItem>
							<MenuItem
								sx={{ justifyContent: "center", mt: { xs: 0, sm: 1 } }}
								onClick={handleProfileClose}>
								<Grid sx={{ scale: { xs: "0.9", sm: "1" } }}>
									<SvgIcon
										width="15"
										height="16"
										viewBox="0 0 15 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M9.75 15.5C9.94891 15.5 10.1397 15.421 10.2803 15.2803C10.421 15.1397 10.5 14.9489 10.5 14.75C10.5 14.5511 10.421 14.3603 10.2803 14.2197C10.1397 14.079 9.94891 14 9.75 14H3.5C2.96957 14 2.46086 13.7893 2.08579 13.4142C1.71071 13.0391 1.5 12.5304 1.5 12V4C1.5 3.46957 1.71071 2.96086 2.08579 2.58579C2.46086 2.21071 2.96957 2 3.5 2H9.75C9.94891 2 10.1397 1.92098 10.2803 1.78033C10.421 1.63968 10.5 1.44891 10.5 1.25C10.5 1.05109 10.421 0.860322 10.2803 0.71967C10.1397 0.579018 9.94891 0.5 9.75 0.5H3.5C2.57174 0.5 1.6815 0.868749 1.02513 1.52513C0.368749 2.1815 0 3.07174 0 4V12C0 12.9283 0.368749 13.8185 1.02513 14.4749C1.6815 15.1313 2.57174 15.5 3.5 15.5H9.75ZM10.741 4.199C10.8134 4.13214 10.8982 4.08019 10.9906 4.04612C11.083 4.01205 11.1813 3.99652 11.2797 4.00042C11.3781 4.00432 11.4748 4.02757 11.5643 4.06885C11.6537 4.11013 11.7342 4.16863 11.801 4.241L14.801 7.491C14.9291 7.62957 15.0002 7.81132 15.0002 8C15.0002 8.18868 14.9291 8.37043 14.801 8.509L11.801 11.759C11.6659 11.905 11.4783 11.9913 11.2795 11.999C11.0807 12.0067 10.887 11.9351 10.741 11.8C10.595 11.6649 10.5087 11.4773 10.501 11.2785C10.4933 11.0797 10.5649 10.886 10.7 10.74L12.538 8.749H4.75C4.55109 8.749 4.36032 8.66998 4.21967 8.52933C4.07902 8.38868 4 8.19791 4 7.999C4 7.80009 4.07902 7.60932 4.21967 7.46867C4.36032 7.32802 4.55109 7.249 4.75 7.249H12.537L10.699 5.258C10.6321 5.18565 10.5802 5.10084 10.5461 5.0084C10.512 4.91597 10.4965 4.81773 10.5004 4.7193C10.5043 4.62086 10.5276 4.52416 10.5689 4.43472C10.6101 4.34527 10.6686 4.26583 10.741 4.199Z"
											fill="white"
										/>
									</SvgIcon>
								</Grid>
								<Typography
									ml={1}
									sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
									خروج از حساب
								</Typography>
							</MenuItem>
						</Menu>

						<IconButton
							variant="contained"
							sx={{
								p: { xs: "11px", sm: "13px" },
								scale: "0.8",
								ml: { xs: "4px", sm: 1 },
								mr: { xs: 0, sm: 1 },
								bgcolor: Colors.blue,
								color: "white",
								"&:hover": {
									backgroundColor: Colors.blue,
								},
							}}>
							<LocalMallOutlinedIcon
								fontSize="medium"
								sx={{
									display: { xs: "flex", sm: "none" },
								}}
							/>
							<LocalMallOutlinedIcon
								fontSize="large"
								sx={{
									display: { xs: "none", sm: "flex" },
								}}
							/>
						</IconButton>
					</Grid>
				</Grid>
			</Box>

			<Dialog
				sx={{
					mt: 10,
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "center",
				}}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				// BackdropComponent={Backdrop}
				// BackdropProps={{
				// 	timeout: 100,
				// 	style: {
				// 		backdropFilter: 'blur(2px)',
				// 	},
				// }}
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					bgcolor="transparent"
					width={"800px"}
					height={"2000px"}>
					<MenuList />
				</Box>
			</Dialog>
		</>
	);
};

const SearchField = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSearch = (event) => {
		// fetching ...
		console.log("fetching results for:", searchQuery);
	};

	const handleChange = (event) => {
		setSearchQuery(event.target.value);
		handleSearch();
	};

	return (
		<>
			<IconButton
				onClick={handleOpen}
				type="button"
				aria-label="search"
				sx={{
					p: { xs: "13px", sm: "12px" },
					scale: { xs: "0.7", sm: "1" },
					color: "white",
					backgroundColor: Colors.blue,
					"&:hover": {
						backgroundColor: Colors.blue,
					},
				}}>
				<SvgIcon
					width="23"
					height="23"
					viewBox="0 0 23 23"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M22.6872 19.885L18.2082 15.4067C18.006 15.2046 17.732 15.0923 17.4444 15.0923H16.7122C17.9521 13.5067 18.6889 11.5124 18.6889 9.34284C18.6889 4.18182 14.5063 0 9.34443 0C4.18253 0 0 4.18182 0 9.34284C0 14.5039 4.18253 18.6857 9.34443 18.6857C11.5143 18.6857 13.509 17.949 15.0949 16.7093V17.4415C15.0949 17.7289 15.2072 18.0029 15.4093 18.2051L19.8884 22.6833C20.3107 23.1056 20.9935 23.1056 21.4113 22.6833L22.6827 21.4122C23.105 20.9899 23.105 20.3072 22.6872 19.885ZM9.34443 15.0923C6.16822 15.0923 3.59401 12.523 3.59401 9.34284C3.59401 6.16717 6.16373 3.5934 9.34443 3.5934C12.5206 3.5934 15.0949 6.16268 15.0949 9.34284C15.0949 12.5185 12.5251 15.0923 9.34443 15.0923Z"
						fill="white"
					/>
				</SvgIcon>
			</IconButton>
			<Modal
				sx={{
					mt: 10,
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "center",
				}}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 100,
					style: {
						backdropFilter: "blur(2px)",
					},
				}}>
				<Paper
					component="form"
					sx={{
						display: "flex",
						alignItems: "center",
						borderRadius: "25px",
						backgroundColor: "white",
						backdropFilter: "blur(5px)",
					}}>
					<Grid
						ml={2}
						sx={{ scale: { xs: "0.7", sm: "1" } }}>
						<SvgIcon
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M22.6872 19.885L18.2082 15.4067C18.006 15.2046 17.732 15.0923 17.4444 15.0923H16.7122C17.9521 13.5067 18.6889 11.5124 18.6889 9.34284C18.6889 4.18182 14.5063 0 9.34443 0C4.18253 0 0 4.18182 0 9.34284C0 14.5039 4.18253 18.6857 9.34443 18.6857C11.5143 18.6857 13.509 17.949 15.0949 16.7093V17.4415C15.0949 17.7289 15.2072 18.0029 15.4093 18.2051L19.8884 22.6833C20.3107 23.1056 20.9935 23.1056 21.4113 22.6833L22.6827 21.4122C23.105 20.9899 23.105 20.3072 22.6872 19.885ZM9.34443 15.0923C6.16822 15.0923 3.59401 12.523 3.59401 9.34284C3.59401 6.16717 6.16373 3.5934 9.34443 3.5934C12.5206 3.5934 15.0949 6.16268 15.0949 9.34284C15.0949 12.5185 12.5251 15.0923 9.34443 15.0923Z"
								fill="#22668D"
							/>
						</SvgIcon>
					</Grid>
					<InputBase
						sx={{
							width: { xs: 250, sm: 450, md: 650 },
							ml: 2,
							flex: 1,
							color: Colors.blue_dark,
							fontSize: { xs: 14, sm: 16, md: 18 },
							boxShadow: "none",
							padding: { xs: "5px", sm: 1 },
						}}
						placeholder="محصول مورد نظر را جستجو کنید."
						inputProps={{ "aria-label": "search field" }}
						value={searchQuery}
						onChange={handleChange}
					/>
				</Paper>
			</Modal>
		</>
	);
};

export default AppBar;
