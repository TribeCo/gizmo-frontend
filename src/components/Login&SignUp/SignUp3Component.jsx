"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button, IconButton, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp3Component = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
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
                height: '736px', // Minimum height to maintain size
                width: { xs: 345, sm: 400, md: 460 }, // Minimum width to maintain size
                position: 'absolute',
                right: {xs: '', sm: '50%' ,md: '50%', lg: '25%'}, // Centered horizontally
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
                    top: '3%',
                    left: '55%',
                    transform: 'translate(-50%, -100%)',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    zIndex: 10,
                    width: '100%',
                    fontSize: { 
                    xs: '1.75rem', // Smaller size for extra small screens
                    sm: '2rem', // Medium size for small screens
                    md: '2.25rem', // Large size for medium screens
                    lg: '2.25rem', // Extra large size for large screens
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
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>نام و نام خانوادگی:</Typography>
                    <TextField
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px', marginBottom: '5px', '& .MuiOutlinedInput-root': { borderRadius: '20px' }}}
                    />
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>شماره تلفن:</Typography>
                    <TextField
                        variant="outlined"
                        value={displayValue} // Use displayValue for rendering
                        onChange={handlePhoneNumberChange}
                        sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px', marginBottom: '5px', '& .MuiOutlinedInput-root': { borderRadius: '20px' }}}
                    />
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>آدرس ایمیل:</Typography>
                    <TextField
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ backgroundColor: '#FFFFFF', borderRadius: '20px', marginBottom: '5px', '& .MuiOutlinedInput-root': { borderRadius: '20px' }}}
                    />
                    {/* Similar setup as your LoginComponent */}
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px'}}>رمز عبور:</Typography>
                    <TextField
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: '#22668D'}}
                                            aria-label="toggle password visibility"
                                            onClick={togglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '20px',
                                },
                                marginBottom: '5px',
                            }}
                        />
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px'}}>تکرار رمز عبور:</Typography>
                    <TextField
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{ color: '#22668D'}}
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityIcon sx={{color: '#22668D'}}/> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            marginBottom: '10px',
                        }}
                    />
                    <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name="agreement" color="primary" />}
                    label={
                        <Typography variant="body1">
                        با قوانین و مقررات سایت موافقم
                        </Typography>
                    }
                    sx={{
                        paddingLeft: '10px',
                        '& .MuiTypography-body1': { // Targeting the Typography component
                        fontSize: '0.875rem', // Smaller font size
                        },
                        '& .MuiCheckbox-root': { // Targeting the Checkbox component
                        borderRadius: '2px', // Small amount of borderRadius
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
                            backgroundColor: '#e6b85c', // Darken button color on hover
                        },
                        borderRadius: '25px', // Rounded corners for button
                        padding: '8px 30px', // Padding inside the button
                        color: '#213346', // Text color
                        fontWeight: 'bold', // Bold text
                        fontSize: '22px',
                        width: '90%', // Match the width of the text fields
                        height: '47px',
                        letterSpacing: '-0.10rem',
                    }}
                >
                    ثبت نام
                </Button>
            </Card>
        </Box>
    );
};

export default SignUp3Component;
