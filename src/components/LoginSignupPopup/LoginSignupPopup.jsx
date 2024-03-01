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
            return <SignupForm onClose={onClose} />;
          case "forget-password":
            return <ForgetPasswordForm onClose={onClose} />
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
                background: "linear-gradient(152.12deg, rgba(255, 255, 255, 0.71) 0%, rgba(255, 255, 255, 0.22) 100%), linear-gradient(207.91deg, rgba(255, 255, 255, 0.9) 4.08%, rgba(255, 255, 255, 0.5) 48.17%, rgba(255, 255, 255, 0.9) 100%)",
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "464px",
                p: 4,
                boxShadow: "0px 18.404277801513672px 36.808555603027344px 0px #0000001A",
                borderRadius: "18.4px",
                textAlign: 'left',
                }}
            >
                { renderForm() }

            </Box>
        </Modal>
  );
};

export default LoginSignupModal;
