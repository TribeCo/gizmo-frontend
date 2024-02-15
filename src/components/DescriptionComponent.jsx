"use client";

import React, { useState, useEffect } from 'react';
import {
    Tabs,
    Tab,
    Typography,
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    useMediaQuery,
} from '@mui/material';



const DescriptionComponent = ({ introductionContent, CommentsSection }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Grid ml={8} mr={8}>
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                sx={{
                    borderBottom: '1px solid #9D9DA0',
                    mb: 2,
                }}
            >
                <Tab
                    value={0}
                    label={<Typography variant="h6" fontWeight='bold' color='#9D9DA0'>معرفی</Typography>}
                />
                <Tab
                    value={1}
                    label={<Typography variant="h6" fontWeight='bold' color='#9D9DA0'>مشخصات</Typography>}
                />
                <Tab
                    value={2}
                    label={<Typography variant="h6" fontWeight='bold' color='#9D9DA0'>نظرات</Typography>}
                />
            </Tabs>
            <TabPanel value={selectedTab} index={0}>
                <Introduction content={introductionContent} />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                <ProductPage />
            </TabPanel>
            <TabPanel value={selectedTab} index={2}>
                {CommentsSection}
            </TabPanel>
        </Grid>
    );
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Grid
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    {children}
                </Box>
            )}
        </Grid>
    );
}

const Introduction = ({ content }) => {
	const isLargeScreen = useMediaQuery('(min-width:1300px)');

    let text;
    if (isLargeScreen) {
        text = (
            <Box display='flex' direction='row' width='60%'>
                <Typography variant='body1'>
                    {content}
                </Typography>
            </Box>            
        )
    } else {
        text =(
            <Box display='flex' direction='row' width='lg'>
                <Typography variant='body1'>
                    {content}
                </Typography>
            </Box>
        )
    }
    
    return (
        <>
            {text}
        </>
    );
}

const ProductPage = () => {
    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        // example data: 
        const fakeProductInfo = [
            { attribute: 'برند', value: 'برند نمونه' },
            { attribute: 'مدل', value: 'ABC123' },
            { attribute: 'رنگ', value: 'سیاه' },
            { attribute: 'وزن', value: '1.5 کیلوگرم' },
            { attribute: 'ابعاد', value: '10 × 5 × 3 اینچ' },
            { attribute: 'مواد', value: 'پلاستیک' },
            { attribute: 'کشور سازنده', value: 'چین' },
        ];

        setProductInfo(fakeProductInfo);
        
        // real fetching data happends here.
        fetchProductInfo();
    }, []);

    // this is NOT complete for getting information from server
    const fetchProductInfo = async () => {
        try {
            const response = await fetch('YOUR_BACKEND_API_URL');        //TOLO: fetch data here.
            const data = await response.json();

            setProductInfo(data);
        } catch (error) {
            console.error('Error fetching product information:', error);
        }
    };

    return (
        <>
            {productInfo && <ProductTable productInfo={productInfo} />}
        </>
    );
}

const ProductTable = ({ productInfo }) => {
    return (
        <Grid container justifyContent="center" sx={{ marginBottom: '16px' }} maxWidth='lg'>
            <TableContainer component={Paper} elevation={0}>
                <Table style={{ direction: 'rtl' }}>
                    <TableBody>
                        {productInfo.map((item, index) => (
                            <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                                <TableCell align="right">
                                    <Typography variant="body1">{item.attribute}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="body1">{item.value}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}


export default DescriptionComponent;
