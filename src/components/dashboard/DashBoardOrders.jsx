'use client'
import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography, TextField, InputAdornment, IconButton, Button, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import LevelofOrdering from './LevelofOrdering';

export default function DashBoardOrders() {

    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        setSearchTerm(convertToPersian(inputValue));
    }, [inputValue]);

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
        const input = event.target.value;
        const currentDisplayValue = convertToPersian(inputValue);
        if (input !== currentDisplayValue) {
            const newValue = input.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, '').replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
            setInputValue(newValue);
        }
    };

    const convertToPersian = (num) => {
        const numStr = num.toString();
        const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return numStr.replace(/\d/g, (x) => persianNumbers[englishNumbers.indexOf(x)]);
    };

    const [expanded, setExpanded] = useState({});
    const handleExpandClick = (index) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [index]: !prevExpanded[index],
        }));
    };

    const [realOrders, setRealOrders] = useState([
        { orderCode: '0786453465', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
        { orderCode: '4894545456', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
        { orderCode: '4128546528', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
        { orderCode: '4654894898', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
        { orderCode: '0782586558', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
    ])

    const [orders, setOrders] = useState([
        { orderCode: '0786453465', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
        { orderCode: '4894545456', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 2 },
        { orderCode: '4128546528', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 3 },
        { orderCode: '4654894898', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 4 },
        { orderCode: '0782586558', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000', LevelofOrdering: 1 },
    ])

    const filteredOrders = realOrders.filter((order) =>
        convertToPersian(order.orderCode).includes(searchTerm) || order.orderCode.includes(searchTerm)
    );


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
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: { xs: '15px', md: '50px' },
                    width: '100%',
                    maxHeight: '840px'
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '840px' },
                        display: 'flex', // Use flex for all sizes for consistency
                        flexDirection: { xs: 'column', sm: 'row' }, // Stack elements vertically on small screens, horizontally on larger
                        justifyContent: 'space-between', // Space out children to opposite ends
                        textAlign: { xs: 'left', sm: 'initial' }, // Text align left on xs screens, default for others
                        alignItems: { xs: 'flex-start', sm: 'center' }, // Align items flex-start on xs for top alignment, center for others
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            fontSize: '20px',
                            color: '#213346',
                        }}
                    >
                        سفارشات
                    </Typography>
                    <Divider
                        sx={{
                            display: { xs: 'block', sm: 'none' }, // Only display the divider on xs screens
                            width: '100%',
                            my: 2, // Margin top and bottom for spacing around the divider
                        }}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="جستجو..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Box sx={{ backgroundColor: '#22668D', borderRadius: '0 15px 15px 0' }}>
                                        <SearchIcon sx={{ color: '#fff', fontSize: '2.40rem' }} />
                                    </Box>
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: '15px', // Add borderRadius to TextField
                                paddingRight: '0px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'rgba(0, 0, 0, 0.23)', // Adjust the border color if needed
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#22668D', // Adjust the border color on hover if needed
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#22668D', // Adjust the border color on focus if needed
                                    },
                                },
                            },
                        }}
                        sx={{ width: '230px', alignSelf: { xs: 'flex-end', sm: 'auto' } }} // Adjust width as needed
                    />
                </Box>

                <Divider sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '10px',
                    marginBottom: '10px',
                    bgcolor: '#EDEDED',
                }} />
                <Box
                    sx={{
                        marginTop: { xs: '15px', sm: '0px' },
                        height: 'auto',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        width: '100%',
                        '&::-webkit-scrollbar': {
                            display: 'none', // Hide scrollbar for Webkit browsers (Chrome, Safari, etc.)
                        },
                        '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
                        'scrollbar-width': 'none', // Hide scrollbar for Firefox
                    }}
                >
                    {filteredOrders.map((order, index) => (
                        <Box
                            key={index}
                            sx={{
                                bgcolor: '#F7F7F7',
                                borderRadius: '20px',
                                pl: { xs: '15px', md: '40px' },
                                pt: { xs: '15px', md: '30px' },
                                width: { xs: '100%', lg: 'auto' },
                                height: { xs: 'auto', md: 'auto' },
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                marginBottom: '10px',
                            }}
                        >
                            <Grid container spacing={2} sx={{ width: '100%' }}>
                                <Grid item xs={12} md={6}>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: '6px' }} align="left">
                                        کد پیگیری: {convertToPersian(order.orderCode)}<span style={{ marginLeft: '20px', visibility: 'hidden' }}>A</span>
                                    </Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: '6px' }} align="left">
                                        آدرس ارسال: <span style={{ marginRight: '20px' }}></span>{order.destinationAddress}
                                    </Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: '6px' }} align="left">
                                        نام گیرنده: <span style={{ marginRight: '30px' }}></span>{order.receiverName}
                                    </Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: '6px' }} align="left">
                                        تاریخ سفارش: {convertToPersian(order.date)}<span style={{ marginLeft: '2px', visibility: 'hidden' }}>A</span>
                                    </Typography>
                                </Grid>

                                {/* Second Column */}
                                <Grid item sm={6} md={2.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: { xs: '4px', md: '3px' } }} align="left">قیمت کل سفارش:</Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: { xs: '4px', md: '3px' } }} align="left">میزان تخفیف:</Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: { xs: '4px', md: '3px' } }} align="left">مبلغ قابل پرداخت:</Typography>
                                </Grid>

                                {/* Second Column */}
                                <Grid item xs={12} sx={{ display: { xs: 'block', md: 'none' } }}>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: { xs: '4px', md: '3px' } }} align="left">قیمت کل سفارش: {convertToPersian(order.price)}<span style={{ marginRight: '20px', visibility: 'hidden' }}>A</span> تومان</Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: { xs: '4px', md: '3px' } }} align="left">میزان تخفیف: {convertToPersian(order.discountPrice)}<span style={{ marginRight: '45px', visibility: 'hidden' }}>A</span> تومان</Typography>
                                    <Typography sx={{ color: '#44434C', fontSize: '14px', fontWeight: '700', padding: { xs: '4px', md: '3px' } }} align="left">مبلغ قابل پرداخت: {convertToPersian(order.finalPrice)}<span style={{ marginRight: '20px', visibility: 'hidden' }}>A</span> تومان</Typography>
                                </Grid>

                                {/* Third Column */}
                                <Grid item sm={12} md={3} sx={{ position: 'relative', bottom: { xs: '100px', sm: '165px', md: '0px' }, pr: { xs: '30px', sm: '20px', md: '0px' }, display: { xs: 'none', md: 'block' } }}>
                                    <Typography sx={{ color: '#212121D6', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }} align="right">{convertToPersian(order.price)} تومان</Typography>
                                    <Typography sx={{ color: '#212121D6', fontSize: '14px', fontWeight: '500', marginBottom: '6px' }} align="right">{convertToPersian(order.discountPrice)} تومان</Typography>
                                    <Typography sx={{ color: '#212121D6', fontSize: '14px', fontWeight: '700' }} align="right">{convertToPersian(order.finalPrice)} تومان</Typography>
                                </Grid>
                            </Grid>
                            {/* Dropdown arrow and text */}
                            <Box sx={{ alignSelf: { xs: 'center', md: 'flex-end' }, cursor: 'pointer', display: 'flex', alignItems: 'center', paddingRight: { xs: '0px', md: '30px' }, paddingTop: '10px', position: 'relative', bottom: { md: '40px' }, paddingBottom: '10px' }} onClick={() => handleExpandClick(index)}>
                                <Typography sx={{ fontWeight: '700', color: '#22668D', fontSize: '14px' }}>پیگیری سفارش</Typography>
                                <IconButton
                                    aria-expanded={expanded[index]}
                                    aria-label="show more"
                                    size="small"
                                >
                                    <ExpandMoreIcon sx={{ transform: expanded[index] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: '#22668D' }} />
                                </IconButton>
                            </Box>
                            {expanded[index] && (
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex', // Use flexbox layout
                                        flexDirection: 'column', // Stack children vertically
                                        alignItems: 'center', // Center children horizontally
                                        justifyContent: 'center', // Center children vertically (if you have a set height and want to center vertically as well)
                                        gap: '10px', // Optional: Adds space between the children
                                    }}
                                >
                                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                        <LevelofOrdering level={order.LevelofOrdering} />
                                    </Box>
                                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                        <LevelofOrdering level={(order.LevelofOrdering) + 4} />
                                    </Box>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#FFCC70', // Button background color
                                            '&:hover': {
                                                bgcolor: '#FFCC70',
                                                opacity: 0.9,
                                            },
                                            borderRadius: '25px', // Rounded corners for button
                                            padding: '8px 30px', // Padding inside the button
                                            color: '#213346', // Text color
                                            fontWeight: 'bold', // Bold text
                                            fontSize: '14px',
                                            // width: { lg: '131px' }, // Match the width of the text fields
                                            marginBottom: '15px',
                                            // height: { lg: '31px' }, // Added space for the link below the button
                                        }}
                                    >
                                        چاپ فاکتور
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};