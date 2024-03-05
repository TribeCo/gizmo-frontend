'use client'
import React, {useState} from 'react'
import Image from 'next/image'

import searchIcon from '@/components/siteIcons/searchIcon.svg'

export default function DashBoardOrders() {

    const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g,);
        if (event.target.value == 'undefined') {
            event.target.value = ''
        }
    }

    const [realOrders, setRealOrders] = useState([
        {orderCode: '0786453465' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '4894545456' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '4128546528' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '4654894898' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '0782586558' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
    ])

    const [orders, setOrders] = useState([
        {orderCode: '0786453465' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '4894545456' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '4128546528' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '4654894898' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
        {orderCode: '0782586558' , destinationAddress: 'شیراز، دانشگاه صنعتی شیراز', receiverName: 'سامان', senderName:'گیزمو', discountPrice: '0', price: '398000', finalPrice: '398000'},
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
        if( key == 8 || key == 46 )event.target.value = ''
        setOrders(realOrders)
    }

    const drawerHandler = (event) => {
        let tempElem = event.target.parentElement.parentElement.parentElement.parentElement
        tempElem.classList.toggle('min-h-80')
    }

  return (
    <div>
    
        <section className='m-4 flex justify-end h-[47rem] lg:h-max'>

          <section className=" py-4 w-[70%] px-[4%] flex flex-col lg:w-full rounded-xl shadow-lg">

            <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <h3 className='font-bold flex items-center text-lg md:text-md'>
                    سفارشات
                </h3>

                <div className='flex border rounded-2xl overflow-hidden'>

                    <input onInput={handleInputChange} onKeyDown={retrieveData} className='w-[85%] p-2' type="text" placeholder='جستوجو کد پیگیری'/>

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
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>کد پیگیری: </span>
                            <div onClick={drawerHandler} className=' md:text-sm'>{order.orderCode}</div>
                        </div>

                        <div className="infoRow flex w-full gap-6 md:gap-0 md:justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>آدرس ارسال: </span>
                            <div onClick={drawerHandler} className=' md:text-sm'>{order.destinationAddress}</div>
                        </div>

                        <div className="infoRow flex w-full gap-6 md:gap-0 md:justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>نام گیرنده: </span>
                            <div onClick={drawerHandler} className=' md:text-sm'>{order.receiverName}</div>
                        </div>

                        <div className="infoRow flex w-full gap-6 md:gap-0 md:justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>نام گیرنده: </span>
                            <div onClick={drawerHandler} className=' md:text-sm'>{order.senderName}</div>
                        </div>

                    </div>

                    <div className="leftPart w-full flex flex-col gap-4">

                        <div className="infoRow flex w-full justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>قیمت کل سفارش: </span>
                            <div onClick={drawerHandler} className='flex gap-1'>
                                <span className=' md:text-sm'>{order.price}</span>
                                <span className=' md:text-sm'>تومان</span>
                            </div>
                        </div>

                        <div className="infoRow flex w-full justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>میزان تخفیف: </span>
                            <div onClick={drawerHandler} className='flex gap-1'>
                                <span className=' md:text-sm'>{order.discountPrice}</span>
                                <span className=' md:text-sm'>تومان</span>
                            </div>
                        </div>

                        <div className="infoRow flex w-full justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>مبلغ قابل پرداخت: </span>
                            <div onClick={drawerHandler} className='flex gap-1 font-extrabold'>
                                <span className=' md:text-sm'>{order.finalPrice}</span>
                                <span className=' md:text-sm'>تومان</span>
                            </div>
                        </div>

                        <div className="infoRow flex w-full justify-between">
                            <span onClick={drawerHandler} className='font-extrabold md:text-sm'>تاریخ سفارش: </span>
                            <div onClick={drawerHandler} className=' md:text-sm'>1402/5/6</div>
                        </div>

                    </div>
                    
                    </div>

                    <div className="w-full hidden">
                        Hello
                    </div>

                </div>
              ))}

            </section>

          </section>
        </section>
    
    </div>
  )
}
