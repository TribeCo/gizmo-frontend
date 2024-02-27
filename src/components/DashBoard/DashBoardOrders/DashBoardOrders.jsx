import React from 'react'
import Image from 'next/image'

import searchIcon from '@/components/siteIcons/searchIcon.svg'

export default function DashBoardOrders() {
  return (
    <div>
    
        <section className='m-4 flex justify-end h-[47rem] lg:h-max'>

          <section className=" py-4 w-[70%] px-[4%] flex flex-col lg:w-full rounded-xl shadow-lg">

            <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <h3 className='font-bold flex items-center text-lg md:text-md'>
                    سفارشات
                </h3>

                <div className='flex border rounded-xl overflow-hidden'>

                    <input className='w-[85%] p-2' type="text" placeholder='جستوجو کد پیگیری'/>

                    <div className='bg-palette-blue w-[15%] flex items-center justify-center'>
                        <Image src={searchIcon} width={16}></Image>
                    </div>
                  
                </div>
            </div>

            <section className='flex flex-col mt-4'>

              <div className="OrderCard flex gap-6 px-6 py-6 bg-[#F7F7F7] rounded-lg md:flex-col md:gap-4">

                <div className="rightPart flex w-full flex-col items-end gap-4">

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>کد پیگیری: </span>
                        <div className=' md:text-sm'>07084658989</div>
                    </div>

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>آدرس ارسال: </span>
                        <div className=' md:text-sm'>شیراز، دانشگاه صنعتی شیراز</div>
                    </div>

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>نام گیرنده: </span>
                        <div className=' md:text-sm'>سامان برزگر</div>
                    </div>

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>نام گیرنده: </span>
                        <div className=' md:text-sm'>سامان برزگر</div>
                    </div>

                </div>

                <div className="leftPart w-full flex flex-col gap-4">

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>قیمت کل سفارش: </span>
                        <div className='flex gap-1'>
                            <span className=' md:text-sm'>398000</span>
                            <span className=' md:text-sm'>تومان</span>
                        </div>
                    </div>

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>میزان تخفیف: </span>
                        <div className='flex gap-1'>
                            <span className=' md:text-sm'>398000</span>
                            <span className=' md:text-sm'>تومان</span>
                        </div>
                    </div>

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>مبلغ قابل پرداخت: </span>
                        <div className='flex gap-1 font-extrabold'>
                            <span className=' md:text-sm'>398000</span>
                            <span className=' md:text-sm'>تومان</span>
                        </div>
                    </div>

                    <div className="infoRow flex w-full justify-between">
                        <span className='font-extrabold md:text-sm'>تاریخ سفارش: </span>
                        <div className=' md:text-sm'>1402/5/6</div>
                    </div>

                </div>

              </div>

            </section>

          </section>
        </section>
    
    </div>
  )
}
