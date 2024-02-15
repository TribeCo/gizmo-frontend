import React from 'react';
import { Box, Typography } from '@mui/material';

const LineSplitter = ({ text }) => {
    return (
        <Box 
            mt={10} 
            mb={10} 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
        >
            <Box 
                ml={6} 
                width="100%" 
                borderBottom={5} 
                borderColor="#22668D" 
                flexWrap="nowrap"
            />
            <Typography
                dir="center"
                fontWeight="bold"
                variant="h5"
                sx={{ 
                    px: 4, 
                    color: 'black', 
                    bgcolor: 'white',
                    whiteSpace: 'nowrap'
                }}
            >
                {text}
            </Typography>
            <Box 
                mr={6} 
                width="100%" 
                borderBottom={5} 
                borderColor="#22668D" 
            />
        </Box>
    );
}

export default LineSplitter;
