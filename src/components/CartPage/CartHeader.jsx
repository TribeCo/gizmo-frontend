"use client"

import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';


const CartHeader = () => {
    return (
        <Box
            sx={{
                width: "1282px",
                height: "87px",
                background: "#EEEEEE80",
                borderRadius: "15px",                
            }}
        >
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            paddingTop: "5%",
                            marginLeft: "5%",
                            display: "inline-flex",
                        }}
                    >
                        <Box
                            sx={{
                                marginRight: "15%",
                            }}
                        > 
                            <FactCheckOutlinedIcon sx={{ height: "30px", width: "30px" }} />
                        </Box>
                        <Box sx={{ marginTop: "-3%" }}>
                            <Typography variant="h5" fontWeight={"bold"}> محصول</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box
                        sx={{
                            paddingTop: "12%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        <Typography variant="h5" fontWeight={"bold"}>قیمت واحد</Typography>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box
                        sx={{
                            paddingTop: "12%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        <Typography variant="h5" fontWeight={"bold"}>تعداد</Typography>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box
                        sx={{
                            paddingTop: "12%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        <Typography variant="h5" fontWeight={"bold"}>قیمت نهایی</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CartHeader;