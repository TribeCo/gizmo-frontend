import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

import LoginForm from './LoginForm';
import ForgetPasswordForm from './ForgetPasswordForm';
import SignupForm from './SignupForm';
import PhoneLoginForm from './PhoneLogin';


const LoginSignupModal = ({ open, onClose, popupState, setPopupState }) => {
    const renderForm = () => {
        console.log(popupState)
        switch (popupState) {
          case 'phone-login':
            return <PhoneLoginForm setPopupState={setPopupState} />
          case 'login':
            return <LoginForm setPopupState={setPopupState} />;
          case 'signup':
            return <SignupForm />;
          case "forget-password":
            return <ForgetPasswordForm />
          default:
            return null;
        }
      };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="login-form-title"
            aria-describedby="login-form-description"
        >
            <Box
                sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'white', 
                boxShadow: 20,
                p: 4,
                borderRadius: 4,
                textAlign: 'left',
                }}
            >
                { renderForm() }

            </Box>
        </Modal>
  );
};

export default LoginSignupModal;
