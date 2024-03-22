import React from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';



function DeliveryInfoCard() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pl: { xs: 0, md:2 }
            }}
        >
            <Grid container spacing={2} sx={{justifyContent: 'end'}}> {/* Adjust spacing between Grid items */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> استان: </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            width: {xs: '320', sm: '380', md: '420', lg: '550px'},
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> شهر / شهرستان : </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            width: {xs: '320', sm: '380', md: '420', lg: '550px'},
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> آدرس دقیق: </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                                height: '120px',
                            },
                            width: {xs: '320', sm: '380', md: '420', lg: '550px'},
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> کدپستی: </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            width: {xs: '320', sm: '380', md: '420', lg: '550px'},
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FFCC70', // Button background color
                        '&:hover': {
                            bgcolor: '#FFCC70',
                            opacity: 0.9,
                        },
                        width: {xs: '95%', sm: 'auto'},
                        borderRadius: '20px', // Rounded corners for button
                        padding: '8px 30px', // Padding inside the button
                        color: '#213346', // Text color
                        fontWeight: '700', // Bold text
                        fontSize: {xs: '16px', md:'20px'},
                        mt: {xs: 5, md: 0 },
                        mr: {xs: 0 , lg: 8, xl: 4},
                    }}
                >
                    افزودن به آدرس ها
                </Button>
            </Grid>
        </Box>
    );
}

export default DeliveryInfoCard;
