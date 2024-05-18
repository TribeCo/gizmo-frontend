import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, Typography, Button } from '@mui/material';
import { AddNewAddress, fetchAddresses } from '@/services/DashBoard';
import { useAuth } from '@/context/AuthContext';
import { enqueueSnackbar } from "notistack";
export default function DeliveryInfoCard({ setAddress }) {
    const { tokens } = useAuth();
    const [Address, SetAddress] = useState({
        province: '',
        city: '',
        straight_address: '',
        postal_code: ''
    });

    const handleChange = (prop) => (event) => {
        SetAddress({
            ...Address,
            [prop]: event.target.value,
        });
    };

    const handleSubmitAddAddress = async () => {
        try {
            console.log(Address);
            const response = await AddNewAddress(Address, tokens);
            if (response) {
                enqueueSnackbar({ message: response.messages || "آدرس با موفقیت اضافه شد.", variant: "success" });
                setAddress((await fetchAddresses(tokens)).data);
                SetAddress({
                    province: '',
                    city: '',
                    straight_address: '',
                    postal_code: '',
                });
            }
        } catch (error) {
            console.error('Error sending data to the API:', error);
            enqueueSnackbar({ message: error.message || "خطا در ارسال اطلاعات به سرور.", variant: "error" });
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
                        value={Address.province}
                        onChange={handleChange("province")}
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
                        value={Address.city}
                        onChange={handleChange("city")}
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
                        value={Address.straight_address}
                        onChange={handleChange("straight_address")}
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
                        value={Address.postal_code}
                        onChange={handleChange("postal_code")}
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
                    onClick={handleSubmitAddAddress}
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