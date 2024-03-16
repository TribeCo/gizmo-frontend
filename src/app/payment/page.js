import React from 'react';
import PaymentHeader from '@/components/CartPage/PaymentHeader';
import ReceiptCard from '@/components/CartPage/ReceiptCard';
import PaymentProductCard from '@/components/CartPage/PaymentProductCard';
import ProgressBar from '@/components/CartPage/ProgressBar';
import { Box, Typography } from '@mui/material';

const TempPage = () => {

    const convertToPersian = (number) => {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, (x) => persianNumbers[x]);
    };

    const productItems = [
        { id: 1, title: 'Product 1' },
        { id: 2, title: 'Product 2' },
        { id: 1, title: 'Product 1' },
        { id: 2, title: 'Product 2' },
        { id: 1, title: 'Product 1' },
        { id: 2, title: 'Product 2' },
        // Add more product items as needed
    ];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            margin: '5px',
            paddingY: 4
        }}>
            <Box sx={{ marginTop: { xs: 1, md: 4 }, marginBottom: { xs: 0, md: 2 } }}>
                <ProgressBar activeStep={2} />
            </Box>
            <Box sx={{ margin: { xs: 2, md: 6 } }}>
                <PaymentHeader />
            </Box>
            {/* Main Content Wrapper */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Changes the flex direction based on screen size
                justifyContent: 'space-between',
                alignItems: { xs: 'center', md: 'flex-start' }, // Centers items in small screens
                marginTop: '20px',
                gap: { xs: '10px', sm: '20px', md: '0px', lg: '20px' }, // Adds gap between items in small screens
            }}>
                {/* Product Cards List */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column', // Stack items vertically
                    alignItems: 'center',
                    width: '100%',
                    paddingLeft: { xs: '20px', md: '30px', lg: '0px' },
                    paddingRight: { xs: '20px', md: '0px', lg: '0px' },
                }}>
                    {productItems.map((item, index) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%'}} key={item.id}>
                            <Typography
                                sx={{
                                    bgcolor: '#22668D',
                                    borderRadius: '25px',
                                    textAlign: 'center',
                                    width: { xs: '20px', sm: '30px', md: '40px', lg: '50px' },
                                    height: { xs: '20px', sm: '30px', md: '40px', lg: '50px' },
                                    color: '#FFFFFF',
                                    paddingTop: { xs: '2px', sm: '4px', md: '6px', lg: '8px' },
                                    fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '24px' }
                                }}
                                fontWeight={900}
                            >
                                {convertToPersian(index + 1)}
                            </Typography>
                            <Box sx={{ width: '90%' }}>
                                <PaymentProductCard />
                                <hr style={{ border: '1px solid #EEEEEE', marginBottom: '3%' }} />
                            </Box>
                        </Box>
                    ))}
                </Box>
                {/* Receipt Card */}
                <Box sx={{
                    width: { xs: '80%' },
                    marginTop: { sm: '20px', md: '0px' },
                    display: 'flex',
                    flexDirection: 'column', // Stack items vertically
                    alignItems: 'center',
                }}>
                    <ReceiptCard />
                </Box>
            </Box>
        </Box>
    );
};

export default TempPage;
