import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Colors } from "@/utils";
import {
    Button,
    Divider,
    Grid,
    Paper,
    Typography,
} from "@mui/material";

import searchIcon from '@/components/siteIcons/SearchIcon.svg';
import { fetchDubaiOrders } from '@/services/DashBoard';

export default function DashBoardDubaiOrders() {
    const [orders, setOrders] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        handleGetOrders();
    }, []);

    const handleGetOrders = async () => {
        setOrders((await fetchDubaiOrders()).data);
    }

    const searchProductCode = (event) => {
        setSearchKey(event.target.value);
    };

    const handleCopyLink = async (link) => {
        try {
            await navigator.clipboard.writeText(link);
            alert('Link copied to clipboard!'); // Optionally show a message or use a more subtle notification
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const filteredOrders = (orders || []).filter(order => {
        try {
            return String(order.tracking_code || '').includes(String(searchKey));
        } catch (error) {
            console.error('Error filtering orders:', error);
            return false;
        }
    });    

    return (
        <Paper
            variant="outlined"
            sx={{
                height: 'fit-content',
                borderRadius: '15px',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <section className="w-[60rem] md:w-[24rem] py-4 px-3 flex flex-col lg:w-full rounded-xl">

                <Grid
                    display='flex'
                    justifyContent='space-between'
                    sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        rowGap: 2,
                        columnGap: 10,
                    }}
                >
                    <Typography
                        fontWeight='bold'
                        sx={{
                            fontSize: { xs: 16, md: 19 },
                            mt: '5px',
                        }}
                    >
                        استعلام قیمت محصولات خرید از دبی
                    </Typography>

                    <div className='flex border rounded-xl overflow-hidden h-9'>

                        <input onChange={searchProductCode} className='w-[85%] text-sm pr-2 rounded-r-xl' type="text" placeholder='جستوجو کد پیگیری' />

                        <div className='bg-palette-blue w-[15%] flex items-center justify-center'>
                            <Image src={searchIcon} width={16}></Image>
                        </div>
                    </div>

                </Grid>
                <Divider sx={{ mt: 2, }} />

                <section className='flex flex-col mt-4 gap-4 overflow-scroll'>

                    {filteredOrders.map((product, index) => (
                        <div key={index} className="OrderCard flex gap-6 px-6 py-6 bg-[#F7F7F7] hover:bg-[#0000000e] transition-all rounded-lg lg:flex-col md:gap-4">

                            <div className="rightPart flex w-full flex-col items-end gap-4">

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>کد پیگیری: </span>
                                    <div className=' lg:text-sm'>{product.tracking_code}</div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>نام محصول: </span>
                                    <div className=' lg:text-sm'>{product.name}</div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>سایت درخواست شده: </span>
                                    <div className=' lg:text-sm'>{product.website_name}</div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>لینک محصول: </span>
                                    <div
                                        onClick={() => handleCopyLink(product.link)}
                                        title="Click to copy link"
                                    >
                                        {product.link}
                                    </div>
                                </div>
                            </div>

                            <div className="leftPart w-full flex flex-col gap-4">

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold md:text-sm whitespace-nowrap'>تاریخ استعلام: </span>
                                    <span className=' md:text-sm'>{product.shamsi_date}</span>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold md:text-sm whitespace-nowrap'>قیمت تومانی: </span>
                                    <div className='flex gap-1'>
                                        <span className=' md:text-sm'>{product.toman_price}</span>
                                        <span className=' md:text-sm'>تومان</span>
                                    </div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm text-palette-blue whitespace-nowrap'>قیمت نهایی با ارسال: </span>
                                    <div className='flex gap-1 font-extrabold text-palette-blue'>
                                        <span className=' lg:text-sm'>{product.toman_total}</span>
                                        <span className=' lg:text-sm'>تومان</span>
                                    </div>
                                </div>

                                <div className="infoRow flex w-full justify-center md:justify-center">
                                    <Button
                                        className='w-[43%]'
                                        variant="contained"
                                        sx={{
                                            bgcolor: product.admin_checked ? Colors.orange : 'grey', // Optional: Change color when disabled
                                            color: "black",
                                            borderRadius: "50px",
                                            boxShadow: "none",
                                            mt: 1,
                                            height: 34,
                                            "&:hover": {
                                                bgcolor: product.admin_checked ? Colors.orange : 'grey', // Keep bgcolor the same on hover when disabled
                                            },
                                        }}
                                        disabled={!product.admin_checked} // Button is disabled if product.admin_checked is false
                                    >
                                        <Typography variant='div' component="div" sx={{ fontSize: '0.875rem', whiteSpace: 'nowrap' }}>ثبت سفارش</Typography>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </Paper>
    );
}
