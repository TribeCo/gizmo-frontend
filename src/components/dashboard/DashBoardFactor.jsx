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
                    borderRadius={5}
                    p={5}
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
                        py={3}
                        pt={5}
                    >
                        <TableContainer
                            component={Paper}
                            sx={{
                                borderRadius: '8px', // Add border-radius to the table
                                overflow: 'hidden', // Ensure the border-radius is visible
                            }}
                        >
                            <Table sx={{ minWidth: 650 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>شماره</TableCell>
                                        <TableCell align="left" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>جزئیات سفارش</TableCell>
                                        <TableCell align="left" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>تعداد</TableCell>
                                        <TableCell align="left" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>قیمت</TableCell>
                                        <TableCell align="left">مجموع</TableCell> {/* Last cell, no border */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}> Data 1 </TableCell>
                                        <TableCell align="left" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Data 2</TableCell>
                                        <TableCell align="left" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Data 3</TableCell>
                                        <TableCell align="left" sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Data 4</TableCell>
                                        <TableCell align="left">Data 5</TableCell> {/* Last cell, no border */}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};