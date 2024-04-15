'use client'

import React, {useState} from 'react'
import Image from 'next/image'

import Minus from '@/components/siteIcons/minus.svg'
import Plus from '@/components/siteIcons/plus.svg'
import illustrate1 from '@/components/siteIcons/Frame 37.svg'
import Star from '@/components/siteIcons/solar_star-broken.svg'
import StarColor from '@/components/siteIcons/StarColor.svg'
import Heart from '@/components/siteIcons/Vector.svg'
import ThumbsUp from '@/components/siteIcons/ThumbsUp.svg'
import RedHeart from '@/components/siteIcons/RedHeart.svg'
import MoreIcon from '@/components/siteIcons/moreIcon.svg'


export default function ProductPageHeader(props) {

    const [pickedColor, setPickedColor] = useState(props.colors[0][2])
    const [orderCount, setOrderCount] = useState(1)
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [favMarkInd , setFavMarkInd] = useState(props.fav)

    const counterHandler = (index) => {
        if((index + orderCount) >= 1)
        setOrderCount((index + orderCount))
        else setOrderCount(1)
    }


    const handleColorChange = (index) => {
        setPickedColor(props.colors[index][2]);
        setSelectedColorIndex(index);
    }

  return (
    <div className='flex h-fit gap-8 items-stretch'>
        <section className='w-[50%] relative flex bg-palette-blue-light rounded-ee-[300px] rounded-se-[70px] opacity-50 h-full items-stretch'>


            <div className='morePhotoWrapper basis-[50%] flex flex-col gap-4 h-full items-start justify-between pr-[13%]'>
                <div className='text-3xl font-extrabold text-palette-yellow'>
                    تصاویر محصول
                </div>

                <Image src={props.pics[1]} className=' border-4 border-palette-blue b w-32 h-32 rounded-2xl' alt='productPagePic'></Image>
                <Image src={props.pics[2]} className='border-4 border-palette-blue w-32 h-32 rounded-2xl' alt='productPagePic'></Image>
                <div className='relative group w-32 h-32 z-1 border-4 border-palette-blue rounded-2xl overflow-hidden'>
                    <div className='opacity-0 group-hover:opacity-100 flex h-full w-full absolute items-center justify-center'>
                        <Image src={MoreIcon} className='absolute z-8' alt='morePicIcon'></Image>
                    </div>
                    <Image src={props.pics[3]} className='border w-32 h-32 group-hover:blur' alt='productPagePic'></Image>
                </div>
            </div>

            <div className="productMainPhoto basis-1/2 flex items-center justify-center h-[24rem]">
                <Image src={props.pics[0]} className='border mt-16 w-[19rem] h-[19rem]'></Image>
            </div>

        </section>

        <section className='w-[50%] px-[5%]'>

            <h3 className='font-extrabold text-3xl w-full flex gap-2 mb-3'>{props.productName}<span className='text-sm font-bold text-palette-yellow bg-[red] rounded-full w-fit px-2 py-1 flex items-center justify-center'  style={{display: props.discount ? 'flex' : 'none'}}>{props.discount}%</span></h3>

            <div className='utilities mr-4 flex-col gap-4'>

                <div className='description flex-col space-y-4'>

                        <div className='suggestion flex items-center font-light'>

                            <Image src={ThumbsUp} alt='thumbsUp' className='relative top-[-0.2rem] ml-1'></Image>

                            <small className='w-[60%]'>
                                <span>{props.percentage}% </span>

                                از خریداران، این کالا را پیشنهاد کرده اند.

                            </small>

                            <div className='stars flex gap-1 w-full'>
                                <Image src={props.starCount >= 1 ? StarColor : Star} alt='RatingStar' className='w-5'></Image>
                                <Image src={props.starCount >= 2 ? StarColor : Star} alt='RatingStar' className='w-5'></Image>
                                <Image src={props.starCount >= 3 ? StarColor : Star} alt='RatingStar' className='w-5'></Image>
                                <Image src={props.starCount >= 4 ? StarColor : Star} alt='RatingStar' className='w-5'></Image>
                                <Image src={props.starCount >= 5 ? StarColor : Star} alt='RatingStar' className='w-5'></Image>
                                <small className='w-full mr-1'>({props.commentsCount} نظر)</small>
                            </div>

                        </div>


                </div>

                <div className="category my-1 flex font-normal text-sm">
                    <small className='w-[10%] flex font-semibold items-center'>دسته بندی:</small>

                    <div className="categoryContainer flex gap-2 w-full items-center">
                        {props.categories.map((category, index) => (
                            <div
                            key={index}
                            className='text-palette-blue font-bold w-fit rounded-full p-1 h-min text-[10px] flex items-center'
                            >

                            {category}

                            </div>
                        ))}
                    </div>
                </div>

                <div className="brand my-1 flex gap-4">

                    <small className='font-semibold text-sm'>برند:</small>
                
                    <Image src={props.brand} alt='productBrand' className='w-6'></Image>

                </div>

                <section className="bullets my-4">

                    <h3 className="bullets-head font-semibold text-palette-blue text-lg">ویژگی ها:</h3>

                    <ul className='mr-6'>
                        {props.bullets.map((item, index) => (
                            <li className='text-palette-blue list-disc' key={index}>{item}</li>
                        ))}
                    </ul>

                </section>

                <div className="orderInfo flex my-6 h-16">

                    <div className="colorSelector basis-[50%] flex flex-col gap-4 justify-between"> {/*Here I need an array of the fucking color*/}

                            <div className='text-palette-blue font-semibold text-lg'>رنگ: <span>{pickedColor}</span></div>

                            <div className="colors flex items-center">
                                {props.colors.map((color, index) => (

                                    <div
                                    key={color.id}
                                    onClick={() => {handleColorChange(index)}}
                                    style={{
                                        backgroundColor: color[1],
                                        border: index === selectedColorIndex ? '2px solid black' : 'none'
                                    }}
                                    className='pointer m-[5px] p-[20px] rounded-md shadow-sm shadow-palette-blue-dark'
                                    >

                                    </div>
                                ))}
                            </div>

                    </div>


                    <div className="productCounter basis-[50%] flex flex-col gap-4 justify-between">

                        <div className="font-semibold text-palette-blue text-lg">تعداد:</div>

                        <div className='flex gap-2 items-center'>
                            <button className='addBtn border w-10 h-12 rounded-md flex items-center justify-center' onClick={() => {counterHandler(1)}}>
                                <Image src={Plus} alt='plusBtn'></Image>
                            </button>
                            <div className="countIndicator text-lg">{orderCount}</div>
                            <button className='subBtn border w-10 h-12 rounded-md flex items-center justify-center' onClick={() => {counterHandler(-1)}}>
                                <Image src={Minus} alt='minusBtn'></Image>
                            </button>
                        </div>

                    </div>

                </div>

                <div className="wrapperBottomLine w-full h-0.5 bg-palette-blue rounded-full my-6 mt-16"></div>

            </div>

            <div className="priceSection mr-4 flex justify-between items-center">

                <div className='text-palette-blue font-semibold text-xl'>قیمت:</div>

                <div className="realPrice text-gray relative" style={{display: props.discount ? 'block' : 'none'}}>

                    <div className='text-opacity-50 text-lg'>
                        {props.price} <span>تومان</span>
                    </div>

                    <div className='absolute w-full bg-red-600 h-0.5 top-[40%]' style={{backgroundColor: 'red'}}>

                    </div>

                </div>
                
                <div className="finalPrice font-semibold text-palette-blue text-lg">{(props.price) * ((100 - (props.discount)) / 100)} <span>تومان</span></div>

            </div>

            <div className="orderInteraction my-4 flex gap-8 mr-4">

                <button className='border'>
                    Hello gays
                </button>

                <Image src={favMarkInd ? RedHeart : Heart} className='cursor-pointer transition-all' alt='favIcon' onClick={() => {setFavMarkInd(!favMarkInd)}}></Image>

            </div>

        </section>
    </div>
  )
}
