'use client'
import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography, TextField, InputAdornment, IconButton, Button, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import LevelofOrdering from './LevelofOrdering';
import { fetchFactors } from '@/services/DashBoard';

export default function DashBoardFactor() {

    const [activePrintId, setActivePrintId] = useState(null);
    const [factors, setFactors] = useState([]);
    const receipts = [
        {
            id: 1,
            customerName: 'علی رضایی',
            orderDate: '1402/07/21',
            address: 'ایران, تهران, خیابان انقلاب',
            orderNumber: '123456',
            phoneNumber: '09123456789',
            email: 'ali@example.com',
            total: '2300000',
            orderDetails: [
                { id: 1, detail: 'محصول A', quantity: 2, price: '100', total: '200' },
                { id: 2, detail: 'محصول B', quantity: 1, price: '150', total: '150' },
            ],
        },
        {
            id: 2,
            customerName: 'مریم میرزایی',
            orderDate: '1402/07/22',
            address: 'ایران, مشهد, بلوار پیروزی',
            orderNumber: '789101',
            phoneNumber: '09213456789',
            email: 'maryam@example.com',
            total: '3200000',
            orderDetails: [
                { id: 3, detail: 'محصول C', quantity: 3, price: '200', total: '600' },
                { id: 4, detail: 'محصول D', quantity: 2, price: '250', total: '500' },
            ],
        },
    ];

    function formatFullAddress(address) {
        const { province, city, straight_address, postal_code, current } = address;
        const fullAddress = `${straight_address}, ${city}, ${province}, Postal Code: ${postal_code}`;
        return current ? `${fullAddress} (Current Address)` : fullAddress;
    }

    const handlePrint = (id) => {
        setActivePrintId(id);
        window.print();
    };

    const handleGetFactors = async () => {
        setFactors((await fetchFactors()).data);
    }

    useEffect(() => {
        const handleAfterPrint = () => setActivePrintId(null);
        window.addEventListener('afterprint', handleAfterPrint);
        return () => {
            window.removeEventListener('afterprint', handleAfterPrint);
        };
        handleGetFactors();
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
                    {factors.map((receipt) => (
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
                                            نام مشتری: <span style={{ fontWeight: 500 }}>{receipt.customerName}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            تاریخ سفارش: <span style={{ fontWeight: 500 }}>{receipt.orderDate}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            آدرس: <span style={{ fontWeight: 500 }}>{formatFullAddress(receipt.address)}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            شماره سفارش: <span style={{ fontWeight: 500 }}>{receipt.orderNumber}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            شماره تماس: <span style={{ fontWeight: 500 }}>{receipt.phoneNumber}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            ایمیل: <span style={{ fontWeight: 500 }}>{receipt.email}</span>
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
                                            آدرس: <span style={{ fontWeight: 500 }}>{receipt.address}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography fontWeight={700} fontSize={14}>
                                            شماره سفارش: <span style={{ fontWeight: 500 }}>{receipt.ref_id}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            شماره تماس: <span style={{ fontWeight: 500 }}>{receipt.phoneNumber}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ textAlign: 'left', fontWeight: 700, fontSize: 14 }}>
                                            ایمیل: <span style={{ fontWeight: 500 }}>{receipt.user.phoneNumber}</span>
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
                                                    <TableCell align="left" sx={{ width: {xs: "40%", sm: 150}, borderRight: '1px solid #363636', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.detail}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "15%", sm: 70}, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.quantity}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "15%", sm: 70}, borderRight: '1px solid #363636', verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.price}</TableCell>
                                                    <TableCell align="left" sx={{ width: {xs: "15%", sm: 70}, verticalAlign: 'top', height: 100, fontSize: {xs: 9, sm: 14}, fontWeight: 400 }}>{detail.total}</TableCell>
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
                                        {receipt.total} تومان
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