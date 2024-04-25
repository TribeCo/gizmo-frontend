"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from '@/context/AuthContext';
import { usePhoneNumber } from '@/utils/phoneNumber';
const ForgetPassword = () => {

    const [confirmationCode, setConfirmationCode] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [newPass, setNewPass] = useState("");
    const [passConf, setPassConf] = useState("");
    const [isPhoneSent, setIsPhoneSent] = useState(false);
    const { phoneNumber, displayValue, handlePhoneNumberChange } = usePhoneNumber('');
    const { forgetPassword, changePassword } = useAuth();


	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleToggleConfirmationVisibility = () => {
		setShowConfirmation(!showConfirmation);
	};

    const handleRecovery = async (event) => {
        event.preventDefault();
        console.log(phoneNumber);
        const isPhoneSent = await forgetPassword(phoneNumber);

        if (isPhoneSent === 1) {
            console.log("phone sent");
            setIsPhoneSent(true);
        }
    };

    const handleChangePassword = async (event) => {
        event.preventDefault();

        const passChanged = await changePassword(
            phoneNumber,
            newPass,
            confirmationCode,
        );

        if (passChanged) {
            console.log("pass changed");
            onClose();
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 'auto',
                width: { xs: 360, sm: 400, md: 420, lg: 450 },
            }}
        >
            {/* Floating Typography above the Card */}
            <Box
                sx={{
                    position: 'relative',
                    textAlign: 'center',
                    color: '#213346',
                    padding: '10px 0',
                    top: 22
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        letterSpacing: '-0.10rem',
                        fontSize: {
                            lg: '2.25rem', // Larger text size for large screens
                            md: '2.25rem', // Slightly smaller text size for medium screens
                            sm: '2rem', // Even smaller text size for small screens
                            xs: '1.75rem', // Smallest text size for extra-small screens
                        },
                    }}
                >
                    فراموشی رمز عبور
                </Typography>
            </Box>
            <Card
                sx={{
                    width: { xs: '95%', sm: '100%', md: '100%' }, // Adjust card width based on screen size
                    height: 'auto',
                    backgroundColor: 'rgba(189, 221, 231, 0.90)', // Adjust the alpha value as needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    borderRadius: '20px',
                    border: '2px solid #FFFFFF',
                }}
            >
                {/* Typography for the title */}
                <Typography variant="h5" component="h2" sx={{
                    color: '#213346', fontWeight: 'bold', padding: '10px', marginTop: '10px', fontSize: {
                        xs: '1.25rem', // Smaller size for extra small screens
                        sm: '1.5rem', // Medium size for small screens
                    },
                }}>
                    بازیابی رمز عبور
                </Typography>
                {/* Line divider */}
                <Divider sx={{ width: '90%', marginBottom: 2, borderColor: 'rgba(0, 0, 0, 0.42)' }} />
                {/* TextField for phone number */}
                {!isPhoneSent ? (
                    <>
                        <Typography variant="body1" sx={{ padding: 1, paddingLeft: 4, alignSelf: 'flex-start' }}>شماره تلفن:</Typography>
                        <TextField
                            variant="outlined"
                            value={displayValue} // Use displayValue for rendering
                            onChange={handlePhoneNumberChange}
                            InputLabelProps={{ style: { color: '#000' } }}
                            sx={{
                                width: '90%',
                                marginBottom: '30px',
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
                            onClick={handleRecovery}
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
                                fontSize: '24px',
                                width: '90%',
                                padding: '10px 0',
                                marginBottom: 4,
                                letterSpacing: '-0.05rem',
                            }}

                        >
                            ارسال کد بازیابی
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography
                            variant="body1"
                            mb={1}
                            ml={3}
                            alignSelf={'flex-start'}>
                            کد ارسال شده را وارد کنید
                        </Typography>
                        <TextField
                            variant="outlined"
                            type="text"
                            value={confirmationCode}
                            onChange={(e) => setConfirmationCode(e.target.value)}
                            
                            InputProps={{
                                dir: "rtl",
                            }}
                            sx={{
                                width: '90%',
                                bgcolor: "white",
                                marginBottom: "5%",
                                borderRadius: "20px",
                                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                            }}
                        />
                        <Typography
                            variant="body1"
                            mb={1}
                            ml={3}
                            alignSelf={'flex-start'}>
                            رمز عبور جدید:
                        </Typography>
                        <TextField
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            value={newPass}
                            onChange={(e) => setNewPass(e.target.value)}
                            fullWidth
                            InputProps={{
                                dir: "rtl",
                                endAdornment: (
                                    <IconButton
                                        onClick={handleTogglePasswordVisibility}
                                        sx={{ color: '#22668D' }}
                                        edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                ),
                            }}
                            sx={{
                                width: '90%',
                                bgcolor: "white",
                                marginBottom: "5%",
                                borderRadius: "20px",
                                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                            }}
                        />
                        <Typography
                            variant="body1"
                            mb={1}
                            ml={3}
                            alignSelf={'flex-start'}>
                            تکرار رمز عبور جدید:
                        </Typography>
                        <TextField
                            variant="outlined"
                            type={showConfirmation ? "text" : "password"}
                            value={passConf}
                            onChange={(e) => setPassConf(e.target.value)}
                            fullWidth
                            InputProps={{
                                dir: "rtl",
                                endAdornment: (
                                    <IconButton
                                        onClick={handleToggleConfirmationVisibility}
                                        sx={{ color: '#22668D' }}
                                        edge="end">
                                        {showConfirmation ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                ),
                            }}
                            sx={{
                                width: '90%',
                                bgcolor: "white",
                                marginBottom: "5%",
                                borderRadius: "20px",
                                "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                            }}
                        />
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={handleChangePassword}
                            sx={{
                                width: '90%',
                                color: "#213346",
                                bgcolor: "#FFCC70",
                                marginTop: "5%",
                                marginBottom: "5%",
                                borderRadius: "20px",
                                letterSpacing: '-0.10rem',
                            }}>
                            <Typography
                                fontWeight={'bold'}
                                variant="h5"
                                align="center"
                                id="login-button">
                                تغییر رمز عبور
                            </Typography>
                        </Button>
                    </>
                )}
            </Card>
        </Box>
    );
};

export default ForgetPassword;
