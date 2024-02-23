"use client";

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import {
	Typography,
	Box,
	Grid,
	Button,
	IconButton,
	Menu,
	MenuItem,
	SvgIcon,
} from '@mui/material';

import { Colors } from '@/utils';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "@/components/siteIcons/logo.png";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import LoginSignupModal from "@/components/LoginSignupPopup/LoginSignupPopup";


const AppBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [loginOpen, setLoginOpen] = useState(false);
	const [popupState, setPopupState] = useState("phone-login");

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLoginModalOpen = (e) => {
		setLoginOpen(true);
	};

	const handleLoginModalClose = (e) => {
		setLoginOpen(false);
		setPopupState("phone-login");
	};

	return (
		<Box
			bgcolor={Colors.yellow}
			borderRadius="36px"
			mt={2} mr={2} ml={2}
			py={3} px={3}
		>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center"
				flexWrap="nowrap"
			>
				<Grid
					item
					xs={6}
					display="flex"
					alignItems="center"
				>
					<Grid pb={1} pr={3}>
						<Link href={"/"}>
							<Image
								alt='logo'
								src={Logo}
								width={80}
								height="auto"
							/>
						</Link>
					</Grid>

					<IconButton
						disableRipple
						onClick={handleMenuOpen}
						sx={{
							color: "black",
							'&:hover': {
								backgroundColor: "transparent",
							},
						}}
					>
						<Typography variant='h6'>
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
								backdropFilter: 'blur(15px)',
								backgroundColor: 'rgba(199, 227, 221, 0.8)',
								'& .MuiMenuItem-root': {
									borderBottom: '5px solid rgba(199, 227, 221, 0.34)',
									'&:last-child': {
										borderBottom: 'none',
									},
								},
							}}
							onClick={handleLoginModalOpen}
							>
							},
						}}
					>
						<MenuItem onClick={handleMenuClose}>
							<Typography>
								لوازم آشپزخانه
							</Typography>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<Typography>
								لوازم بهداشتی
							</Typography>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<Typography>
								لوازم جانبی
							</Typography>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<Typography>
								لوازم ورزشی
							</Typography>
						</MenuItem>
						<MenuItem onClick={handleMenuClose}>
							<Typography>
								لوازم برقی
							</Typography>
						</MenuItem>
					</Menu>

					<Link href={"/"}>
						<Typography pl={1} variant='h6'>
							درباره گیزموشاپ
						</Typography>
					</Link>

					<Link href={"/"}>
						<Typography pl={3} variant='h6'>
							ارتباط با ما
						</Typography>
					</Link>

					<Link href={"/"}>
						<Typography pl={3} variant='h6'>
							سوالات متداول
						</Typography>
					</Link>
				</Grid>

						<LoginSignupModal open={loginOpen} onClose={handleLoginModalClose} popupState={popupState} setPopupState={setPopupState} />

						<IconButton
							variant='contained'
							sx={{
								ml: 3,
								mr: 1,
								bgcolor: Colors.blue,
								color: "white",
								transform: 'scale(1.1)',
								'&:hover': {
									backgroundColor: Colors.blue,
								},
							}}>
							<ShoppingBagOutlinedIcon />
						</IconButton>
					</Grid>

				<Grid
					item
					xs={6}
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>

					<SearchField />

					<Button
						variant='contained'
						sx={{
							borderRadius: '24px',
							ml: 3,
							boxShadow: "none",
							bgcolor: Colors.blue,
							color: "white",
							transform: 'scale(1.2)',
							'&:hover': {
								backgroundColor: Colors.blue,
								boxShadow: "none",
							},
						}}>
							
						<Typography>
							ورود / ثبت نام
						</Typography>
					</Button>

					<IconButton
						variant='contained'
						sx={{
							ml: 3,
							mr: 1,
							bgcolor: Colors.blue,
							color: "white",
							transform: 'scale(1.1)',
							'&:hover': {
								backgroundColor: Colors.blue,
							},
						}}>
						<ShoppingBagOutlinedIcon />
					</IconButton>
				</Grid>
			</Grid>
		</Box>
	);
}


const SearchField = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (event) => {
		// fetching ...
		console.log("fetching results for:", searchQuery);
	}

	const handleChange = (event) => {
		setSearchQuery(event.target.value);
		handleSearch();
	};

	return (
		<Paper
			component="form"
			sx={{
				display: 'flex',
				alignItems: 'center',
				borderRadius: '25px',
				backgroundColor: Colors.blue,
			}}
		>
			<InputBase
				sx={{
					ml: 2,
					flex: 1,
					color: 'white',
					width: 300,
				}}
				placeholder="محصول مورد نظر را جستجو کنید."
				inputProps={{ 'aria-label': 'search field' }}
				value={searchQuery}
				onChange={handleChange}
			/>
				<IconButton
					type="button"
					aria-label="search"
					sx={{
						p: '10px',
						color: 'white',
					}}
					onClick={handleSearch}
					disableRipple
					>
					<SvgIcon width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.6872 19.885L18.2082 15.4067C18.006 15.2046 17.732 15.0923 17.4444 15.0923H16.7122C17.9521 13.5067 18.6889 11.5124 18.6889 9.34284C18.6889 4.18182 14.5063 0 9.34443 0C4.18253 0 0 4.18182 0 9.34284C0 14.5039 4.18253 18.6857 9.34443 18.6857C11.5143 18.6857 13.509 17.949 15.0949 16.7093V17.4415C15.0949 17.7289 15.2072 18.0029 15.4093 18.2051L19.8884 22.6833C20.3107 23.1056 20.9935 23.1056 21.4113 22.6833L22.6827 21.4122C23.105 20.9899 23.105 20.3072 22.6872 19.885ZM9.34443 15.0923C6.16822 15.0923 3.59401 12.523 3.59401 9.34284C3.59401 6.16717 6.16373 3.5934 9.34443 3.5934C12.5206 3.5934 15.0949 6.16268 15.0949 9.34284C15.0949 12.5185 12.5251 15.0923 9.34443 15.0923Z" fill="white"/>
					</SvgIcon>
				</IconButton>
		</Paper>
	);
};

export default AppBar;
