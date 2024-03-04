'use client'
import ProductCard from '@/components/ProductCard'
import React, { useState } from 'react'
import {products} from '@/utils/fakeProduct'

export default function DashBoardFavoriteProduct() {

    // const [products, setProducts] = useState(props)

  return (
    <div>

        <section className='m-4 flex justify-end h-[47rem] lg:h-max'>

          <section className=" py-4 w-[70%] px-[4%] flex flex-col lg:w-full rounded-xl shadow-lg">

            <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <h3 className='font-bold flex items-center text-lg md:text-md'>
                    علاقه‌مندی‌ها
                </h3>
            </div>

            <section className='flex gap-2 mt-4 flex-wrap'>

                {products.map((product, index) => {
                    return (
                        <ProductCard product={product[index]}></ProductCard>
                    )
                })}

            </section>

          </section>
        </section>

    </div>
  )
}
