import React, { useState, useEffect } from 'react'
import { Colors } from "@/utils";
import eye from '@/components/siteIcons/eye-slash.svg'
import Image from 'next/image'
import NumberFormat from 'react-number-format';


import {
    Button,
    Typography,
    Card,
    Stack,
    Paper,
} from "@mui/material";




export default function DashBoardEditProfile() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [newPasswordIteration, setNewPasswordIteration] = React.useState('')

    const [firstField, setFirstField] = React.useState('password');
    const [secondField, setSecondField] = React.useState('password');
    const [thirdField, setThirdField] = React.useState('password');
    const [forthField, setForthField] = React.useState('password');

    const [newProfileData, setNewProfileData] = useState({
        name: '',
        familyName: '',
        phoneNumber: '',
        birthDay: '',
        gender: '',
        email: '',
        password: ''
    });

    const [newProfilePassword, setNewProfilePassword] = useState({
        new_password_confirm: '',
        password: '',
        new_password: '',
    });

    const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g,);
        if (event.target.value == 'undefined') {
            event.target.value = ''
        }
    }



    const editNewProfile = async () => {
        // Define the API endpoint for adding a new address
        const addApiUrl = 'https://example.com/api/addNewAddress';

        try {
            const response = await fetch(addApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProfileData),
            });

            if (response.ok) {
                // Optionally, you can fetch updated data after adding the new address
                fetchData();
                // Reset the newAddressData state after successfully adding the address
                setNewProfilePassword({
                    name: '',
                    familyName: '',
                    oldPassword: '',
                    newPassword: '',
                });
            } else {
                console.error('Error adding new address:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending data to the API:', error);
        }
    };

    const editNewProfilePassword = async () => {
        if (newProfilePassword.new_password !== newProfilePassword.new_password_confirm) {
            alert("Passwords do not match. Please make sure your new password and confirm password fields match.");
            return; // Stop further execution
        }
        console.log(newProfilePassword);
        try {
            const response = await fetch('https://gn01.liara.run/api/users/password/old/change/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNTc3MDMzLCJpYXQiOjE3MTE0OTA2MzMsImp0aSI6ImE4NjYxZTY2MDc3NTRlODlhODFlNTMyNDBkMzIzYjUxIiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiJUYWhhTTgwMDBAZ21haWwuY29tIiwiaXNfYWRtaW4iOnRydWUsImlzX2FjdGl2ZSI6dHJ1ZX0.TnAmTpVafP_kWA6YmBGDCRpPa_6v9VRpAwYypmwSBA8`
                },
                body: JSON.stringify(newProfilePassword),
            });
    
            if (response.ok) {
                fetchData();
                setNewProfilePassword({
                    new_password_confirm: '',
                    password: '',
                    new_password: '',
                });
            } else {
                console.error('Error adding new address:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending data to the API:', error);
        }
    };
    
    return (
        <Paper
            variant="outlined"
            sx={{
                height: 'fit-content',
                borderRadius: '15px',
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            <section className="editProfile py-8 w-[60rem] px-[4%] max-h-full flex flex-col lg:w-[21rem]">

                <div className="editProfile-info flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                    <Typography
                        variant='h6'
                        fontSize={18}
                        fontWeight={700}>
                        ویرایش اطلاعات کاربری
                    </Typography>
                </div>

                <Stack className='px-[3%]'>

                    <div className='editProfile-info-fields flex w-full justify-between gap-8 lg:gap-0 lg:flex-col'>

                        <div className="info-fields-one max-sm:text-sm flex gap-8 md:gap-4 flex-col w-full">

                            <div className='flex items-center'>
                                <label htmlFor="name" className='w-full block text-sm mr-2 text-[#99999A] sm:gap-2 whitespace-nowrap sm:text-xs'>نام</label>
                                <input type="text" onChange={(e) => setNewProfileData({ ...newProfileData, name: e.target.value })} id='name' className='rounded-full border-[#747678] border-2 border-opacity-70 h-8 outline-none px-2' />
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="familyName" className='w-full block text-sm mr-2 text-[#99999A] sm:gap-5 text-nowrap  whitespace-nowrap sm:text-xs'>نام خانوادگی</label>
                                <input type="text" onChange={(e) => setNewProfileData({ ...newProfileData, familyName: e.target.value })} id='familyName' className='rounded-full border-[#747678] border-2 border-opacity-70 h-8 outline-none px-2' />
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="phoneNumber" className='w-full block text-sm mr-2 text-[#99999A] sm:gap-5  whitespace-nowrap sm:text-xs'>شماره تلفن</label>
                                <input type="tel" onInput={handleInputChange} onChange={(e) => setNewProfileData({ ...newProfileData, phoneNumber: e.target.value })} id='phoneNumber' className='rounded-full border-[#747678] border-2 border-opacity-70 h-8 outline-none px-2' />
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="birthDate" className='w-fit block text-sm mr-2 text-[#99999A]  whitespace-nowrap sm:text-xs'>تاریخ تولد</label>

                                <input type="date" onChange={(e) => setNewProfileData({ ...newProfileData, birthDay: e.target.value })} id='birthDay' className='rounded-full border-[#747678] border-2 border-opacity-70 h-8 outline-none px-2 w-full max-w-[13.5rem]' />

                            </div>

                        </div>

                        <div spacing={2} className='info-fields-two max-sm:text-sm gap-8 md:gap-4 lg:mt-4 flex flex-col w-full'>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="gender" className='w-fit block text-sm mr-2 text-[#99999A]  whitespace-nowrap sm:text-xs'>جنسیت</label>
                                <select type="select" onChange={(e) => setNewProfileData({ ...newProfileData, gender: e.target.value })} id='gender' className='rounded-full border-[#747678] bg-white border-2 border-opacity-70 w-full h-8 outline-none px-2 max-w-[13.5rem]'>
                                    <option value="nothing">یک مورد را انتخاب کنید</option>
                                    <option value="male">مرد</option>
                                    <option value="female">زن</option>
                                </select>
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="email" className='w-full block text-sm mr-2 text-[#99999A]  whitespace-nowrap sm:text-xs'>آدرس ایمیل</label>
                                <input type="email" onChange={(e) => setNewProfileData({ ...newProfileData, email: e.target.value })} id='email' className='rounded-full border-[#747678] border-2 border-opacity-70 h-8 outline-none px-2' />
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="password" className='w-full block text-sm mr-2 text-[#99999A]  whitespace-nowrap sm:text-xs'>رمز عبور</label>
                                <div className='relative'>
                                    <input id="hs-toggle-password" onChange={(e) => setNewProfileData({ ...newProfileData, password: e.target.value })} type={firstField} class="rounded-full border-[#747678] border-2 border-opacity-70 h-8 outline-none px-2" />
                                    <button className='absolute w-4 bottom-2 left-3' onClick={() => { firstField === 'password' ? setFirstField('text') : setFirstField('password') }}>
                                        <Image src={eye}></Image>
                                    </button>
                                </div>
                            </div>

                            <div className='justify-self-start flex justify-between flex-row-reverse lg:mx-12 md:mt-6 pr-20 lg:pr-0'>
                                <Button
                                    variant="contained"
                                    onClick={console.log(newProfileData)}
                                    sx={{
                                        width: 215,
                                        bgcolor: Colors.orange,
                                        color: "black",
                                        borderRadius: "50px",
                                        boxShadow: "none",
                                        height: 34,
                                        "&:hover": {
                                            bgcolor: Colors.orange,
                                        },
                                    }}>
                                    <Typography variant='div  whitespace-nowrap lg:text-xs'>ذخیره تغییرات</Typography>
                                </Button>

                                {/* <Button className='w-[49%]'
                                    variant="contained"
                                    // onClick={editNewProfile}
                                    sx={{
                                        bgcolor: 'white',
                                        border: '2px solid',
                                        borderColor: Colors.orange,
                                        color: "black",
                                        borderRadius: "50px",
                                        boxShadow: "none",
                                        height: 34,
                                        "&:hover": {
                                            bgcolor: Colors.orange,
                                        },
                                    }}>
                                    <Typography variant='div  whitespace-nowrap lg:text-xs'>انصراف</Typography>
                                </Button> */}
                            </div>

                        </div>

                    </div>

                </Stack>


                <Stack className='md:mt-8 sm:mt-3'>

                    <div className="mt-8 mb-8 md:mt-2 changePassword-info flex border-b border-[#EDEDED] justify-between py-2">
                        <Typography
                            variant='h6'
                            fontSize={18}
                            fontWeight={700}>
                            تغییر رمز عبور
                        </Typography>
                    </div>

                    <div className='changePassword-info-fields flex gap-8 w-full justify-between lg:flex-col lg:gap-2 px-[3%]'>

                        <div className='info-fields-one flex flex-col gap-8 md:gap-2 w-full'>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="password" className='w-full block text-sm mr-1 text-[#99999A]  whitespace-nowrap md:text-xs'>رمز عبور جدید</label>
                                <div className='relative'>
                                    <input id="hs-toggle-password" type={secondField} onChange={(e) => setNewProfilePassword({ ...newProfilePassword, new_password: e.target.value })} class="rounded-full border-[#747678] border-2 border-opacity-70 h-8 lg:mt-2 outline-none" />
                                    <button className='absolute w-4 bottom-2 left-3' onClick={() => { secondField === 'password' ? setSecondField('text') : setSecondField('password') }}>
                                        <Image src={eye}></Image>
                                    </button>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="password" className='w-full block text-sm mr-1 text-[#99999A]  whitespace-nowrap md:text-xs'>رمز عبور قدیمی</label>
                                <div className='relative'>
                                    <input id="hs-toggle-password" type={thirdField} onChange={(e) => setNewProfilePassword({ ...newProfilePassword, password: e.target.value })} class="rounded-full border-[#747678] border-2 border-opacity-70 h-8 lg:mt-2 outline-none" />
                                    <button className='absolute w-4 bottom-2 left-3' onClick={() => { thirdField === 'password' ? setThirdField('text') : setThirdField('password') }}>
                                        <Image src={eye}></Image>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className='info-fields-two flex flex-col w-full gap-8 md:gap-0'>

                            <div className='flex justify-between items-center'>
                                <label htmlFor="password" className='w-full block text-sm mr-1 text-[#99999A]  whitespace-nowrap md:text-xs'>تکرار رمز عبور</label>
                                <div className='relative'>
                                    <input id="hs-toggle-password" type={forthField} onChange={(e) => setNewProfilePassword({ ...newProfilePassword, new_password_confirm: e.target.value })} class="rounded-full border-[#747678] border-2 border-opacity-70 h-8 lg:mt-2 outline-none" />
                                    <button className='absolute w-4 bottom-2 left-3' onClick={() => { forthField === 'password' ? setForthField('text') : setForthField('password') }}>
                                        <Image src={eye}></Image>
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-row-reverse justify-between lg:mx-12 md:mt-6  pr-20 lg:pr-0'>
                                <Button
                                    variant="contained"
                                    onClick={editNewProfilePassword}
                                    sx={{
                                        width: 200,
                                        bgcolor: Colors.orange,
                                        color: "black",
                                        borderRadius: "50px",
                                        boxShadow: "none",
                                        height: 34,
                                        "&:hover": {
                                            bgcolor: Colors.orange,
                                        },
                                    }}>
                                    <Typography variant='div  whitespace-nowrap lg:text-xs'>ذخیره تغییرات</Typography>
                                </Button>

                                {/* <Button className='w-[49%]'
                                    variant="contained"
                                    // onClick={addNewAddress}
                                    sx={{
                                        bgcolor: 'white',
                                        border: '2px solid',
                                        borderColor: Colors.orange,
                                        color: "black",
                                        borderRadius: "50px",
                                        boxShadow: "none",
                                        height: 34,
                                        "&:hover": {
                                            bgcolor: Colors.orange,
                                        },
                                    }}>
                                    <Typography variant='div  whitespace-nowrap lg:text-xs'>انصراف</Typography>
                                </Button> */}
                            </div>

                        </div>

                    </div>

                </Stack>
            </section>
        </Paper>
    )
}
