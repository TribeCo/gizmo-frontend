"use client";
import React, { useState } from 'react';
import { AppBar, Box, Tabs, Tab, Toolbar, Typography, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import EqualizerIcon from '@mui/icons-material/Equalizer';
const FilterBar = ({ filterNames, onFilterChange, handleClick }) => {
    const [activeFilter, setActiveFilter] = useState(0);

    const handleFilterChange = (event, newValue) => {
        setActiveFilter(newValue);
        onFilterChange(filterNames[newValue]);
    };

    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'flex-start'}
            gap={1}
        >
            <Button
                onClick={handleClick}
                startIcon={<EqualizerIcon/>}
                sx={{
                    display: {xs: 'flex', md: 'none'},
                    bgcolor: '#EEEEEE99',
                    flexDirection : 'row',
                    color: '#44434C',
                    borderRadius: '15px',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    minHeight: {xs:'45px', sm: '50px'},
                }}
            >
                <Typography
                    fontSize={14}
                    fontWeight={'bold'}
                >
                    فیلترها
                </Typography>
            </Button>
            <AppBar
                sx={{
                    width: { xs: '75vw' },
                    position: 'static',
                    bgcolor: '#EEEEEE99',
                    borderRadius: '15px',
                    boxShadow: 'none',
                    color: 'black',
                }}>
                <Toolbar
                    sx={{ minHeight: {xs: '45px', sm: '50px', md: '70px'}, px: {xs: 1, md: 3} }}
                >
                    <FilterListIcon sx={{ display: { xs: 'none', md: 'flex' } }} />
                    <Typography
                        ml={1}
                        fontSize={22}
                        fontWeight={'bold'}
                        display={{ xs: 'none', md: 'flex' }}
                    >
                        مرتب سازی :
                    </Typography>
                    <Tabs
                        value={activeFilter}
                        onChange={handleFilterChange}
                    >
                        {filterNames.map((name, index) => (
                            <Tab key={name} value={index} label={name} disableRipple sx={{ fontSize: { xs: '13px', sm: '16px', md: '18px' }, fontWeight: '700', minWidth: '60px', padding: {xs: '10px', md: '15px'} }} /> // disableRipple prop added here
                        ))}
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default FilterBar;

