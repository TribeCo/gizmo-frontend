
"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button } from '@mui/material';
const SignUpComponent = () => {

    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const toPersianDigits = (num) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.replace(/\d/g, x => persianDigits[x]);
    };

    useEffect(() => {
        setDisplayValue(toPersianDigits(inputValue));
    }, [inputValue]);

    // Handle phone number change, allow only digits
    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const currentDisplayValue = toPersianDigits(inputValue);
        if (input !== currentDisplayValue) {
            const newValue = input.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, '').replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
            setInputValue(newValue);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '320', md: 340, lg: 340 },
                width: { xs: 340, sm: 410, md: 430, lg: 460 },
                position: 'absolute',
                left: { xs: '50%', sm: '50%', md: '50%', lg: '75%' }, // Center horizontally
                top: '50%', // Center vertically
                transform: 'translate(-50%, -50%)', // Adjust for the translation of the Box based on its width and height
            }}
        >
            {/* Floating Typography above the Card */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '8%', // Adjust top position based on screen size
                    textAlign: 'center',
                    color: '#213346',
                    padding: '10px 0',
                    borderRadius: '20px 20px 0 0',
                    transform: 'translateY(-100%)',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: {
                            lg: '2.25rem', // Larger text size for large screens
                            md: '2.25rem', // Slightly smaller text size for medium screens
                            sm: '2rem', // Even smaller text size for small screens
                            xs: '1.75rem', // Smallest text size for extra-small screens
                        },
                        letterSpacing: '-0.20rem', // Adjust letter spacing to make text more compressed
                    }}
                >
                    به گیزمو شاپ خوش اومدین !
                </Typography>
            </Box>
            <Card
                sx={{
                    width: { xs: '90%', sm: '100%', md: '100%' }, // Adjust card width based on screen size
                    height: { xs: '100%', sm: '100%', md: '100%' }, // Adjust card height based on screen size
                    backgroundColor: 'rgba(189, 221, 231, 0.90)', // Adjust the alpha value as needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // gap: '10px',
                    padding: '20px',
                    borderRadius: '20px',
                    border: '2px solid #FFFFFF',
                }}
            >
                {/* Typography for the title */}
                <Typography sx={{
                    color: '#213346', fontWeight: 'bold', padding: '10px', marginTop: '10px', fontSize: {
                        lg: '1.5rem', // Larger text size for large screens
                        md: '1.5rem', // Slightly smaller text size for medium screens
                        sm: '1.25rem', // Even smaller text size for small screens
                        xs: '1rem', // Smallest text size for extra-small screens
                    },
                }}>
                    ورود / ثبت نام
                </Typography>
                {/* Line divider */}
                <Divider sx={{ width: '90%', marginBottom: { xs: 1, md: 3 }, borderColor: 'rgba(0, 0, 0, 0.42)' }} />
                <Typography sx={{ padding: 1, paddingLeft: { xs: 3, md: 4 }, alignSelf: 'flex-start', fontSize: '13.8px', fontWeight: '500'}}>شماره تلفن:</Typography>
                <TextField
                    variant="outlined"
                    value={displayValue} // Use displayValue for rendering
                    onChange={handlePhoneNumberChange}
                    InputLabelProps={{ style: { color: '#000' } }}
                    sx={{
                        width: '90%',
                        marginBottom: {xs: '15px', md:'30px'},
                        borderRadius: '20px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '20px',
                            '& fieldset': { borderColor: '#FFFFFF' },
                        },
                        backgroundColor: '#FFFFFF',
                    }}
                />
                {/* Submit Button */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FFCC70', // Button background color
                        '&:hover': {
                            bgcolor: '#FFCC70',
                            opacity: 0.9,
                        },
                        borderRadius: '25px',
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        width: '90%',
                        padding: '10px 0',
                    }}
                >
                    ادامه
                </Button>
            </Card>
        </Box>
    );
};

export default SignUpComponent;