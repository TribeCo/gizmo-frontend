import React from 'react'
import Image from 'next/image'
import notifBell from '@/components/siteIcons/notifBell.svg'
import envelopIcon from '@/components/siteIcons/envelopIcon.svg'
import ArrowLeft from '@/components/siteIcons/ArrowLeft.svg'

export default function DashBoardNotifications() {
  return (
    <div>

        <section className='m-4 flex justify-end h-[47rem] lg:h-max'>

          <section className=" py-4 w-[70%] px-[4%] flex flex-col lg:w-full rounded-xl shadow-lg">

            <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <h3 className='font-bold text-lg'>
                    پیغام ها
                </h3>

                <div className='flex gap-2'>

                  <Image className='w-5' src={notifBell}></Image>

                  <span className='text-palette-blue font-bold'>تغییر پیام ها به خوانده شده</span>
                </div>
            </div>

            <section className='flex flex-col mt-4'>

              <div className='notificationCard pb-2 flex border-b-2 border-[#EDEDED] h-40 justify-between'>

                <div className="rightPart flex flex-col justify-between">

                  <div className="notifCardHeader flex flex-col gap-5">

                    <div className='flex gap-2'>
                      <Image src={envelopIcon} alt='notifCardIcon' className='w-6 //'></Image>
                      <span className='font-bold text-md //'>محصولا مورد نظر شما موجود شد...</span>
                    </div>

                    <p className='description text-sm //'>
                      تا تموم نشده سفارش خودتو ثبت کن.
                    </p>

                  </div>


                  <a href="#" className="notifCardLink flex flex-row-reverse items-center justify-end gap-2">

                    <Image src={ArrowLeft}></Image>

                    <span className='text-palette-blue'>مشاهده جزئیات بیشتر</span>

                  </a>

                </div>

                <div className="leftPart flex flex-col items-end justify-between">

                  <div className="status bg-palette-orange rounded-full w-4 h-4 //">

                  </div>

                  <div className="date text-sm text-[#747678] //">
                    7 اسفند 1402
                  </div>

                </div>

              </div>

            </section>

          </section>
        </section>


    </div>
  )
}
