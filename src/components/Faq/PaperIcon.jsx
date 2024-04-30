import React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';

const PaperIcon = ({ logo, text }) => {
    return (
        <Paper
            sx={{
                width: { xs: '125px', sm: '175px', md: '200px' },
                height: { xs: '125px', sm: '175px', md: '200px' },
                borderRadius: '30px',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s',
                '&:hover': {
                    scale: '1.05',
                }
            }}
        >
            <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '60px', sm: '80px', md: '100px' },
                        height: { xs: '60px', sm: '80px', md: '100px' },
                    }}
                >
                    <img src={logo} alt="icon" />
                </Box>
                <Typography
                    variant="h6"
                    fontWeight='bold'
                    textAlign='center'
                    sx={{
                        fontSize: { xs: 12, sm: 18, md: 20 },
                        mt: 1,
                    }}
                >
                    {text}
                </Typography>
            </Grid>
        </Paper>
    );
};

export default PaperIcon;
