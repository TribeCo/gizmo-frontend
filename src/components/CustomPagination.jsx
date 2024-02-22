"use client";
import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomPagination = ({ count, page, onChange }) => {
  const theme = useTheme();

  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: NavigateBeforeIcon, next: NavigateNextIcon }}
          {...item}
          sx={{
            ...(item.type === 'start-ellipsis' || item.type === 'end-ellipsis'
              ? { display: 'none' } // Hide ellipsis and manage visibility in custom logic if needed
              : {}),
            ...(item.type === 'page'
              ? {
                  backgroundColor: '#FFCC70 !important',
                  color: theme.palette.getContrastText('#FFCC70'),
                  '&:hover': {
                    backgroundColor: '#FFCC70 !important',
                    opacity: 0.9,
                  },
                  borderRadius: '4px', // Adjust for rectangular shape
                }
              : {}),
            ...(item.type === 'previous' || item.type === 'next'
              ? {
                  backgroundColor: '#22668D !important',
                  color: theme.palette.getContrastText('#22668D'),
                  '&:hover': {
                    backgroundColor: '#22668D',
                    opacity: 0.9,
                  },
                  borderRadius: '50%', // Circular shape for prev and next
                }
              : {}),
          }}
        />
      )}
      siblingCount={5} // Adjust to show 5 numbers; current page + 2 siblings on each side
      boundaryCount={1} // Adjust based on your needs for start and end pages
    />
  );
};

export default CustomPagination;
