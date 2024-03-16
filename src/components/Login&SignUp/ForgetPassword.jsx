"use client"
import React, { useEffect, useState } from 'react';
import { Card, Box, Typography, Divider, TextField, Button } from '@mui/material';

const ForgetPassword = () => {

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
        height: { xs: 320, sm: 320, md: 340, lg: 340 },
        width: { xs: 360, sm: 400, md: 420, lg: 450 },
        position: 'absolute',
        left: { xs: '50%', sm: '50%', md: '50%', lg: '30%' }, // Center horizontally
        top: '50%', // Center vertically
        transform: 'translate(-50%, -50%)', // Adjust for the translation of the Box based on its width and height
      }}
    >
      {/* Floating Typography above the Card */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '6%', sm: '7%', md: '7%', lg: '7%' }, // Adjust top position based on screen size
          textAlign: 'center',
          color: '#213346',
          padding: '10px 0',
          borderRadius: '20px 20px 0 0',
          transform: 'translateY(-100%)',
        }}
      >
        <Typography
          variant="h4"
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
          width: { xs: '90%', sm: '100%', md: '100%' }, // Adjust card width based on screen size
          height: { xs: '100%', sm: '100%', md: '100%' }, // Adjust card height based on screen size
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
            md: '1.5rem', // Large size for medium screens
            lg: '1.5rem', // Extra large size for large screens
          },
        }}>
          بازیابی رمز عبور
        </Typography>
        {/* Line divider */}
        <Divider sx={{ width: '90%', marginBottom: '50px', borderColor: 'rgba(0, 0, 0, 0.42)' }} />
        {/* TextField for phone number */}
        <TextField
          label="شماره تلفن"
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
          ارسال کد بازیابی
        </Button>
      </Card>
    </Box>
  );
};

export default ForgetPassword;
