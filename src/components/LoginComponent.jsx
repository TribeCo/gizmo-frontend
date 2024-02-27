"use client"
import React, { useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button, IconButton, InputAdornment, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                position: 'relative', // Ensure the parent box is positioned relatively
            }}
        >
            {/* Welcome Typography outside the Card */}
            <Typography
                variant="h4"
                sx={{
                    color: 'black',
                    position: 'absolute',
                    top: '55%', // Adjust this value based on the card's top and height
                    left: '50%',
                    transform: 'translate(-50%, -100%)', // Center horizontally and move up
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    zIndex: 10, // Ensure it's above the card
                }}
            >
                سلام!! خوش اومدین!
            </Typography>
            <Card
                sx={{
                    borderRadius: '20px', // Rounded corners
                    width: '30%', // 30% of the parent width
                    height: '45%', // 45% of the viewport height
                    backgroundColor: '#8ECDDD', // Your specified color
                    display: 'flex',
                    flexDirection: 'column', // Stack children vertically
                    alignItems: 'center',
                    padding: '20px', // Adjust padding as needed
                    position: 'relative',
                    top: '25%', // Adjust top position to align the card almost in the middle
                    border: '1px solid #FFFFFF', // Set card border color
                }}
            >
                {/* Typography for the title */}
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 'bold', // Makes font bold
                        marginTop: '10px', // Adds space at the top
                        width: '100%', // Ensures the Divider spans the entire width
                        textAlign: 'center', // Centers the text
                        padding: '10px',
                    }}
                >
                    ورود / ثبت نام
                </Typography>

                {/* Line divider */}
                <Divider
                    sx={{
                        width: '80%', // Adjusted width
                        marginBottom: '20px', // Adds space below the divider
                        borderColor: 'rgba(0, 0, 0, 0.42)', // Make the divider color more visible
                    }}
                />
                {/* Text fields */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px', // Space between text fields
                        width: '100%', // Match the width of the card content area
                        padding: '20px 20px', // Horizontal padding
                    }}
                >
                    <TextField
                        label="شماره تلفن"
                        variant="outlined"
                        sx={{
                            backgroundColor: '#FFFFFF', // Text field background color
                            borderRadius: '20px', // Rounded corners for text field
                            marginBottom: '10px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px', // Apply to the actual input
                            },
                        }}
                    />
                    {/* Similar setup as your LoginComponent */}
                    <TextField
                        label="رمز عبور"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{ color: '#22668D'}}
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                                    </IconButton>
                                </InputAdornment>
                            ),
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
                        borderRadius: '20px', // Rounded corners for button
                        padding: '7px 30px', // Padding inside the button
                        color: 'black', // Text color
                        fontWeight: 'bold', // Bold text
                        fontSize: '18px',
                        width: '90%', // Match the width of the text fields
                        marginBottom: '10px', // Added space for the link below the button
                    }}
                >
                    ورود
                </Button>
                {/* Password Reset Link */}
                <Link
                    href="#" // Add your password reset link here
                    sx={{
                        textDecoration: 'none', // Remove underline
                        color: 'black', // Link color
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
