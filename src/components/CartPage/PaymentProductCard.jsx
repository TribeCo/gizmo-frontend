import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const PaymentProductCard = (pid) => {

    const convertToPersian = (number) => {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, (x) => persianNumbers[x]);
    };

    return (
        <Box sx={{ width: { md: '100%', lg: '652px' }, height: { xs: 'auto', sm: '116px', md: '173px', lg: '230px' } }}>
            <Grid container spacing={1}>
                <Grid item md={4} sm={4} xs={4}>
                    <Box sx={{
                        width: { xs: '52px', sm: '99px', md: '146px', lg: '193px' },
                        height: { xs: '52px', sm: '99px', md: '146px', lg: '193px' },
                        borderRadius: "10px",
                        overflow: 'hidden'
                    }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://s3-alpha-sig.figma.com/img/4050/86fb/624274b23cab9a4bbe014728fb02db1a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jsXE0Xy9Sz1y43uvI03e-VnS8W5Vh7zGJxi1UjEa5KrVPe4x8JBJ6Vsr3x6HvgR3HzVXp-WqqqWdljRHN1gP4G3w81R1qMfKP8uigsRmQ2ExFGSS9nhfbi1kOQUr9jlATIUHz3ctCrMvZ10mOHLSWsdNBW2LT~6Qz188~zr3P7byaI1k-4AQcG1JXit5mNWhj79YiVjdQ5hcjgfHlF-n3w0~xNdk9OESTpTGnIthzMxFVCebpwjlKTp6Zg9g5drNn-tyo442E3q8mCw~FP~rT8ywgC~qkL3Wzn8Eu6oECYwz8Re3Oo7rm2kMQcDkLMhrJLd5Xh499jRM5tHT7meEXA__" alt="Product" />
                    </Box>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <Box sx={{ alignItems: "left" }}>
                        <Grid container rowSpacing={{ xs: -0.5, sm: 0.5, md: 2, lg: 3 }}>
                            <Grid item xs={12}>
                                <Box display={"inline-flex"}>
                                    <Typography sx={{ fontSize: { xs: '12px', sm: '18px', md: '25px', lg: '32px' }, fontWeight: '700', width: { xs: '51px', sm: '80px', md: '110px', lg: '140px' } }}>
                                        تراول ماگ {/* Product name */}
                                    </Typography>
                                    <Typography sx={{
                                        bgcolor: "red",
                                        marginTop: '2px',
                                        height: { xs: '10px', sm: '17px', md: '25px', lg: '33px' },
                                        width: { xs: '23px', sm: '40px', md: '57px', lg: '74px' },
                                        borderRadius: "20px",
                                        fontSize: { xs: '6px', sm: '10px', md: '14px', lg: '18px' },
                                        color: "white",
                                        marginLeft: 1,
                                        padding: '2px',
                                    }} fontWeight={"bold"} align="center">
                                        ۲۰٪‌
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display={"inline-flex"}>
                                    <Typography marginRight={1} fontWeight={500} sx={{ fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '20px' } }}>
                                        رنگ:
                                    </Typography>
                                    <Typography fontWeight={500} sx={{ fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '20px' } }}>
                                        مشکی
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display={"inline-flex"}>
                                    <Typography marginRight={1} fontWeight={500} sx={{ fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '20px' } }}>
                                        تعداد:
                                    </Typography>
                                    <Typography fontWeight={500} sx={{ fontSize: { xs: '8px', sm: '12px', md: '16px', lg: '20px' } }}>
                                        2
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display={"inline-flex"}>
                                    <Typography marginRight={1} fontWeight={700} sx={{ fontSize: { xs: '8px', sm: '10px', md: '13px', lg: '15px' } }}>
                                        کد محصول:
                                    </Typography>
                                    <Typography fontWeight={700} sx={{ fontSize: { xs: '8px', sm: '10px', md: '13px', lg: '15px' } }}>
                                        ۱۴۵۴۶۷۷
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <Box sx={{
                        mt: { xs: '40px', sm: '50px', md: '70px', lg: '90px' },
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Typography fontWeight="bold" sx={{ color: "#B4B4B4", fontSize: { xs: '8px', sm: '10px', md: '13px', lg: '16px' } }}>
                            <span style={{ textDecoration: "line-through" }}>{convertToPersian(398000)} تومان</span>
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '10px', sm: '14px', md: '17px', lg: '20px' }, marginTop: {} }} mt={1} fontWeight="700">{convertToPersian(398000)} تومان</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default PaymentProductCard;