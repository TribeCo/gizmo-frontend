'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

import searchIcon from '@/components/siteIcons/SearchIcon.svg'
import LevelofOrdering from './LevelofOrdering'

export default function DashBoardOrders() {

    const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g,);
        if (event.target.value == 'undefined') {
            event.target.value = ''
        }
    }

    const [realOrders, setRealOrders] = useState([
        { orderCode: '0786453465', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '4894545456', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '4128546528', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '4654894898', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '0782586558', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
    ])

    const [orders, setOrders] = useState([
        { orderCode: '0786453465', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '4894545456', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '4128546528', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '4654894898', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
        { orderCode: '0782586558', destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', date: '1402/5/6', discountPrice: '0', price: '398000', finalPrice: '398000' },
    ])

    const searchProductCode = (event) => {
        let searchKey = event.target.parentElement.previousElementSibling.value
        let updatedProducts = orders.filter((order) => {
            return (order.orderCode.includes(searchKey))
        })
        setOrders(updatedProducts)
    }

    const retrieveData = (event) => {
        let key = event.keyCode || event.charCode;
        if (key == 8 || key == 46) event.target.value = ''
        setOrders(realOrders)
    }

    const drawerHandler = (event) => {
        let tempElem = event.target.parentElement.parentElement.parentElement.parentElement
        tempElem.classList.toggle('min-h-80')
        tempElem.lastElementChild.classList.toggle('hidden')
        event.target.nextSibling.classList.toggle('rotate-180')
    }

    return (
        <div>


            <section className=" py-4 px-[4%] w-[60rem] flex flex-col h-[47rem] overflow-scroll lg:w-full rounded-xl shadow-lg">

                <div className="flex border-b border-[#EDEDED] justify-between py-2 gap-2 mb-4">
                    <h3 className='font-bold flex items-center text-lg md:text-md'>
                        سفارشات
                    </h3>

                    <div className='flex border rounded-2xl overflow-hidden'>

                        <input onInput={handleInputChange} onKeyDown={retrieveData} className='w-[85%] p-2' type="text" placeholder='جستوجو کد پیگیری' />

                        <div onClick={searchProductCode} className='bg-palette-blue w-[15%] flex items-center justify-center cursor-pointer'>
                            <Image src={searchIcon} width={16}></Image>
                        </div>

                    </div>
                </div>

                <section className='flex flex-col mt-4 px-4 gap-2 overflow-scroll'>

                    {orders.map((order) => (
                        <div className="cursor-pointer hover:bg-[#00000011] transition-all flex flex-col gap-6 bg-[#F7F7F7] rounded-lg md:flex-col md:gap-4">

                            <div className="OrderCard flex gap-6 px-6 py-6 md:flex-col md:gap-4">

                                <div className="rightPart flex w-full flex-col items-end gap-4">

                                    <div className="infoRow flex w-full gap-6 md:gap-0 md:justify-between">
                                        <span className='font-extrabold md:text-sm'>کد پیگیری: </span>
                                        <div className=' md:text-sm'>{order.orderCode}</div>
                                    </div>

                                    <div className="infoRow flex w-full gap-6 md:gap-4 md:justify-between">
                                        <span className='font-extrabold md:text-sm whitespace-nowrap'>آدرس ارسال: </span>
                                        <div className=' md:text-xs'>{order.destinationAddress}</div>
                                    </div>

                                    <div className="infoRow flex w-full gap-6 md:gap-0 md:justify-between">
                                        <span className='font-extrabold md:text-sm'>نام گیرنده: </span>
                                        <div className=' md:text-sm'>{order.receiverName}</div>
                                    </div>

                                    <div className="infoRow flex w-full gap-6 md:gap-0 md:justify-between">
                                        <span className='font-extrabold md:text-sm'>تاریخ سفارش: </span>
                                        <div className=' md:text-sm'>{order.date}</div>
                                    </div>

                                </div>

                                <div className="leftPart w-full flex flex-col gap-4">

                                    <div className="infoRow flex w-full justify-between">
                                        <span className='font-extrabold md:text-xs'>قیمت کل سفارش: </span>
                                        <div className='flex gap-1'>
                                            <span className=' md:text-sm'>{order.price}</span>
                                            <span className=' md:text-sm'>تومان</span>
                                        </div>
                                    </div>

                                    <div className="infoRow flex w-full justify-between">
                                        <span className='font-extrabold md:text-sm'>میزان تخفیف: </span>
                                        <div className='flex gap-1'>
                                            <span className=' md:text-sm'>{order.discountPrice}</span>
                                            <span className=' md:text-sm'>تومان</span>
                                        </div>
                                    </div>

                                    <div className="infoRow flex w-full justify-between">
                                        <span className='font-extrabold md:text-xs'>مبلغ قابل پرداخت: </span>
                                        <div className='flex gap-1 font-extrabold'>
                                            <span className=' md:text-sm'>{order.finalPrice}</span>
                                            <span className=' md:text-sm'>تومان</span>
                                        </div>
                                    </div>

                                    <div className="infoRow flex w-full gap-2 justify-end items-center select-none">
                                        <span onClick={drawerHandler} className='font-extrabold text-palette-blue md:text-sm'>پیگیری سفارش</span>
                                        <svg className='transition-all' width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.70337 9.51299L0.330366 3.13998C-0.110122 2.6995 -0.110122 1.98722 0.330366 1.55142L1.38941 0.492373C1.8299 0.0518866 2.54217 0.0518866 2.97798 0.492373L7.5 5.00503L12.0173 0.487687C12.4578 0.0472002 13.1701 0.0472002 13.6059 0.487687L14.6696 1.54673C15.1101 1.98722 15.1101 2.6995 14.6696 3.1353L8.29663 9.50831C7.85614 9.95348 7.14386 9.95348 6.70337 9.51299Z" fill="#22668D" />
                                        </svg>
                                    </div>

                                </div>

                            </div>
                            <LevelofOrdering level={4}/>
                        </div>
                    ))}

                </section>

            </section>

        </div>
    )
}
