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
} from '@mui/material';

import { Colors } from '@/utils';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "@/components/siteIcons/logo.png";


const AppBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
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
		</>
	);
}

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const SearchField = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [size, setSize] = useState(0);

	const handleSearch = (event) => {
		// fetching ...
		console.log("fetching results for:", searchQuery);
	}

	const handleChange = (event) => {
		setSearchQuery(event.target.value);
		handleSearch();
	};

	const handleExpand = (isExpand) => {
		if (isExpand) {
			setSize(300);
		} else if (searchQuery.length === 0) {
			setSize(0);
		}
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
					transition: 'width 0.3s ease',
					width: size,
				}}
				placeholder="محصول مورد نظر را جستجو کنید."
				inputProps={{ 'aria-label': 'search field' }}
				value={searchQuery}
				onChange={handleChange}
				onMouseEnter={() => handleExpand(true)}
				onMouseLeave={() => handleExpand(false)}
			/>
			<Grid
				onMouseEnter={() => handleExpand(true)}
				onMouseLeave={() => handleExpand(false)}
			>
				{size == 0 && <KeyboardDoubleArrowRightIcon sx={{ color: 'white' }}/>}
				<IconButton
					type="button"
					aria-label="search"
					sx={{
						p: '10px',
						color: 'white',
					}}
					onClick={handleSearch}
					>
					<SearchIcon />	
				</IconButton>
			</Grid>
		</Paper>
	);
};

export default AppBar;
