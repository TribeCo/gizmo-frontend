"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button, Link } from '@mui/material';

const SignUp2Component = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const [returnCode, setReturnCode] = useState(' ');
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
                height: { xs: 420, md: 436 }, // Minimum height to maintain size
                width: { xs: 320, sm: 400, md: 460 }, // Minimum width to maintain size
                position: 'absolute',
                right: {xs: '', sm: '50%' ,md: '50%', lg: '23%'}, // Centered horizontally
                top: '50%', // Centered vertically
                transform: 'translate(50%, -50%)', // Adjust position to truly center
                '@media (max-width: 768px)': {
                    right: '50%', // Adjust for smaller screens
                    transform: 'translate(50%, -50%)', // Keep it centered
                },
                '@media (max-width: 480px)': {
                    minWidth: '300px', // Adjust width for very small devices
                },
            }}
        >
            {/* Welcome Typography outside the Card */}
            <Typography
                variant="h4"
                sx={{
                    color: '#213346',
                    position: 'absolute',
                    top: '5%',
                    left: '55%',
                    transform: 'translate(-50%, -100%)',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    zIndex: 10,
                    width: '100%',
                    fontSize: {
                    lg: '2.25rem', // Larger text size for large screens
                    md: '2.25rem', // Slightly smaller text size for medium screens
                    sm: '2rem', // Even smaller text size for small screens
                    xs: '1.75rem', // Smallest text size for extra-small screens
                    },
                    letterSpacing: '-0.20rem',
                }}
                >
                به گیزمو شاپ خوش اومدین !
            </Typography>
            <Card
                sx={{
                    borderRadius: '20px',
                    backgroundColor: 'rgba(189, 221, 231, 0.90)', // Adjust the alpha value as needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    border: '1px solid #FFFFFF',
                    height: '100%', // Use 100% of the parent Box's height
                    width: '100%', // Use 100% of the parent Box's width
                }}
            >
                {/* Typography for the title */}
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 'bold',
                        marginTop: '10px',
                        width: '100%',
                        textAlign: 'center',
                        padding: '10px',
                        fontSize: {
                        xs: '1.25rem', // Smaller size for extra small screens
                        sm: '1.5rem', // Medium size for small screens
                        md: '1.5rem', // Large size for medium screens
                        lg: '1.5rem', // Extra large size for large screens
                        },
                    }}
                    >
                    ورود / ثبت نام
                </Typography>
                {/* Line divider */}
                <Divider
                    sx={{
                        width: '90%', // Adjusted width
                        borderColor: 'rgba(0, 0, 0, 0.42)', // Make the divider color more visible
                    }}
                />
                {/* Text fields */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%', // Match the width of the card content area
                        padding: '20px 20px', // Horizontal padding
                    }}
                >
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px'}}>شماره تلفن:</Typography>
                    <TextField
                        variant="outlined"
                        value={displayValue} // Use displayValue for rendering
                        onChange={handlePhoneNumberChange}
                        sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px', marginBottom: '10px', '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
                    />
                    {/* Similar setup as your LoginComponent */}
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px'}}> لطفا کد ارسال شده را وارد نمایید: </Typography>
                    <TextField
                        variant="outlined"
                        value={returnCode}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                        }}
                    />
                </Box>
                {/* Submit Button */}
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
                        fontSize: '24px',
                        letterSpacing: '-0.10rem',
                        width: '90%', // Match the width of the text fields
                        marginBottom: '15px',
                        height: '47px' // Added space for the link below the button
                    }}
                >
                    ادامه
                </Button>
                {/* Password Reset Link */}
                <Link
                    href="/signup/1" // Add your password reset link here
                    sx={{
                        textDecoration: 'none', // Remove underline
                        color: '#213346', // Link color
                        fontSize: '0.875rem', // Smaller font size
                        alignSelf: 'center', // Align the link to the right
                        marginLeft: '7%', // Align with the button's margin
                    }}
                >
                    شماره موبایل خود را اشتباه وارد کردید؟!
                </Link>
            </Card>
        </Box>
    );
};

export default SignUp2Component;
