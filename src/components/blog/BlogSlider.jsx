"use client";

import React, { useState, useEffect } from "react";
import { Colors } from "@/utils";
import {
    Box,
    Card,
    CardMedia,
    Grid,
    IconButton,
    Paper,
    SvgIcon,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import Image from "next/image";

const BlogSlider = ({ banners }) => {
return (
        <Grid
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            sx={{
                mt: { xs: 2, sm: 4, md: 6, lg: 8 },
                mb: { xs: 2, sm: 4, md: 6, lg: 8 },
                rowGap: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
        >
            <BlogBanner
                banners={[]}
            />
        </Grid>
    );
}


const BlogBanner = ({ banners }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 3000);
		return () => clearInterval(interval);
	}, [currentIndex]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? banners.length - 1 : prevIndex - 1,
		);
	};

    return (
        <Card
            sx={{
                my: 2,
                height: { xs: 160, sm: 300, md: 400, lg: 580 },
                width: { xs: 320, sm: 600, md: 800, lg: 1160 },
                borderRadius: "20px",
            }}>
            <Box>
                <CardMedia
                    image={banners[currentIndex]}
                    sx={{
                        height: { xs: 0.6 * 360, sm: 0.8 * 360, md: 360 },
                        width: { xs: 0.6 * 640, sm: 0.8 * 640, md: 640 },
                        objectFit: "cover",
                    }}
                >
                    <Paper
                        sx={{
                            bgcolor: 'white',
                            backgroundColor: 'black',
                            width: {xs: 50, sm: 70, md: 80, lg: 110},
                            height: {xs: 70, sm: 95, md: 110, lg: 140},
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            borderBottomLeftRadius: '20px',
                            boxShadow: 'none'
                        }}
                    >
                        <Grid 
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            sx={{
                                rowGap: {xs: 2,md: 0, lg: 2},   
                                scale: {xs: '0.5', sm: '0.7', md: '1'},
                            }}
                        >
                            <IconButton
                                variant="contained"
                                sx={{
                                    bgcolor: Colors.blue,
                                    scale: {xs: '1', sm: '0.9', md: '0.7', lg: '1'},
                                    "&:hover": {
                                        backgroundColor: Colors.blue,
                                    },
                                }}
                                onClick={handleNext}>
                                <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
                            </IconButton>
                            <IconButton
                                variant="contained"
                                sx={{
                                    bgcolor: Colors.blue,
                                    scale: {xs: '1', sm: '0.9', md: '0.7', lg: '1'},
                                    "&:hover": {
                                        backgroundColor: Colors.blue,
                                    },
                                }}
                                onClick={handlePrev}>
                                <ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
                            </IconButton>
                        </Grid>

                        <Grid
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            sx={{
                                scale: {xs: '2', sm: '3', lg: '4'},
                            }}
                        >
                            <SvgIcon width="8" height="83" viewBox="0 0 8 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="79" r="4" transform="rotate(-90 4 79)" fill="#D9D9D9"/>
                                <circle cx="4" cy="60.25" r="4" transform="rotate(-90 4 60.25)" fill="#D9D9D9"/>
                                <circle cx="4" cy="41.5" r="4" transform="rotate(-90 4 41.5)" fill="#D9D9D9"/>
                                <circle cx="4" cy="22.75" r="4" transform="rotate(-90 4 22.75)" fill="#D9D9D9"/>
                                <circle cx="4" cy="4" r="4" transform="rotate(-90 4 4)" fill="#D9D9D9"/>
                            </SvgIcon>

                        </Grid>


                    </Paper>

                    {/* //TODO: put an slider button paper here. */}

                </CardMedia>
            </Box>
        </Card>
    );
}


export default BlogSlider;