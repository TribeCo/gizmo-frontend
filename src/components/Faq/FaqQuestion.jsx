"use client";
import { Grid, Paper, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";


const FaqQuestion = ({ question, answer }) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <Grid
            px={1}
            sx={{
                width:{xs: '100%', sm: 'auto'},
            }}
        >
            <Box onClick={handleClick}>
                
                <Paper
                    sx={{
                        display: 'felx',
                        alignItems: 'center',
                        bgcolor: '#F4F4F4',
                        borderRadius: '20px',
                        boxShadow: 'none',
                        width: {xs: 'none', sm: '35rem',md: '50rem', lg: '60rem'},
                        gap: {xs: 1, sm: 2,},
                        mt: {xs: 1, sm: 2},
                        pl: {xs: 2, sm: 5},
                        py: {xs: 1, sm: 2},
                    }}
                >
                    {!isOpened ? (
                        <Grid sx={{ scale: {xs: '0.7', sm: '1'} }}>
                            <SvgIcon width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0001 10.668H17.3334V4.0013C17.3334 3.11725 16.9822 2.2694 16.3571 1.64428C15.732 1.01916 14.8841 0.667969 14.0001 0.667969C13.116 0.667969 12.2682 1.01916 11.6431 1.64428C11.0179 2.2694 10.6667 3.11725 10.6667 4.0013L10.7851 10.668H4.00008C3.11603 10.668 2.26818 11.0192 1.64306 11.6443C1.01794 12.2694 0.666748 13.1172 0.666748 14.0013C0.666748 14.8854 1.01794 15.7332 1.64306 16.3583C2.26818 16.9834 3.11603 17.3346 4.00008 17.3346L10.7851 17.2163L10.6667 24.0013C10.6667 24.8854 11.0179 25.7332 11.6431 26.3583C12.2682 26.9834 13.116 27.3346 14.0001 27.3346C14.8841 27.3346 15.732 26.9834 16.3571 26.3583C16.9822 25.7332 17.3334 24.8854 17.3334 24.0013V17.2163L24.0001 17.3346C24.8841 17.3346 25.732 16.9834 26.3571 16.3583C26.9822 15.7332 27.3334 14.8854 27.3334 14.0013C27.3334 13.1172 26.9822 12.2694 26.3571 11.6443C25.732 11.0192 24.8841 10.668 24.0001 10.668Z" fill="#22668D" />
                            </SvgIcon>
                        </Grid>

                    ) : (
                        <Grid sx={{ scale: {xs: '0.7', sm: '1'} }}>
                            <SvgIcon width="28" height="7" viewBox="0 0 28 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0.333984H3.99996C3.1159 0.333984 2.26806 0.685174 1.64294 1.3103C1.01782 1.93542 0.666626 2.78326 0.666626 3.66732C0.666626 4.55137 1.01782 5.39922 1.64294 6.02434C2.26806 6.64946 3.1159 7.00065 3.99996 7.00065H24C24.884 7.00065 25.7319 6.64946 26.357 6.02434C26.9821 5.39922 27.3333 4.55137 27.3333 3.66732C27.3333 2.78326 26.9821 1.93542 26.357 1.3103C25.7319 0.685174 24.884 0.333984 24 0.333984Z" fill="#22668D" />
                            </SvgIcon>
                        </Grid>
                    )}

                    <Typography
                        variant="h6"
                        fontWeight='bold'
                        sx={{
                            textWrap: 'wrap',
                            pr: 5,  
                            fontSize: {xs: 14, sm: 18, md: 22},
                        }}
                    >
                        {question}
                    </Typography>
                </Paper>
            </Box>
            {isOpened &&
                <Paper
                    sx={{
                        display: 'felx',
                        alignItems: 'center',
                        bgcolor: 'rgba(34, 102, 141, 0.1)',
                        borderRadius: '20px',
                        boxShadow: 'none',
                        width: {xs: 'auto', sm: '35rem',md: '50rem', lg: '60rem'},
                        mt: 1,
                        pl: {xs: 3, sm: 5,},
                        py: 2,
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: {xs: 14, sm: 16, md: 20},
                            textWrap: 'wrap',
                            pr: 4,
                        }}
                    >
                        {answer}
                    </Typography>
                </Paper>
            }
        </Grid>
    )
}

export default FaqQuestion;