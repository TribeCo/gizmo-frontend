import React from 'react';
import { Card, Box, TextField, Grid, Button, Typography } from '@mui/material';

const ContactUsTextfields = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingY: '20px'
            }}
        >
            <Card
                sx={{
                    height: '340px',
                    backgroundColor: '#BDDDE7', // Custom background color
                    padding: '30px', // Keep uniform padding for top, left, and right
                    paddingTop:  2,
                    borderRadius: '20px',
                    margin: '20px', // Add some margin around the card
                    display: 'flex', // Use flex 
                    flexDirection: 'column', // Stack children vertically
                    alignItems: 'center', // Center align the children
                }}
            >
                <Grid container spacing={4}> {/* Increased spacing between Grid items */}
                    {/* First Row */}
                    <Grid item xs={4}>
                        <Typography sx={{ padding: 1, paddingLeft: 3, fontSize: 16, fontWeight: 500 }}>نام و نام خانوادگی:</Typography>
                        <TextField variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ padding: 1, paddingLeft: 3, fontSize: 16, fontWeight: 500 }}>آدرس ایمیل:</Typography>
                        <TextField variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography sx={{ padding: 1, paddingLeft: 3, fontSize: 16, fontWeight: 500 }}>توضیحات بیشتر:</Typography>
                        <TextField variant="outlined" fullWidth multiline rows={4} sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px', height: '155px' }, borderRadius: '20px' }} />
                    </Grid> 
                    <Grid item xs={4} sx={{ position: 'relative', bottom: '120px' }}>
                        <Typography sx={{ padding: 1, paddingLeft: 3, fontSize: 16, fontWeight: 500 }}>شماره تلفن:</Typography>
                        <TextField variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px'}} />
                    </Grid>
                    <Grid item xs={4} sx={{ position: 'relative', bottom: '120px' }}>
                        <Typography sx={{ padding: 1, paddingLeft: 3, fontSize: 16, fontWeight: 500 }}>موضوع پیام شما:</Typography>
                        <TextField variant="outlined" fullWidth sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px' }, borderRadius: '20px'}} />
                    </Grid>
                    <Grid item xs={4}>
                        {/* <TextField label="توضیحات بیشتر" variant="outlined" fullWidth multiline rows={4} sx={{ backgroundColor: '#FFFFFF', '& .MuiOutlinedInput-root': { borderRadius: '20px', height: '155px' }, borderRadius: '20px', position: 'relative', bottom: '95px' }} /> */}
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black', // Button background color
                        color: 'white', // Text color
                        position: 'relative',
                        bottom: '80px',
                        fontWeight: 'bold', // Bold text
                        fontSize: '20px',
                        borderRadius: '25px', // Rounded corners
                        width: '32%', // Match the width of the center text fields
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
