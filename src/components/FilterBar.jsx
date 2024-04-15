"use client";
import React, { useState } from 'react';
import { AppBar, Box, Tabs, Tab, Toolbar, Typography, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import EqualizerIcon from '@mui/icons-material/Equalizer';
const FilterBar = ({ filterNames, onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterChange = (event, newValue) => {
        setActiveFilter(newValue);
        // Call the onFilterChange prop function with the selected filter name.
        // This assumes filterNames is an array of strings representing the filter options.
        onFilterChange(filterNames[newValue]);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: {xs:'90%', md: '95%', xl: '1100px'},
                gap: 1
            }}
        >
            <Button
                variant="contained"
                startIcon={<EqualizerIcon />}
                sx={{
                    display: { xs: '', md: 'none' },
                    backgroundColor: '#EEEEEE99', // Customize button color
                    color: '#44434C', // Text color
                    padding: '6px 12px', // Adjust padding
                    textTransform: 'none', // Prevent uppercase transformation
                    borderRadius: '15px', // Adjust border radius
                    fontSize: '16px',
                    fontWeight: '900',
                    height: '56px',
                    width: {xs:'35%', sm: '20%'},
                    boxShadow: 'none',
                }}
            >
                فیلتر ها
            </Button>
            <AppBar position="static" sx={{
                width: { xs: '65%', sm: '80%',md: '100%'},
                margin: '0 auto',
                bgcolor: '#EEEEEE99',
                borderRadius: '15px',
                boxShadow: 'none',
                color: 'black',
                display: 'flex',
                minHeight: '56px',
                height: { xs: '48px', md: 'auto' }
            }}>
                <Toolbar
                    sx={{
                        minHeight: '48px !Important',
                        overflow: 'auto'
                    }}>
                    <Box display="flex" alignItems="center">
                        <FilterListIcon sx={{ mr: 1 }} />
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px', width: { md: 'max-content' }, display: { xs: 'none', md: 'block' } }}>
                            مرتب سازی :
                        </Typography>
                        <Tabs
                            value={activeFilter}
                            onChange={handleFilterChange}
                            aria-label="filter tabs"
                            sx={{
                                '.MuiTabs-indicator': {
                                    backgroundColor: '#22668D',
                                },
                                '.Mui-selected': {
                                    color: '#22668D',
                                },
                                flexGrow: 1,
                                '& .MuiTabs-flexContainer': {
                                    flexDirection: 'flex-start',
                                },
                                '& .MuiTab-root': {
                                    opacity: 1, // Prevents opacity changes on click
                                },
                                '& .MuiButtonBase-root': {
                                    // Remove the ripple effect
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                },
                            }}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            {filterNames.map((name, index) => (
                                <Tab key={name} label={name} disableRipple sx={{ fontSize: '14px', fontWeight: '500' }} /> // disableRipple prop added here
                            ))}
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default FilterBar;

