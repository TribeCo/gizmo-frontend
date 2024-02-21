"use client";
import React, { useEffect, useState } from 'react';
import { Card, Box, FormControlLabel, Switch, Divider, Checkbox, TextField, Accordion, AccordionSummary, AccordionDetails, Typography, IconButton, InputAdornment, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

const FilterCard = ({ filterList, dropdownOptions }) => {
    const initialState = {
        dropdownFilter: [],
        textFieldFilter1: '',
        textFieldFilter2: '',
    };

    filterList.forEach(filter => {
        initialState[filter.name] = false;
    });

    const [filters, setFilters] = useState(initialState);

    useEffect(() => {
        setFilters(prevState => {
            const newState = { ...prevState };
            filterList.forEach(filter => {
                if (newState[filter.name] === undefined) {
                    newState[filter.name] = false;
                }
            });
            return newState;
        });
    }, [filterList]);

    const handleToggle = (filter) => (event) => {
        setFilters(prevState => ({ ...prevState, [filter]: event.target.checked }));
    };

    const handleDropdownChange = (option) => {
        const currentIndex = filters.dropdownFilter.indexOf(option);
        const newChecked = [...filters.dropdownFilter];

        if (currentIndex === -1) {
            newChecked.push(option);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setFilters({ ...filters, dropdownFilter: newChecked });
    };

    const handleTextFieldChange = (filter) => (event) => {
        if (/^\d*$/.test(event.target.value)) {
            setFilters({ ...filters, [filter]: event.target.value });
        }
    };

    const resetFilters = () => {
        setFilters(initialState);
    };

    return (
        <Box
            sx={{
                width: '25%',
                height: '60vh', // 50% of the viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                top: '-4rem'
            }}
        >
            <Card
                sx={{
                    width: '100%', // Takes full width of the Box container
                    height: '100%', // Takes full height of the Box container
                    bgcolor: '#FFFFFF',
                    borderColor: '#C0C2CE40',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around', // Adjust based on your content
                    alignItems: 'center',
                    padding: '20px', // Add padding inside the card
                    borderRadius: '25px',
                    position: 'relative', // To position the reset button absolutely within the card
                }}
            >
                {/* Reset Button */}
                <IconButton
                    onClick={resetFilters}
                    sx={{
                        color: 'red',
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        '.MuiTypography-root': {
                            fontSize: {
                                xs: '0.75rem', // Smaller screens
                                sm: '0.9rem', // Larger screens
                            },
                            fontWeight: 'bold',
                        }
                    }}
                >
                    <DeleteIcon />
                    <Typography>
                        حذف فیلترها
                    </Typography>
                </IconButton>
                {/* Typography "فیلتر ها" at the top right */}
                <Typography
                    variant="h5"
                    sx={{
                        width: '100%',
                        fontWeight: 'bold',
                        mb: 2,
                        mt: 0.8,
                        fontSize: {
                            xs: '1rem', // For extra-small screens
                            sm: '1.2rem', // For small screens
                            md: '1.5rem', // For medium screens (default h5 size)
                        }
                    }}
                >
                    فیلترها
                </Typography>
                {filterList.map((filter) => (
                    <React.Fragment key={filter.name}>
                        <FormControlLabel
                            control={<Switch checked={filters[filter.name]} onChange={handleToggle(filter.name)} />}
                            label={filter.label}
                            labelPlacement="start"
                            sx={{
                                margin: 'auto',
                                width: '100%',
                                justifyContent: 'space-between',
                                marginBlock: '1rem',
                                '.MuiTypography-root': { fontWeight: 'bold' } // Apply bold font to label
                            }}
                        />
                        <Divider sx={{ width: '100%', bgcolor: '#C0C2CE40' }} />
                    </React.Fragment>
                ))}
                {/* Accordion for Checkbox Filters */}
                <Accordion sx={{ width: '100%', boxShadow: 'none' , marginBlock: '1rem'}} disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-checkboxes-content"
                        id="panel-checkboxes-header"
                        sx={{ '&.Mui-focused': { boxShadow: 'none' }, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>برندها</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ flexDirection: 'column', display: 'flex' }}>
                        {dropdownOptions.map((option) => (
                            <FormControlLabel
                                key={option}
                                control={
                                    <Checkbox
                                        checked={filters.dropdownFilter.indexOf(option) > -1}
                                        onChange={() => handleDropdownChange(option)}
                                    />
                                }
                                label={option}
                                sx={{ ml: 0, p: 0 }}
                            />
                        ))}
                    </AccordionDetails>
                </Accordion>
                {/* Accordion for TextFields */}
                <Accordion sx={{ width: '100%', boxShadow: 'none', marginBlock: '1rem' }} disableGutters>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel-textfields-content"
                        id="panel-textfields-header"
                        sx={{ '&.Mui-focused': { boxShadow: 'none' }, '&:hover': { backgroundColor: 'transparent' } }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }} >محدوده قیمت</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)', mr: 1 }}>از</Typography>
                            <TextField
                                type="text"
                                variant="standard" // Changed to "standard" for underline only
                                value={filters.textFieldFilter1}
                                onChange={handleTextFieldChange('textFieldFilter1')}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>تومان</InputAdornment>,
                                }}
                                sx={{ flex: 1 }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.7)', mr: 1 }}>تا</Typography>
                            <TextField
                                type="text"
                                variant="standard"
                                value={filters.textFieldFilter2}
                                onChange={handleTextFieldChange('textFieldFilter2')}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'rgba(0, 0, 0, 0.7)' }}>تومان</InputAdornment>,
                                }}
                                sx={{ flex: 1 }}
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {/* Apply Filters Button */}
                <Button
                    variant="contained"
                    sx={{
                        width: '100%',
                        bgcolor: '#FFCC70',
                        '&:hover': {
                            bgcolor: '#FFCC70',
                            opacity: 0.9,
                        },
                        color: 'black',
                        mt: 2,
                        fontWeight: 'bold'
                    }}
                >
                    اعمال فیلتر
                </Button>
            </Card>
        </Box>
    );
};

export default FilterCard;
