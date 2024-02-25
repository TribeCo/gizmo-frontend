"use client";
import React, { useState } from 'react';
import { AppBar, Box, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterBar = ({ filterNames, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterChange = (event, newValue) => {
    setActiveFilter(newValue);
    // Call the onFilterChange prop function with the selected filter name.
    // This assumes filterNames is an array of strings representing the filter options.
    onFilterChange(filterNames[newValue]);
  };

  return (
    <AppBar position="static" sx={{ 
        width: '80%', 
        margin: '0 auto', 
        marginRight: '-1rem',
        bgcolor: '#EEEEEE99', 
        borderRadius: '15px',
        boxShadow: 'none', 
        color: 'black',
        display: 'flex',
      }}>
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%">
          <FilterListIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ mr: 1, fontWeight: 'bold' }}>
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
              <Tab key={name} label={name} disableRipple /> // disableRipple prop added here
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FilterBar;

