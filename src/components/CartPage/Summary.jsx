"use client"

import React from "react";
import { 
    Box, 
    Grid, 
    Typography, 
    Button, 
    TextField, 
    Table,
    TableBody,
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper
 } from "@mui/material";

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


const Summary = () => {
    return (
        <Box
            sx={{
                width: "1282px",
                height: "257px",
                borderRadius: "15px",
                background: "#F7F7F7",
            }}
        >
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Box
                        sx={{
                            borderRight: "2px solid #B4B4B4",
                            margin: 1,
                            height: "217px",
                            padding: 3,
                        }}
                    >
                        <Typography fontWeight="bold" color="#44434C" variant="h6" align="left" mb={1}>
                            <CardGiftcardIcon color="#44434C" sx={{ marginRight: 1 }} />
                            کد تخفیف
                        </Typography>

                        <hr style={{ width: '342px', border: '1px solid #B4B4B4' }} />
                        
                        <TextField
                            variant="standard"
                            type='text'
                            placeholder="کد تخفیف خود را وارد کنید:"
                            InputProps={{
                                dir: 'rtl',
                                disableUnderline: true,
                            }}
                            sx={{
                                marginTop: "10%",
                                width: "289px",
                                height: "45px",
                                padding: "0px, 16px, 0px, 119px",
                                borderRadius: "10px",
                                background: "#E9E9E9",
                                '& .MuiInputBase-root': {
                                    marginTop: "7px",
                                    marginLeft: "7px",
                                },
                            }}
                        />
                        <Button 
                            variant="contained" 
                            color="warning" 
                            sx={{
                                bgcolor: "#FFCC70",
                                marginTop: "5%",
                                width: "185px",
                                height: "47px",
                                padding: "11px, 0px, 11px, 0px",
                                borderRadius: "20px",
                                opacity: "0.8px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="#213346"
                                fontWeight={"bold"} 
                                align="center"
                                id="login-button"
                            >
                                اعمال
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={5}>
                    <Box
                        sx={{
                            padding: 2,
                        }}
                    >
                        <TableContainer component={Box} sx={{ border: 'none' }}>
                            <Table sx={{
                                '& td, & th': {
                                  border: 'none',
                                  padding: "8px",
                                },
                            }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={2} align="left">
                                            <Typography variant="h4" fontWeight="bold">فاکتور خرید شما</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell align="left">
                                            <Typography variant="h6" fontWeight="bold">
                                                قیمت کل سفارش:
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="h6"> 
                                                ۳۹۸۰۰۰ تومان
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            <Typography variant="h6" fontWeight="bold">
                                                میزان تخفیف:‌
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="h6"> 
                                                ۳۹۸۰۰۰ تومان
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            <Typography variant="h6" fontWeight="bold">
                                                مبلغ قابل پرداخت:
                                            </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="h5" fontWeight="bold"> 
                                                ۳۹۸۰۰۰ تومان
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item md={3} sx={{ marginTop: "auto", paddingRight: 6 }}>
                    <Button 
                        variant="contained" 
                        color="warning" 
                        sx={{
                            bgcolor: "#FFCC70",
                            marginBottom: "15%",
                            width: "100%",
                            height: "47px",
                            borderRadius: "20px",
                            opacity: "0.8px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="#213346"
                            fontWeight={"bold"} 
                            align="center"
                            id="login-button"
                        >
                            ادامه فرایند خرید
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Summary;

