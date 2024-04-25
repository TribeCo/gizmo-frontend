'use client'
import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography, TextField, InputAdornment, IconButton, Button, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { fetchFactors } from '@/services/DashBoard';
import { CleaningServices } from '@mui/icons-material';

export default function DashBoardFactor() {

    const [activePrintId, setActivePrintId] = useState(null);
    const [factors, setFactors] = useState([]);
    const receipts = [
        {
            "user": {
                "phoneNumber": "2",
                "full_name": "رضا کریمی",
                "email": "RezaK9000@gmail.com"
            },
            "address": {
                "province": "تهران",
                "city": "تهران",
                "straight_address": "خیابان ولیعصر",
                "postal_code": "1133557799",
                "current": true
            },
            "items": [
                {
                    "product": {
                        "name": "دستگاه قهوه ساز Delonghi Magnifica S",
                        "price": 4500000,
                        "id": 3,
                        "discount": 15,
                        "discounted": true,
                        "discount_price": "3,825,000"
                    },
                    "price": 4500000,
                    "quantity": 2,
                    "get_cost_from_product": "9,000,000"
                }
            ],
            "shamsi_date": "۱۵ شهریور ۱۴۰۲",
            "paid": true,
            "discount": 15,
            "ref_id": "78ujnmki9",
            "authority": "789ijhgt5",
            "processed": true,
            "packing": true,
            "shipped": false,
            "deliveried": false,
            "total_price": 9000000.0,
            "discount_string": "15 درصد تخفیف اعمال شده است",
            "discount_amount": 1350000.0,
            "pay_amount": 7650000.0,
            "get_order_number": "46003"
        }    
    ];

    function formatFullAddress(address) {
        const { province, city, straight_address, postal_code, current } = address;
        const fullAddress = `استان: ${province}, شهر: ${city}, آدرس: ${straight_address}, کد پستی: ${postal_code}`;
        return fullAddress;
        // return current ? `${fullAddress} (Current Address)` : fullAddress;
    }

    const handlePrint = (id) => {
        setActivePrintId(id);
        window.print();
    };

    const handleGetFactors = async () => {
        setFactors((await fetchFactors()).data);
    }

    useEffect(() => {
        handleGetFactors();
        const handleAfterPrint = () => setActivePrintId(null);
        window.addEventListener('afterprint', handleAfterPrint);
        return () => {
            window.removeEventListener('afterprint', handleAfterPrint);
        };
    }, []);

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
                    {receipts.map((receipt) => (
                        <Box
                            key={receipt.id}
                            width={{ xs: 'auto', md: 840 }}
                            bgcolor={'#F7F7F7'}
                            borderRadius={3}
                            px={{xs: 2, sm: 5}}
                            py={3}
                            mt={2}
                            sx={{ displayPrint: activePrintId === receipt.id ? 'block' : 'none' }}
                        >
                            <Box
                                display={{ xs: 'none', md: 'block' }}
                            >
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item xs={6}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            نام مشتری: <span style={{ fontWeight: 500 }}>{receipt.user.full_name}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            تاریخ سفارش: <span style={{ fontWeight: 500 }}>{receipt.shamsi_date}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            آدرس: <span style={{ fontWeight: 500 }}>{formatFullAddress(receipt.address)}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            شماره سفارش: <span style={{ fontWeight: 500 }}>{receipt.get_order_number}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            شماره تماس: <span style={{ fontWeight: 500 }}>{receipt.user.phoneNumber}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            ایمیل: <span style={{ fontWeight: 500 }}>{receipt.user.email}</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box display={{ xs: 'block', md: 'none' }}>
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            نام مشتری: <span style={{ fontWeight: 500 }}>{receipt.user.full_name}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            تاریخ سفارش: <span style={{ fontWeight: 500 }}>{receipt.shamsi_date}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            آدرس: <span style={{ fontWeight: 500 }}>{formatFullAddress(receipt.address)}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            شماره سفارش: <span style={{ fontWeight: 500 }}>{receipt.get_order_number}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            شماره تماس: <span style={{ fontWeight: 500 }}>{receipt.user.phoneNumber}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            ایمیل: <span style={{ fontWeight: 500 }}>{receipt.user.email}</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box
                                pt={5}
                            >
                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        borderRadius: '8px 8px 0px 0px',
                                        overflow: 'hidden',
                                        border: '1px solid #363636',
                                    }}
                                >
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ width: {xs: "15%", sm: 70},borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: {xs: 11, sm: 14}, fontWeight: 500 }}>شماره</TableCell>
                                                <TableCell align="left" sx={{ width: {xs: "40%", sm: 150},borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: {xs: 11, sm: 14}, fontWeight: 500 }}>جزئیات سفارش</TableCell>
                                                <TableCell align="left" sx={{ width: {xs: "15%", sm: 70},borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: {xs: 11, sm: 14}, fontWeight: 500 }}>تعداد</TableCell>
                                                <TableCell align="left" sx={{ width: {xs: "15%", sm: 70},borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: {xs: 11, sm: 14}, fontWeight: 500 }}>قیمت</TableCell>
                                                <TableCell align="left" sx={{ width: {xs: "15%", sm: 70},verticalAlign: 'top', borderBottom: '1px solid #363636', fontSize: {xs: 11, sm: 14}, fontWeight: 500 }}>مجموع</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {receipt.items.map((detail, index) => (
                                                <TableRow key={detail.id}>
                                                    <TableCell component="th" scope="row" sx={{ width: {xs: "15%", sm: 70}, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{index + 1}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "40%", sm: 150}, borderRight: '1px solid #363636', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.product.name}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "15%", sm: 70}, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.quantity}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "15%", sm: 70}, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.product.discount_price}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "15%", sm: 70}, verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.get_cost_from_product}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                            <Box
                                display={'flex'}
                                justifyContent={'flex-end'}
                            >
                                <Box
                                    width={{ xs: "100%", sm: "49.2%" }}
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
                                        {receipt.pay_amount} تومان
                                    </Typography>
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
                                        onClick={() => handlePrint(receipt.id)}
                                        sx={{
                                            backgroundColor: '#FFCC70',
                                            '&:hover': {
                                                bgcolor: '#FFCC70',
                                                opacity: 0.9,
                                            },
                                            borderRadius: '25px',
                                            padding: '4px 30px',
                                            fontWeight: 'bold',
                                            fontSize: {xs: 14, md: 16},
                                            marginBottom: '15px',
                                            color: '#213346',
                                        }}
                                    >
                                        چاپ فاکتور
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};