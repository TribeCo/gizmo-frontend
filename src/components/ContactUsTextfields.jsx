import React from 'react';
import { Card, Box, TextField, Grid, Button } from '@mui/material';

const ContactUsTextfields = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
            }}
        >
            <Card
                sx={{
                    backgroundColor: '#BDDDE7', // Custom background color
                    padding: '30px', // Keep uniform padding for top, left, and right
                    paddingTop: '50px',
                    borderRadius: '20px',
                    width: '90%', // Adjusted width of the card to 90%
                    height: '75%',
                    margin: '20px', // Add some margin around the card
                    display: 'flex', // Use flex layout
                    flexDirection: 'column', // Stack children vertically
                    alignItems: 'center', // Center align the children
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Adds a shadow
                    transition: '0.3s', // Smooth transition for hover effect
                    '&:hover': {
                        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', // Darker shadow on hover
                    },
                }}
            >
                <Grid container spacing={5}> {/* Increased spacing between Grid items */}
                    {/* First Row */}
                    <Grid item xs={4}>
                        <TextField label="نام و نام خانوادگی" variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="آدرس ایمیل" variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={4}></Grid> {/* This empty Grid item helps push the last field to the third column */}
                    {/* Second Row */}
                    <Grid item xs={4}>
                        <TextField label="شماره تلفن" variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="موضوع پیام شما" variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="توضیحات بیشتر" variant="outlined" fullWidth multiline rows={4} sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px', height: '155px' }, borderRadius: '20px', position: 'relative', bottom: '95px' }} />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black', // Button background color
                        color: 'white', // Text color
                        position: 'relative',
                        bottom: '60px',
                        fontWeight: 'bold', // Bold text
                        fontSize: '20px',
                        borderRadius: '25px', // Rounded corners
                        width: '30%', // Match the width of the center text fields
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.8)', // Slightly darker on hover
                        }
                    }}
                >
                    ارسال تیکت
                </Button>
            </Card>
        </Box>
    );
};

export default ContactUsTextfields;
