'use client'
import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography, TextField, InputAdornment, IconButton, Button, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import LevelofOrdering from './LevelofOrdering';

export default function DashBoardFactor() {

    return (
        <Paper
            variant="outlined"
            sx={{
                height: 'fit-content',
                borderRadius: '15px',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: '15px', md: '30px' },
                    width: '900px',
                    maxHeight: '840px',
                }}
            >
                <Box
                    width={850}
                >
                    <Typography
                        sx={{
                            fontWeight: '700',
                            fontSize: '20px',
                            color: '#213346',
                            marginX: 2
                        }}
                    >
                        فاکتور
                    </Typography>
                    <Divider sx={{
                        mt: 2,
                        px: 2,
                        display: 'flex',
                        bgcolor: '#EDEDED',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} />
                </Box>
                <Box
                    width={840}
                    bgcolor={'#F7F7F7'}
                    borderRadius={3}
                    px={5}
                    py={3}
                    mt={2}
                >
                    <Box>
                        <Grid container spacing={1} justifyContent="space-between">
                            <Grid item xs={6}>
                                <Typography sx={{ textAlign: 'left' }} fontWeight={700} fontSize={14}>نام مشتری:</Typography>
                            </Grid>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Typography fontWeight={700} fontSize={14}>تاریخ سفارش:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ textAlign: 'left' }} fontWeight={700} fontSize={14}>آدرس:</Typography>
                            </Grid>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Typography fontWeight={700} fontSize={14}>شماره سفارش:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ textAlign: 'left' }} fontWeight={700} fontSize={14}>شماره تماس:</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{ textAlign: 'left' }} fontWeight={700} fontSize={14}>ایمیل:</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        // py={3}
                        pt={5}
                    >
                        <TableContainer
                            component={Paper}
                            sx={{
                                borderRadius: '8px', // Add border-radius to the table
                                overflow: 'hidden',
                                border: '1px solid #363636', // Apply consistent border color around the table // Ensure the border-radius is visible
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow> {/* Add this line for row divider */}
                                        <TableCell sx={{ borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: 16, fontWeight: 500 }} >شماره</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: 16, fontWeight: 500 }}>جزئیات سفارش</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: 16, fontWeight: 500 }}>تعداد</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ borderRight: '1px solid #363636', borderBottom: '1px solid #363636', verticalAlign: 'top', fontSize: 16, fontWeight: 500 }}>قیمت</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ verticalAlign: 'top', borderBottom: '1px solid #363636', fontSize: 16, fontWeight: 500 }}>مجموع</TableCell> {/* Adjust alignment, Last cell, no border */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow> {/* Add this line for row divider */}
                                        <TableCell component="th" scope="row" sx={{ borderRight: '1px solid #363636', verticalAlign: 'top', height: 120, fontSize: 14, fontWeight: 400 }}> Data 1 </TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ borderRight: '1px solid #363636', verticalAlign: 'top', height: 120, fontSize: 14, fontWeight: 400 }}>Data 2</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ borderRight: '1px solid #363636', verticalAlign: 'top', height: 120, fontSize: 14, fontWeight: 400 }}>Data 3</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ borderRight: '1px solid #363636', verticalAlign: 'top', height: 120, fontSize: 14, fontWeight: 400 }}>Data 4</TableCell> {/* Adjust alignment */}
                                        <TableCell align="left" sx={{ verticalAlign: 'top', height: 120, fontSize: 14, fontWeight: 400 }}>Data 5</TableCell> {/* Adjust alignment, Last cell, no border */}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent={'flex-end'}
                    >
                        <Box
                            width={413}
                            height={50}
                            borderRadius={'0 0px 10px 10px'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            border={'1px solid #363636'}
                            px={3}
                        >
                            <Typography fontSize={16} fontWeight={700}>
                                جمع فاکتور
                            </Typography>
                            <Typography fontSize={16} fontWeight={700}>
                                2300000 تومان
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display={'flex'}
                        justifyContent={'flex-end'}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            pt={3}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FFCC70', // Button background color
                                    '&:hover': {
                                        bgcolor: '#FFCC70',
                                        opacity: 0.9,
                                    },
                                    borderRadius: '25px', // Rounded corners for button
                                    padding: '8px 30px', // Padding inside the button
                                    color: '#213346', // Text color
                                    fontWeight: 'bold', // Bold text
                                    fontSize: '14px',
                                    marginBottom: '15px',
                                }}
                            >
                                چاپ فاکتور
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};