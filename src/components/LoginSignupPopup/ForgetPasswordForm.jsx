import React, { useState, useContext } from 'react';
import { Modal, TextField, Button, Link, Box, Typography, IconButton } from '@mui/material';


const ForgetPasswordForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleRecovery = () => {

  };

  return (
    <>

        <Typography variant="h4" align="center" id="login-form-title" mb={2}>بازیابی کلمه عبور</Typography>

        <hr style={{ margin: '16px auto', width: '90%', borderColor: 'rgba(0, 0, 0, 0.2)' }} />
        
        <Typography variant="body1" mb={1}>تلفن همراه:‌</Typography>
        <TextField
          variant="outlined"
          type='text'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          InputProps={{
            dir: 'rtl',
          }}
          sx={{
            bgcolor: "white",
            marginBottom: "5%",
            borderRadius: "20px",
            '& .MuiOutlinedInput-root': { borderRadius: '20px' }
          }}
        />
        <Button 
            variant="contained" 
            color="warning" 
            onClick={handleRecovery} 
            fullWidth 
            sx={{ 
                color: "black",
                bgcolor: "#FFCC70",
                marginTop: "5%",
                marginBottom: "5%",
                borderRadius: '20px' 
            }}
        >
            <Typography
                variant="h5" 
                align="center" 
                id="login-button"
            >
                بازیابی کلمه عبور
            </Typography>
        </Button>
    </>
  );
};

export default ForgetPasswordForm;
