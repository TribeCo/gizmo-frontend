'use client'

import React from 'react'
import Image from 'next/image'

import DonePic from '@/components/siteIcons/Done.png'


export default function orderCompleteModal() {
  return (
    <div className='shadow-md w-[24rem] h-52 flex flex-col gap-4 items-center justify-stretch p-[0.5%] rounded-xl bg-[#c8c8c8]'>

        <Image src={DonePic} className='w-16 h-16'></Image>

        <div className="font-semibold text-[#23CE6B]">محصول به سبد خرید شما اضافه شد.</div>

        <div className="flex flex-row-reverse w-full gap-8 items-center justify-center">
            <button className='bg-[#23CE6B] opacity-60 text-[#ffff] rounded-lg p-2 px-4'>مشاهده سبد خرید</button>
            <button className='bg-[#ffff] border rounded-lg p-2 px-4'>ادامه دادن خرید</button>
        </div>

    </div>
  )
}
