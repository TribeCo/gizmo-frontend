'use client'
import ProductCard from '@/components/ProductCard'
import React, { useState } from 'react'
import {products} from '@/utils/fakeProduct'
import { Grid } from '@mui/material'

export default function DashBoardFavoriteProduct() {



  return (

        <section className='w-[60rem]  lg:w-[21rem] m-4 h-[47rem] lg:h-max overflow-scroll'>


            <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <h3 className='font-bold flex items-center text-lg md:text-md'>
                    علاقه‌مندی‌ها
                </h3>
            </div>

            {/* <section className='grid-row-4 gap-2 mt-4 w-full'> */}
            <Grid display={'flex'} alignItems={'center'} justifyContent={'start'} flexWrap={'wrap'}>

                {products.map((product) => {
                    return (
                        <ProductCard product={product}></ProductCard>
                    )
                })}

            </Grid>

            {/* </section> */}

        </section>

  )
}
