"use client";
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Dialog, DialogContent, DialogTitle, DialogActions, IconButton } from '@mui/material';
import ProductCard from './ProductCard';
import CloseIcon from '@mui/icons-material/Close';
import FilterBar from './FilterBar';
import FilterCard from './FilterCard';
import PersianPagination from './PersianPagination';

const PRODUCTS_PER_PAGE = 12;

const ProductsGrid = ({ productsList }) => {
    const [filter, setFilter] = useState('منتخب');
    const [filteredProducts, setFilteredProducts] = useState(productsList);
    const [page, setPage] = useState(1);
    const [isAvailable, setIsAvailable] = useState(false);
    const [isFreeShipping, setIsFreeShipping] = useState(false);
    const [isSpecialSale, setIsSpecialSale] = useState(false);
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [dialogOpen, setDialogOpen] = useState(false);
    const pageCount = Math.ceil(productsList.length / PRODUCTS_PER_PAGE);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
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
                case 'منتخب':
                default:
                    tempProducts = [...productsList];
            }
            setFilteredProducts(tempProducts);
        };
        applyFilter();
    }, [filter, productsList, isAvailable, isFreeShipping, isSpecialSale, minPrice, maxPrice]);

    return (
        <Box justifyContent={'center'} display={'flex'} alignItems={'center'} flexDirection={'column'} >
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                    >
                        <IconButton
                            aria-label="close"
                            onClick={handleDialogClose}
                            sx={{
                                alignSelf: 'flex-start',
                                color: '#252B48',
                                position: 'relative',
                                right: 20,
                            }}
                        >
                            <CloseIcon sx={{ fontSize: 16 }} />
                        </IconButton>
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
                    </Box>
                </DialogContent>
            </Dialog>
            <Box
                display={'flex'}
                flexDirection={'row'}
            >
                <Box
                    display={{ xs: 'none', md: 'block' }}
                >
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
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={5}
                    px={1}
                >
                    <FilterBar
                        filterNames={['پرفروش‌ترین', 'جدیدترین', 'ارزان‌ترین', 'گران‌ترین']}
                        onFilterChange={(selectedFilter) => setFilter(selectedFilter)}
                        handleClick={handleDialogOpen}
                    />
                    <Grid container spacing={4} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
                                <Grid item xs={6} sm={4} lg={3} xl={2.5} key={product.id}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))
                        ) : (
                            <Box>
                                <Typography fontWeight={900} fontSize={20} marginTop={20}>هیچ موردی برای نمایش وجود ندارد.</Typography>
                            </Box>
                        )}
                    </Grid>
                </Box>
            </Box>
            {paginatedProducts.length > 0 && (
                <PersianPagination count={pageCount} page={page} onChange={handleChange} />
            )}
        </Box>
    );
};
export default ProductsGrid;