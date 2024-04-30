import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography, Paper } from '@mui/material';
import ProductCard from '@/components/ProductCard';
import { fetchFavoriteProducts } from '@/services/DashBoard';
import { useAuth } from '@/context/AuthContext';

export default function DashBoardFavoriteProduct() {

    const[products, setProducts] = useState([])
    const { tokens } = useAuth();
    
    useEffect(() => {
        GetFavoriteProducts();
    }, []);

    const GetFavoriteProducts = async () => {
        setProducts((await fetchFavoriteProducts(tokens)).data)
    }

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
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: { xs: '15px', md: '30px' },
                    maxWidth: '900px',
                    maxHeight: '840px',
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
                        padding: { xs: '20px', md: '0px' },
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
                        marginTop: '20px',
                        borderRadius: '10px',
                        width: '100%', // Use 100% width for the Box to take full width
                        maxWidth: '840px', // Set a maximum width for larger screens
                        // margin: 'auto', // Center the Box
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
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center" // Center Grid items horizontally
                        sx={{
                            maxWidth: {md: '840px'},  // Set a maximum width for the Grid container
                        }}
                    >
                        {products.map((product) => (
                            <Grid item xs={8} sm={6} md={4} key={product.id} sx={{'.muirtl-t94gkw-MuiButtonBase-root-MuiCardActionArea-root':{display: 'flex', alignItems: 'center' }, '.muirtl-kiau9m-MuiGrid-root>.MuiGrid-item': {pl: 0}}}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Paper>
    );
}
