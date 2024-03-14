'use client'
import ProductCard from '@/components/ProductCard'
import React, { useState } from 'react'
import { fakeProducts } from '@/utils/fakeProduct'
import { products } from '@/utils/fakeProduct'
import { Paper } from '@mui/material'

export default function DashBoardFavoriteProduct() {

  const [products, setProducts] = useState(fakeProducts)

  return (
    <Paper
      variant="outlined"
      sx={{
        height: 'fit-content',
        borderRadius: '15px',
        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <section className='w-[60rem]  lg:w-[21rem] m-4 flex justify-end h-[47rem] lg:h-max'>

        <section className=" py-4 w-[70%] px-[4%] flex flex-col lg:w-full rounded-xl shadow-lg">

          <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
            <h3 className='font-bold flex items-center text-lg md:text-md'>
              علاقه‌مندی‌ها
            </h3>
          </div>

          <section className='flex gap-2 mt-4 flex-wrap'>
            {console.log(products)}
            {products.map((product, index) => {
              return (
                <ProductCard product={product[index]}></ProductCard>
              )
            })}

          </section>

        </section>
      </section>
    </Paper>
  )
}
