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
	List,
	ListItem,
	ListItemText,
	Drawer,
	useMediaQuery,
} from '@mui/material';

import { Colors } from '@/utils';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "@/components/siteIcons/logo.png";


const AppBar = () => {
	const isLargeScreenRightSide = useMediaQuery('(min-width:1258px)');
	const isLargeScreenLeftSide = useMediaQuery('(min-width:560px)');
	const [anchorEl, setAnchorEl] = useState(null);
	const [open, setOpen] = useState(false);
	const [isInputMode, setInputMode] = useState(false);

	const toggleDrawer = (isOpen) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		handleMenuClose();
		setOpen(isOpen);
	};

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const toggleInputMode = () => {
		setInputMode(!isInputMode);
	};

	let AppBarLeftSideContent;
	if (isLargeScreenLeftSide) {
		AppBarLeftSideContent = (
			<>
				{!isInputMode ? (
					<IconButton
						variant='contained'
						onClick={toggleInputMode}
						sx={{
							borderRadius: "24px",
							bgcolor: Colors.blue,
							color: "white",
							transition: "0.5s",
							display: "flex",
							'&:hover': {
								display: "flex",
								borderRadius: "24px",
								backgroundColor: Colors.blue,
								transition: "0.5s",

								pr: 5,
								'& .hover-text': {
									display: "inline",
									transition: "0.5s",
								}
							},
							'& .hover-text': {
								display: "none",
							},
						}}
					>

						<SearchOutlinedIcon />
						<Typography
							
							color="#C5C5C5"
							className='hover-text'
							sx={{
								transition: "0.5s",
								ml: 12,
							}}
						>
							محصول مورد نظر را جستجو کنید
						</Typography>

					</IconButton>
				) : (
					<IconButton
						variant='contained'
						onClick={toggleInputMode}
						sx={{
							borderRadius: "24px",
							bgcolor: Colors.blue,
							color: "white",
							pr: 5,
							display: "flex",

							'&:hover': {
								backgroundColor: Colors.blue,
							},
						}}
					>
						<Typography
							
							color="#C5C5C5"
							className='hover-text'
							sx={{
								transition: "0.5s",
								ml: 12,
							}}
						>
							محصول مورد نظر را جستجو کنید
						</Typography>
						<SearchOutlinedIcon />
					</IconButton>
				)}

				<Button
					variant='contained'
					sx={{
						borderRadius: '24px',
						mr: 1,
						boxShadow: "none",
						bgcolor: Colors.blue,
						color: "white",
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
						ml: 1,
						mr: 1,
						bgcolor: Colors.blue,
						color: "white",
						'&:hover': {
							backgroundColor: Colors.blue,
						},
					}}>
					<ShoppingBagOutlinedIcon />
				</IconButton>
			</>
		);
	} else {
		AppBarLeftSideContent = (
			<>
				<IconButton
					variant='contained'
					sx={{
						ml: 1,
						mr: 1,
						bgcolor: Colors.blue,
						color: "white",
						'&:hover': {
							backgroundColor: Colors.blue,
						},
					}}>
					<ShoppingBagOutlinedIcon />
				</IconButton>

				<IconButton
					variant='contained'
					sx={{
						mr: 1,
						bgcolor: Colors.blue,
						color: "white",
						'&:hover': {
							backgroundColor: Colors.blue,
						},
					}}>
					<SearchOutlinedIcon />
				</IconButton>
			</>
		);
	}

	let AppBarRightSideContent;
	if (isLargeScreenRightSide) {
		AppBarRightSideContent = (
			<>
				<Grid pb={1} pl={3}>
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
					<Typography>
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
					<Typography pr={3}>
						درباره گیزموشاپ
					</Typography>
				</Link>

				<Link href={"/"}>
					<Typography pr={3}>
						ارتباط با ما
					</Typography>
				</Link>

				<Link href={"/"}>
					<Typography pr={3}>
						سوالات متداول
					</Typography>
				</Link>
			</>
		)
	} else {
		AppBarRightSideContent = (
			<>
				<Grid pb={1} pl={1}>
					<Link href={"/"}>
						<Image alt='logo' src={Logo} width={80} height="auto" />
					</Link>
				</Grid>

				<IconButton
					sx={{
						ml: 1,
					}}
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={toggleDrawer(true)}
				>
					<MenuIcon fontSize='large' />
				</IconButton>
				<Drawer
					dir='ltr'
					anchor="right"
					open={open}
					onClose={toggleDrawer(false)}
				>
					<List>
						{!AppBarRightSideContent && (
							<>
								<ListItem onClick={toggleDrawer(false)}>
									<Button
										sx={{
											color: "black"
										}}
									>
										<ListItemText>
											<Typography variant="body4" >ورود / ثبت نام</Typography>
										</ListItemText>
									</Button>

								</ListItem>
							</>
						)}


						<ListItem>
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
								<Typography
								
								>
									دسته بندی ها
								</Typography>
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
						</ListItem>


						<ListItem onClick={toggleDrawer(false)}>
							<Button
								sx={{
									color: "black"
								}}
							>
								<ListItemText>
									<Typography variant="body4">سوالات متداول</Typography>
								</ListItemText>
							</Button>

						</ListItem>
						<ListItem onClick={toggleDrawer(false)}>
							<Button
								sx={{
									color: "black"
								}}
							>
								<ListItemText>
									<Typography variant="body4">درباره گیزموشاپ</Typography>
								</ListItemText>
							</Button>

						</ListItem>
						<ListItem onClick={toggleDrawer(false)}>
							<Button
								sx={{
									color: "black"
								}}
							>
								<ListItemText>
									<Typography variant="body4">ارتباط با ما</Typography>
								</ListItemText>
							</Button>

						</ListItem>
					</List>
				</Drawer>
			</>
		)
	}

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
						{AppBarRightSideContent}
					</Grid>

					<Grid
						item
						xs={6}
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						>
						{AppBarLeftSideContent}
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
export default AppBar;
