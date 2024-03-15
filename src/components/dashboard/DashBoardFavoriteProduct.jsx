import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/fakeProduct';

export default function DashBoardFavoriteProduct() {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: { xs: '15px', md: '50px' },
        width: '100%',
        maxHeight: '854px',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '840px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingBottom: '30px', 
          padding: {xs: '20px', md: '0px'},
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '20px',
            color: '#213346',
          }}
        >
          علاقه مندی ها
        </Typography>
        <Divider sx={{ width: '100%', paddingBottom: '20px' }} />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '840px' },
          height: 'auto', // Adjust the height as needed
          overflowY: 'auto', // Enable vertical scrolling
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Webkit browsers (Chrome, Safari, etc.)
          },
          '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
          'scrollbar-width': 'none', // Hide scrollbar for Firefox
        }}
      >
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={2.4} key={product.id}>
              <ProductCard product={product} />
            </Grid>))}
        </Grid>
      </Box>
    </Box>
  );
}
