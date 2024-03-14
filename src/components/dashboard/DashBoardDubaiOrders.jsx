import React, { useState } from 'react';
import Image from 'next/image';
import { Colors } from "@/utils";

import {
    Button,
    Paper,
    Typography,
} from "@mui/material";

import searchIcon from '@/components/siteIcons/SearchIcon.svg';

export default function DashBoardDubaiOrders() {
    const [orders, setOrders] = useState([
        { orderCode: '0786453465', productName: 'اسپرسو ساز', referencedSite: 'آمازون', productLink: 'jdfkljgdflkfsjdk', inquiryDate: '1402/5/6', price: '398000', finalPrice: '398000' },
        { orderCode: '0785151622', productName: 'اسپرسو ساز', referencedSite: 'آمازون', productLink: 'jdfkljgdflkfsjdk', inquiryDate: '1402/5/6', price: '398000', finalPrice: '398000' },
        { orderCode: '0589465651', productName: 'اسپرسو ساز', referencedSite: 'آمازون', productLink: 'jdfkljgdflkfsjdk', inquiryDate: '1402/5/6', price: '398000', finalPrice: '398000' },
    ]);

    const [searchKey, setSearchKey] = useState('');

    const searchProductCode = (event) => {
        setSearchKey(event.target.value);
    };

    const filteredOrders = orders.filter(order =>
        order.orderCode.includes(searchKey)
    );

    return (
        <Paper
            variant="outlined"
            sx={{
                height: 'fit-content',
                borderRadius: '15px',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <section className=" w-[60rem] md:w-[24rem] py-4 px-[4%] flex flex-col lg:w-full rounded-xl">

                <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                    <h3 className='font-bold flex items-center text-lg md:text-sm'>
                        استعلام قیمت محصولات خرید از دبی
                    </h3>

                    <div className='flex border rounded-xl overflow-hidden'>

                        <input onChange={searchProductCode} className='w-[85%] text-sm p-2 rounded-r-xl' type="text" placeholder='جستوجو کد پیگیری' />

                        <div className='bg-palette-blue w-[15%] flex items-center justify-center'>
                            <Image src={searchIcon} width={16}></Image>
                        </div>

                    </div>
                </div>

                <section className='flex flex-col mt-4 gap-4 overflow-scroll'>

                    {filteredOrders.map((product, index) => (
                        <div key={index} className="OrderCard flex gap-6 px-6 py-6 bg-[#F7F7F7] hover:bg-[#0000000e] transition-all rounded-lg lg:flex-col md:gap-4">

                            <div className="rightPart flex w-full flex-col items-end gap-4">

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>کد پیگیری: </span>
                                    <div className=' lg:text-sm'>{product.orderCode}</div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>نام محصول: </span>
                                    <div className=' lg:text-sm'>{product.productName}</div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>سایت درخواست شده: </span>
                                    <div className=' lg:text-sm'>آمازون</div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm whitespace-nowrap'>لینک محصول: </span>
                                    <div className=' lg:text-sm'>{product.productLink}</div>
                                </div>

                            </div>

                            <div className="leftPart w-full flex flex-col gap-4">

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold md:text-sm whitespace-nowrap'>تاریخ استعلام: </span>
                                    <span className=' md:text-sm'>{product.inquiryDate}</span>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold md:text-sm whitespace-nowrap'>قیمت تومانی: </span>
                                    <div className='flex gap-1'>
                                        <span className=' md:text-sm'>{product.price}</span>
                                        <span className=' md:text-sm'>تومان</span>
                                    </div>
                                </div>

                                <div className="infoRow flex justify-between w-full gap-[10%]">
                                    <span className='font-extrabold lg:text-sm text-palette-blue whitespace-nowrap'>قیمت نهایی با ارسال: </span>
                                    <div className='flex gap-1 font-extrabold text-palette-blue'>
                                        <span className=' lg:text-sm'>{product.finalPrice}</span>
                                        <span className=' lg:text-sm'>تومان</span>
                                    </div>
                                </div>

                                <div className="infoRow flex w-full justify-center md:justify-center">
                                    <Button className='w-[43%]'
                                        variant="contained"
                                        sx={{
                                            bgcolor: Colors.orange,
                                            color: "black",
                                            borderRadius: "50px",
                                            boxShadow: "none",
                                            mt: 1,
                                            height: 34,
                                            "&:hover": {
                                                bgcolor: Colors.orange,
                                            },
                                        }}>
                                        <Typography variant='div lg:text-xs whitespace-nowrap'>ثبت سفارش</Typography>
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
