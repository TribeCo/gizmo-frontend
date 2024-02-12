"use client";

import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import Logo from "@/components/siteIcons/logo.png";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


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
							bgcolor: "#22668D",
							color: "white",
							transition: "0.5s",
							display: "flex",
							'&:hover': {
								display: "flex",
								borderRadius: "24px",
								backgroundColor: "#22668D",
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
							bgcolor: "#22668D",
							color: "white",
							pr: 5,
							display: "flex",

							'&:hover': {
								backgroundColor: "#22668D",
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
						bgcolor: "#22668D",
						color: "white",
						'&:hover': {
							backgroundColor: "#22668D",
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
						bgcolor: "#22668D",
						color: "white",
						'&:hover': {
							backgroundColor: "#22668D",
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
						bgcolor: "#22668D",
						color: "white",
						'&:hover': {
							backgroundColor: "#22668D",
						},
					}}>
					<ShoppingBagOutlinedIcon />
				</IconButton>

				<IconButton
					variant='contained'
					sx={{
						mr: 1,
						bgcolor: "#22668D",
						color: "white",
						'&:hover': {
							backgroundColor: "#22668D",
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
				bgcolor="#FFFADD"
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
