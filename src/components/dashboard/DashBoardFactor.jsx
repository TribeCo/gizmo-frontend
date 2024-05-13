'use client'
import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography, TextField, InputAdornment, IconButton, Button, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { fetchFactors, formatFullAddress } from '@/services/DashBoard';
import { useAuth } from '@/context/AuthContext';
import { toPersianDigits } from '@/utils/convert';


export default function DashBoardFactor({ id }) {

    const [factors, setFactors] = useState({
        user: {}, // Initialize user as an empty object
        items: [],
        address: {},
    });
    const { tokens } = useAuth();
    const handlePrint = (id) => {
        setActivePrintId(id);
        window.print();
    };

    const handleGetFactors = async () => {
        try {
            const response = await fetchFactors(id, tokens);
            console.log('Received data:', response.data); // Check what you're actually receiving
            if (response.data) {
                setFactors(response.data);
            }
        } catch (error) {
            console.error('Error fetching factors:', error);
            alert(error.message);
        }
    };

    useEffect(() => {
        if (tokens) {
            handleGetFactors();
        }
        const handleAfterPrint = () => setActivePrintId(null);
        window.addEventListener('afterprint', handleAfterPrint);
        return () => {
            window.removeEventListener('afterprint', handleAfterPrint);
        };
    }, [tokens]);

    return (
        <Paper
            variant="outlined"
            sx={{
                height: 'fit-content',
                borderRadius: '15px',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: '15px', md: '30px' },
                    width: { xs: '90vw', md: '900px' },
                    maxHeight: '915px',
                }}
            >
                <Box
                    width={{ xs: '100%', md: 850 }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            fontSize: '20px',
                            color: '#213346',
                            fontWeight: '700',
                            marginX: 2,
                        }}
                    >
                        فاکتور
                    </Typography>
                    <Divider sx={{
                        mt: 2,
                        px: 2,
                        display: 'flex',
                        bgcolor: '#EDEDED',
                        alignItems: 'center',
                        justifyContent: 'center',
                        displayPrint: 'none',

                    }} />
                </Box>
                <Box
                    sx={{
                        height: 'auto',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}>
                    <Box
                        key={factors.id}
                        width={{ xs: 'auto', md: 840 }}
                        bgcolor={'#F7F7F7'}
                        borderRadius={3}
                        px={{ xs: 2, sm: 5 }}
                        py={3}
                        mt={2}
                        sx={{ displayPrint: 'block' }}
                    >
                        <Box
                            display={{ xs: 'none', md: 'block' }}
                        >
                            <Grid container spacing={1} justifyContent="space-between">
                                <Grid item xs={6}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        نام مشتری: <span style={{ fontWeight: 500 }}>{factors.user.full_name}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Typography fontWeight={700} fontSize={14}>
                                        تاریخ سفارش: <span style={{ fontWeight: 500 }}>{factors.shamsi_date}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        آدرس: <span style={{ fontWeight: 500 }}>{formatFullAddress(factors.address)}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Typography fontWeight={700} fontSize={14}>
                                        شماره سفارش: <span style={{ fontWeight: 500 }}>{factors.get_order_number}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        شماره تماس: <span style={{ fontWeight: 500 }}>{factors.user.phoneNumber}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        ایمیل: <span style={{ fontWeight: 500 }}>{factors.user.email}</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box display={{ xs: 'block', md: 'none' }}>
                            <Grid container spacing={1} justifyContent="space-between">
                                <Grid item xs={12}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        نام مشتری: <span style={{ fontWeight: 500 }}>{factors.user.full_name}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography fontWeight={700} fontSize={14}>
                                        تاریخ سفارش: <span style={{ fontWeight: 500 }}>{factors.shamsi_date}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        آدرس: <span style={{ fontWeight: 500 }}>{formatFullAddress(factors.address)}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography fontWeight={700} fontSize={14}>
                                        شماره سفارش: <span style={{ fontWeight: 500 }}>{factors.get_order_number}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        شماره تماس: <span style={{ fontWeight: 500 }}>{factors.user.phoneNumber}</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                        ایمیل: <span style={{ fontWeight: 500 }}>{factors.user.email}</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box pt={5}>
                            <TableContainer
                                component={Paper}
                                sx={{
                                    borderRadius: {xs: '8px 8px 0px 0px', md: '8px 8px 0px 8px'},
                                    overflow: 'hidden',
                                    border: '1px solid #363636',
                                }}
                            >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ maxWidth: { xs: "15%", sm: 70 }, borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: { xs: 11, sm: 14 }, fontWeight: 500 }}>شماره</TableCell>
                                            <TableCell align="left" sx={{ maxWidth: { xs: "40%", sm: 150 }, borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: { xs: 11, sm: 14 }, fontWeight: 500 }}>جزئیات سفارش</TableCell>
                                            <TableCell align="left" sx={{ maxWidth: { xs: "15%", sm: 70 }, borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: { xs: 11, sm: 14 }, fontWeight: 500 }}>تعداد</TableCell>
                                            <TableCell align="left" sx={{ maxWidth: { xs: "15%", sm: 70 }, borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: { xs: 11, sm: 14 }, fontWeight: 500 }}>قیمت</TableCell>
                                            <TableCell align="left" sx={{ maxWidth: { xs: "15%", sm: 70 }, verticalAlign: 'top', borderBottom: '1px solid #363636', fontSize: { xs: 11, sm: 14 }, fontWeight: 500 }}>مجموع</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {factors.items.map((item, index) => (
                                            <TableRow key={item.product.id}>
                                                <TableCell component="th" scope="row" sx={{ maxWidth: { xs: "15%", sm: 70 }, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: { xs: 9, sm: 14 }, fontWeight: 400 }}>{index + 1}</TableCell>
                                                <TableCell align="left" sx={{ maxWidth: { xs: "40%", sm: 150 }, borderRight: '1px solid #363636', height: 100, fontSize: { xs: 9, sm: 14 }, fontWeight: 400 }}>{item.product.name}</TableCell>
                                                <TableCell align="left" sx={{ maxWidth: { xs: "15%", sm: 70 }, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: { xs: 9, sm: 14 }, fontWeight: 400 }}>{item.quantity}</TableCell>
                                                <TableCell align="left" sx={{ maxWidth: { xs: "15%", sm: 70 }, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: { xs: 9, sm: 14 }, fontWeight: 400 }}>{item.product.discount_price}</TableCell>
                                                <TableCell align="left" sx={{ maxWidth: { xs: "15%", sm: 70 }, verticalAlign: 'top', height: 100, fontSize: { xs: 9, sm: 14 }, fontWeight: 400 }}>{item.get_cost_from_product}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box
                            display={'flex'}
                            justifyContent={'flex-end'}
                            displayPrint={'none'}
                        >
                            <Box
                                width={{ xs: "100%", sm: 366 }}
                                height={50}
                                borderRadius={'0 0px 10px 10px'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                border={'1px solid #363636'}
                                px={4}
                            >
                                <Typography fontSize={14} fontWeight={700}>
                                    جمع فاکتور
                                </Typography>
                                <Typography fontSize={14} fontWeight={700}>
                                    {factors.pay_amount} تومان
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'none',  // Hide by default in normal screen view
                                '@media print': {
                                    display: 'flex', // Show only when printing
                                    justifyContent: 'flex-end',
                                }
                            }}
                        >
                            <Box
                                width={'100%'}
                                height={100}
                                borderRadius={'0 0px 10px 10px'}
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                                border={'1px solid #363636'}
                                px={4}
                            >
                                <Box display={'flex'} flexDirection={'column'} gap={1}>
                                    <Typography fontSize={14} fontWeight={400} alignItems={'flex-start'}>
                                        جمع فاکتور
                                    </Typography>
                                    <Typography fontSize={14} fontWeight={400} sx={{ color: 'red' }}>
                                        {factors.discount_string}
                                    </Typography>
                                    <Typography fontSize={14} fontWeight={700}>
                                        مبلغ پرداخت
                                    </Typography>
                                </Box>
                                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'} gap={1}>
                                    <Typography fontSize={14} fontWeight={400}>
                                        {toPersianDigits(factors.total_price)} تومان
                                    </Typography>
                                    <Typography fontSize={14} fontWeight={400}>
                                        تخفیف: {toPersianDigits(factors.discount_amount)} تومان
                                    </Typography>
                                    <Typography fontSize={14} fontWeight={700}>
                                        {toPersianDigits(factors.pay_amount)} تومان
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            displayPrint={'none'}
                            display={'flex'}
                            justifyContent={'flex-end'}
                        >
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                pt={3}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => window.print()}
                                    sx={{
                                        backgroundColor: '#FFCC70',
                                        '&:hover': {
                                            bgcolor: '#FFCC70',
                                            opacity: 0.9,
                                        },
                                        borderRadius: '25px',
                                        padding: '4px 30px',
                                        fontWeight: 'bold',
                                        fontSize: { xs: 14, md: 16 },
                                        marginBottom: '15px',
                                        color: '#213346',
                                    }}
                                >
                                    چاپ فاکتور
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};