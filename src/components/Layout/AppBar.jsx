"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
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
	Dialog,
	Slide,
	FormControl,
	Divider,
	Card,
	Badge,
	Avatar,
} from "@mui/material";
import { Colors } from "@/utils";

import { useCart } from "@/context/CartContext";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "@/components/siteIcons/logo.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuList from "@/components/Layout/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useMenuItemContext } from "../dashboard/DashBoardMenuSelector";
import LoginSignupModal from "../LoginSignupPopup/LoginSignupPopup";
import { getAllCategories, getAllProducts } from "@/services/Search";
import { useAuth } from "@/context/AuthContext";
import { baseUrl } from "@/services";

const AppBar = ({ isLanding }) => {
	const { menuItemValue, setMenuItemValue } = useMenuItemContext();
	const [user, setUser] = useState(false);
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorElProfile, setAnchorElProfile] = useState(null);
	const [loginOpen, setLoginOpen] = useState(false);
	const [popupState, setPopupState] = useState("login");
	const categories = [
		{ name: "لوازم آشپزخانه", slug: "kitchenware" },
		{ name: "لوازم بهداشتی", slug: "hygiene-products" },
		{ name: "لوازم جانبی", slug: "accessories" },
		{ name: "لوازم ورزشی", slug: "sports-equipment" },
		{ name: "لوازم برقی", slug: "electrical-appliances" },
	];
	const { tokens } = useAuth();
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(`${baseUrl}/api/users/info/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${tokens.access}`,
					},
				});

				if (response.ok) {
					setUser(await response.json());
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [tokens]);

	const { length } = useCart();

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
		setPopupState("login");
	};

	return (
		<>
			<Box
				displayPrint={"none"}
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
									display: { md: "felx", lg: "none" },
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
						{user ? (
							<Link href="/dashboard">
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
											py: { xs: "0px", xl: "2px" },
											px: { xs: "0px", xl: "10px" },
										}}>
										{"داشبورد"}
									</Typography>
								</Button>
							</Link>
						) : (
							<Button
								onClick={handleLoginModalOpen}
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
									{"ورود / ثبت نام"}
								</Typography>
							</Button>
						)}

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
								<Link href={"/dashboard"}>
									<Typography
										sx={{ color: "white", fontSize: { xs: 14, sm: 16 } }}>
										پنل کاربری
									</Typography>
								</Link>
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
						<Badge
							badgeContent={length}
							sx={{
								"& .MuiBadge-badge": {
									right: 15,
									top: 10,
									padding: "17px 10px 13px 10px",
									borderRadius: 10,
									fontSize: 20,
								},
							}}
							color="error">
							<Link href="/cart">
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
							</Link>
						</Badge>
					</Grid>
				</Grid>
			</Box>
			<LoginSignupModal
				popupState={popupState}
				setPopupState={setPopupState}
				open={loginOpen}
				onClose={handleLoginModalClose}
			/>

			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				BackdropComponent={Backdrop}
				TransitionComponent={Transition}
				BackdropProps={{
					sx: { backdropFilter: "blur(3px)" },
				}}>
				<Grid p={2}>
					<IconButton onClick={handleClose}>
						<CloseIcon fontSize="large" />
					</IconButton>
				</Grid>
				<Grid
					display="flex"
					justifyContent="center">
					<MenuList handleClose={handleClose} />
				</Grid>
			</Dialog>
		</>
	);
};

const Transition = React.forwardRef(function Transition(props, ref) {
	return (
		<Slide
			direction="up"
			ref={ref}
			{...props}
		/>
	);
});

const SearchField = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [producs, setProducts] = useState(null);
	const [categories, setCategories] = useState(null);
	const [open, setOpen] = useState(false);

	const handleOpen = async () => {
		if (producs === null) {
			const res1 = await getAllProducts();
			setProducts(res1);
			const res2 = await getAllCategories();
			setCategories(res2);
			console.log(res2);
		}
		console.log(producs);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSearch = (event) => {
		console.log(searchQuery);
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
			<Dialog
				fullWidth={true}
				maxWidth="md"
				sx={
					searchQuery.length > 0
						? {
								"& .MuiDialog-paper": {
									borderRadius: 8,
								},
								"& .MuiDialog-container": {
									pb: 7,
								},
						  }
						: {
								"& .MuiDialog-paper": {
									borderRadius: 8,
								},
								"& .MuiDialog-container": {
									pb: 70,
								},
						  }
				}
				open={open}
				onClose={handleClose}>
				<FormControl>
					<InputBase
						startAdornment={
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
						}
						endAdornment={
							<IconButton onClick={handleClose}>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M16.7017 9.09883C16.8058 9.0018 16.8897 8.88523 16.9488 8.75576C17.0078 8.6263 17.0407 8.48648 17.0457 8.34429C17.0507 8.20209 17.0276 8.06031 16.9778 7.92704C16.928 7.79376 16.8524 7.6716 16.7554 7.56753C16.6583 7.46347 16.5418 7.37953 16.4123 7.32051C16.2828 7.2615 16.143 7.22856 16.0008 7.22358C15.8586 7.2186 15.7168 7.24168 15.5836 7.29149C15.4503 7.34131 15.3281 7.41688 15.2241 7.51391L12.0542 10.4692L9.0989 7.29833C8.90116 7.09579 8.632 6.9787 8.34902 6.9721C8.06603 6.9655 7.79171 7.06992 7.58474 7.26301C7.37776 7.45611 7.25459 7.72255 7.24157 8.00531C7.22855 8.28807 7.32672 8.56469 7.51507 8.77599L10.4704 11.9458L7.29949 14.9012C7.19174 14.9972 7.10428 15.1138 7.04223 15.2441C6.98018 15.3744 6.9448 15.5158 6.93816 15.66C6.93152 15.8042 6.95376 15.9483 7.00357 16.0837C7.05338 16.2192 7.12976 16.3433 7.22822 16.4489C7.32669 16.5544 7.44524 16.6392 7.57693 16.6983C7.70862 16.7574 7.85079 16.7895 7.99509 16.7929C8.13938 16.7963 8.2829 16.7707 8.4172 16.7179C8.5515 16.665 8.67388 16.5858 8.77715 16.485L11.947 13.5307L14.9023 16.7006C14.9977 16.8103 15.1143 16.8997 15.245 16.9634C15.3757 17.0272 15.5179 17.0639 15.6631 17.0715C15.8083 17.0792 15.9536 17.0574 16.0903 17.0077C16.2269 16.958 16.3522 16.8813 16.4585 16.7821C16.5649 16.6829 16.6502 16.5634 16.7094 16.4305C16.7686 16.2977 16.8004 16.1543 16.803 16.0089C16.8055 15.8635 16.7788 15.7191 16.7244 15.5842C16.67 15.4494 16.5889 15.3269 16.4862 15.224L13.5319 12.0542L16.7017 9.09883Z"
										fill="#252B48"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M0.083374 12C0.083374 5.41879 5.41879 0.083374 12 0.083374C18.5813 0.083374 23.9167 5.41879 23.9167 12C23.9167 18.5813 18.5813 23.9167 12 23.9167C5.41879 23.9167 0.083374 18.5813 0.083374 12ZM12 21.75C10.7197 21.75 9.4518 21.4979 8.26888 21.0079C7.08595 20.5179 6.01112 19.7997 5.10575 18.8943C4.20038 17.989 3.4822 16.9141 2.99222 15.7312C2.50223 14.5483 2.25004 13.2804 2.25004 12C2.25004 10.7197 2.50223 9.4518 2.99222 8.26888C3.4822 7.08595 4.20038 6.01112 5.10575 5.10575C6.01112 4.20038 7.08595 3.4822 8.26888 2.99222C9.4518 2.50223 10.7197 2.25004 12 2.25004C14.5859 2.25004 17.0659 3.27727 18.8943 5.10575C20.7228 6.93423 21.75 9.41418 21.75 12C21.75 14.5859 20.7228 17.0659 18.8943 18.8943C17.0659 20.7228 14.5859 21.75 12 21.75Z"
										fill="#252B48"
									/>
								</svg>
							</IconButton>
						}
						sx={{
							my: 2,
							mx: 5,
							gap: 2,
							color: Colors.blue_dark,
							fontSize: { xs: 16, sm: 18, md: 20 },
							fontWeight: 500,
							boxShadow: "none",
						}}
						autoFocus={true}
						placeholder="محصول مورد نظر را جستجو کنید."
						value={searchQuery}
						onChange={handleChange}
					/>
				</FormControl>
				{searchQuery.length > 0 ? (
					<>
						<Divider />
						<Box height={500}>
							<Box
								display={
									categories.filter((c) => {
										return (
											c.name
												.toUpperCase()
												.split(" ")
												.join("")
												.includes(
													searchQuery.toUpperCase().split(" ").join(""),
												) ||
											c.tags
												.join("*!*")
												.includes(searchQuery.toUpperCase().split(" ").join(""))
										);
									}).length < 1
										? "none"
										: ""
								}>
								<Box
									mt={3}
									ml={6}
									display="flex"
									alignItems="center">
									<svg
										width="27"
										height="27"
										viewBox="0 0 27 27"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M20.7916 10.5834C23.2079 10.5834 25.1666 8.62462 25.1666 6.20837C25.1666 3.79213 23.2079 1.83337 20.7916 1.83337C18.3754 1.83337 16.4166 3.79213 16.4166 6.20837C16.4166 8.62462 18.3754 10.5834 20.7916 10.5834Z"
											stroke="#22668D"
											stroke-opacity="0.7"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M6.20831 25.1667C8.62456 25.1667 10.5833 23.208 10.5833 20.7917C10.5833 18.3755 8.62456 16.4167 6.20831 16.4167C3.79207 16.4167 1.83331 18.3755 1.83331 20.7917C1.83331 23.208 3.79207 25.1667 6.20831 25.1667Z"
											stroke="#22668D"
											stroke-opacity="0.7"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M16.4166 16.4167H25.1666V23.7084C25.1666 24.0951 25.013 24.4661 24.7395 24.7396C24.466 25.0131 24.0951 25.1667 23.7083 25.1667H17.875C17.4882 25.1667 17.1173 25.0131 16.8438 24.7396C16.5703 24.4661 16.4166 24.0951 16.4166 23.7084V16.4167ZM1.83331 1.83337H10.5833V9.12504C10.5833 9.51181 10.4297 9.88275 10.1562 10.1562C9.88269 10.4297 9.51175 10.5834 9.12498 10.5834H3.29165C2.90487 10.5834 2.53394 10.4297 2.26045 10.1562C1.98696 9.88275 1.83331 9.51181 1.83331 9.12504V1.83337Z"
											stroke="#22668D"
											stroke-opacity="0.7"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<Typography
										ml={2}
										variant="h6"
										fontWeight={700}>
										{"دسته بندی ها"}
									</Typography>
								</Box>
								<Box
									my={3}
									ml={10}
									display="flex"
									flexDirection="row">
									{categories
										.filter((c) => {
											return (
												c.name
													.toUpperCase()
													.split(" ")
													.join("")
													.includes(
														searchQuery.toUpperCase().split(" ").join(""),
													) ||
												c.tags
													.join("*!*")
													.includes(
														searchQuery.toUpperCase().split(" ").join(""),
													)
											);
										})
										.slice(0, 2)
										.map((c) => {
											return (
												<Link href={`/categories/${c.slug}`}>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															border: "1.5px solid #22668D",
															borderRadius: 5,
															px: 2,
															py: 0.3,
															mx: 1,
														}}>
														<Typography
															noWrap
															mr={1.5}
															variant="subtitle1">
															{c.name}
														</Typography>
														<svg
															width="9"
															height="18"
															viewBox="0 0 9 18"
															fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path
																d="M8.43893 18C8.58126 18 8.72692 17.9396 8.83615 17.8223C9.05462 17.5877 9.05462 17.2039 8.83615 16.9693L1.35877 8.94047L8.72692 1.02892C8.94538 0.79435 8.94538 0.410501 8.72692 0.175928C8.50846 -0.0586452 8.15097 -0.0586452 7.93251 0.175928L0.163844 8.51397C-0.0546188 8.74854 -0.0546188 9.13239 0.163844 9.36697L8.03843 17.8223C8.15097 17.9431 8.29331 18 8.43893 18Z"
																fill="#22668D"
															/>
														</svg>
													</Box>
												</Link>
											);
										})}
								</Box>
								<Divider />
							</Box>
							<Box
								mt={3}
								ml={6}
								display="flex"
								alignItems="center">
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g clip-path="url(#clip0_2941_2610)">
										<path
											d="M21 0.03125L32 5.53125V17.7969L30 16.7969V7.76562L22 11.7656V15.7969L20 16.7969V11.7656L12 7.76562V11.3125L10 10.3125V5.53125L21 0.03125ZM21 10.0312L23.7656 8.64062L16.5312 4.5L13.2344 6.15625L21 10.0312ZM25.9219 7.57812L28.7656 6.15625L21 2.26562L18.6719 3.4375L25.9219 7.57812ZM18 17.7969L16 18.7969V18.7812L10 21.7812V28.8906L16 25.875V28.125L9 31.625L0 27.1094V16.5469L9 12.0469L18 16.5469V17.7969ZM8 28.8906V21.7812L2 18.7812V25.875L8 28.8906ZM9 20.0469L14.7656 17.1719L9 14.2812L3.23438 17.1719L9 20.0469ZM18 20.0312L25 16.5312L32 20.0312V28.2656L25 31.7656L18 28.2656V20.0312ZM24 29.0312V24.2656L20 22.2656V27.0312L24 29.0312ZM30 27.0312V22.2656L26 24.2656V29.0312L30 27.0312ZM25 22.5312L28.7656 20.6406L25 18.7656L21.2344 20.6406L25 22.5312Z"
											fill="#22668D"
											fill-opacity="0.7"
										/>
									</g>
									<defs>
										<clipPath id="clip0_2941_2610">
											<rect
												width="32"
												height="32"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
								<Typography
									ml={2}
									variant="h6"
									fontWeight={700}>
									{"محصولات"}
								</Typography>
							</Box>
							<Box
								display="flex"
								flexDirection="column"
								my={2}
								mx={10}>
								{producs
									.filter((p) => {
										return p.name
											.toUpperCase()
											.split(" ")
											.join("")
											.includes(searchQuery.toUpperCase().split(" ").join(""));
									})
									.slice(0, 4)
									.map((p) => {
										return (
											<Link href={`/products/${p.slug}`}>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														my: 1.5,
													}}>
													<Avatar
														sx={{ bgcolor: "#22668D", width: 36, height: 36 }}
														variant="rounded">
														{"P"}
													</Avatar>
													<Typography
														ml={2}
														sx={{
															whiteSpace: "nowrap",
															overflow: "hidden",
															textOverflow: "ellipsis",
														}}
														fontWeight={500}
														variant="subtitle1">
														{p.name}
													</Typography>
												</Box>
											</Link>
										);
									})}
							</Box>
						</Box>
					</>
				) : (
					""
				)}
			</Dialog>
		</>
	);
};

export default AppBar;
