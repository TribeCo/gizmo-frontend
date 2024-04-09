'use client'
import React, { useState, useEffect } from 'react'
import { Colors } from "@/utils";

import {
    Button,
    Typography,
    Grid,
    Stack,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Paper,
} from "@mui/material";
import { AddNewAddress, DeleteAddress, MakeDefaultAddress, fetchAddresses } from '@/services/DashBoard';


export default function DashBoardAddress(props) {

    const [addNewAddressStat, setAddNewAddressStat] = useState(false)
    const [addresses, setAddresses] = useState([{
        id: '1',
        province: 'سیستان بلوچستان',
        city: 'ایتالیا',
        postal_code: 6542542578620,
        straight_address: 'کوچه فرانسه، خونه اکبر پشت خونه حاجر تبنمی ستبسنمبیتب سنمتبیس نمبتیم نبتسیم نتبنم',
        current: false
    },
    {
        id: '2',
        province: 'سیستان بلوچستان',
        city: 'ایتالیا',
        postal_code: 6542542578620,
        straight_address: 'کوچه فرانسه، خونه اکبر پشت خونه حاجر تبنمی ستبسنمبیتب سنمتبیس نمبیم نتبنم',
        current: true
    }])
    const [newAddressData, setNewAddressData] = useState({
        province: '',
        city: '',
        postal_code: '',
        straight_address: '',
    });
    const [newDefaultAddress, setNewDefaultAddress] = useState({
        id: '',
        province: '',
        city: '',
        postal_code: '',
        straight_address: '',
        current: false
    })

    const [address, setAddress] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState();

    const handleGetAddress = async () => {
        setAddress(await fetchAddresses().data)
    }

    // Handler for radio button change
    const handleRadioChange = (event) => {
        setSelectedAddressId(event.target.value);
    };

    // Handler for setting an address as default
    const addToDefault = async () => {// Debugging line
        if (!selectedAddressId) {
            alert('Please select an address first');
            return;
        }
        const response = await MakeDefaultAddress(selectedAddressId).message;
        alert(`${response}`);
    };

    const deleteAddress = async (selectedAddressId) => {
        if (!selectedAddressId) {
            alert('Please select an address first');
            return;
        }
        const isConfirmed = window.confirm('Are you sure you want to delete this address?');
        if (!isConfirmed) {
            return; // Exit the function if the user cancels the operation
        }
        const response = await DeleteAddress(selectedAddressId);
        alert(`${response}`);
    };

    const addNewAddress = async () => {
        try {
            const response = await AddNewAddress(newAddressData);
            if (response.ok) {
                (await handleGetAddress());
                setNewAddressData({
                    province: '',
                    city: '',
                    straight_address: '',
                    postal_code: '',
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
            <section className="savedAddresses py-4 rounded-lg px-[4%] flex flex-col w-[60rem]  lg:w-[21rem]">
                <div className="savedAddressesHeader flex border-b border-[#EDEDED] justify-between py-2 mb-4">
                    <Typography
                        variant='h6'
                        fontSize={18}
                        fontWeight={700}>
                        آدرس ها
                    </Typography>
                    <Button
                        onClick={() => setAddNewAddressStat(true)}
                        variant="contained"
                        className='flex gap-2'
                        sx={{
                            bgcolor: Colors.orange,
                            color: "black",
                            borderRadius: "50px",
                            boxShadow: "none",
                            "&:hover": {
                                bgcolor: Colors.orange,
                            },
                        }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#213346" />
                        </svg>
                        <Typography variant='div'> افزودن آدرس جدید</Typography>
                    </Button>
                </div>
                <Stack spacing={4} className='px-[3%]'>
                    <Stack spacing={2} className='defaultAddresses'>
                        <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold text-[#213346]'>
                            آدرس پیش فرض
                        </Typography>
                        <Stack spacing={1} className="defaultAddresses-bullets px-5 max-sm:text-sm">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" style={{ overflow: 'hidden' }}></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    {address.map((address) => {
                                        if (address.current) {
                                            return <FormControlLabel label={`${address.province}, ${address.city}, ${address.straight_address}, کد پستی: ${address.postal_code}`} control={<Radio />} value={address.id} />
                                        } else null
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack spacing={2} className='otherAddresses'>
                        <Typography variant='h6' fontWeight={900} fontSize={18} className='font-bold text-[#21334'>
                            آدرس های دیگر
                        </Typography>
                        <Stack spacing={1} className="notDefaultAddresses-bullets px-5">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    onChange={handleRadioChange}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    {address.map((address) => {
                                        if (!address.current) {
                                            return <FormControlLabel label={`${address.province}, ${address.city}, ${address.straight_address}, کد پستی: ${address.postal_code}`} control={<Radio />} value={address.id} />
                                        } else null
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <div className='addNewAddressWrapper w-full flex justify-start'>
                        <Grid
                            display='flex'
                            flexWrap='wrap'
                            sx={{
                                justifyContent: { xs: 'center', md: 'none' },
                                alignItems: 'center',
                                columnGap: 2,
                            }}
                        >
                            <Button
                                className='setDefaultBtn'
                                variant="contained"
                                onClick={addToDefault}
                                sx={{
                                    width: 200,
                                    bgcolor: Colors.orange,
                                    color: "black",
                                    borderRadius: "50px",
                                    boxShadow: "none",
                                    mb: { xs: 2, md: 4 },
                                    "&:hover": {
                                        bgcolor: Colors.orange,
                                    },
                                }}>
                                <Typography variant='div'>افزودن آدرس به پیش فرض</Typography>
                            </Button>
                            <Button
                                className='setDefaultBtn'
                                variant="contained"
                                onClick={deleteAddress}
                                sx={{
                                    width: 200,
                                    bgcolor: '#f59595',
                                    color: "black",
                                    borderRadius: "50px",
                                    boxShadow: "none",
                                    mb: 4,
                                    "&:hover": {
                                        bgcolor: '#f59595',
                                    },
                                }}>
                                <Typography variant='div'>حذف آدرس انتخاب شده</Typography>
                            </Button>
                        </Grid>
                    </div>
                </Stack>
                <Stack className='mt-8 px-[4%]' style={{ display: addNewAddressStat ? 'block' : 'none' }}>
                    <Typography variant='h6' fontSize={18} fontWeight={900} className='font-bold pb-2 text-[#213346]'>
                        افزودن آدرس جدید
                    </Typography>
                    <Stack>
                        <Grid container spacing={2} className='my-8 w-full'>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="province" className='w-full block text-xs mr-2'>استان:</label>
                                <input type="text" id='province' onChange={(e) => setNewAddressData({ ...newAddressData, province: e.target.value })} className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="city" className='w-full block text-xs mr-2'>شهر / شهرستان:</label>
                                <input type="text" onChange={(e) => setNewAddressData({ ...newAddressData, city: e.target.value })} id='city' className='bg-[#EEEE] w-[90%] rounded-lg h-8 mt-2 outline-none px-2' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="ExactAddress" className='w-full block text-xs mr-2'>آدرس دقیق:</label>
                                <textarea id='ExactAddress' onChange={(e) => setNewAddressData({ ...newAddressData, straight_address: e.target.value })} className='resize-none bg-[#EEEE] w-[90%] h-20 rounded-lg mt-2 outline-none px-2' />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label htmlFor="postalCode" className='w-full block text-xs mr-2'>کد پستی:</label>
                                <input type="number" onChange={(e) => setNewAddressData({ ...newAddressData, postal_code: parseInt(e.target.value, 10) || 0 })} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} style={{ appearance: 'textfield' }} id='postalCode' min={0} className='resize-none px-2 bg-[#EEEE] w-[90%] h-8 rounded-lg mt-2 outline-none' />
                                <div className='mt-4 flex justify-end lg:justify-center'>
                                    <Button className=''
                                        variant="contained"
                                        onClick={addNewAddress}
                                        sx={{
                                            bgcolor: Colors.orange,
                                            color: "black",
                                            borderRadius: "50px",
                                            boxShadow: "none",
                                            mt: 1.5,
                                            mr: 7,
                                            px: 4,
                                            "&:hover": {
                                                bgcolor: Colors.orange,
                                            },
                                        }}>
                                        <Typography variant='div'>افزودن آدرس ها</Typography>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </section>
        </Paper>
    )
}

