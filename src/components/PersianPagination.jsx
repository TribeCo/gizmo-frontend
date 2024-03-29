import React, { useEffect } from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material';

// Function to convert numbers to Persian digits
const toPersianDigits = (value) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return value.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
};

const PersianPagination = ({ count, page, onChange }) => {
    useEffect(() => {
        document.querySelectorAll('.MuiPaginationItem-page').forEach((item) => {
            const persianLabel = toPersianDigits(item.textContent);
            item.textContent = persianLabel;
        });
    }, [page, count]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'right', paddingBlock: '40px', direction: 'ltr' }}>
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                dir='ltr'
                sx={{
                    '.muirtl-aeez6t-MuiButtonBase-root-MuiPaginationItem-root': {
                        backgroundColor: '#22668D',
                        borderRadius: '20px',
                        color: 'white',
                    },
                    '.MuiPagination-ul': {
                        transform: 'scaleX(-1)', // Flip pagination items to correct the order
                    },
                    '.MuiPaginationItem-root': {
                        transform: 'scaleX(-1)', // Flip each item back to ensure text is correct way
                    },
                    '.Mui-selected': {
                        bgcolor: '#FFCC70 !important',
                        // borderRadius: '5px !important', // Less rounded corners for a more rectangular shape
                        // padding: '6px 12px !important', // Adjust padding to make it more rectangular
                    },
                }}
                renderItem={(item) => (
                    <PaginationItem
                        {...item}
                        sx={{
                            borderRadius: '5px', // Make it rectangular
                            bgcolor: item.type === 'page' ? '#FFFFFF' : 'inherit', // Apply background color only to page numbers
                            '&:hover': {
                                bgcolor: item.type === 'page' ? '#EEEEEE' : 'inherit', // Darker shade on hover for page numbers
                            },
                            color: 'black', // Text color
                            fontWeight: 'bold',
                        }}
                    />
                )}
            />
        </Box>
    );
};

export default PersianPagination;
