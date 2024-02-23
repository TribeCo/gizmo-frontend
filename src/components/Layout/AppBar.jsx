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


const AppBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			bgcolor={Colors.yellow}
			borderRadius="50px"
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
					display="flex"
					alignItems="center"
				>
					<Link href={'/menu'}>
						<Grid
							sx={{
								pr: 2,
								scale: { xs: '1', sm: '1.3' },
								display: { lg: 'felx', xl: 'none' },
							}}
						>
							<SvgIcon width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.00016 0.666992H10.3335C10.7755 0.666992 11.1994 0.842587 11.512 1.15515C11.8246 1.46771 12.0002 1.89163 12.0002 2.33366C12.0002 2.77569 11.8246 3.19961 11.512 3.51217C11.1994 3.82473 10.7755 4.00033 10.3335 4.00033H2.00016C1.55813 4.00033 1.13421 3.82473 0.821651 3.51217C0.509091 3.19961 0.333496 2.77569 0.333496 2.33366C0.333496 1.89163 0.509091 1.46771 0.821651 1.15515C1.13421 0.842587 1.55813 0.666992 2.00016 0.666992ZM13.6668 14.0003H22.0002C22.4422 14.0003 22.8661 14.1759 23.1787 14.4885C23.4912 14.801 23.6668 15.225 23.6668 15.667C23.6668 16.109 23.4912 16.5329 23.1787 16.8455C22.8661 17.1581 22.4422 17.3337 22.0002 17.3337H13.6668C13.2248 17.3337 12.8009 17.1581 12.4883 16.8455C12.1758 16.5329 12.0002 16.109 12.0002 15.667C12.0002 15.225 12.1758 14.801 12.4883 14.4885C12.8009 14.1759 13.2248 14.0003 13.6668 14.0003ZM2.00016 7.33366H22.0002C22.4422 7.33366 22.8661 7.50926 23.1787 7.82182C23.4912 8.13438 23.6668 8.5583 23.6668 9.00033C23.6668 9.44236 23.4912 9.86628 23.1787 10.1788C22.8661 10.4914 22.4422 10.667 22.0002 10.667H2.00016C1.55813 10.667 1.13421 10.4914 0.821651 10.1788C0.509091 9.86628 0.333496 9.44236 0.333496 9.00033C0.333496 8.5583 0.509091 8.13438 0.821651 7.82182C1.13421 7.50926 1.55813 7.33366 2.00016 7.33366Z" fill="#22668D" />
							</SvgIcon>
						</Grid>
					</Link>

					<Grid
						pb={1}
						display='flex'
						alignItems='center'
						sx={{
							pr: { xs: '0', lg: 2 },
							width: { xs: 75, sm: 'auto' },
						}}
					>
						<Link href={"/"}>
							<Image
								alt='logo'
								src={Logo}
								width={90}
								height="auto"
							/>
						</Link>
					</Grid>

					<Grid
						item
						sx={{
							display: { xs: 'none', lg: 'contents' },
						}}
					>
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
							<Typography variant='h6' noWrap>
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
							<Typography pl={1} variant='h6' noWrap>
								درباره گیزموشاپ
							</Typography>
						</Link>

						<Link href={"/"}>
							<Typography pl={3} variant='h6' noWrap>
								ارتباط با ما
							</Typography>
						</Link>

						<Link href={"/"}>
							<Typography pl={3} variant='h6' noWrap>
								سوالات متداول
							</Typography>
						</Link>
					</Grid>
				</Grid>

				<Grid
					item
					display="flex"
					alignItems="center"
					justifyContent="flex-end"
				>

					<SearchField />

					<Button
						variant='contained'
						sx={{
							display: { xs: 'none', xl: 'flex' },
							borderRadius: '24px',
							ml: 3,
							bgcolor: Colors.blue,
							color: "white",
							'&:hover': {
								backgroundColor: Colors.blue,
							},
						}}>

						<Typography
							variant='h6'
							sx={{
								display: { xs: 'none', xl: 'flex' },
								p: { xs: '0px', xl: '2px' },
							}}
						>
							ورود / ثبت نام
						</Typography>
					</Button>

					<IconButton
						variant='contained'
						sx={{
							p: { sm: '12px' },
							display: { xs: 'flex', xl: 'none' },
							scale: { xs: '0.9', sm: '1' },
							ml: { xs: 1, sm: 2 },
							color: 'white',
							bgcolor: Colors.blue,
							'&:hover': {
								bgcolor: Colors.blue,
							}
						}}
					>
						<SvgIcon sx={{ p: { xs: '4px', sm: '0px' } }} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.6872 19.885L18.2082 15.4067C18.006 15.2046 17.732 15.0923 17.4444 15.0923H16.7122C17.9521 13.5067 18.6889 11.5124 18.6889 9.34284C18.6889 4.18182 14.5063 0 9.34443 0C4.18253 0 0 4.18182 0 9.34284C0 14.5039 4.18253 18.6857 9.34443 18.6857C11.5143 18.6857 13.509 17.949 15.0949 16.7093V17.4415C15.0949 17.7289 15.2072 18.0029 15.4093 18.2051L19.8884 22.6833C20.3107 23.1056 20.9935 23.1056 21.4113 22.6833L22.6827 21.4122C23.105 20.9899 23.105 20.3072 22.6872 19.885ZM9.34443 15.0923C6.16822 15.0923 3.59401 12.523 3.59401 9.34284C3.59401 6.16717 6.16373 3.5934 9.34443 3.5934C12.5206 3.5934 15.0949 6.16268 15.0949 9.34284C15.0949 12.5185 12.5251 15.0923 9.34443 15.0923Z" fill="white" />
						</SvgIcon>
					</IconButton>

					<IconButton
						variant='contained'
						sx={{
							p: { xs: '8px', sm: '12px' },
							scale: { xs: '0.9', sm: '1' },
							ml: { xs: 1, sm: 2 },
							mr: { xs: 0, sm: 1 },
							bgcolor: Colors.blue,
							color: "white",
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
					display: { xs: 'none', xl: 'flex' },
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
					p: { xs: '6px', sm: '12px' },
					scale: { xs: '0.6', sm: '1' },
					color: 'white',
				}}
				onClick={handleSearch}
			>
				<SvgIcon width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22.6872 19.885L18.2082 15.4067C18.006 15.2046 17.732 15.0923 17.4444 15.0923H16.7122C17.9521 13.5067 18.6889 11.5124 18.6889 9.34284C18.6889 4.18182 14.5063 0 9.34443 0C4.18253 0 0 4.18182 0 9.34284C0 14.5039 4.18253 18.6857 9.34443 18.6857C11.5143 18.6857 13.509 17.949 15.0949 16.7093V17.4415C15.0949 17.7289 15.2072 18.0029 15.4093 18.2051L19.8884 22.6833C20.3107 23.1056 20.9935 23.1056 21.4113 22.6833L22.6827 21.4122C23.105 20.9899 23.105 20.3072 22.6872 19.885ZM9.34443 15.0923C6.16822 15.0923 3.59401 12.523 3.59401 9.34284C3.59401 6.16717 6.16373 3.5934 9.34443 3.5934C12.5206 3.5934 15.0949 6.16268 15.0949 9.34284C15.0949 12.5185 12.5251 15.0923 9.34443 15.0923Z" fill="white" />
				</SvgIcon>
			</IconButton>
		</Paper>
	);
};

export default AppBar;
