"use client";

import React, { useState, useEffect } from 'react';
import { Paper, Typography, Grid, IconButton } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';


{/*
    Inputs:
    products: a list of all product cards in folowing format:
		[
            { name: ..., description: ...},
            .
            .
            .
        ]
    
        itemsPerPage: number of product cards to show in page 
    
    swapTime_millisecond: delay time for automatic slider 
*/}

const CardProductSlider = ({ products, itemsPerPage, swapTime_millisecond }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, swapTime_millisecond);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const productItems = [];
  for (let index = 0; index < itemsPerPage; index++) {
    productItems.push(products[(currentIndex + index) % products.length]);
  }

  return (
    <Grid 
    pl={3} pr={3}
      container 
      justifyContent='space-between' 
      alignItems='center' 
    >
      <Grid item>
        <IconButton
          variant='contained'
          sx={{
            bgcolor: '#22668D',
            position: 'relative',
            '&:hover': {
              backgroundColor: "#22668D",
            },
          }}
          onClick={handleNext}
        >
          <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
      </Grid>


      {productItems.map((product, index) => (
        <Grid key={index} xs={1}>
          <Paper elevation={10} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </Paper>
        </Grid>
      ))}

      <Grid item>
        <IconButton
          variant='contained'
          sx={{
            bgcolor: '#22668D',
            position: 'relative',
            '&:hover': {
              backgroundColor: "#22668D",
            },
          }}
          onClick={handlePrev}
        >
          <ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CardProductSlider;
