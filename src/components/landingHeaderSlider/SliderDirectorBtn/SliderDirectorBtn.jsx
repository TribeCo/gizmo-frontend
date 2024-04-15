import React from 'react'
import Image from 'next/image'
import ArrowIcon from '@/components/siteIcons/IconArrowDown.svg'

export default function SliderDirectorBtn() {
  return (
    <button className="product-info-directorBtn px-4 py-4 flex gap-4 items-center justify-center bg-palette-orange rounded-3xl text-palette-blue font-semibold">
              <span>هم اکنون خرید کنید!</span>
              <div className='bg-palette-yellow rounded-full p-2 px-3'>
              <Image src={ArrowIcon} alt='directLinkSvg'></
              </div>
    </button>
  )
}
