"use client";
import React, { useState, useEffect } from 'react'; // Add useEffect here
import { Box, Grid, Button } from '@mui/material';
import ProductCard from './ProductCard'; // Adjust the import path as necessary
import FilterBar from './FilterBar';
import FilterCard from './FilterCard';
import PersianPagination from './PersianPagination';

const PRODUCTS_PER_PAGE = 12;

const ProductsGrid = ({ productsList }) => {
    const [filter, setFilter] = useState('منتخب'); // Could be 'all', 'latest', 'price', 'rating'
    const [filteredProducts, setFilteredProducts] = useState(productsList);
    const [page, setPage] = useState(1);
    const [isAvailable, setIsAvailable] = useState(false);
    const [isFreeShipping, setIsFreeShipping] = useState(false);
    const [isSpecialSale, setIsSpecialSale] = useState(false);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const pageCount = Math.ceil(productsList.length / PRODUCTS_PER_PAGE);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const paginatedProducts = filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

    useEffect(() => {
        const applyFilter = () => {
            let tempProducts = [...productsList];
            if (isAvailable) {
                tempProducts = tempProducts.filter(product => product.available);
            }
            if (isFreeShipping) {
                tempProducts = tempProducts.filter(product => product.send_free);
            }
            if (isSpecialSale) {
                tempProducts = tempProducts.filter(product => product.net_sale);
            }
            if (minPrice) {
                tempProducts = tempProducts.filter(product => product.price >= minPrice);
            }
            if (maxPrice) {
                tempProducts = tempProducts.filter(product => product.price <= maxPrice);
            }
            switch (filter) {
                case 'جدیدترین':
                    tempProducts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
                    break;
                case 'ارزان‌ترین':
                    tempProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'گران‌ترین':
                    tempProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'پرفروش‌ترین':
                    tempProducts.sort((a, b) => b.ordered - a.ordered);
                    break;
                case 'منتخب': // No filter applied, so leave tempProducts as is
                default:
                    tempProducts = [...productsList];
            }
            setFilteredProducts(tempProducts);
        };
        applyFilter();
    }, [filter, productsList, isAvailable, isFreeShipping, isSpecialSale, minPrice, maxPrice]);

    return (
        <Box sx={{ height: 'auto', width: { xs: '100vw', lg: 'auto' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2, width: { xs: '100vw', xl: 'auto' } }}>
                <FilterCard
                    filterList={[
                        { name: 'فقط کالاهای موجود', label: 'فقط کالاهای موجود', state: isAvailable, setState: setIsAvailable },
                        { name: 'ارسال رایگان', label: 'ارسال رایگان', state: isFreeShipping, setState: setIsFreeShipping },
                        { name: 'فروش ویژه', label: 'فروش ویژه', state: isSpecialSale, setState: setIsSpecialSale }
                    ]}
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    dropdownOptions={['سامسونگ', 'شیائومی', 'اپل']}
                />
                <Box
                    sx={{
                        display: 'flex', // Use a flex layout
                        flexDirection: 'column', // Arrange children in a column
                        alignItems: 'center', // Center the items horizontally
                        width: '100%', // Take up the full width of the parent container
                        gap: 5, // Add some space between the filter bar and the grid of products
                        px: 1,
                    }}
                >
                    <FilterBar
                        filterNames={['پرفروش‌ترین', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین']}
                        onFilterChange={(selectedFilter) => setFilter(selectedFilter)}
                    />
                    <Grid container spacing={4} sx={{ width: '100%' }}> {/* Ensure the Grid takes up the full width */}
                        {paginatedProducts.map((product) => (
                            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id} sx={{ display: 'flex', alignItems: 'center' }}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <PersianPagination count={pageCount} page={page} onChange={handleChange} />
        </Box>
    );
};
export default ProductsGrid;