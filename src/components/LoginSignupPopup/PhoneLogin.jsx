import React, { useState, useContext } from 'react';
import { TextField, Button, Link, Box, Typography, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthContext from '@/context/AuthContext';


const PhoneLoginForm = ({ onClose, setPopupState }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser } = useContext(AuthContext);


    const handleContinue = () => {
        if (phoneNumber !== "" && showPassword) {
            // 
        } else if (phoneNumber !== "") {
            setShowPassword(true);
        }
    };

  const handleLogin = () => {
    // Handle login logic here
    
    onClose();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginWithPassword = () => {
    setPopupState("login");
  };

  const handleSignup = () => {
    setPopupState("signup");
  };

  const handleChangePhoneNumber = () => {
    setShowPassword(false);
    setPhoneNumber("");
  };

  return (
      <>

        <Typography variant="h4" align="center" id="login-form-title" mb={2}>ورود / ثبت نام</Typography>

        <hr style={{ margin: '16px auto', width: '90%', borderColor: 'rgba(0, 0, 0, 0.2)' }} />
        
        <Typography variant="body1" mb={1}>تلفن همراه:</Typography>
        
        <TextField
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          InputProps={{ dir: 'rtl' }}
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
            marginBottom: "5%",
            '& .MuiOutlinedInput-root': { borderRadius: '20px' }
          }}
        />

        { showPassword ? 
        <>
            <Typography variant="body1" mb={1}>لطفا کد ارسال شده را وارد نمایید:‌</Typography>
            
            <TextField
            variant="outlined"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            fullWidth
            InputProps={{ dir: 'rtl' }}
            sx={{
                bgcolor: "white",
                borderRadius: "20px",
                marginBottom: "5%",
                '& .MuiOutlinedInput-root': { borderRadius: '20px' }
            }}
            />
        </> : <></>
        }
       
        <Button 
            variant="contained" 
            color="warning" 
            onClick={handleContinue} 
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
                ادامه
            </Typography>
        </Button>

        {showPassword ? 
        <>      
            <Link href="#" variant="body2" underline='false' color="black" onClick={handleChangePhoneNumber}>
                شماره موبایل خود را اشتباه وارد کرده اید؟!
            </Link>

            <br />
        </>
        :
        <>
            <Link href="#" variant="body2" underline='false' color="black" onClick={handleSignup}>
              ثبت نام
            </Link>

            <br />
        
            <Link href="#" variant="body2" underline='false' color="black" onClick={handleLoginWithPassword}>
                ورود با رمز عبور
            </Link>
        </>
        }  
      
      </>
  );
};

export default PhoneLoginForm;
