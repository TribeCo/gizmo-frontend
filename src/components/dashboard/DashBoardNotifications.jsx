'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import notifBell from '@/components/siteIcons/notifBell.svg'
import envelopIcon from '@/components/siteIcons/EnvelopIcon.svg'
import ArrowLeft from '@/components/siteIcons/ArrowLeft.svg'


export default function DashBoardNotifications() {

  const [notifs, setNotifs] = React.useState([
    {title: 'محصولات محبوب شما موجود شد...' ,description: 'تا تموم نشده سفارش خودتو ثبت کن.', unread: false, date:'1402 اسفند 7'},
    {title: 'محصولات محبوب شما موجود شد...' ,description: 'تا تموم نشده سفارش خودتو ثبت کن.', unread: true, date:'1402 اسفند 7'},
    {title: 'محصولات محبوب شما موجود شد...' ,description: 'تا تموم نشده سفارش خودتو ثبت کن.', unread: true, date:'1402 اسفند 7'},
        
  ])

  const markAllAsRead = () => {
    const updatedData = notifs.map(notif =>  ({...notif, unread: false}))
    setNotifs(updatedData)
    console.log(notifs)
  }

  return (
    <div>


          <section className=" py-4 px-[4%] w-[60rem] md:w-[24rem] flex flex-col h-full lg:w-full rounded-xl shadow-lg">

            <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                <h3 className='font-bold text-lg'>
                    پیغام ها
                </h3>

                <div className='flex gap-2 items-center cursor-pointer hover:bg-[#6d4cff1e] transition-all p-2 rounded-lg'>

                  <Image className='w-5' src={notifBell}></Image>

                  <span onClick={markAllAsRead} className='text-palette-blue font-bold md:text-xs select-none'>تغییر پیام ها به خوانده شده</span>
                </div>
            </div>

            <section className='flex flex-col mt-4 gap-2 overflow-scroll h-full'>

              {notifs.map((notif) => (
                <div className='notificationCard p-2 rounded-lg px-6 flex border-b-2 hover:bg-[#00000012] transition-all border-[#EDEDED] h-40 hover:h-44 justify-between'>

                <div className="rightPart flex flex-col justify-between">

                  <div className="notifCardHeader flex flex-col gap-5">

                    <div className='flex gap-2'>
                      <Image src={envelopIcon} alt='notifCardIcon' className='w-6 //'></Image>
                      <span className='font-bold text-md md:text-sm'>{notif.title}</span>
                    </div>

                    <p className='description text-md md:text-xs'>
                      {notif.description}
                    </p>

                  </div>


                  <a href="#" className="notifCardLink flex flex-row-reverse items-center justify-end gap-2">

                    <Image src={ArrowLeft}></Image>

                    <span className='text-palette-blue md:text-sm select-none'>مشاهده جزئیات بیشتر</span>

                  </a>

                </div>

                <div className="leftPart flex flex-col items-end justify-between">

                  <div className={`status ${notif.unread ? 'opacity-100' : 'opacity-0'} bg-palette-orange rounded-full w-4 h-4`}>

                  </div>

                  <div className="date md:w-[4.5rem] text-xs text-[#747678] md:text-xs">
                    {notif.date}
                  </div>

                </div>

              </div>
              ))}

            </section>

          </section>


    </div>
  )
}
