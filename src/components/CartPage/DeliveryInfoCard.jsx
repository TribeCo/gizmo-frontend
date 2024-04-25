import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import { AddNewAddress } from '@/services/DashBoard';
import { useAuth } from '@/context/AuthContext';

export default function DeliveryInfoCard() {

    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [straight_address, setStraight_Address] = useState('');
    const [postal_code, setPostal_Code] = useState('');
    const { tokens } = useAuth();

    const handleSubmit = async () => {
        const formData = {
            straight_address,
            province,
            postal_code,
            city,
        };
        try {
            const response = await AddNewAddress(formData, tokens);
            if (response.ok) {
                console.log('Success:', result);
            } else {
                throw new Error('Failed to submit address');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pl: { xs: 0, md: 2 }
            }}
        >
            <Grid container spacing={2} sx={{ justifyContent: 'end' }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> استان: </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            width: { xs: '320', sm: '380', md: '420', lg: '550px' },
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> شهر / شهرستان : </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            width: { xs: '320', sm: '380', md: '420', lg: '550px' },
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
                        value={straight_address}
                        onChange={(e) => setStraight_Address(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                                height: '120px',
                            },
                            width: { xs: '320', sm: '380', md: '420', lg: '550px' },
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" sx={{ padding: '5px', paddingLeft: '15px' }}> کدپستی: </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        value={postal_code}
                        onChange={(e) => setPostal_Code(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                            width: { xs: '320', sm: '380', md: '420', lg: '550px' },
                            backgroundColor: '#EEEEEE',
                        }}
                    />
                </Grid>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: '#FFCC70', // Button background color
                        '&:hover': {
                            bgcolor: '#FFCC70',
                            opacity: 0.9,
                        },
                        width: { xs: '95%', sm: 'auto' },
                        borderRadius: '20px', // Rounded corners for button
                        padding: '8px 30px', // Padding inside the button
                        color: '#213346', // Text color
                        fontWeight: '700', // Bold text
                        fontSize: { xs: '16px', md: '20px' },
                        mt: { xs: 5, md: 0 },
                        mr: { xs: 0, lg: 8, xl: 4 },
                    }}
                >
                    افزودن به آدرس ها
                </Button>
            </Grid>
        </Box>
    );
}