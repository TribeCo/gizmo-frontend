import React from 'react';
import { Card, Box, Typography, Divider, TextField, Button } from '@mui/material';

const ForgetPassword = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Ensures the Box takes up the full viewport height
        position: 'relative',
        right: '350px',
      }}
    >
      {/* Floating Typography above the Card */}
      <Box
        sx={{
          position: 'absolute',
          top: '35%', // Adjust this value as needed
          width: '30%', // Match the Card width
          textAlign: 'center', // Center the text within the Box
          color: '#213346', // Text color
          padding: '10px 0', // Vertical padding
          borderRadius: '20px 20px 0 0', // Rounded top corners
          transform: 'translateY(-100%)', // Move up fully outside the Card
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', font: 'Kalameh' }}>
          فراموشی رمز عبور
        </Typography>
      </Box>
      <Card
        sx={{
          width: '30%',
          height: '35%', // Adjusted to 40% of the viewport height
          backgroundColor: '#BDDDE7', // Custom background color
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '20px', // Set rounded corners for the card
          border: '2px solid #FFFFFF', // Set a white border color for the card
        }}
      >
        {/* Typography for the title */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: '#213346', // Text color
            fontWeight: 'bold', // Makes font bold
            padding: '10px',
            marginTop: '10px',
          }}
        >
          بازیابی رمز عبور
        </Typography>
        
        {/* Line divider */}
        <Divider
          sx={{
            width: '90%', // Divider takes up the full width of the card
            marginBottom: '50px', // Space below the divider
            borderColor: 'rgba(0, 0, 0, 0.42)', // Make the divider color more visible
          }}
        />

        {/* TextField for phone number */}
        <TextField
          label="شماره تلفن"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#000' }, // Change label color to black
          }}
          sx={{
            width: '90%', // Make the TextField width match the card content area
            marginBottom: '20px',
            borderRadius: '20px',
             // Add some space below the TextField
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px', // Rounded corners for the TextField
              '& fieldset': {
                borderColor: '#FFFFFF', // Set the border color of the TextField
              },
            },
            backgroundColor: '#FFFFFF', // Set background color for the TextField
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFCC70', // Button background color
            '&:hover': {
              backgroundColor: '#e6b85c', // Darken button color on hover
            },
            borderRadius: '25px', // Rounded corners for button
            color: 'black', // Text color
            fontWeight: 'bold', // Bold text
            fontSize: '18px',
            width: '90%', // Match the width of the text fields
            padding: '10px 0', // Padding inside the button
          }}
        >
          ارسال کد بازیابی
        </Button>
      </Card>
    </Box>
  );
};

export default ForgetPassword;
