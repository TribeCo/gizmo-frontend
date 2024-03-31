'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import envelopIcon from '@/components/siteIcons/EnvelopIcon.svg'
import ArrowLeft from '@/components/siteIcons/ArrowLeft.svg'
import { Paper } from '@mui/material'


export default function DashBoardNotifications() {

    const [notifications, setNotifications] = useState([]);
    useEffect(() => {

        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await fetch('https://gn01.liara.run/api/messages/user/', {
                headers: {
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwNzEyMzk4LCJpYXQiOjE3MTA2MjU5OTgsImp0aSI6ImM5ZjBlYTI2NmQxZDRjNDU5NGQ0YmE4M2FkNWQyZDA5IiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.UjiWSFIKvUHUGCJNJvwzUom8-2sCbCAL7x2JBBmmkw8`
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setNotifications(data.data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    const [notifs, setNotifs] = React.useState([
        { title: 'محصولات محبوب شما موجود شد...', text: 'تا تموم نشده سفارش خودتو ثبت کن.', seen: false, shamsi_date: '1402 اسفند 7' },
        { title: 'محصولات محبوب شما موجود شد...', text: 'تا تموم نشده سفارش خودتو ثبت کن.', seen: true, shamsi_date: '1402 اسفند 7' },
        { title: 'محصولات محبوب شما موجود شد...', text: 'تا تموم نشده سفارش خودتو ثبت کن.', seen: true, shamsi_date: '1402 اسفند 7' },

    ])

    const markAllAsRead = () => {
        const updatedData = notifs.map(notif => ({ ...notif, seen: false }))
        setNotifs(updatedData)
        console.log(notifs)
    }

    return (
        <Paper
            variant="outlined"
            sx={{
                height: 'fit-content',
                borderRadius: '15px',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <section className=" py-4 px-[4%] w-[60rem] md:w-[24rem] flex flex-col h-full lg:w-full rounded-xl shadow-lg">

                <div className="flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                    <h3 className='font-bold text-lg'>
                        پیغام ها
                    </h3>

                    <div className='flex gap-2 items-center cursor-pointer hover:bg-[#6d4cff1e] transition-all p-2 rounded-lg'>

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0166 24.4997C12.2119 24.8549 12.499 25.1511 12.8479 25.3574C13.1968 25.5637 13.5947 25.6726 14 25.6726C14.4053 25.6726 14.8032 25.5637 15.1521 25.3574C15.501 25.1511 15.788 24.8549 15.9833 24.4997M4.66665 2.33301C3.26665 4.31634 2.33331 6.64967 2.33331 9.33301M25.6666 9.33301C25.6666 6.64967 24.7333 4.31634 23.3333 2.33301M6.99998 9.33301C6.99998 7.47649 7.73748 5.69601 9.05023 4.38326C10.363 3.07051 12.1435 2.33301 14 2.33301C15.8565 2.33301 17.637 3.07051 18.9497 4.38326C20.2625 5.69601 21 7.47649 21 9.33301C21 17.4997 24.5 19.833 24.5 19.833H3.49998C3.49998 19.833 6.99998 17.4997 6.99998 9.33301Z" stroke="#22668D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            <g clip-path="url(#clip0_1581_3213)">
                                <rect x="14" y="12" width="14" height="12" rx="6" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6707 13.7684C25.823 13.9208 25.9086 14.1274 25.9086 14.3429C25.9086 14.5583 25.823 14.7649 25.6707 14.9173L19.5808 21.0073C19.5003 21.0878 19.4047 21.1516 19.2996 21.1952C19.1944 21.2388 19.0817 21.2612 18.9679 21.2612C18.854 21.2612 18.7413 21.2388 18.6362 21.1952C18.531 21.1516 18.4355 21.0878 18.355 21.0073L15.3292 17.9821C15.2516 17.9071 15.1897 17.8175 15.1471 17.7183C15.1046 17.6192 15.0821 17.5126 15.0812 17.4047C15.0803 17.2968 15.1008 17.1898 15.1417 17.09C15.1825 16.9901 15.2429 16.8994 15.3192 16.8231C15.3954 16.7468 15.4862 16.6865 15.586 16.6456C15.6859 16.6048 15.7929 16.5842 15.9007 16.5852C16.0086 16.5861 16.1152 16.6085 16.2144 16.6511C16.3135 16.6937 16.4031 16.7556 16.4781 16.8332L18.9676 19.3227L24.5213 13.7684C24.5968 13.6929 24.6864 13.633 24.785 13.5922C24.8836 13.5513 24.9893 13.5303 25.096 13.5303C25.2028 13.5303 25.3085 13.5513 25.4071 13.5922C25.5057 13.633 25.5953 13.6929 25.6707 13.7684Z" fill="#22668D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1581_3213">
                                    <rect x="14" y="12" width="14" height="12" rx="6" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

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
                                        {notif.text}
                                    </p>

                                </div>


                                <a href={notif.abs_link} className="notifCardLink flex flex-row-reverse items-center justify-end gap-2">

                                    <Image src={ArrowLeft}></Image>

                                    <span className='text-palette-blue md:text-sm select-none'>مشاهده جزئیات بیشتر</span>

                                </a>

                            </div>

                            <div className="leftPart flex flex-col items-end justify-between">

                                <div className={`status ${notif.seen ? 'opacity-100' : 'opacity-0'} bg-palette-orange rounded-full w-4 h-4`}>

                                </div>

                                <div className="date md:w-[4.5rem] text-xs text-[#747678] md:text-xs">
                                    {notif.shamsi_date}
                                </div>

                            </div>

                        </div>
                    ))}

                </section>

            </section>
        </Paper>
    )
}
