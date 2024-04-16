// src/DynamicComponentLoader.js
import React from 'react';
import { Box } from '@mui/material';
import { baseUrl } from '@/services';
import SignUpComponent from './SignUpComponent';
import SignUp2Component from './SignUp2Component';
import SignUp3Component from './SignUp3Component';

export default function SignUpRendering ({ loginInfo }) {
    const { component, modifyComponent } = loginInfo;

    const renderComponent = () => {
        switch (component) {
            case '1': return <SignUpComponent/>;
            case '2': return <SignUp2Component/>;
            case '3': return <SignUp3Component/>;
            default: return <SignUpComponent/>;
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                backgroundImage: {
                    md: `url("${baseUrl}/images/media/pictures/Forget_pass.png")`, // Apply background image for md and up
                    sm: 'none', // Remove background image for sm and below
                    xs: 'none', // Remove background image for xs
                },
                backgroundSize: 'cover', // Cover the entire space, maintaining aspect ratio
                backgroundPosition: {
                    lg: 'center', // Center the background image for lg and up
                    md: 'left', // Align background image to the right for md and down
                    sm: 'center', // Not applicable as image is removed but set for consistency
                    xs: 'center', // Not applicable as image is removed but set for consistency
                },
                backgroundColor: {
                    sm: '#8ECDDD', // Change the background color for sm and below
                    xs: '#8ECDDD', // Change the background color for xs
                },
                backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
                display: 'flex',
                justifyContent: {xs: 'center', lg: 'flex-end'},
                alignItems: 'center',
                pr: {lg: 30}
            }}
        >
            {renderComponent()}
        </Box>
    );
}
