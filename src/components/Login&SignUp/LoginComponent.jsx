"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button, IconButton, InputAdornment, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAuth } from '@/context/AuthContext';
import * as Yup from "yup";

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setphoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const [errors, setErrors] = useState({});
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toPersianDigits = (num) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return num.replace(/\d/g, x => persianDigits[x]);
    };

    useEffect(() => {
        setDisplayValue(toPersianDigits(phoneNumber));
    }, [phoneNumber]);

    // Handle phone number change, allow only digits
    const handlePhoneNumberChange = (event) => {
        const input = event.target.value;
        const currentDisplayValue = toPersianDigits(phoneNumber);
        if (input !== currentDisplayValue) {
            const newValue = input.replace(/[^\d۰۱۲۳۴۵۶۷۸۹]/g, '').replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
            setphoneNumber(newValue);
        }
    };

    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .min(11, "تلفن همراه ۱۱ رقم است")
            .max(11, "تلفن همراه ۱۱ رقم است")
            .required("تلفن همراه الزامی است"),
        password: Yup.string().required("رمز عبور الزامی است"),
    });

    const { loginUser } = useAuth();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await validationSchema.validate(
                {
                    phoneNumber,
                    password,
                },
                { abortEarly: false },
            );
            loginUser(phoneNumber, password);
        } catch (validationErrors) {
            const newErrors = {};
            validationErrors.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto', // Minimum height to maintain size
                width: { xs: 350, sm: 400, md: 460 }, // Minimum width to maintain size
            }}
        >
            {/* Welcome Typography outside the Card */}
            <Typography
                variant="h4"
                sx={{
                    position: 'relative',
                    top: 17,
                    color: '#213346',
                    fontWeight: 'bold',
                    fontSize: {
                        xs: '1.75rem', // Smaller size for extra small screens
                        sm: '2rem', // Medium size for small screens
                        md: '2.25rem', // Large size for medium screens
                        lg: '2.25rem', // Extra large size for large screens
                    },
                    letterSpacing: '-0.10rem',
                }}
            >
                سلام!! خوش اومدین!
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
                        width: '100%',
                        padding: '20px 20px',
                    }}
                >
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>شماره تلفن:</Typography>
                    <TextField
                        variant="outlined"
                        value={displayValue}
                        onChange={handlePhoneNumberChange}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            marginBottom: '3px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                        }}
                    />
                    {errors.phoneNumber && (
                        <Typography color="error" sx={{ fontSize: '0.80rem', paddingLeft: '15px' }}>
                            {errors.phoneNumber}
                        </Typography>
                    )}
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}>رمز عبور: </Typography>
                    <TextField
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            marginBottom: '3px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                        sx={{ color: '#22668D' }}
                                    >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {errors.password && (
                        <Typography color="error" sx={{ fontSize: '0.80rem', paddingLeft: '15px' }}>
                            {errors.password}
                        </Typography>
                    )}
                </Box>
                <Button
                    onClick={handleLogin}
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
                        width: '90%', // Match the width of the text fields
                        marginBottom: '15px', // Added space for the link below the button
                        height: '47px',
                        letterSpacing: '-0.10rem',
                    }}
                >
                    ورود
                </Button>
                <Link
                    href="/login/forgetpass" // Add your password reset link here
                    sx={{
                        textDecoration: 'none', // Remove underline
                        color: '#213346', // Link color
                        fontSize: '0.875rem', // Smaller font size
                        alignSelf: 'flex-start', // Align the link to the right
                        marginLeft: '7%', // Align with the button's margin
                    }}
                >
                    فراموشی رمز عبور
                </Link>
            </Card>
        </Box>
    );
};

export default LoginComponent;
