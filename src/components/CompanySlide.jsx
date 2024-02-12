"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Grid, IconButton, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';


import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png"
import amazon from "@/components/comanyIcons/amazon.png"

import ShopIcon from "@/components/siteIcons/shopIcon.png";
import DeliveryTruck from "@/components/siteIcons/deliveryTruck.png";
import MoneyGroth from "@/components/siteIcons/moneyGroth.png";
import Quality from "@/components/siteIcons/quality.png";
import _24HoursSupport from "@/components/siteIcons/_24hoursSupport.png";


const logos = [
    [anker, 'https://www.anker.com/'],
    [blulory, 'https://www.blulory.com/'],
    [mc, 'https://mycandytech.com/'],
    [noon, 'https://www.noon.com/'],
    [wacaco, 'https://www.wacaco.com/'],
    [greenLions, 'https://www.greenlion.net/'],
    [amazon, 'https://www.amazon.com/'],
];

const CompanySlide = () => {
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleLeftArrowClick = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
    };

    const handleRightArrowClick = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);
    };

    const slideItems = [
        logos[startIndex % logos.length],
        logos[(startIndex + 1) % logos.length],
        logos[(startIndex + 2) % logos.length],
        logos[(startIndex + 3) % logos.length],
    ];

    return (
        <>
            <Grid
                mt={1} 
                pr={12} pl={12}
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <IconButton
                        variant='contained'
                        sx={{
                            bgcolor: '#22668D',
                            position: 'relative',
                            '&:hover': {
                                backgroundColor: "#22668D",
                            },
                        }}
                        onClick={handleRightArrowClick}
                    >
                        <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
                    </IconButton>
                </Grid>

                {slideItems.map((item, index) => (
                    <Grid item key={index}>
                        <Box
                            width="100%"
                            textAlign="center"
                        >
                            <Link href={item[1]} passHref>
                                <Image
                                    src={item[0]}
                                    alt='company-logo-item'
                                    width="auto"
                                    height={50}
                                />
                            </Link>
                        </Box>
                    </Grid>
                ))}

                <Grid item>
                    <IconButton
                        variant='contained'
                        sx={{
                            bgcolor: '#22668D',
                            position: 'relative',
                            '&:hover': {
                                backgroundColor: "#22668D",
                            },
                        }}
                        onClick={handleLeftArrowClick}
                    >
                        <ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
                    </IconButton>
                </Grid>
            </Grid>

            <Grid
                mt={12}
                component="footer"
                bgcolor="rgba(142, 205, 221, 0.3)"
                color="black"
                py={3}
                px={2}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                flexWrap="wrap"
                width="100%"
            >
                <Box
                    mt={3}
                    mb={3}
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={ShopIcon}
                        width="auto"
                        height={70}
                    />

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
                        خرید بدون واسطه<br /> و مستقیم از دبی
                    </Typography>
                </Box>

                <Box
                    mt={3}
                    mb={3}
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={DeliveryTruck}
                        width="auto"
                        height={70}
                    />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >
                        تحویل اکسپرس
                    </Typography>
                    <Typography
                        variant="body1"
                        color="GrayText"
                        dir="rtl"
                        mt={1}
                    >
                        ارسال با پست پیشتاز به<br /> سراسر ایران
                    </Typography>
                </Box>

                <Box
                    mt={3}
                    mb={3}
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={Quality}
                        width="auto"
                        height={70}
                    />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >
                        ضمانت اصالت کالا
                    </Typography>
                    <Typography
                        variant="body1"
                        color="GrayText"
                        dir="rtl"
                        mt={1}
                    >
                        ضمانت 100% اصالت <br />محصولات
                    </Typography>
                </Box>

                <Box
                    mt={3}
                    mb={3}
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={_24HoursSupport}
                        width="auto"
                        height={70}
                    />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >
                        پشتیبانی
                    </Typography>
                    <Typography
                        variant="body1"
                        color="GrayText"
                        dir="rtl"
                        mt={1}
                    >
                        پشتیبانی آنلاین 24 ساعته <br />و 7 روز هفته
                    </Typography>
                </Box>

                <Box
                    mb={3}
                    mt={3}
                    sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={MoneyGroth}
                        width="auto"
                        height={70}
                    />

                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >
                        پرداخت امن
                    </Typography>
                    <Typography
                        variant="body1"
                        color="GrayText"
                        dir="rtl"
                        mt={1}
                    >
                        امکان پرداخت آنلاین
                    </Typography>
                </Box>
            </Grid>
        </>
    );
}

export default CompanySlide;
