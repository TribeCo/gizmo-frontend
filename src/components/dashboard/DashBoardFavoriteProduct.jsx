import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { fakeProducts } from '@/utils/fakeProduct';

export default function DashBoardFavoriteProduct() {
  const [products, setProducts] = useState(fakeProducts);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: { xs: '15px', md: '50px' },
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '809px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '20px',
            color: '#213346',
            marginBottom: '20px',
          }}
        >
          علاقه مندی ها
        </Typography>
        <Divider sx={{ width: '100%' }} />
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '809px' },
          height: 'auto', // Adjust the height as needed
          overflowY: 'auto', // Enable vertical scrolling
          marginTop: '20px',
        }}
      >
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
